enum fruit {
    apple,
    orange,
    banana
}
console.log(fruit.banana);//2 => because by default it take index value

enum fruits {
    apples,
    oranges,
    bananas
}
let applesKg=fruits.apples;
let orangesKg=fruits.oranges;
let bananas=fruits.bananas;
console.log(applesKg);//2 => takes index values;



enum vegetables {
    tamoto=25,
    bringa=30,
    carrot=60
}
console.log(vegetables.carrot)//60 =>takes inside value;




const rawmatrial = (num:number)=>num*30;
enum market{
    vegetables=100,
    fruits=2*vegetables,
    other=rawmatrial(2),
}
console.log(market.other);
console.log(market.fruits);
console.log(market.vegetables);

