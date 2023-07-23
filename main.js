
// import * as Example from "./modules/exportExample.mjs";

// let square1 = new Example.square(10);
// console.log(
//     `this is a test for import ${Example.mathValue}`
// );

// function sumElements(...args){
//     let total = 0; 
//     for(let e of args){
//         total += e ;
//     }
//     console.log(total);
// }

// sumElements(1,5,2,55,9);

// let a , b ,c,argument; 
// [a,b] = [10,12,15];
// [...argument] = [1,5,6,2123,53,23];
// console.log(` the first element is ${b} and the second element is ${a}`);
// let i = 1; 
// for(let element of argument){
//     console.log(`element no ${i++} is `+element);
// }

// let x = 7 ; 
// let y  = (x == 10)? 25 : 30 ; 
// console.log(x + `,` + y);

// [a = 5, b=2, c=9] = [8];
// console.log(a+`,`+ b + `,`+c);

// let d ,e ;
// [d = 18, e =19] = null || [] ;
// console.log(d +`,`+ e);

// [d,e] = [e,d];
// console.log(d +`,`+ e);
// let value = 10 , value2 = 20 ;
// let newObj = new Object({
//     key:value ,
//     key2:value2
// });

// let person = { 
//     firstName : "majed", 
//     lastName : "johari"
// };

// // let {  firstName , lastName} = person; 

// // ({firstName,lastName} = person);
// // console.log(firstName);
// // console.log(lastName);
// let display = (employee) => console.log(id,firstName,lastName);
// let employee = { 
//     id : 100 , 
//     name: {
//         firstName: 'majed', 
//         lastName: "johari"
//     }
// }; 

// let{ 
//     id,
//     name: {
//         firstName, 
//         lastName
//     },
//     name
// } = employee ;
// display(person);
// // console.log(id,firstName,lastName,name);


// let john = {name: "john doe"},
// lily = {name: "lily Bush"},
// peter = {name: "peter drucker"};

// let userRoles = new Map();
// console.log(typeof(userRoles));
// console.log(userRoles instanceof Map);
// userRoles.set(john,"admin").set(peter,'subscriber').set(lily,'editor');
// let role = userRoles.get(john);
// console.log(role);

// let has = userRoles.has(lily);
// console.log(userRoles.size);

// for(let entry of userRoles.entries()){
//     console.log(entry[0].name,entry[1]);
// }

// userRoles.forEach((role,user) => console.log(user.name,role));

// var keys = [...userRoles.keys()];
// console.log(keys);

// let chars = new Set (['a','b','c']);
// console.log(chars);

// class test { 
//     #private = "test";
// }

// let x = 1_000_000; 
// console.log(x);
// setTimeout( () => {
//     console.log("this is just a test");  
// }, 5000);

// function sum (a,b,c){
//     return a+ b+c ; 

// }

// function currying(fn){
//     return function (a){
//         return function(b){
//             return function(c){
//                 return fn(a,b,c);
//             }
//         }
//     }
// }

// let curriedFunction = currying(sum);

// setTimeout( () => { 
//     let result = curriedFunction(1)(2)(3)
//     console.log(result);
// }, 1000);

// let person = {
//     name : "majed",
// };

// globalThis.name = "ahmad " ;
 
// function sayMyName(){
//     console.log(this.name);
// }
//  sayMyName.call(person);

//   function Person (fname, lname) {
//     this.firstname = fname ;
//     this.lastname = lname ;  
//   }

//   Person.prototype.getFullName= function(){
//     console.log(this.firstname,this.lastname);
//   }

//   let person1 = new Person("ahmad","shaer");
//   let person2 = new Person("khaled", "johari");

//   person1.getFullName(); 
//   person2.getFullName();

// let counter = 0 ;
// function sayMyName(Myname){
//     counter++; 
//     console.log(` my name is ${Myname}`);
//     if(counter == 20){
//         clearInterval(intervalId);
//     }
// }

// let timeOut = setTimeout(sayMyName, 2000 ,"ahmad");
// clearTimeout(timeOut); 

// let intervalId = setInterval(sayMyName,1000,"ahmad");  

// function printName (name){
//     console.log(` your name is ${name}`) ;
// }

// function printAhmad(func){
//     let name = "ahmad";
//     func(name);
// }

// printAhmad(printName);
 
