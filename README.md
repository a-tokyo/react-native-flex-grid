# react-native-flex-grid
A react-native flexbox grid similar to [bootstap](https://getbootstrap.com)'s web grid.

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

Library inspired by:
- [bootstrap](https://getbootstrap.com)
- [react-flexbox-grid](https://www.npmjs.com/package/react-flexbox-grid)