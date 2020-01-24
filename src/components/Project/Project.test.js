import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount, render } from 'enzyme';
import Project from './Project.styled';
import configureStore from '../../store';

const props = { color: 'red' };

describe('<Project/>', () => {
  const wrapper = mount(<Provider {...props} store={configureStore()}><Project /></Provider>);
  it('renders correctly', () => {
    shallow(<Provider store={configureStore()}><Project /></Provider>);
  });
  it('expected to receive a prop with red color', () => {
    expect(wrapper.prop('color')).toBe('red');
  });
});
