//in type we cannot create a duplicate of a created type variable
type user={
    name:string;
    age:number
}
// type user={

// }

//the above duplicate is possible in interface
 interface user1 {
    name:string;
    age :number;
 }
 interface user1{
    address:string;
 }
 
 
 //2nd is we can one interface properties to other and add additional properties by using => extends keyword;
 interface Ihero{
    name:string;
 }
 interface Ivillan extends Ihero{
    age:number;
 }

 let Iheroname:Ihero={
    name:"tharun",
 }
 let Ivillanname:Ivillan={
     age:30,
     name:"sravan",
 }