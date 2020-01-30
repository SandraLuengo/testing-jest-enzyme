import styled from 'styled-components';
import { connect } from 'react-redux';
import Example1 from './Example1';

const mapStateToProps = state => ({
  toggleColor: state.changeColorReducer.toggleColor,

});


export default connect(mapStateToProps)(styled(Example1).attrs({})`
    width:50%;
    margin-top:4vh;
    h2 {
      font-family: "Candal", sans-serif;
    }
    .buttonClick {
      border:none;
      padding:1%;
      color: #664dc7;
      font-weight:bold;
      background-color:#6d85ea8a;
      &:hover {
        cursor: pointer;
      }
    }
`);
