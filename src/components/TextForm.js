import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();

    setText(newText);
  };
  const handleLoClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();

    setText(newText);
  };
  const handleExtraSpace=()=>{
   
  }
 
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // setText("new text");
  return (
    <>
      <div className="container"  style={{color:props.mode==='dark' ? 'white': 'black'}}>
        <h1>{props.heading}</h1>
        <div className="form-group">
          <textarea
            className="form-control"
            id="my-box"
            value={text}
            onChange={handleOnChange}
            style={{background:props.mode==='dark' ? 'grey': 'white',color:props.mode==='dark' ? 'white':'black'}}
            
            rows="7"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpace}>
          clear
        </button>
      </div>
      <div className="container" style={{color:props.mode==='dark' ? 'white': 'black'}}>
        <h3>Your Text Summary</h3>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words and{text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length}Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the textarea to preview it here...."}</p>
      </div>
    </>
  );
}
