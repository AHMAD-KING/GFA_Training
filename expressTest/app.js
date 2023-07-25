let express = require("express");
let app = express();

let requestTime = (req, res, next) => {
  req.requestTime = Date.now();
  next();
};

app.use(requestTime);

app.get("/", (req, res) => {
  res.send(`${req.requestTime}`);
});
app.get("/", (req, res) => {
  res.send(`${req.requestTime}`);
});
let port = 3000;
// app.get("*" , (req,res) => {
//     console.log("site visited");
//     res.send('welcome to our website');
// })
// const cb0 = function (req, res, next) {
//   console.log('CB0')
//   next()
// }

// const cb1 = function (req, res, next) {
//   console.log('CB1')
//   next()
// }
// app.get('/',[cb0, cb1] ,(req, res,next) => {
//     console.log("the response will be sent to the call back function 2");
//     next();
// }, (req,res) => {
//     console.log("hellow from the second funcion ");
//     res.end("hi 2");
// })
app.listen(port, () => console.log(`server listening on port`, port));
