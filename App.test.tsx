import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

const setupApp = (overrideProps = {}) => <App {...overrideProps} />;

describe('<App />', () => {
  it('renders basic props correctly', () => {
    const wrapper = renderer.create(setupApp());

    expect(wrapper).toMatchSnapshot();
  });
  // @todo add tests for all classes
});
