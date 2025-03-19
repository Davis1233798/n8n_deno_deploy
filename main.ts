import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
// 模擬 n8n 啟動（需調整）
console.log("Starting n8n...");
serve(() => new Response("n8n running"), { port: 5678 });
