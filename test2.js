
class Number {
    constructor(n){
        this.n = n;
    }
    plus(x){
        this.n+=x;
    
    }
    info(){
        console.log("Сейчас число равно " + this.n.toString());
    }
}
number = new Number(7);
number.plus(3);
number.info();
