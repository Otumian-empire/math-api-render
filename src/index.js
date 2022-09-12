const express = require("express");
const cors = require("cors");

const { middleware, print } = require("./utils");

const app = express();
app.use(cors());

app.get("/", (_req, res) => {
  let message = `<h3>Basic Math Test</h3>`;
  message += `<p>This is a basic arithmetic api to test render hosting.</p>`;
  message += `<br>`;
  message += `<p>To use this api, make a request to /math and provide the operation`;
  message += `and two numeric operands using the query string, 'o', 'x', and 'y' respectively.`;
  message += `The operations are available are: [add, sub, mult, div]</p>`;
  message += `<p>Example /math?o=add&x=3&y=6. Try it <a href=${"math?o=add&x=3&y=6"}>here</p>`;

  return res.send(message);
});

app.get("/math", middleware, (req, res) => {
  const { o, x, y } = req.query;

  return res.send(print(o, x, y));
});

app.get("/test", (_req, res) => {
  return res.send("This is test route ");
});

module.exports = app;