// let open = false ;
// let promise = new Promise( (resolve, reject) => {
//     if(open == true){
//         resolve("I will be bringing taco's");
//     }else { 
//         reject("Taco place is closed, so I will not be bringing any taco's");
//     }
// })

// const onFulfillment = (result) => {
//     console.log(result);
//     console.log("set up the table for taco's");
// }
// const onRejection = (result) => {
//     console.log(result);
//     console.log("I will prepare pasta instead");
// }
// promise.then(onFulfillment).catch(onRejection);

// Promise.all([promise1, promise2, promise3]).then( (values) => {
//     console.log(`all the promises has been resorved ${values}`);
// });

// let year = 1915 ; 
// let day ;
// if(year % 400 == 0 || (year % 4 == 0 && year%100 ) || year < 1917){
//     day = 12; 
// }else {
//     day = 13;
// }
// console.log(`${day}.09.${year}`) ;

// async function greet(){
//  return "hellow ahmad";   
// }
// console.log(greet());
//  async function Example(){
//     let promise = new Promise( (resolve, reject) => {
//         setTimeout(() =>resolve("hellow"),1000);
//     });
//     let result = await promise ;
//     console.log(result);
//  }
//  Example();

// function resolveHello(){
//     return new Promise (resolve => { 
//         setTimeout( () => resolve("hellow"), 5000);
//     })
// }

// function resolveWorld(){
//     return new Promise (resolve => { 
//         setTimeout( () => resolve("World"), 3000);
//     })
// }
// async function concurentStart(){
//     const hello = resolveHello();
//     const world = resolveWorld();

//     console.log(await hello);
//     console.log(await world);
// }
// we used this to make sure to not wait longer if used await for the functions rather than output itself so it only wait for the longest await between both of them 
// concurentStart();

// async function parallel (){
//     await Promise.all([
//         (async () => console.log(await resolveHello()))(),
//         (async () => console.log(await resolveWorld()))()
//     ]);
//     console.log("finally");
// }
// parallel();

// import data from './data.json' assert { type: 'json' };
// let data = require('./data.json');
// let ex = require('./exportExample');
// console.log(ex.printName());
// (function (message) {
//     console.log(`this a test for immediatly invoked function expresion for ${message}`);
// })("ahmad");
// console.log(data.age);

// console.log("this is a test for termial");
// console.log("THIS is another test");
// console.log("hi majed ");

// const path = require("path");
// console.log(path.basename(__filename));

// const EventEmitter = require("events");

// const emitter = new EventEmitter() ;

// emitter.on("order", (ing1 = "cheese",ing2 ="vegtabels") => {
//     console.log(`order received! baking a pizaa with ${ing1} and ${ing2}`);
// });
// emitter.emit("order","chicken" ," extra sauce");

// let buffer = new Buffer.from("ahmad");

// console.log(buffer); 
// console.log(buffer.toJSON());
// console.log("hi");

// let fs = require("node:fs");

// fs.readFile("./tet.txt","utf-8", (error,data) => {
//     if(error){
//         console.log("there was an error while reading the file",error);
//     }else { 
//         console.log(data);
//     }
// });

// console.log("hellow guys this is just test");

// fs.writeFileSync("./text2.txt","hellow this is another ", {flag: "a"});
// fs.writeFile("./text2.txt", "hi1", {flag : "a"}, (err) =>{
//     if(err){
//         console.log("we couldnt write to the file the error is ",err);
//     }else {
//         console.log("the data has been successfuly been written to the file ");
//     }
// });

// let fs = require("node:fs/promises")
// fs.readFile("text.txt","utf-8").then(data => console.log(data)).catch(err => console.log(err));

// async function readfile (){
//     let data = fs.readFile("text.txt","utf-8");
//     console.log(await data);
// }
// readfile();

// let fs = require("node:fs"); 
// let readableStream = fs.createReadStream("text.txt",{
//     encoding: "utf-8", 
//     highWaterMark: 2
// });
// let writeableStream = fs.createWriteStream("text2.txt","utf-8");

// readableStream.pipe(writeableStream);

// readableStream.on("data", (chuncks) => {
//     console.log(chuncks)
// })

// let http = require("node:http");
// let fs = require("node:fs");

