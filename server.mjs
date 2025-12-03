import http from "node:http";
import { Readable } from "node:stream";
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
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

// Serve static assets
function serveStaticFile(filePath) {
  try {
    // Try dist/client/assets first (client assets)
    let fullPath = join(__dirname, "dist", "client", filePath);
    if (existsSync(fullPath)) {
      return readFileSync(fullPath);
    }
    
    // Try dist/client (root client files)
    fullPath = join(__dirname, "dist", "client", filePath);
    if (existsSync(fullPath)) {
      return readFileSync(fullPath);
    }
    
    // Try dist (root dist files)
    fullPath = join(__dirname, "dist", filePath);
    if (existsSync(fullPath)) {
      return readFileSync(fullPath);
    }
    
    return null;
  } catch (error) {
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
    let body = undefined;
    if (req.method !== "GET" && req.method !== "HEAD") {
      const chunks = [];
      for await (const chunk of req) {
        chunks.push(chunk);
      }
      if (chunks.length > 0) {
        body = Buffer.concat(chunks);
      }
    }
    
    // Create Request with body
    // Note: Request constructor expects body as ReadableStream, string, or FormData
    // For JSON, we pass the Buffer directly - TanStack Start will parse it
    const requestInit = {
      method: req.method,
      headers,
    };
    
    if (body) {
      // Pass body as Buffer - TanStack Start's fetch handler will parse JSON
      requestInit.body = body;
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

