import React from 'react';
import { Text } from 'react-native';

import { Container, Row, Col } from '.';

export default {
  title: 'components/Layout',
  subcomponents: { Container, Row, Col },
  parameters: {
    docs: {
      description: {
        component: 'Layout',
      },
    },
  },
  // not adding decoratorCol - reason: this is the Layout story
};

const LayoutStory = () => (
  <Container>
    <Row>
      <Col>.col</Col>
    </Row>
    <Row>
      <Col>.col</Col>
      <Col>.col</Col>
      <Col>.col</Col>
      <Col>.col</Col>
    </Row>
    <Row>
      <Col xs="3">
        <Text>
          .col-3
        </Text>
      </Col>
      <Col xs="auto">
      <Text>.col-auto - variable width content</Text>
      </Col>
      <Col xs="3">
      <Text>.col-3</Text>
      </Col>
    </Row>
    <Row>
      <Col xs="6">
        <Text>.col-6</Text>
      </Col>
      <Col xs="6">
        <Text>.col-6</Text>
      </Col>
    </Row>
    <Row>
      <Col sm="4" xs="6">
        <Text>.col-6 .col-sm-4</Text>
      </Col>
      <Col sm="4" xs="6">
        <Text>.col-6 .col-sm-4</Text>
      </Col>
      <Col sm="4">
        <Text>.col-sm-4</Text>
      </Col>
    </Row>
    <Row>
      <Col sm={6} smOrder={2} smOffset={1}>
        <Text>.col-sm-6 .order-sm-2 .offset-sm-1</Text>
      </Col>
    </Row>
    <Row>
      <Col md={6} mdOffset={3} sm={12}>
        <Text>.col-sm-12 .col-md-6 .offset-md-3</Text>
      </Col>
    </Row>
    <Row>
      <Col sm="auto" smOffset={1}>
        <Text>.col-sm-auto .offset-sm-1</Text>
      </Col>
      <Col sm="auto" smOffset={1}>
        <Text>.col-sm-auto .offset-sm-1</Text>
      </Col>
    </Row>
  </Container>
);

export { LayoutStory as Layout };
