const fetchdata= async ()=>{
    const response= await fetch('http://localhost:5000/questions');
    if(!response.ok){
        throw new Error('Network response was not ok');
    }
    return response.json();
};

const fetchdatabyId= async (id)=>{
    const response= await fetch(`http://localhost:5000/questions/${id}`);
    if(!response.ok){
        throw new Error('Network response was not ok');
    }
    return response.json();
};

const sendmessage =async (prompt)=>{
    const response =await fetch('http://localhost:3000/chat',{
        method: "POST", // 请求方法为 POST
        headers: {
          "Content-Type": "application/json", // 告诉服务器发送的数据是 JSON
        },
        body: JSON.stringify({ prompt }), // 将请求体序列化为 JSON 字符串
      });
    if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    if (data && typeof data.reply === "string") {
      return data.reply; // 返回字符串 reply
    } else {
      throw new Error("Invalid response format: reply is not a string");
    }
}
export {fetchdata,fetchdatabyId,sendmessage} ;