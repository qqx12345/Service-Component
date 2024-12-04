import  { useState } from "react";
import '../output.css'
const ChatBox = () => {
  const [messages, setMessages] = useState([{text:'Do you have any problem?',sender:"kf"}]);
  const [input, setInput] = useState("");

  // 发送消息
  const sendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput(""); // 清空输入框
    }
  };

  return (
<div className="flex flex-col w-full max-w-md p-4 border border-gray-300 rounded-lg shadow-lg h-[430px]">
  {/* 消息显示区域 */}
  <div className="flex-1 overflow-auto p-2 mb-4 space-y-2 scrollbar-hidden">
    {messages.map((msg, index) => (
      <div
        key={index}
        className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
      >
        <div
          className={`p-2 rounded-lg ${
            msg.sender === "user"
              ? "bg-blue-500 text-white"
              : "bg-blue-500 text-white"
          }`}
        >
          {msg.text}
        </div>
      </div>
    ))}
  </div>

  {/* 输入框 */}
  <div className="flex p-2 bg-white border-t border-gray-300">
    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
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
