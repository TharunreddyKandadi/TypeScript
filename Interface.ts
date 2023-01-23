interface user{
    name:string,
   readonly age:number,
   address?:string,
}
 
let createuser:user={
    name:"tharun",
    age:22,
}
// createuser.age=32; =>error because we put age to readonly
//and by keeping ? in address we can or cannot write address in createuser by ourwish


interface greet{
    (name:string,address:string,age:number):string;//parameters
}

let hello:greet;
hello=function(n:string,a:string,ag:number){//we can give any name datatype should correct
    if(a ==='en'){
        return `Hello ${n}`
    }else{
        return `Hell ${n}`
    }
}