import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('<IntroText/>', () => {
  it('renders correctly', () => {
    shallow(<Header />);
  });
});
