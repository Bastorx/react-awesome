const express = require("express");
const path = require("path");
const morgan = require("morgan");

const app = express();

app.use(morgan("combined"));
app.use("/assets", express.static(path.join(__dirname, "../src/public")));
app.use("/dist", express.static(path.join(__dirname, "../dist")));

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(process.env.PORT || 4000, err => {
  if (err) {
    console.error(err);
    return;
  }
  console.info(`Listening at http://localhost:${process.env.PORT || 4000}`);
});
