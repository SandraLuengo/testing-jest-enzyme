import React, { useState } from "react";

const Test = ({ color }) => {
  const [inputState, toggleInputState] = useState(false);
  return (
    <div className="containerTest">
      Test <button className='buttonClick' onClick={() => toggleInputState(true)} >Change State </button>
      <p>{`inputState: ${inputState}`}</p>
    </div>
  );
};

export default Test;
