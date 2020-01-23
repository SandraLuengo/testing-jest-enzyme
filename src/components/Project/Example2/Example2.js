import React from 'react';
import { connect } from 'react-redux';
import { simpleAction } from '../../../actions/simpleAction';

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  simpleAction: (variable) => dispatch(simpleAction(variable)),
});

const Example2 = ({ className, simpleAction }) => {
  const handleChange = ({ target: { value } }) => {
    simpleAction(value);
  };
  return (<div className={`${className} project__example2`}>
    <h2>Example 2: search</h2>
    <input className="searchInput" type="text" onChange={e => handleChange(e)} />
    <button className="project__example2__send" >Send</button>
    <p className="text">Holi</p>
  </div>);
};

export default connect(mapStateToProps, mapDispatchToProps)(Example2);

