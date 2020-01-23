import React, { useState } from 'react';

const Example2 = ({ className }) => {
  const [text, setText] = useState('sandra');
  const handleChange = ({ target: { value } }) => {
    setText(value);
  };
  return (<div className={`${className} project__example2`}>
    <h2>Example 2: search</h2>
    <input className="searchInput" type="text" onChange={e => handleChange(e)} />
    <button className="project__example2__send">Send</button>
    <p className="text">{text}</p>
  </div>);
};

export default Example2;
