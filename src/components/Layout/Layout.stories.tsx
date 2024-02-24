import React from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import { Container, Row, Col } from '.';
import { getGridBreakpoint } from '../../utils/responsive';

const styles = StyleSheet.create({
  col: {
    position: 'relative',
  },
  mask: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
});

export default {
  title: 'components/Layout',
  subcomponents: { Container, Row, Col },
  parameters: {
    docs: {
      description: {
        component:
          'Layout  [Bootstrap Docs](https://getbootstrap.com/docs/5.0/layout)',
      },
    },
  },
};

/** Mask to add border width without shifting the content's alignment to the grid */
const Mask = () => <View style={styles.mask} />;

const LayoutStory = () => {
  /** screen width */
  const SCREEN_WIDTH = useWindowDimensions().width;

  return (
    <Container fluid>
      <Row>
        <Col style={styles.col}>
          <Text>Grid Breakpoint: {getGridBreakpoint(SCREEN_WIDTH)}</Text>
          <Mask />
        </Col>
      </Row>
      <Row>
        <Col style={styles.col}>
          <Text>.col</Text>
          <Mask />
        </Col>
      </Row>
      <Row>
        <Col style={styles.col}>
          <Text>.col</Text>
          <Mask />
        </Col>
        <Col style={styles.col}>
          <Text>.col</Text>
          <Mask />
        </Col>
        <Col style={styles.col}>
          <Text>.col</Text>
          <Mask />
        </Col>
        <Col style={styles.col}>
          <Text>.col</Text>
          <Mask />
        </Col>
      </Row>
      <Row>
        <Col style={styles.col} xs="3">
          <Text>.col-3</Text>
          <Mask />
        </Col>
        <Col style={styles.col} xs="auto">
          <Text>.col-auto - variable width content</Text>
        </Col>
        <Col style={styles.col} xs="3">
          <Text>.col-3</Text>
          <Mask />
        </Col>
      </Row>
      <Row>
        <Col style={styles.col} xs="6">
          <Text>.col-6</Text>
          <Mask />
        </Col>
        <Col style={styles.col} xs="6">
          <Text>.col-6</Text>
          <Mask />
        </Col>
      </Row>
      <Row>
        <Col style={styles.col} xs="6" sm="4">
          <Text>.col-6 .col-sm-4</Text>
          <Mask />
        </Col>
        <Col style={styles.col} xs="6" sm="4">
          <Text>.col-6 .col-sm-4</Text>
          <Mask />
        </Col>
        <Col style={styles.col} sm="4">
          <Text>.col-sm-4</Text>
          <Mask />
        </Col>
      </Row>
      <Row>
        <Col style={styles.col} sm={5} smOrder={2} smOffset={1}>
          <Text>.col-sm-5 .order-sm-2 .offset-sm-1</Text>
          <Mask />
        </Col>
        <Col style={styles.col} sm={5} smOrder={1} smOffset={1}>
          <Text>.col-sm-5 .order-sm-1 .offset-sm-1</Text>
          <Mask />
        </Col>
      </Row>
      <Row>
        <Col style={styles.col} md={6} mdOffset={3} sm={12}>
          <Text>.col-sm-12 .col-md-6 .offset-md-3</Text>
          <Mask />
        </Col>
      </Row>
      <Row>
        <Col style={styles.col} sm="auto" smOffset={1}>
          <Text>.col-sm-auto .offset-sm-1</Text>
          <Mask />
        </Col>
        <Col style={styles.col} sm="auto" smOffset={1}>
          <Text>.col-sm-auto .offset-sm-1</Text>
          <Mask />
        </Col>
      </Row>
    </Container>
  );
};

export { LayoutStory as Layout };
