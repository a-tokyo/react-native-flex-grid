# react-native-flex-grid
A react-native flexbox grid similar to [bootstap](https://getbootstrap.com)'s web grid.

<a href="https://npmjs.com/package/react-native-flex-grid">
  <img src="https://img.shields.io/npm/v/react-native-flex-grid.svg"></img>
  <img src="https://img.shields.io/npm/dt/react-native-flex-grid.svg"></img>
</a>
<a href="https://twitter.com/intent/follow?screen_name=ahmad_tokyo"><img src="https://img.shields.io/twitter/follow/ahmad_tokyo.svg?label=Follow%20@ahmad_tokyo" alt="Follow @ahmad_tokyo"></img></a>

<a href="https://react-native-flex-grid.netlify.app">
<img src="https://i.imgur.com/FNq8kr2.png"></img>
</a>

Check the [DEMO](https://react-native-flex-grid.netlify.app), built with [Storybook](https://storybook.js.org) and [react-native-web](https://necolas.github.io/react-native-web).

# Getting Started

## Installation

```bash
npm install --save react-native-flex-grid
```
OR
```bash
yarn add react-native-flex-grid
```

## Usage
```jsx
import { Container, Row, Col } from 'react-native-flex-grid';

const MyComponent = (
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
      <Col style={styles.col} xs="6" sm="4">
        <Text>.col-6 .col-sm-4</Text>
      </Col>
      <Col style={styles.col} xs="6" sm="4">
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

export default MyComponent;
```

### Modifying Grid Configuration
The grid is 100% modifiable, checkout the [detailed docs](https://react-native-flex-grid.netlify.app/?path=/story/utils-grid--page)


### Development
- To run Storybook locally on [localhost:6006](localhost:6006)
  - ```
    yarn storybook
    ```
- To run expo locally
  - ```
    yarn start
    ```
- To run ios locally
  - ```
    yarn ios
    ```
- To run android locally
  - ```
    yarn android
    ```

### Helpful resources
- [Bootstrap layout documentation](https://getbootstrap.com/docs/5.0/layout)
- [Reactstrap layout documentation](https://reactstrap.github.io/?path=/docs/components-layout--layout)

### Contributing
Pull requests are highly appreciated! For major changes, please open an issue first to discuss what you would like to change.
