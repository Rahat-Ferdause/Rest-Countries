import React from "react";

const Country = (props) => {
  console.log(props);
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h2>Population: {props.population}</h2>
    </div>
  );
};

export default Country;
