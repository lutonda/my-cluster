const express = require("express");

const dotenv = require('dotenv');

dotenv.config();
const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  const { params } = req;
  const data={
    params,
    msg: "Express  FROM SERVER: " + port,
  }
  console.log(port, data)
  res.json(data);
});
app.get("/sum/:n1/:n2", (req, res) => {
  const { params } = req;
  const { n1, n2 } = params;
  const data={
    params,
    value: n1 + n2,
    msg: "Express  FROM SERVER: " + port,
  }
  console.log(port, data)
  res.json(data);
});
app.get("/subtraction/:n1/:n2", (req, res) => {
  const { params } = req;
  let { n1, n2 } = params;
  n1=Number(n1);
  n2=Number(n2)
  const data={
    params,
    value: n1 - n2,
    msg: "Express  FROM SERVER: " + port,
  };
  console.log(port, data)
  res.json(data);
});
app.get("/multiplication/:n1/:n2", (req, res) => {
  const { params } = req;
  let { n1, n2 } = params;
  const data={
    value: n1 * n2,
    params,
    msg: "Express  FROM SERVER: " + port,
  };
  console.log(port, data)
  res.json(data);
});
app.get("/division/:n1/:n2", (req, res) => {
  const { params } = req;
  let { n1, n2 } = params;
  n1=Number(n1);
  n2=Number(n2)
  const data={
    params,
    value: n1 / n2,
    msg: "Express  FROM SERVER: " + port,
  };
  console.log(port, data)
  res.json(data);
});
app.get("/exponent/:n1/:n2", (req, res) => {
  const { params } = req;
  let { n1, n2 } = params;
  n1=Number(n1);
  n2=Number(n2)
  const data={
    params,
    value: n1 ^ n2,
    msg: "Express  FROM SERVER: " + port,
  };
  console.log(port, data)
  res.json(data);
});
app.get("/error", (req, res) => {
  const { params } = req;
  let { n1, n2 } = params;
  n1=Number(n1);
  n2=Number(n2)
  const data={
    params,
    value: n1 ^ n2.doc(),
    msg: "Express  FROM SERVER: " + port,
  };
  console.log(port, data)
  res.json(data);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
