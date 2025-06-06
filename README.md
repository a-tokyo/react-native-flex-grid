# react-native-flex-grid

A react-native flexbox grid similar to [bootstap](https://getbootstrap.com)'s web grid.

<a href="https://npmjs.com/package/react-native-flex-grid">
  <img src="https://img.shields.io/npm/v/react-native-flex-grid.svg"></img>
  <img src="https://img.shields.io/npm/dt/react-native-flex-grid.svg"></img>
</a>
<a href="https://twitter.com/intent/follow?screen_name=ahmad_tokyo"><img src="https://img.shields.io/twitter/follow/ahmad_tokyo.svg?label=Follow%20@ahmad_tokyo" alt="Follow @ahmad_tokyo"></img></a>

<a href="https://react-native-flex-grid.ahmedtokyo.com">
<img src="https://i.imgur.com/VWFX2r6.png"></img>
</a>

Check the [DEMO](https://react-native-flex-grid.ahmedtokyo.com), built with [Storybook](https://storybook.js.org) and [react-native-web](https://necolas.github.io/react-native-web).

# Getting Started

## Installation

NPM:

```bash
npm install --save react-native-flex-grid
```

YARN:

```bash
yarn add react-native-flex-grid
```

## Usage

```jsx
import { Container, Row, Col } from 'react-native-flex-grid';

const MyComponent = (
  <Container fluid>
    <Row>
      <Col>
        <Text>.col</Text>
      </Col>
    </Row>
    <Row>
      <Col>
        <Text>.col</Text>
      </Col>
      <Col>
        <Text>.col</Text>
      </Col>
      <Col>
        <Text>.col</Text>
      </Col>
      <Col>
        <Text>.col</Text>
      </Col>
    </Row>
    <Row>
      <Col xs="3">
        <Text>.col-3</Text>
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
      <Col xs="6" sm="4">
        <Text>.col-6 .col-sm-4</Text>
      </Col>
      <Col xs="6" sm="4">
        <Text>.col-6 .col-sm-4</Text>
      </Col>
      <Col sm="4">
        <Text>.col-sm-4</Text>
      </Col>
    </Row>
    <Row>
      <Col sm={5} smOrder={2} smOffset={1}>
        <Text>.col-sm-5 .order-sm-2 .offset-sm-1</Text>
      </Col>
      <Col sm={5} smOrder={1} smOffset={1}>
        <Text>.col-sm-5 .order-sm-1 .offset-sm-1</Text>
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

export default MyComponent;
```

#### Component Props - can be used to customize Layout components

Container

```tsx
export declare interface ContainerProps
  extends React.ComponentProps<typeof View> {
  /** Fluid Container */
  fluid?: boolean;
  /** No Padding */
  noPadding?: boolean;
  /** Element to render - defaults to View */
  Element?: React.ElementType;
}
```

Row

```tsx
export declare interface RowProps extends React.ComponentProps<typeof View> {
  /** Gutter size -- [Bootstrap Gutters](https://getbootstrap.com/docs/5.0/layout/gutters/) */
  gx?: 0 | 1 | 2 | 3 | 4 | 5;
  /** Direction */
  dir?: 'ltr' | 'rtl';
  /** Element to render - defaults to View */
  Element?: React.ElementType;
}
```

Col

```tsx
export declare interface ColProps extends React.ComponentProps<typeof View> {
  /** xs size */
  xs?: number | string;
  /** sm size */
  sm?: number | string;
  /** md size */
  md?: number | string;
  /** lg size */
  lg?: number | string;
  /** xl size */
  xl?: number | string;
  /** xs offset */
  xsOffset?: number | string;
  /** sm offset */
  smOffset?: number | string;
  /** md offset */
  mdOffset?: number | string;
  /** lg offset */
  lgOffset?: number | string;
  /** xl offset */
  xlOffset?: number | string;
  /** xs order */
  xsOrder?: number | string;
  /** sm order */
  smOrder?: number | string;
  /** md order */
  mdOrder?: number | string;
  /** lg order */
  lgOrder?: number | string;
  /** xl order */
  xlOrder?: number | string;
  /** Gutter size -- [Bootstrap Gutters](https://getbootstrap.com/docs/5.0/layout/gutters/) */
  gx?: 0 | 1 | 2 | 3 | 4 | 5;
  /** Direction */
  dir?: 'ltr' | 'rtl';
  /** Element to render - defaults to View */
  Element?: React.ElementType;
}
```

### Modifying Grid Configuration

The grid is 100% modifiable, checkout the [detailed docs](https://react-native-flex-grid.ahmedtokyo.com/?path=/story/utils-grid--page)

### Responsive utils

Checkout the [detailed docs](https://react-native-flex-grid.ahmedtokyo.com/?path=/story/utils-responsive--page) for a set of useful responsive utilities like css/scss like media queries.

### Development

Checkout the [detailed docs](https://react-native-flex-grid.ahmedtokyo.com/?path=/story/development--page) to understand how to run the repo locally and how to develop with it.

### Helpful resources

- [Blogpost](https://ahmedtokyo.com/blog/2022/react-native-flex-grid)
- [Bootstrap layout documentation](https://getbootstrap.com/docs/5.0/layout)
- [Reactstrap layout documentation](https://reactstrap.github.io/?path=/docs/components-layout--layout)
- [React Native Extended StyleSheet](https://github.com/vitalets/react-native-extended-stylesheet)

### Contributing

Pull requests are highly appreciated! For major changes, please open an issue first to discuss what you would like to change.
