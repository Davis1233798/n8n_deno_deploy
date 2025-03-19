import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

// 設置 n8n 的環境變數
Deno.env.set("N8N_PORT", "80");

// 啟動 n8n（假設 n8n 支援 Deno 環境）
console.log("Starting n8n on port 80...");
serve(() => new Response("n8n running"), { port: 80 });
