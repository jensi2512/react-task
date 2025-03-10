import React, { useState } from "react";
import Form2 from "./Form2";

const App2 = () => {
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };
  const handleChange = (event) => {
    setPhone(event.target.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Parent to Child Props Example</h1>
      <input
        type="text"
        placeholder="Enter a name"
        value={message}
        onChange={handleInputChange}
        style={{ padding: "10px", fontSize: "16px", marginBottom: "20px" }}
      />
      <input
        type="text"
        placeholder="Enter a phone"
        value={phone}
        onChange={handleChange}
        style={{ padding: "10px", fontSize: "16px", marginBottom: "20px" }}
      />

      <Form2 message={message} />
      <Form2 phone={phone} />
    </div>
  );
};

export default App2;
