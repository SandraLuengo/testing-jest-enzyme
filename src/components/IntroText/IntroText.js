import React from 'react';

const IntroText = ({ className }) => (
  <div className={`${className} introText`}>
    <header className="introText__title">
      <h1>Testing with Jest and Enzyme</h1>
    </header>
    <img className="logoIntro" alt="logo" src="./image/logo.jpeg" />
    <div className="introText__container">
      <p className="warning">
        If we work with styled-components and we have a container component to
        test, a component who includes other styled-component components, we have
        to import the ContainerComponent.styled in the test.
      </p>
      <div>
        Shallow
  Real unit test (isolation, no children render)

  Simple shallow
  Calls:

  constructor
  render
  Shallow + setProps
  Calls:

  componentWillReceiveProps
  shouldComponentUpdate
  componentWillUpdate
  render
  Shallow + unmount
  Calls:

  componentWillUnmount
  Mount
  The only way to test componentDidMount and componentDidUpdate. Full rendering including child components. Requires a DOM (jsdom, domino). More constly in execution time. If react is included before JSDOM, it can require some tricks:

  require('fbjs/lib/ExecutionEnvironment').canUseDOM = true;

  Simple mount
  Calls:

  constructor
  render
  componentDidMount
  Mount + setProps
  Calls:

  componentWillReceiveProps
  shouldComponentUpdate
  componentWillUpdate
  render
  componentDidUpdate
  Mount + unmount
  Calls:

  componentWillUnmount
  Render
  only calls render but renders all children.

  So my rule of thumbs is:

  Always begin with shallow
  If componentDidMount or componentDidUpdate should be tested, use mount
  If you want to test component lifecycle and children behavior, use mount
  If you want to test children rendering with less overhead than mount and you are not interested in lifecycle methods, use render
        <p><a href="https://gist.github.com/fokusferit/e4558d384e4e9cab95d04e5f35d4f913">LINK A ESTA DOCU</a></p>
      </div>
      <p><a target="_blanck" href="https://alligator.io/react/testing-react-redux-with-jest-enzyme/">BLOG GUAY! RESUMEN TODO</a></p>
      <p><a target="_blanck" href="https://alligator.io/testing/snapshot-testing-jest/">SNAPSHOT</a></p>
      <p><a target="_blanck" href="https://alligator.io/testing/asynchronous-testing-jest/">TEST ASINCRONIA</a></p>
      <p><a target="_blanck" href="https://eng.uber.com/best-practices-for-react-v16/" >UBER TIPS TO CLEAN TEST</a></p>
      <p><a target="_blanck" href="https://docs.gitlab.com/ee/development/testing_guide/frontend_testing.html#jest">INFO SOBRE JEST DE LA WEB DE GITLAB</a></p>
      <h2 className="exampleCode">Ejemplo de ejecutar funcion</h2>
      <div className="exampleCode">
        {`const removeButton = (props) => (
  <Button onClick={() => props.remove()}>
    Remove
  </Button>
)

// test file
it('test remove button', () => {
  const mockFunction = jest.fn()
  const test = shallow(<RemoveButton remove={mockFunction} />)
  test.find('Button').simulate('click')
  expect(mockFunction).toHaveBeenCalled()
})`}
      </div>

      <h2>Enzyme</h2>
      <h3>Shallow Rendering</h3>
      <code>
        <p>{'import { shallow } from \'enzyme\';'}</p>
        <p>{'const wrapper = shallow(<MyComponent />);'}</p>
      </code>
      <p>
        Shallow rendering is useful to constrain yourself to testing a component
        as a unit, and to ensure that your tests aren't indirectly asserting on
        behavior of child components.
      </p>
      <h3>Full Rendering</h3>
      <code>
        <p>{'import { mount } from \'enzyme\';'}</p>
        <p>{'const wrapper = mount(<MyComponent />);'}</p>
      </code>
      <p>
        Full DOM rendering is ideal for use cases where you have components that
        may interact with DOM APIs or need to test components that are wrapped
        in higher order components.
      </p>
      <p>
        Full DOM rendering requires that a full DOM API be available at the
        global scope. This means that it must be run in an environment that at
        least “looks like” a browser environment. If you do not want to run your
        tests inside of a browser, the recommended approach to using mount is to
        depend on a library called jsdom which is essentially a headless browser
        implemented completely in JS.
      </p>
    </div>
  </div>
);

export default IntroText;
