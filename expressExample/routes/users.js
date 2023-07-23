
let express = require("express")
let router = express.Router()

router.get("/", (req,res) => {
    res.send("User List");
});
router.get("/new", (req,res) => {
    res.send("Users new form")
});

router.post("/", (req,res) => {
    res.send("create user")
})
router.route("/:id").get((req,res) => {
    console.log(req.user);
    res.send(`get user with id :${req.params.id}`) 
 })
 .put( (req,res) => {
    res.send(`put user with id :${req.params.id}`) 
 })
 .delete( (req,res) => {
    res.send(`delete user with id :${req.params.id}`) 
 })
 let users =[ {name:"Kyle"} ,{ name: "sally"}];
 router.param("id", (req, res, next, id) => {
    req.user = users[id];
    next()
 })


module.exports = router ;