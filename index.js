const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const port = 3000;

mongoose
  .connect("[NULL]", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB가 연결되었습니다..."))
  .catch((err) => console.log(`MongoDB 연결에 실패하였습니다...\n${err}`));

app.get("/", (req, res) => res.send("TEST"));
console.log("hello duck");
app.listen(port, () => console.log(`${port} 포트로 서버를 연결했습니다`));
