import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import Example2 from './Example2';
import configureStore from '../../../store';

describe('<Example2/>', () => {
  const wrapper = mount(<Provider store={configureStore()}><Example2 /></Provider>);
  it('renders correctly', () => {
    shallow(<Provider store={configureStore()}><Example2 /></Provider>);
  });
  it('it should exist an input type text', () => {
    expect(wrapper.find('input[type="text"]').length).toBe(1);
  });
  it('should change search value', () => {
    wrapper
      .find('.searchInput')
      .simulate('change', { target: { value: 'testing' } });
    expect(wrapper.find('.text').text()).toBe('testing');
  });
});
