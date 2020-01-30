import styled from 'styled-components';
import Example2 from './Example2';

export default styled(Example2).attrs({})`
    width:50%;
    margin-top:4vh;
    h2 {
      font-family: "Candal", sans-serif;
    }

    input {
        border:none;
        padding:1%;
        outline:none;
    }
    button {
      border:none;
      padding:1%;
      color: #664dc7;
      font-weight:bold;
      background-color:#6d85ea8a;
      &:hover {
        cursor: pointer;
      }
    }
`;
