type user={
    name:string;
    age:number
}

let newuser={};
let exeuser=[];
(newuser as user).age=35;
(<user>newuser).name='tharun';
console.log(newuser)