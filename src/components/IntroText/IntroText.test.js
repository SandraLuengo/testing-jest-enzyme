import React from 'react';
import { shallow, mount } from 'enzyme';
import IntroText from './IntroText';

describe('<IntroText/>', () => {
  const wrapper = shallow(<IntroText />);
  it('renders correctly', () => {
    shallow(<IntroText />);
  });
});

