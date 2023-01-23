function error(message:string):never{
    throw new Error(message);
    console.log(123);  // it won't console it 
}
console.log(error('hi'))
//in the above function , function is not(never) completed because of error;

function forever():never{
    while(true){

    }
}
//above function is not(never) completed because of while loop;