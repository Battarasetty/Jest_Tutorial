import React from "react";
type GreetProps = {
  name?: String;
};
const greet = (props: GreetProps) => {
  return <div>Hello {props.name}</div>;
};

export default greet;
