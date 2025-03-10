import React from "react";

const Form2 = ({ message , phone }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", borderRadius: "5px" }}>
      <h2>Message from Parent:</h2>
      <p style={{ fontSize: "18px", fontWeight: "bold" }}>{message}</p>
      <p style={{ fontSize: "18px", fontWeight: "bold" }}>{phone}</p>
    </div>
  );
};

export default Form2;
