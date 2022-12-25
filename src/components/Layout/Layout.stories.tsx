import React from "react";

import { Container, Row, Col } from ".";

export default {
  title: "components/Layout",
  subcomponents: {
    Container,
    Row,
    Col,
  },
  // argTypes: {
  //   onPress: { action: "pressed" },
  // },
};

export const Basic = (args) => <Col {...args} />;
Basic.args = {};
