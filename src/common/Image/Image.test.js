import React from 'react';
import { shallow, mount } from 'enzyme';
import Image from './Image.styled';

const props = {
  src: 'src_route',
  alt: 'alt_image',
};


describe('<Image/>', () => {
  const wrapper = mount(<Image {...props} />);
  it('renders correctly', () => {
    shallow(<Image />);
  });
  it('img tags might have an alt', () => {
    expect(wrapper.find('img').props().alt).toBeTruthy();
  });
  it('img tags might have an src', () => {
    expect(wrapper.find('img').props().src).toBeTruthy();
  });
});
