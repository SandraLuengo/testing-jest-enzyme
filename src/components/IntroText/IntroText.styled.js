import styled from 'styled-components';
import IntroText from './IntroText';

export default styled(IntroText).attrs({})`
  margin-top: 6vh;
  .introText {
    &__title {
      text-align: center;
    }
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
  .logoIntro {
    display: flex;
    margin: 0 auto;
  }
`;
