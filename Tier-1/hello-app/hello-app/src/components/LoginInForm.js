// username takes anything
// restrictions
// contains number + words
// onclick LoginIn button
// if empty space then red
// goes to load screen logined
// says greeting

// redux:
// onclick if pass all checks
// chnages the state of user from "unknown" --> to that person
// then based on that takes person country cross check language and produces hi
import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { render } from "react-dom";

class LoginInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: " ",
    };
    this.usernameFocus = this.usernameFocus.bind(this);
  }

  usernameFocus(event) {
    // the thingo pops up UsernameFocusText
    const e = event.target.value;
    this.setState({
      username: e,
    });
  }

  usernameOutOfFocus(event) {
    // check the event contains 2 names and 2 words
    let reg = new RegExp("[A-Za-z]{2}[0-9]{2}");
    if (reg.test(event.target.value) === false) {
      alert("This username does not contain 2 letters and 2 numbers");
    }
  }

  render() {
    return (
      <form>
        <label>
          <h1>Username:</h1>
          <input
            type="text"
            name="username"
            // input={this.state.username}
            onClick={this.usernameFocus}
            onBlur={this.usernameOutOfFocus}
          />
          {console.log(this.state.username)}
          {this.state.username === "" ? (
            <UsernameFocusText>Please Enter Username</UsernameFocusText>
          ) : null}
          {this.state.username.length < 4 &&
          this.state.username.length > 0 ? null : (
            <UsernameFocusTextLength4Plus>
              Please enter a username that is longer than 4 inputs{" "}
            </UsernameFocusTextLength4Plus>
          )}
        </label>
        <br />
        <label>
          <h1>Password:</h1>
          <input type="password" name="name" />
        </label>
        <br />
        <input type="submit" value="Login" />
      </form>
    );
  }
}

const UsernameFocusText = styled.h5`
  color: red;
  /* visibility: hidden; */
  opacity: 100;
  position: relative;
`;

const UsernameFocusTextLength4Plus = styled.h5`
  color: red;
`;

export default LoginInForm;
