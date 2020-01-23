import React from 'react';
import { shallow, mount } from 'enzyme';
import Example2 from './Example2';


describe('<Example2/>', () => {
  const wrapper = shallow(<Example2 />);
  it('renders correctly', () => {
    shallow(<Example2 />);
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
