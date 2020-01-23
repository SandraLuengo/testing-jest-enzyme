import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createContact } from '../../../actions/contactAction';

const mapStateToProps = state => ({
  ...state,
});


const mapDispatchToProps = dispatch => ({
  createContact: () => dispatch(createContact()),
});

const Example2 = ({ className }) => {
  const [text, setText] = useState(null);
  const handleChange = ({ target: { value } }) => {
    createContact();
    setText(value);
  };
  return (<div className={`${className} project__example2`}>
    <h2>Example 2: search</h2>
    <input className="searchInput" type="text" onChange={e => handleChange(e)} />
    <button className="project__example2__send">Send</button>
    <p className="text">{text}</p>
  </div>);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example2);
