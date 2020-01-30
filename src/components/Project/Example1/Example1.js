import React, { useState } from 'react';
import { connect } from 'react-redux';
import { changeColorAction } from '../../../redux/actions/changeColorAction';

const mapStateToProps = state => ({
  toggleColor: state.changeColorReducer.toggleColor,

});

const mapDispatchToProps = dispatch => ({
  changeColorAction: (variable) => dispatch(changeColorAction(variable)),
});

const Example1 = ({ className, changeColorAction, toggleColor }) => {
  const [inputState, toggleInputState] = useState(false);
  return (
    <div className={`${className} example1`}>
      <h2>Example 1: simple state change</h2>
      <button className="buttonClick" onClick={() => { toggleInputState('true'); changeColorAction(!toggleColor); }}>
        Change State
      </button>
      <p className="text">{`inputState: ${inputState}`}</p>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Example1);
