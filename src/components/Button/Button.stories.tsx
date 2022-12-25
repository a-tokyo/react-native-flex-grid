import React from "react";

import Button from "./Button";

export default {
  title: "components/Button",
  component: Button,
  argTypes: {
    onPress: { action: "pressed" },
  },
};

export const Basic = (args) => <Button {...args} />;

Basic.args = {
  text: "Hello World",
  color: "purple",
};
