const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("./config/key");
const bodyParser = require("body-parser");
const { User } = require("./models/User");
const port = 3000;

//application/x-www-form-urlencoded 형태의 데이터를 분석해서 가져온다
app.use(bodyParser.urlencoded({ extended: true }));
//application/json > JSON타입의 데이터를 분석해서 가져온다
app.use(bodyParser.json());

mongoose //MongoDB 연결
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB가 연결되었습니다..."))
  .catch((err) => console.log(`MongoDB 연결에 실패하였습니다...\n${err}`));

app.get("/", (req, res) => res.send("TESTd")); //초기화면

app.post("/register", (req, res) => {
  //Client에서 데이터 받아옴 > DB에 넣어줌

  const user = new User(req.body);

  user.save((err, doc) => {
    if (err) return res.json({ Success: false, err });
    return res.status(200).json({
      Success: true,
    });
  });
});

app.listen(port, () => console.log(`${port} 포트로 서버를 연결했습니다`));
