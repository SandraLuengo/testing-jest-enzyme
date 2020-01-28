import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Example2 from './Example2';
import configureStore from '../../../store';

const initialState = {
  counter: '',
};
const store = configureStore(initialState);

describe('<Example2/>', () => {
  const wrapper = mount(<Provider store={configureStore()}><Example2 /></Provider>);
  it('renders correctly', () => {
    shallow(<Provider store={configureStore()}><Example2 /></Provider>);
    const wrapper2 = shallow(<Provider store={configureStore()}><Example2 /></Provider>);
    const component = wrapper2.dive();
    expect(toJson(component)).toMatchSnapshot();
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
  it('dispatch', () => {
    const dispatch = store.dispatch({
      type: 'SIMPLE_ACTION',
      newValue: 'pepe',
    });
    expect(dispatch).toMatchSnapshot();
  });
});
