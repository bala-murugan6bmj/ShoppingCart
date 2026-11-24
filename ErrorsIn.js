const mypromise=new Promise((resolve,reject)=>{
let age=18;
if(age>17){
    resolve("Eligible")
}else{
    reject("Not eligible")
}});
mypromise
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})

const student={
    name:"Bala",
    address:{
        city:"Madurai",
        state:"TamilNadu"
    }
}
console.log(student.name);
console.log(student.address.city);
console.log(student.address.state);

function greet(nameis,callback){
    console.log("Name is:"+nameis);
    callback();
}
function hello(){
    console.log("Welcome To JavaScript!");
}
greet("Aj",hello);

console.log(Math.PI);
console.log(Math.sqrt(36));
console.log(Math.random());
console.log(Math.round(10.49));
console.log(Math.max(10,20,30));
console.log(Math.min(10,20,30));
console.log(Math.ceil(10.1));
console.log(Math.floor(11.1));
console.log(Math.trunc(10.5));
console.log(Math.abs(-10));

function calculate(a, b, addCallback, multiplyCallback) {
    let sum = a + b;
    let product = a * b;
    addCallback(sum);
    multiplyCallback(product);
}
function displayAddition(sum) {
    console.log("Addition:", sum);
}

function displayMultiplication(product) {
    console.log("Multiplication:", product);
}
calculate(10, 5, displayAddition, displayMultiplication);

function grey(a,b,callback1,callback2){
    callback1();
    callback2();
    console.log("Addition :",a+b)
}
function red(){
    console.log("Hello!");
}
function blue(){
    console.log("Welcome To Js!")
}
grey(5,6,red,blue);

function Add(a,b,multi,addition){
    let addit=a+b;
    let multiple=a*b;
    multi(multiple);
    addition(addit);
}
function DisplayAdd(addit){
    console.log("The Addition :",addit)
}
function DisplayMul(multiple){
    console.log("The Multiplication is :",multiple)
}
Add(5,6,DisplayAdd,DisplayMul);

let promise=new Promise((resolve,reject)=>{
    let age=18;
    if(age>17){
        resolve("Eligible for voting!");
    }else{
        reject("Not Eligible for voting!");
    }
})
promise
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("Successfully Complete!");
})

async function welcome(){
    return("Welcome To JavaScript!");
}
welcome();
function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received!");
        }, 2000);
    });
}

async function displayData() {
    let result = await getData();

    console.log(result);
}

displayData();