/*function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Data Received!");
        },2000);
    });
}
async function displayData(){
    let result=await getData();
    console.log(result)
}
displayData();

function greet(a,b,multiply,addition){
    let sum=a+b;
    let multiplication=a*b;
    multiply(multiplication);
    addition(sum);
}
function displayadd(sum){
    console.log("Addition is:",sum);
}
function displaymul(multiplication){
    console.log("Multiplication :",multiplication);
}
greet(5,6,displayadd,displaymul);

let promise=new Promise((resolve,reject)=>{
    let age=18;
    if(age>17){ 
        resolve("Eligible for voting");
    }else{
        reject("Not eligible for voting");
    }
});
promise
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("Successfully Completed!")
})

async function welcome(){
    return "Welcome To JavaScript";
}
let result=welcome();
welcome().then((result)=>{
    console.log(result);
});*/

/*function getfood(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
         resolve("FoodMenu");
        },1000);
    });
}

function getoffers(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
         resolve("getoffers");
        },3000);
    });
}

function customer(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Customer Details");
        },2000);
    })
}

async function getData(){
    let result=await getfood();
    console.log(result);

    let result1=await getoffers();
    console.log(result1);

    let result2=await customer();
    console.log(result2);
}
getData();*/

/*function getFood() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Food Menu Loaded");
        }, 2000);
    });
}

function getCustomer() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Customer Details Loaded");
        }, 3000);
    });
}

function getOffers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Restaurant Offers Loaded");
        }, 1000);
    });
}
async function getData() {
    let results = await Promise.all([
        getFood(),
        getCustomer(),
        getOffers()
    ]);
    console.log(results);
}
getData();*/

/*async function getUsers() {
    try {
        console.log("Loading users...");
        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch users!");
        }
        let data = await response.json();
        console.log("User Details:", data);
    }
    catch (error) {
        console.log("Error:", error.message);
    }
    finally {
        console.log("API request completed!");
    }
}
getUsers();*/
function getfood() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Get Your Food!");
        }, 3000);
    });
}

function getuser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Bala");
        }, 2000);
    });
}
async function displayData() {
    let result = await getfood();
    console.log(result);

    let result1 = await getuser();
    console.log(result1);

}
displayData();

function hello(a,b,multiply,addition){
    let add=a+b;
    let mul=a*b;
    multiply(mul);
    addition(add);
}
function displayadd(add){
    console.log("Addition:",add);
}
function displaymul(mul){
    console.log("Multiplication:",mul);
}
hello(5,6,displaymul,displayadd);

const add=(a,b)=>{
    console.log(a+b);
}
add(5,6);

let time=setInterval(()=>{
let today=new Date();
console.log(today.toLocaleTimeString());
},2000);
clearInterval(time);

const cars=["Audi","BMW","Tata","Saab","Lamborghini"];
for(i=0;i<cars.length[0];i++);{
console.log(cars);
}

let a=1;
while(a<10){
    a++;
    console.log(a);
}

const color=["red","green","blue"];
const[first,,second]=color;
console.log(first);
console.log(second);


