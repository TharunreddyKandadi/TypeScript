//by using this property we can add any number of properties in userdetais with property string

interface user{
    name:string;
    readonly age:number; // we cannot change
    address?:string; // optional
    [property:string]:any;
}

let userdetails:user={
    age:30,
    name:'tharun',
    type:'xyz', // created
    order:111, // created
}

//to axcess;
 userdetails.name;

