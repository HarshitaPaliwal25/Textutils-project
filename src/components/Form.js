import React from "react";


import { useState } from "react";
const Form=()=> {
  const [tableData, setTableData] = useState([]);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();

  const handleOnChange = (event) => {
    console.log("On change");
    setName(event.target.value);
  };
  const handleOnChange1 = (event) => {
    console.log("On change");
    setEmail(event.target.value);
  };
  const handleOnChange2 = (event) => {
    console.log("On change");
    setNumber(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setTableData((prev) => ( { ...prev,[name]: name, [email]: email, [number]: number }));
   
  };
  return (
   
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Form</h1>
        <label>User Name</label>
        <input type="text" value={name} onchange={handleOnChange} />
        <br />
        <br />
        <label>Email</label>
        <input type="text" value={email} onchange={handleOnChange1} />
        <br />
        <br />
        <label>Contact Number</label>
        <input type="number" value={number} onChange={handleOnChange2} />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
   
    
    

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            
          </tr>
        </thead>
        <tbody>
          {tableData.map((user,index)  => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Form;
