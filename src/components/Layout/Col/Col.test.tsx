import React from 'react';
import renderer from 'react-test-renderer';
import Col from './Col';

const setupCol = (overrideProps = {}) => <Col {...overrideProps} />;

describe('<Col />', () => {
  it('renders basic props correctly', () => {
    const wrapper = renderer.create(setupCol());

    expect(wrapper).toMatchSnapshot();
  });
  // @todo add tests for all classes
});
