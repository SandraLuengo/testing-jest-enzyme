import React from 'react';
import { connect } from 'react-redux';
import { simpleAction } from '../../../redux/actions/simple/simpleAction';

const mapStateToProps = state => ({
  contact: state.simpleReducer.contact,

});

const mapDispatchToProps = dispatch => ({
  simpleAction: (variable) => dispatch(simpleAction(variable)),
});

const Example2 = ({ className, simpleAction, contact }) => {
  const handleChange = ({ target: { value } }) => {
    simpleAction(value);
  };
  return (<div className={`${className} project__example2`}>
    <h2>Example 2: search</h2>
    <input className="searchInput" type="text" onChange={e => handleChange(e)} />
    <button className="project__example2__send" >Send</button>
    <p className="text" >{contact}</p>
    <img className="logo__jest" alt="logo" src="./image/jest.png" />
    <img className="logo__airbnb" alt="logo" src="./image/airbnb.png" />
  </div>);
};

export default connect(mapStateToProps, mapDispatchToProps)(Example2);

