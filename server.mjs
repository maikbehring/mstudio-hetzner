import http from "node:http";
import { Readable } from "node:stream";
import * as serverModule from "./dist/server/server.js";

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 10000;
const host = process.env.HOST || "0.0.0.0";

// Get the server entry - handle both default export and named export
const serverEntry = serverModule.default || serverModule;

if (!serverEntry || !serverEntry.fetch) {
  console.error("Server module exports:", Object.keys(serverModule));
  console.error("Default export:", serverModule.default);
  throw new Error("Failed to load server module - fetch function not found");
}

const server = http.createServer(async (req, res) => {
  try {
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
    
    const request = new Request(url, {
      method: req.method,
      headers,
      body,
    });
    
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

