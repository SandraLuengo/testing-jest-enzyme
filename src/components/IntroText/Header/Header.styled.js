import styled from 'styled-components';
import Header from './Header';

export default styled(Header).attrs({})`
  text-align: center;
  font-weight: bold;
  font-family: "Candal", sans-serif;
  letter-spacing: 1px;
  font-size: 2em;
  .header {
    &__logo {
      display: flex;
      margin: 0 auto;
      max-width: 20%;
    }
  }
`;
