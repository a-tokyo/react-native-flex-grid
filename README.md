# react-native-flex-grid
A react-native flexbox grid similar to [bootstap](https://getbootstrap.com)'s web grid.

<a href="https://npmjs.com/package/react-native-flex-grid">
  <img src="https://img.shields.io/npm/v/react-native-flex-grid.svg"></img>
  <img src="https://img.shields.io/npm/dt/react-native-flex-grid.svg"></img>
</a>
<a href="https://twitter.com/intent/follow?screen_name=ahmad_tokyo"><img src="https://img.shields.io/twitter/follow/ahmad_tokyo.svg?label=Follow%20@ahmad_tokyo" alt="Follow @ahmad_tokyo"></img></a>

[DEMO](https://react-native-flex-grid.netlify.app)

# Getting Started

### Installation

```
npm install react-native-flex-grid
```
```
yarn add install react-native-flex-grid
```

### Import

```
import { Container, Row, Col } from 'react-native-flex-grid';
```

### Basic Example

```jsx
<Container>        
  <Row size={12}>
    <Col sm={6} md={4} lg={3}>
      <Text>
        First Column
      </Text>
    </Col>
    <Col sm={6} md={4} lg={3}>
      <Text>
        Second Column
      </Text>
    </Col>
  </Row>      
</Container>
```

### Helpful resources
- [Bootstrap layout documentation](https://getbootstrap.com/docs/5.0/layout)
- [Reactstrap layout documentation](https://reactstrap.github.io/?path=/docs/components-layout--layout)

### Contributing
Pull requests are highly appreciated! For major changes, please open an issue first to discuss what you would like to change.
