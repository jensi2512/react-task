// import { useState } from "react";
// import { Form } from "react-router-dom";

// function Task() {
//   const [count, setCount] = useState(0)

//   const [text, settext] = useState(false)

//   // const [message, setMessage] = useState("");

//   const Task = ({ message })=>{
//     return(
//       <div style={{border : "1px solid #ccc", padding : "10px", margin: "10px"}}>
//         <h2>Message from parents:</h2>
//         <p>{message}</p>
//       </div>
//     )
//   }
//   return (
//     <>
//       <div className="count">
//         <p>Click Here </p>
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//       </div>
//       <hr />
//       <div className='btn' style={{ textAlign: "justify" }}>
//         {text && <p className="text-lg font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Voluptas distinctio dolorum, dolorem blanditiis voluptate ut <br />praesentium officia ex consequuntur? Tempore!</p>}

//         <button style={{ margin: "20px" }} onClick={() => settext(true)}>
//           ON
//         </button>
//         <button onClick={() => settext(false)}>
//           OFF
//         </button>
//       </div>

//       <hr />
//     </>
//   )
// }
// export default Task;


import Form from "./Form"
function Task() {
    const user = {
        name : "Hello",
        age : 21
      }

      const username = "Hiiiii"

    function getData(arr){
        console.log(arr)
    }  
    
  return (
    <div>
      <h1>Home</h1>
      <h1>{user.name}</h1>
      <h1>{user.age}</h1>
      <hr />
      <Form xyz={user} username={username} getData={getData}/>
    </div>
  )
}

export default Task
