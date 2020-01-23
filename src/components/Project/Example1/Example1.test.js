import React from 'react';
import { shallow, mount } from 'enzyme';
import Example1 from './Example1';

describe('<Example1/>', () => {
  const wrapper = mount(<Example1 />);

  it('renders correctly', () => {
    shallow(<Example1 />);
  });
  it('exist an element with class example1', () => {
    expect(wrapper.find('.example1').length).toBe(1);
  });
  it('expected that click on button change the text', () => {
    wrapper.find('.buttonClick').simulate('click');
    const pText = wrapper.find('.text');
    expect(pText.text()).toBe('inputState: true');
  });
});
