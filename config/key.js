//DB에 연결하기전 개발환경이 클라우드면은 prod.js를 사용하고 로컬환경이면 dev.js의 값을 사용한다
if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}
