class hero{
    names:string; //private | public | protected names:string
    constructor(name:string){
        this.names=name;
    }
    gethero():string{
        return this.names
    }
}
let myhero=new hero('tharun');
console.log(myhero.gethero());


class hero1 extends hero{
    superpower:string[]=[];
    addpower(name:string):void{
        this.superpower.push(name);
    }
    seepower():string[]{
        return this.superpower;
    }
}

let hero2=new hero1('tharun');
hero2.addpower('memory');
console.log(hero2.seepower())

//the above public => we can axcess in  subclass and outside the class;
// private => we cannot axcess in subclass and outside the class;
//protected => we can axcess in subclass but not in outside the class;