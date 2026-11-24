function add(a,b=10){
    console.log("The Addition of a+b =",a+b);
}
function sub(c,d){
    console.log("The subtraction=",c-d);
}
add(5);
sub(6,4);

setTimeout(function(){
    console.log("Welcome To JavaScript");
},1000);

function calculateBill(quantity,price){
    let result=quantity * price;
    return result;
}
let PizzaBill=calculateBill(2,199);
let BurgerBill=calculateBill(3,50);
console.log("The Pizza Price ="+PizzaBill);
console.log("The Burger Price ="+BurgerBill);
console.log("The TotalBill :"+(PizzaBill+BurgerBill));

let name="Bala";
function hello(){
    console.log(name);
}
hello();
console.log(name);
function showMessage() {
    let message = "Hello JavaScript";

    console.log(message);
}

showMessage();

let restaurant = "TastyBite";

function outer() {
    let food = "Pizza";

    function inner() {
        let price = 299;

        console.log(restaurant);
        console.log(food);
        console.log(price);
    }

    inner();
}

outer();
let toy=new Date();
console.log(toy);

let d=new Date(2026,10,29);
console.log(d);

let c=new Date("2026-10-29");
console.log(c);

let date = new Date(2026, 9, 29, 14, 30, 45);

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

let today = new Date();
console.log(today.toDateString());
console.log(today.toTimeString());
console.log(today.toISOString());
console.log(today.toLocaleDateString());
console.log(today.toLocaleTimeString());

let diwali = new Date(2026, 9, 29);

diwali.setDate(diwali.getDate() + 10);

console.log(diwali.toDateString());

let reservationDate = new Date("2026-12-25T18:00:00");

let now = new Date();

if (reservationDate > now) {
    console.log("Reservation date is in the future.");
} else {
    console.log("Please select a future date.");
}

let person=["Ronaldo",22,"Footballer"];
let[first,,third]=person;
console.log(first);
console.log(third);

let student = {
    names: "Bala",
    age: 22,
    course: "JavaScript"
};

let { names, age, course } = student;

console.log(names);
console.log(age);
console.log(course);

const car=new Map();
    car.set("Brand","BMW");
    car.set("Color","Blue");
    car.set("Year",2026);
console.log(car);

const fruits=new Map();
fruits.set("apple",100);
fruits.set("orange",70);
console.log(fruits);
fruits.set("apple",150);
console.log(fruits.get("apple"));
console.log(fruits);
console.log(fruits.has("apple"));
console.log(fruits.delete("orange"));
console.log(fruits);

for(let i=0; i<=5; i++){
    console.log(i);
}
let i=1;
while(i<10){
    console.log(i);
    i++;
}

let j=1;
do{
console.log(j);
j++;
}while(j<10);

console.log(Math.PI);
console.log(Math.sqrt(36));