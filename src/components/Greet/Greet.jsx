import React from "react";
import "./Greet.css";

const Greet = (props) => {
  const greet1 = "Asan";

  console.log(props); // object
  return (
    <div>
      {props.h1}
      <h2>Hello {props.name} </h2>
      <p style={{ color: "orange" }}>I am {props.age} years old</p>
      <div
        style={{
          border: "3px solid violet",
          width: "300px",
          height: "300px",
          fontSize: "30px",
          margin: "10px auto",
        }}
      >
        Block
      </div>
      <img className="image" src={props.image} alt="" />
    </div>
  );
};

export default Greet;
