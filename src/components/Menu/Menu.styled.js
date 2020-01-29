import styled from 'styled-components';
import Menu from './Menu';

export default styled(Menu).attrs({})`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  width: 100vw;
  height: 5vh;
  padding: 1%;
  font-family: 'Candal', sans-serif;
  .logo {
    width:8%;
    display:flex;
    justify-content:space-around;
    align-items:center;
    a{
      width:50%;
      height:5vh;
      display:flex;
      justify-content:center;
      align-items:center;
    }
    &__jest, &__airbnb {
      width:70%;
      max-width:70%;
      &:hover {
      transition:filter .2s ease-in-out;
      filter: blur(1px);
      cursor: pointer;
    }
    }
    &__plus {
      font-size:1.8em;
    }
    
  }
  .menu {
    list-style: none;
    width: 28%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    &__item {
      a {
        font-size: 1.2em;
        text-decoration: none;
        &:hover{
          color:#114d4d;
        }
      }
    }
  }
`;
