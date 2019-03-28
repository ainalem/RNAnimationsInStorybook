import React from "react";

import { storiesOf } from "@storybook/react-native";

import { withKnobs } from "@storybook/addon-knobs";

import People from "../../src/components/People";
import List from "../../src/components/List";
import Row from "../../src/components/Row";

const testPeople = [
  {
    avatar: require("../../images/person1.jpg"),
    title: "Eduardo",
    body: ""
  },
  {
    avatar: require("../../images/person2.jpg"),
    title: "Mila",
    body: ""
  },
  {
    avatar: require("../../images/person3.jpg"),
    title: "Eva",
    body: ""
  }
];

const firstPerson = testPeople[0];

storiesOf("RNAnimationsInStorybook", module)
  .addDecorator(withKnobs)
  .add("People", () => <People data={testPeople} />)
  .add("List", () => <List data={testPeople} />)
  .add("Row", () => (
    <Row
      avatar={firstPerson.avatar}
      title={firstPerson.title}
      body={firstPerson.body}
    />
  ));
