import React, { Component } from "react";
import { keypadKeys } from "../../utils/constants";
import Calculator from "../calculator";

export default class Keypad extends Component {
  handleClick = (key) => {
    this.props.calculate(key);
  };
  render() {
    return keypadKeys.map((block) => {
      return block.map((key) => (
        <Calculator.Button
          key={key}
          onButtonClick={this.handleClick}
          buttonKey={key}
        />
      ));
    });
  }
}
