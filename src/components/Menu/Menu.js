import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ className }) => (
  <div className={className}>
    <img
      className="logo"
      alt="logo"
      src="./image/logo.jpeg"
    />
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
