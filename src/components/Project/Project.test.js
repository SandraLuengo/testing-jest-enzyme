import React from 'react';
import { shallow, mount } from 'enzyme';
import Project from './Project.styled';

describe('<Project/>', () => {
  const wrapper = mount(<Project color="red" />);
  it('renders correctly', () => {
    shallow(<Project />);
  });
  it('expected to receive a prop with red color', () => {
    expect(wrapper.prop('color')).toBe('red');
  });
});
