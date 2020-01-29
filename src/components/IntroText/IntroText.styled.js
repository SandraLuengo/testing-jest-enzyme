import styled from 'styled-components';
import IntroText from './IntroText';

export default styled(IntroText).attrs({})`
  margin-top: 15vh;
  .introText {
    &__container {
      display: flex;
      flex-direction: column;
      width: 80%;
      margin: 0 auto;
      .warning {
        background-color: #ffffad;
        padding: 1%;
      }
    }
  }
  .exampleCode {
    background-color:#c6c6ff96;
    padding: 2%;
  }
  a {
    text-decoration:none;
    color:#f39915;
    font-weight:bold;
    transition: color .1s ease-in-out;
    &:hover {
      color:#ff6c03;
    }
  }
`;
