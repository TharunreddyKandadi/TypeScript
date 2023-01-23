const isAdmin:boolean=true;
let user:string='tharun';
let welcome:string;

if(isAdmin){
    welcome=`${user} is valid`;
}else{
    welcome=`${user} is invalid`
}
console.log(welcome)