import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ className }) => (
  <div className={className}>
    <div className="logo">
      <a href="https://jestjs.io/" target="_blanck">
        <img className="logo__jest" alt="logo" src="./image/jest.png" />
      </a>
      <span className="logo__plus">+</span>
      <a href="https://airbnb.io/enzyme/" target="_blanck">
        <img className="logo__airbnb" alt="logo" src="./image/airbnb.png" />
      </a>
    </div>
    <ul className="menu">
      <li className="menu__item">
        <Link className="linkDocs" to="/docs">
          Docs
        </Link>
      </li>
      <li className="menu__item">
        <Link className="linkProject" to="/">
          Project
        </Link>
      </li>
    </ul>
  </div>
);

export default Menu;
