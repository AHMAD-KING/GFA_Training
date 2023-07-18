let cluster = require("node:cluster");
let os = require("node:os");
console.log(os.cpus().length);

if(cluster.isMaster){
    console.log(`master process ${process.pid} is running`);
    cluster.fork();
    cluster.fork();
}else { 
    console.log(`worker process ${process.pid} is running`);
}