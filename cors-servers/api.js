const express = require("express");
const OpenAI = require("openai");
const dotenv = require("dotenv");
const cors = require("cors");

// 加载环境变量
dotenv.config();

const app = express();
const port = 3000;

// 配置 OpenAI 客户端
const client = new OpenAI({
  apiKey: "sk-HWnEBCnECvG3JuY4MxJiU4UZ3YUF0PwvlzCC3kvMq5vqKC9Z",
  baseURL: "https://api.moonshot.cn/v1",
});

let history = [
  {
    role: "system",
    content:
      "你是 Kimi，由 Moonshot AI 提供的人工智能助手，你更擅长中文和英文的对话。你会为用户提供安全，有帮助，准确的回答。同时，你会拒绝一切涉及恐怖主义，种族歧视，黄色暴力等问题的回答。Moonshot AI 为专有名词，不可翻译成其他语言。",
  },
];

// 中间件
app.use(cors()); // 允许跨域
app.use(express.json()); // 解析 JSON 请求体

// 路由
app.post("/chat", async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required." });
  }

  try {
    // 更新消息历史
    history.push({ role: "user", content: prompt });

    // 调用 OpenAI 接口
    const completion = await client.chat.completions.create({
      model: "moonshot-v1-8k",
      messages: history,
    });

    const reply = completion.choices[0].message.content;
    history.push(completion.choices[0].message); // 保存 AI 的回复

    res.json({ reply });
  } catch (error) {
    console.error("Error in OpenAI API call:", error);
    res.status(500).json({ error: "Failed to get a response from OpenAI." });
  }
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
