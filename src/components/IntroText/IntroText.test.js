import React from 'react';
import { shallow } from 'enzyme';
import IntroText from './IntroText.styled';

describe('<IntroText/>', () => {
  it('renders correctly', () => {
    shallow(<IntroText />);
  });
});

