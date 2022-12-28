import React from 'react';
import renderer from 'react-test-renderer';
import { ScrollView, Text } from 'react-native';

import Container from './Container';

const setupContainer = (overrideProps = {}) => <Container {...overrideProps} />;

describe('<Container />', () => {
  it('renders basic props correctly', () => {
    const wrapper = renderer.create(setupContainer());

    expect(wrapper).toMatchSnapshot();
  });

  it('renders basic props correctly - fluid', () => {
    const wrapper = renderer.create(
      setupContainer({
        children: <Text>test</Text>,
        fluid: true,
      }),
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders basic props correctly - fluid - noPadding', () => {
    const wrapper = renderer.create(
      setupContainer({
        children: <Text>test</Text>,
        fluid: true,
        noPadding: true,
      }),
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders basic props correctly - Element - style', () => {
    const wrapper = renderer.create(
      setupContainer({
        children: <Text>test</Text>,
        Element: ScrollView,
        style: {
          padding: 0,
        },
      }),
    );

    expect(wrapper).toMatchSnapshot();
  });
});
