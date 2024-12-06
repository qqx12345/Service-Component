import { useState, useRef } from "react";
import '../output.css';
import { sendmessage } from "./request";
import ReactMarkdown from "react-markdown";
const ChatBox = () => {
  const [messages, setMessages] = useState([
    { text: "Do you have any problem?", sender: "kf" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = async () => {
    if (input.trim() !== "") {
      // 添加用户消息
      setMessages((prev) => [...prev, { text: input, sender: "user" }]);
      const userInput = input; // 保存用户输入
      setInput(""); // 清空输入框
      // 获取机器人回复
      try {
        const reply = await sendmessage(userInput);
        setMessages((prev) => [...prev, { text: reply, sender: "kf" }]);
      } catch (error) {
        setMessages((prev) => [...prev, { text: "出错了，请稍后再试！", sender: "kf" }]);
      } finally {
        scrollToBottom();
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col w-full max-w-md p-4 border border-gray-300 rounded-lg shadow-lg h-[430px]">
      {/* 消息显示区域 */}
      <div className="flex-1 overflow-auto p-2 mb-4 space-y-2 scrollbar-hidden">
        {messages.map((msg, index) => (
          <div
          key={index}
          className={`flex ${
            msg.sender === "user" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`p-2 rounded-lg ${
              msg.sender === "user"
                ? "bg-blue-500 text-white"
                : "bg-gray-500 text-white"
            }`}
          >
            {msg.sender === "kf" ? (
              <ReactMarkdown>{msg.text}</ReactMarkdown>
            ) : (
              msg.text
            )}
          </div>
        </div>        
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* 输入框 */}
      <div className="flex p-2 bg-white border-t border-gray-300">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          className="flex-1 p-2 border border-gray-300 rounded-lg"
          placeholder="Type a message..."
        />
        <button
          onClick={sendMessage}
          className="ml-2 p-2 bg-blue-500 text-white rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
