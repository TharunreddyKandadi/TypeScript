//Abstract classes are mainly for inheritance where other classes may derive from them. We cannot create an instance of an abstract class.

abstract class Hero{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    abstract callhero():string
}


// let Hero2=new Hero('tharun') - error => we cannot create new instance for abstract class so,


class Hero1 extends Hero{
    constructor(name:string){
        super(name)  // must call super()
    }
    callhero(): string {
        return this.name
    }
}

let Hero2=new Hero1('tharun');
console.log(Hero2.callhero());