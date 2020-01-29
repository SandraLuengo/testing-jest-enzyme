import React from 'react';
import { shallow, mount } from 'enzyme';
import Image from './Image.styled';

const props = {
  src: 'pepe',
};

/*
Intento comprobar que cuando llamamos al componente <Image/>, tenga que recibir si o si una prop con el alt y otra con el src
*/

describe('<Image/>', () => {
  const wrapper = mount(<Image src="pepe" />);
  it('renders correctly', () => {
    shallow(<Image />);
  });
  it('img tags might have an src', () => {
    // expect(wrapper.find('.img')).toHaveLength(1);
    expect(wrapper.props().src).toBe(props.src);
  });
});

describe('<Image/> with no props', () => {
  const wrapper = mount(<Image />);
  it('renders correctly', () => {
    shallow(<Image />);
  });
  it('img tags might have an src', () => {
    expect(wrapper.props().src).not.toBe(props.src);
  });
});
