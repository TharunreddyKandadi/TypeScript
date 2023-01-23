// let obj={};
// obj.name='tharun';
// the above will not work in TS like in JS there will be 2 ways below 2 codes;



let obj={
    name:'',
}
obj.name='tharun'
//we have to give a name already and need to update it;


// for using the array of objects in TS we Use
let arrobj:{name:string,age:number}[]=[
    {
        name:'tharun',
        age:22
    },
    {
        name:'sravan',
        age:28
    }
]