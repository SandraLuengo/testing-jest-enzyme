import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import Example1 from './Example1';
import configureStore from '../../../store';


describe('<Example1/>', () => {
  const wrapper = mount(<Provider store={configureStore()}><Example1 /></Provider>);

  it('renders correctly', () => {
    shallow(<Provider store={configureStore()}><Example1 /></Provider>);
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