// let server = http.createServer( (req,res) => {
//     let name = "ahmad";
//     const hero = { 
//         firstName : "Bruce",
//         lastName : "wayne"
//     };
//     let html = fs.readFileSync("./index.html", "utf-8");  
//     //let stream = fs.createReadStream(__dirname +"/index.html").pipe(res);
//      res.writeHead(200 , { "content-Type": "text/html"});
//      html = html.replace("{{name}}",name);
//       res.end(html);
// });

// let server = http.createServer( (req,res) => {
//     let hero = {firstName : "ahmad", lastName: "shaer"};
    
//     if(req.url === "/"){
//         res.writeHead(200, { "content-Type": "text/plain"});
//         res.end("homePage");
//     }else if( req.url === "/about"){
//         res.writeHead(200, { "content-Type": "text/plain"});
//         res.end("about Page");
//     }else if (req.url ===  "/api"){
//         res.writeHead(200, { "content-Type": "application/json"});
//         res.end(JSON.stringify(hero));
//     }else { 
//         res.writeHead(404);
//         res.end("Page not found"); 
//     }
// });
// server.listen(3000, () => {
//     console.log("server running on port 3000");
// });
// let crypto = require("node:crypto");
// process.env.UV_THREADPOOL_SIZE = 9 ;
// let start = Date.now();

// for(let i=0 ;i< 8 ; i++){
//     crypto.pbkdf2("password","salt",100_000,512,"sha512",() =>{
//         console.log(`hash: ${i+1}`, Date.now() - start);
//     })
// }
//console.log("Hash: ",Date.now() - start); 

// let https = require("node:https");
// let maxCalls = 14;
// let start = Date.now();

// for(let i=0 ;i< maxCalls; i++){
//     https.request("https://www.google.com" , (res) => {
//         res.on("data", () => {});
//         res.on("end" , () =>{
//             console.log(`requiest: ${i+1}`, Date.now() - start);
//         });
//     }).end();
// }

// console.log("console.log 1");
// process.nextTick( () => {
//     console.log("this is process.nextTick 1");
// });
// console.log("console.log 2 ");

// Promise.resolve().then( () => {
//     console.log("this is promise.resolve 1 ");
// });
// process.nextTick( () => console.log("this is process.nextTick 1"));
// console.log("this is console.log 1");

// let fs = require("node:fs");
// setTimeout( () => console.log("this is setTimeout 1"), 0);
// fs.readFile(__filename, () => {
//     console.log("read file 1");
//     setImmediate( () => console.log("this is setImmediate 1"));
// });

// process.nextTick( () => console.log("this is process.nextTick 1"));
// Promise.resolve().then( () => console.log("this is Promise.resolve 1"));

// let fs = require("node:fs");

// let readableStream = fs.createReadStream(__filename);
// readableStream.close();

// readableStream.on("close", () => {
//     console.log("this is from readableStream close event callback");
// });
// setImmediate( () => console.log("this is setImmediate 1"));
// setTimeout( () => console.log("this is setTimeout 1"),0);
// Promise.resolve().then( () => console.log("this is promise.resolve 1"));
// process.nextTick( () => console.log("this is process.nextTick 1"));

// let fs = require("node:fs");

// fs.stat("./text.txt", (err,stat) => {
//     if(err){
//         console.log(err);
//     }else {
//         console.log(stat);
//     }
// });

// let path = require("node:path");
// let filePath ="./text.txt";
// let direname = path.dirname(filePath) ;
// let extentionname = path.extname(filePath); 
// let filename = path.basename(filePath, extentionname ); 
// console.log(direname,filename,extentionname);
// console.log(path.resolve("text2.txt"));

// let fs = require("node:fs/promises");

// async function example(){
//     let fileHandler ; 
//     try { 
//         fileHandler = await fs.open("./text.txt",'r');
//         console.log(await fileHandler.readFile({encoding:"utf-8"}));
//     }finally { 
//         if(fileHandler)await fileHandler.close();
//     }
// }
// example();

// let fs = require("node:fs/promises");

// let content = "hi this is just some extra content";

// fs.writeFile("./text2.txt", content,err => {
//     if(err)console.log(err);
// });


// let readline = require("readline").createInterface( {
//     input: process.stdin, 
//     output: process.stdout
// });

// readline.question("what is your name?" , name => {
//     console.log(`welcome ${name} to this program`);
//     readline.close();
// })

 