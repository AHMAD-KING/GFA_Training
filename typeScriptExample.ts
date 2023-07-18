
type User = {
    name : string,
    job : string
};

function isEngineer(user):boolean {
    if(user.job == "engineer")
    return true ; 
    else return false ;
}

let khaled :  User = {
    name : "khaled",
    job : "engineer"
} ;
[khaled.name , khaled.job ]= [ "omar"  ,"physicine" ];
let flag = isEngineer(khaled);
console.log(flag);


