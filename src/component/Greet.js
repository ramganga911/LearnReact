import React from "react";

// function Greet(props) {
//   return <h1>Hello {props.name}</h1>;
// }
const Greet = (props) => {
  const { name } = props;
  return (
    <div>
      <h1>Hello {name}</h1>
    </div>
  );
};

export default Greet;
