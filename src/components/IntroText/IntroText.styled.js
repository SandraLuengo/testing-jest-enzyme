import styled from 'styled-components';
import IntroText from './IntroText';

export default styled(IntroText).attrs({})`
  margin-top: 15vh;
  h2 {
    font-size: 1.8em;
    font-weight: bold;
    font-family: "Candal", sans-serif;
  }
  .introText {
    &__container {
      display: flex;
      flex-direction: column;
      width: 80%;
      margin: 0 auto;
      .warning {
        background: linear-gradient(
          -45deg,
          #9980fa3b,
          #fa80803b,
          #80b1fa3b,
          #80faa53b
        );
        background-size: 200% 200%;
        animation: gradient 8s ease-in-out infinite;
        color: #664dc7;
        font-weight: bold;
        padding: 2%;
      }
    }
  }
  .exampleCode {
    background-color: #c6c6ff96;
    padding: 2%;
  }
  .links {
    margin-bottom: 5vh;
    .link {
      margin-bottom: 2vh;
      transition: background-color 0.1s ease-in-out;
      padding:2%;
      &:hover{
        background-color: #f2f2f7;
      }
    }
  }
  a {
    text-decoration: none;
    color: #0e9c97;
    font-size: 1.4em;
    font-weight: bold;
    
  }
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
