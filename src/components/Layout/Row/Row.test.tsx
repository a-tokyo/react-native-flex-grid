import React from 'react';
import renderer from 'react-test-renderer';
import Row from './Row';

const setupRow = (overrideProps = {}) => <Row {...overrideProps} />;

describe('<Row />', () => {
  it('renders basic props correctly', () => {
    const wrapper = renderer.create(setupRow());

    expect(wrapper).toMatchSnapshot();
  });
});
