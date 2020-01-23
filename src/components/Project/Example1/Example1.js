import React, { useState } from 'react';

const Example1 = ({ className }) => {
  const [inputState, toggleInputState] = useState(false);
  return (
    <div className={`${className} example1`}>
      <h2>Example 1: simple state change</h2>
      <button className="buttonClick" onClick={() => toggleInputState(true)}>
        Change State{' '}
      </button>
      <p className="text">{`inputState: ${inputState}`}</p>
    </div>
  );
};

export default Example1;
