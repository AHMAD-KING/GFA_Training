function greet(){
    console.log(upperCase("hellow ahmad"));
}
let upperCase = require("upper-case").upperCase;
greet();
module.exports = greet; 