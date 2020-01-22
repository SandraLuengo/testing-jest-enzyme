import React, { useState } from 'react';

const Project = ({ className, color }) => {
  const [inputState, toggleInputState] = useState(false);
  return (
    <div className={`${className} project`}>
      Project <button className="buttonClick" onClick={() => toggleInputState(true)} >Change State </button>
      <p className="text">{`inputState: ${inputState}`}</p>
    </div>
  );
};

export default Project;
