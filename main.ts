import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import * as path from "https://deno.land/std@0.140.0/path/mod.ts";

// 設置 n8n 的環境變數
Deno.env.set("N8N_PORT", "80");

// 執行 n8n（假設已安裝）
const command = new Deno.Command("deno", {
  args: [
    "run",
    "--allow-all",
    "--unstable",
    "npm:n8n",
  ],
  env: {
    "N8N_PORT": "80",
  },
});

const process = command.spawn();
console.log("Starting n8n on port 80...");

// 保持 Deno Deploy 服務運行
serve(() => new Response("n8n running"), { port: 80 });

await process.status;
