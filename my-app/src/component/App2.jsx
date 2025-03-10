// import React, { useState } from "react";
// import Form2 from "./Form2";

// const App2 = () => {
//   const [message, setMessage] = useState("");
//   const [phone, setPhone] = useState("");

//   const handleInputChange = (event) => {
//     setMessage(event.target.value);
//   };
//   const handleChange = (event) => {
//     setPhone(event.target.value);
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Parent to Child Props Example</h1>
//       <input
//         type="text"
//         placeholder="Enter a name"
//         value={message}
//         onChange={handleInputChange}
//         style={{ padding: "10px", fontSize: "16px", marginBottom: "20px" }}
//       />
//       <input
//         type="text"
//         placeholder="Enter a phone"
//         value={phone}
//         onChange={handleChange}
//         style={{ padding: "10px", fontSize: "16px", marginBottom: "20px" }}
//       />

//       <Form2 message={message} />
//       <Form2 phone={phone} />
//     </div>
//   );
// };

// export default App2;

import Form2 from "./Form2";

function App2({ data }) {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-5">
            <table className="table">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>MobileNo.</th>
                </tr>
              </thead>
              <tbody>
                {data.length > 0 &&
                  data.map((ele, index) => (
                    <tr key={index}>
                      <td>{ele.username}</td>
                      <td>{ele.email}</td>
                      <td>{ele.password}</td>
                      <td>{ele.mobileNo}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App2;