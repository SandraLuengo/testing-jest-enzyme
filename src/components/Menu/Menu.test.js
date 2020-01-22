import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import Menu from './Menu';


describe('<Menu/>', () => {
  const wrapper = shallow(<Menu />);
  it('renders correctly', () => {
    shallow(<Menu />);
  });
  it('it might have only one list', () => {
    expect(wrapper.find('ul').length).toBe(1);
  });
  it('<ul/> element might have a <li/> child', () => {
    expect(wrapper.find('ul').childAt(0).type()).toBe('li');
  });
  it('.linkDocs should be an <a/>', () => {
    expect(wrapper.find('.linkDocs').type()).toBe(Link);
  });
  it('.linkProject should be an <a/>', () => {
    expect(wrapper.find('.linkProject').type()).toBe(Link);
  });
  it('<link> Docs </Link> should have to="/docs"', () => {
    expect(wrapper.find('.linkDocs').props().to).toBe('/docs');
  });
  it('<link> Project </Link> should have to="/"', () => {
    expect(wrapper.find('.linkProject').props().to).toBe('/');
  });
});
