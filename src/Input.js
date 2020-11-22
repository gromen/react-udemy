import React from 'react';

const Input = (props) => {
  return (
    <div>
      <input type="text" onChange={props.change} defaultValue={props.name} />
    </div>
  )
};

export default Input;
