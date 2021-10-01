import React from "react";

function LoginInForm() {
  return (
    <form>
      <label>
        Username:
        <input type="text" name="name" />
      </label>
      <label>
        Password:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default LoginInForm;
