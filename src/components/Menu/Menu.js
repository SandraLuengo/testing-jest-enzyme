import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ className }) => (
  <div className={className}>

    <div className="logo">
      <img
        className="logo__jest"
        alt="logo"
        src="./image/jest.png"
      />
      <span className="logo__plus">+</span>
      <img
        className="logo__airbnb"
        alt="logo"
        src="./image/airbnb.png"
      />
    </div>
    <ul className="menu">
      <li className="menu__item">
        <Link className="linkDocs" to="/docs">Docs</Link>
      </li>
      <li className="menu__item">
        <Link className="linkProject" to="/">Project</Link>
      </li>
    </ul>
  </div>
);

export default Menu;
