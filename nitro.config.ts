import { defineNitroConfig } from "nitro/config";

export default defineNitroConfig({
  host: process.env.NITRO_HOST || "0.0.0.0",
  port: process.env.NITRO_PORT 
    ? parseInt(process.env.NITRO_PORT, 10) 
    : process.env.PORT 
    ? parseInt(process.env.PORT, 10) 
    : 10000,
});

