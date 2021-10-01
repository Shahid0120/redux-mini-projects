import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Introduction = () => {
  const [click, setClick] = useState("false");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (e) => {
    setClick("true");
    console.log("dispatch in action...");
    dispatch({ type: "loginInButton/click", payload: click });
    console.log("dispatch completed...");
    setClick("false");
    history.push("/login");
  };

  return (
    <div>
      <h1>Hello Welcome to Shahid Hussain Welcome App</h1>
      <h1>Would you like to login in? Then Click the button below.</h1>
      <div className="LoginInButton">
        <button
          type="button"
          className="LoginInButton--button"
          onClick={handleClick}
        >
          Login In
        </button>
      </div>
    </div>
  );
};

export default Introduction;
