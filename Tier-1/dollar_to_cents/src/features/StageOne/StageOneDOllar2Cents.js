import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { convert, selectCents, slice } from "./dollarsToCentsSlice.js";

function StageOneDOllar2Cents() {
  const cents = useSelector(selectCents);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <h1>This is Stage one of dollar to cents converter</h1>
      <h2>Dollars in $</h2>
      <input
        type="number"
        onChange={(e) => dispatch(convert(e))}
        placeholder="type in a dollar to convert"
      />
      <h2>Cents in c</h2>
      <span>{cents}</span>
    </React.Fragment>
  );
}

export default StageOneDOllar2Cents;
