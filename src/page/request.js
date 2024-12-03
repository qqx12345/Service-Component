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
export {fetchdata,fetchdatabyId} ;