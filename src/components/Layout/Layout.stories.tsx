import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { Container, Row, Col } from '.';

const styles = StyleSheet.create({
  col: {
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
        component: 'Layout',
      },
    },
  },
};

const LayoutStory = () => (
  <Container fluid>
    <Row>
      <Col style={styles.col}><Text>.col</Text></Col>
    </Row>
    <Row>
      <Col style={styles.col}><Text>.col</Text></Col>
      <Col style={styles.col}><Text>.col</Text></Col>
      <Col style={styles.col}><Text>.col</Text></Col>
      <Col style={styles.col}><Text>.col</Text></Col>
    </Row>
    <Row>
      <Col style={styles.col} xs="3">
        <Text>
          .col-3
        </Text>
      </Col>
      <Col style={styles.col} xs="auto">
        <Text>.col-auto - variable width content</Text>
      </Col>
      <Col style={styles.col} xs="3">
        <Text>.col-3</Text>
      </Col>
    </Row>
    <Row>
      <Col style={styles.col} xs="6">
        <Text>.col-6</Text>
      </Col>
      <Col style={styles.col} xs="6">
        <Text>.col-6</Text>
      </Col>
    </Row>
    <Row>
      <Col style={styles.col} sm="4" xs="6">
        <Text>.col-6 .col-sm-4</Text>
      </Col>
      <Col style={styles.col} sm="4" xs="6">
        <Text>.col-6 .col-sm-4</Text>
      </Col>
      <Col style={styles.col} sm="4">
        <Text>.col-sm-4</Text>
      </Col>
    </Row>
    <Row>
      <Col style={styles.col} sm={5} smOrder={2} smOffset={1}>
        <Text>.col-sm-5 .order-sm-2 .offset-sm-1</Text>
      </Col>
      <Col style={styles.col} sm={5} smOrder={1} smOffset={1}>
        <Text>.col-sm-5 .order-sm-1 .offset-sm-1</Text>
      </Col>
    </Row>
    <Row>
      <Col style={styles.col} md={6} mdOffset={3} sm={12}>
        <Text>.col-sm-12 .col-md-6 .offset-md-3</Text>
      </Col>
    </Row>
    <Row>
      <Col style={styles.col} sm="auto" smOffset={1}>
        <Text>.col-sm-auto .offset-sm-1</Text>
      </Col>
      <Col style={styles.col} sm="auto" smOffset={1}>
        <Text>.col-sm-auto .offset-sm-1</Text>
      </Col>
    </Row>
  </Container>
);

export { LayoutStory as Layout };
