import React from 'react'

const Name = (props) => {
  return (
    <div>
      <h1>NAME: {props.name}</h1>
      <h1>Lastname: {props.lname}</h1>
      <h1>Phone number: {props.phone}</h1>
    </div>
  );
};

export default Name;

