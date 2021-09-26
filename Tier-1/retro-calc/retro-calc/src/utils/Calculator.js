export default (expression) => {
  // if it matches the expression? // shows all matches
  const matched = new RegExp(
    /([\\d]+\\.?[\\d]*)?([-+/*][\\d]+\\.?[\\d]*)*/
  ).exec(expression);

  // if it doesnt match the expression
  if (!matched) {
    return 0;
  }

  // shows one match
  if (/^[*+\/]/.test(expression)) {
    return () => {
      throw new Error("Cannot start the expression with invalid operators");
    };
  }

  return new Function(`return ${matched[0]}`)();
};
