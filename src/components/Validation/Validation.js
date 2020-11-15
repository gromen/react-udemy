import React from 'react';

const validation = (props) => {
  return (
    <div>
      {
        props.inputLength < 5
          ? `Text is too short!`
          : `text is long enough`
      }
    </div>
  )
};

export default validation;
