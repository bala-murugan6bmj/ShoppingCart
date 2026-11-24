function Calculate(quantity,bill){
let total=quantity * bill;
return total;
}
let PizzaBill=Calculate(2,199);
let BurgerBill=Calculate(4,149);
console.log("PizzaBill :"+PizzaBill);
console.log("BurgerBill :"+BurgerBill);
console.log("TotalBill:"+(PizzaBill+BurgerBill));

function Demo(name="Guest"){
    console.log(`Welcome",${name}`);
}
Demo("Bala");
Demo();

function add(a,b){
    console.log("The value=",a+b);
}
add(5,6);

const number1=[1,2,3];
const number2=[4,5,6];
const number3=[...number1,...number2];
console.log(number3);

const fruits=["Apple","Banana","Orange"];
const [first,,Second,]=fruits;
console.log(first);
console.log(Second);

setTimeout(function(){
    console.log("Hello")
},1000);

const greet=(a,b) => {
    return a+b; 
}
console.log(greet(1,5));

let d=new Date("2026-10-29");
console.log(d);

let integers=[10,20,30,40,50];
let[one,...remaining]=integers;
console.log(one);
console.log(remaining);

const student=new Map();
student.set("name","Bala");
console.log(student);
student.get("name");
console.log(student);
console.log(student.has("name"));
console.log(student.delete("name"));
console.log(student);

const myset=new Set();
myset.add("Apple");
myset.add("Grapes");
console.log(myset);
console.log(myset.delete("Grapes"));
console.log(myset);

console.log(Math.PI);
console.log(Math.sqrt(36));
console.log(Math.max(10,20,30));
console.log(Math.min(10,20,30));
console.log(Math.round(10.5));
console.log(Math.ceil(10.1));
console.log(Math.floor(10.1));
console.log(Math.pow(2,3));

const hello=(a,b)=>{
    return a+b;
}
console.log(hello(3,4));

/*setInterval(() => {
    let time = new Date().toLocaleTimeString();
    console.log(time);
}, 1000);*/

/*let b=100;
{
    var a=10;
    console.log(a);
    let c=30;
}
console.log(c);*/

let today=new Date();
console.log(today.getFullYear());
console.log(today.getMonth());
function greets(name,age,callback){
    console.log("Name is:"+name);
    console.log("Age is:"+age);
    callback();
}
function helloWorld(){
    console.log("Welcome to Js");
}
greets("Bala",21,helloWorld);
