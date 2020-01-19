const sqlite3 = require('sqlite3').verbose();
class Product{
    constructor(name,count) {
        this.name = name;
        this.rank = 0;
        this.count = count;
    }
    sell(count){
        if (this.count < count) {
            console.log("Operation is not allowed,the current quantity of the product is less than the requested quantity")
        }
        else{
            this.count -= count;
            console.log("product " + this.name + " sold in quantity " + this.count.toString());
            console.log("The rest of the product is " + this.count.toString());
        }
        
    }
    addCount(count){
        this.count += count;
        console.log("Received a product called " + this.name + " with such quantity is  " + this.count.toString());
    }
    incRank(){
        this.rank++;
        console.log("Current rating of " + this.name + " is "+ this.rank.toString());
    }   
}
class ProductStore{
    constructor(name){
        this.name = name;
        this.products = [];
    }
    addProduct(product){
        this.products.push(product);
    }
    listProducts(){
        console.log("Now the store offers the following products ");
        var i = 0
        while (i < this.products.length){                                
 //       for (var i = 0; i < this.products.length; i++){
            console.log(this.products[i].name + " - " + this.products[i].count.toString());
            i++;
        }
    }
    getAllProducts(){
        let db = new sqlite3.Database('./store.db');
        
        let sql = "SELECT name,count from product";
        
        
        db.all(sql, [], (err, rows) => {
            if (err) {
                throw err;
            }
            rows.forEach((row) => {
                console.log(row.name + " - " + row.count);
                //product = new Product(row.name,row.count);
               // this.products.push(product)
            });
        });
        db.close();
    }
    
}

class Test {
    constructor(name){
        this.name=name;
    }
    getName(){
        var a = 3
        console.log(this.name);
        console.log(a);
    }
}
var test = new Test("abc");
test.name = "wyz"
test.getName();
//milk=new Product("milk",10);
//bread=new Product("bread",20)
//milk.sell(15);
//milk.sell(5);
//milk.addCount(10);
//milk.incRank();
//bread.sell(10);
//bread.addCount(7);
//bread.incRank();
//store=new ProductStore("Fish store")
//store.addProduct(milk);
//store.addProduct(bread);
//store.listProducts();
//store.getAllProducts();
//store.listProducts();
//var fruits = ["mango", "apple", "orange", "pear"]
//for (var i = 0; i < fruits.length; i++){
// var i = 0
// while (i < fruits.length){
 //   console.log(fruits[i]);
 //i++
// }
//}

