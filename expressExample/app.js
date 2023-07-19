
let express = require("express");
let path = require('node:path');
let app =  express()
app.set("view engine",'ejs')
let port = 3000; 
app.set('views', path.join(__dirname, 'views'));
app.get("/", (req,res) => {
    res.status(200);
    res.render("webpage", {text1 :"ahmad"});
});


let userRouter = require('./routes/users');
app.use('/users',userRouter);
app.listen(port, () => console.log(`listening on port: ${port}`));

