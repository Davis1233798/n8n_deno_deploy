// main.ts
import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

// 設置 n8n 的環境變數
Deno.env.set("N8N_PORT", "80");

// 嘗試直接載入 n8n（可能會失敗）
import n8n from "npm:n8n";

console.log("Starting n8n on port 80...");
n8n.start(); // 假設 n8n 提供 start 方法

// 保持 Deno Deploy 服務運行
serve(() => new Response("n8n running"), { port: 80 });
