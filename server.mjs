import http from "node:http";
import { Readable } from "node:stream";
import { readFileSync, existsSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import * as serverModule from "./dist/server/server.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 10000;
const host = process.env.HOST || "0.0.0.0";

// Get the server entry - handle both default export and named export
const serverEntry = serverModule.default || serverModule;

if (!serverEntry || !serverEntry.fetch) {
  console.error("Server module exports:", Object.keys(serverModule));
  console.error("Default export:", serverModule.default);
  throw new Error("Failed to load server module - fetch function not found");
}

// Security: Maximum body size (1MB)
const MAX_BODY_SIZE = 1024 * 1024;

// Security: Allowed directories for static assets
const ALLOWED_DIRS = [
  resolve(__dirname, "dist", "client", "assets"),
  resolve(__dirname, "dist", "client"),
  resolve(__dirname, "dist"),
];

// Serve static assets with path traversal protection
function serveStaticFile(filePath) {
  try {
    // Security: Normalize path to prevent directory traversal
    // Remove any leading slashes and normalize the path
    const normalizedPath = filePath.replace(/^\/+/, "").replace(/\.\./g, "");
    
    // Try allowed directories
    for (const allowedDir of ALLOWED_DIRS) {
      const fullPath = resolve(allowedDir, normalizedPath);
      
      // Security: Ensure resolved path is within allowed directory
      if (!fullPath.startsWith(allowedDir)) {
        continue; // Path traversal detected, skip this directory
      }
      
      if (existsSync(fullPath)) {
        return readFileSync(fullPath);
      }
    }
    
    return null;
  } catch (error) {
    // Security: Don't expose error details
    return null;
  }
}

const server = http.createServer(async (req, res) => {
  try {
    // Serve static assets
    if (req.method === "GET" && req.url && req.url.startsWith("/assets/")) {
      const filePath = req.url.replace(/^\//, "");
      const fileContent = serveStaticFile(filePath);
      
      if (fileContent) {
        // Set appropriate content type
        const ext = filePath.split(".").pop();
        const contentType = ext === "js" ? "application/javascript" :
                          ext === "css" ? "text/css" :
                          ext === "html" ? "text/html" :
                          ext === "json" ? "application/json" :
                          "application/octet-stream";
        
        res.setHeader("Content-Type", contentType);
        res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
        res.statusCode = 200;
        res.end(fileContent);
        return;
      }
    }
    
    // Convert Node.js request to Fetch API Request
    const protocol = req.headers["x-forwarded-proto"] || "http";
    const hostname = req.headers.host || `${host}:${port}`;
    const url = `${protocol}://${hostname}${req.url}`;
    
    const headers = new Headers();
    for (const [key, value] of Object.entries(req.headers)) {
      if (value) {
        if (Array.isArray(value)) {
          value.forEach(v => headers.append(key, v));
        } else {
          headers.set(key, value);
        }
      }
    }
    
    // Read request body if present
    // IMPORTANT: We need to read the body BEFORE creating the Request object
    // because once we create the Request, the body stream is consumed
    // Security: Enforce body size limit to prevent DoS
    let body = undefined;
    if (req.method !== "GET" && req.method !== "HEAD") {
      const chunks = [];
      let totalSize = 0;
      
      for await (const chunk of req) {
        totalSize += chunk.length;
        if (totalSize > MAX_BODY_SIZE) {
          res.statusCode = 413;
          res.setHeader("Content-Type", "text/plain");
          res.end("Request Entity Too Large");
          return;
        }
        chunks.push(chunk);
      }
      
      if (chunks.length > 0) {
        body = Buffer.concat(chunks);
      }
    }
    
    // Security: Only log in development, and mask sensitive data
    if (process.env.NODE_ENV === "development" && req.method === "POST" && req.url?.includes("serverActions")) {
      console.log("[server.mjs] POST request to serverActions");
      console.log("[server.mjs] Body length:", body?.length || 0);
      // Don't log body content - could contain sensitive data
      console.log("[server.mjs] Content-Type:", headers.get("content-type"));
    }
    
    // Create Request with body
    // TanStack Start calls request.json() to extract the body (line 5523)
    // We need to pass the body as a ReadableStream so request.json() can read it
    const contentType = headers.get("content-type") || "";
    const requestInit = {
      method: req.method,
      headers,
    };
    
    if (body) {
      // Create a new ReadableStream from the body buffer
      // This allows request.json() to read the body multiple times if needed
      const bodyStream = new ReadableStream({
        start(controller) {
          controller.enqueue(body);
          controller.close();
        }
      });
      requestInit.body = bodyStream;
      requestInit.duplex = "half";
      
      if (req.method === "POST" && req.url?.includes("serverActions")) {
        console.log("[server.mjs] Created ReadableStream from body buffer");
      }
    }
    
    const request = new Request(url, requestInit);
    
    const response = await serverEntry.fetch(request);
    
    // Copy response headers
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });
    
    // Set status code
    res.statusCode = response.status;
    
    // Stream the response body
    if (response.body) {
      const reader = response.body.getReader();
      const pump = async () => {
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            res.write(Buffer.from(value));
          }
          res.end();
        } catch (error) {
          console.error("Error streaming response:", error);
          if (!res.headersSent) {
            res.statusCode = 500;
          }
          res.end();
        }
      };
      await pump();
    } else {
      res.end();
    }
  } catch (error) {
    console.error("Server error:", error);
    if (!res.headersSent) {
      res.statusCode = 500;
    }
    res.end("Internal Server Error");
  }
});

server.listen(port, host, () => {
  console.log(`Server listening on http://${host}:${port}`);
});

