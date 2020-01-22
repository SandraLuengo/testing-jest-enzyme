import React from 'react';

const IntroText = () => (
  <div>
    <header className="App-header">
      <h1>Testing with Jest and Enzyme</h1>
    </header>
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
);

export default IntroText;
