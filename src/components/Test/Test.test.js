import { act } from 'react-dom/test-utils';
import React from 'react';
import { shallow, mount } from 'enzyme';
import Test from './Test';

describe('<Test/>', () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation((init) => [init, setState]);
  act(() => {
    wrapper = mount(<Test color="red" />);
  });

  it('renders correctly', () => {
    shallow(<Test />);
  });
  it('exist an element with class containerTest', () => {
    expect(wrapper.find('.containerTest').length).toBe(1);
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
