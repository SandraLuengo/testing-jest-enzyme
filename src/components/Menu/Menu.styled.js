import styled from 'styled-components';
import Menu from './Menu';

export default styled(Menu).attrs({})`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  margin: 0;
  width: 100vw;
  height: 5vh;
  .logo {
    height: 5vh;
  }
  .menu {
    background-color: #2f2f2f;
    list-style: none;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    &__item {
      a {
        text-decoration: none;
        color: white;
      }
    }
  }
`;
