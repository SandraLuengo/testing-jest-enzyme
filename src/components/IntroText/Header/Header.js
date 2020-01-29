import React from 'react';

import { Image } from '../../../common';

const Header = ({ className }) => (
  <div className={className}>
    <header className="header">
      <h1>Testing with Jest and Enzyme</h1>
    </header>
    <Image name="header__logo" src="./image/cover.png" />
  </div>
);

export default Header;
