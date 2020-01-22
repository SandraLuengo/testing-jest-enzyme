import { act } from 'react-dom/test-utils';
import React from 'react';
import { shallow, mount } from 'enzyme';
import Project from './Project';

describe('<Project/>', () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation((init) => [init, setState]);
  act(() => {
    wrapper = mount(<Project color="red" />);
  });

  it('renders correctly', () => {
    shallow(<Project />);
  });
  it('exist an element with class project', () => {
    expect(wrapper.find('.project').length).toBe(1);
  });
  it('expected to receive a prop with red color', () => {
    expect(wrapper.prop('color')).toBe('red');
  });
  // shit 💩💩💩
  it('expected that click on button change the button state', () => {
    wrapper.find('.buttonClick').simulate('click');
    const p = wrapper.find('.text');
    expect(p.text()).toBe('inputState: true');
  });
});
