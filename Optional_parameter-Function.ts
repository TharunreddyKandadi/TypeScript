// the below ? in 3rd parameter is optional at the time of calling if we not given also no problem;

function greet(name:string,age:number,mark?:string):string{
    if(name ==='tharun'){
        return `Hello ${name}${mark}`;
    }else{
        return `Hell ${name}${mark}`;
    }
}
console.log(greet('tharun',22,'!'));