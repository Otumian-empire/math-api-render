exports.middleware = (req, res, next) => {
  const { o, x, y } = req.query;

  if (!o) {
    return res.send("Operation not defined. Use any of [add, sub, mult, div]");
  }

  if (!x || !y || !parseInt(x) || !parseInt(y)) {
    return res.send("Two numeric operands required. Operand be from 0,1,2,...");
  }

  next();
};

exports.print = (operation, x, y) => {
  const add = (x, y) => x + y;
  const sub = (x, y) => x - y;
  const mult = (x, y) => x * y;
  const div = (x, y) => (y != 0 ? x / y : 0);
  let message = "Well! Well!! Well!!! Look who is here";

  operation = operation.toLowerCase();
  x = parseInt(x);
  y = parseInt(y);

  switch (operation) {
    case "add":
      message = `${x} + ${y} = ${add(x, y)}`;
      break;
    case "sub":
      message = `${x} - ${y} = ${sub(x, y)}`;
      break;
    case "mult":
      message = `${x} * ${y} = ${mult(x, y)}`;
      break;
    case "div":
      message = `${x} / ${y} = ${div(x, y)}`;
      break;
    default:
      break;
  }

  return message;
};
