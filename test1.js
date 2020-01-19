class Test {
    constructor(x, y){
       this.x = x;
       this.y = y;
       this.z = 0;
    }
    info(){
        console.log(this.x.toString() + " " + this.y.toString() + " " + this.z.toString());
    }
    setX(x){
        this.x = x;
        this.info();
    }
    setY(y){
        this.y = y;
        this.info();
    }
    setXY(x, y){
        this.x = x;
        this.y = y;
        this.info();
    }
    incZ(){
        this.z++;
        this.info();
    }
    sumXYZ(){
        var sum = this.x + this.y + this.z;
        console.log("sum = " +sum.toString());
    }
}
test = new Test(15, 14);
//test.info();
//test.setXY(17, 13);
//test.p = 3
//console.log(test.p);
test.incZ()
test.sumXYZ();