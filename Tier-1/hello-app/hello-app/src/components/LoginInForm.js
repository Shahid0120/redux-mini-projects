// implement onsubmit --> redirect
// check ip checker
// load the hello thingo
// dispatch this information to redux store
// redux:
// onclick if pass all checks
// chnages the state of user from "unknown" --> to that person
// then based on that takes person country cross check language and produces hi
import React from "react";
import styled from "styled-components";
import { render } from "react-dom";
import { connect } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const LoginInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const usernameFocus = (event) => {
    setUsername(event);
  };

  const passwordFocus = (event) => {
    setPassword(event);
  };

  const usernameOutOfFocus = (event) => {
    // check the event contains 2 names and 2 words
    let reg = new RegExp("[A-Za-z]{2}[0-9]{2}");
    if (reg.test(event.target.value) === false) {
      alert("This username does not contain 2 letters and 2 numbers");
    }
  };

  const submitForm = (event) => {
    alert("you have submmited");
    console.log("dispatch in action for submit...");
    dispatch({
      type: "SubmitForm/username",
      username: username,
      password: password,
    });
    console.log("dispatch completed for submit...");
    history.push("/main");
  };

  return (
    <form onSubmit={submitForm}>
      <label>
        <h1>Username:</h1>
        <input
          type="text"
          name="username"
          onClick={usernameFocus}
          onBlur={usernameOutOfFocus}
        />
        {console.log(username)}
        {username === "" ? (
          <UsernameFocusText>Please Enter Username</UsernameFocusText>
        ) : null}
        {username.length < 4 && username.length > 0 ? null : (
          <UsernameFocusTextLength4Plus>
            Please enter a username that is longer than 4 inputs{" "}
          </UsernameFocusTextLength4Plus>
        )}
      </label>
      <br />
      <label>
        <h1>Password:</h1>
        <input type="password" name="name" onClick={passwordFocus} />
      </label>
      <br />
      <br />
      <button type="submit" />
    </form>
  );
};
/*
class LoginInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: " ",
      password: " ",
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

  passwordFocus(event) {
    const e = event.target.value;
    this.setState = {
      password: e,
    };
  }

  usernameOutOfFocus(event) {
    // check the event contains 2 names and 2 words
    let reg = new RegExp("[A-Za-z]{2}[0-9]{2}");
    if (reg.test(event.target.value) === false) {
      alert("This username does not contain 2 letters and 2 numbers");
    }
  }

  submitForm(event) {
    alert("you have submmited");
    alert(event);
    // const dispatch = useDispatch();
    console.log("dispatch in action for submit...");
    dispatch({
      type: "SubmitForm/username",
      username: username,
      password: password,
    });
    console.log("dispatch completed for submit...");
    connect(mapDispatchToProps());
  }

  render() {
    return (
      <form onSubmit={() => this.submitForm()}>
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
          <input type="password" name="name" onClick={this.passwordFocus} />
        </label>
        <br />
        <br />
        <input type="submit" value="Login In" />
      </form>
    );
  }
}
*/

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
