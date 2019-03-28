import React from "react";

import { storiesOf } from "@storybook/react-native";

import People from "../../src/components/People";
import List from "../../src/components/List";
import Row from "../../src/components/Row";

storiesOf("RNAnimationsInStorybook", module)
  .add("People", () => <People />)
  .add("List", () => <List />)
  .add("Row", () => <Row />);
