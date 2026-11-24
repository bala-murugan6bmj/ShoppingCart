/*let array1=[1,2,3,4,5];
console.log(array1.length);
console.log(array1[0]);
console.log(array1.push(6,7));
console.log(array1)
console.log(array1.pop())
console.log(array1);
console.log(array1.unshift(0));
console.log(array1);
console.log(array1.shift());
console.log(array1);
let fruits=["Apple","Orange","Mango","Banana"];
result=fruits.splice(4,0,"Pineapple","Guva");
console.log(result);
console.log(fruits);
console.log(fruits.indexOf("Guva"));
console.log(fruits.includes("Mango"));
result1=array1.findIndex((num)=>{
return num>3;
});
console.log(result1);
result2=array1.map((num)=>{
    return num*2;
});
console.log(result2);
let number2=[1,2,3,[4,5],6];
result3=number2.flat();
console.log(result3);
console.log(fruits.sort());
result4=array1.filter(num=>{
    return num>2;
});
console.log(result4);

result5=array1.every(num=>{
    return num>0;
});
console.log(result5);
console.log(array1);

let name=["Java"];
let name1=["Script"];
console.log(name.concat(name1));
console.log(fruits);
result6=fruits.slice(1,4);
console.log(result6);
console.log(fruits.join());

result7=fruits.forEach(fruit => {
    console.log(fruit);
});
result8=array1.reduce(num=>{
    return num+1;
});
console.log(result8);

let numbers=[1,2,4,5,6,7];
console.log(numbers.reverse());
console.log(numbers.at(5));
console.log(numbers.fill(100,2,6));
console.log(Array.isArray(numbers));
let names="JAVASCRIPT";
console.log(Array.from(names));
let numbers1=[1,2,3,4,5,6];
result9=numbers1.flatMap(num=>{
 return num*3;
});
console.log(result9);*/
/*function add(Quantity,total){
    result=Quantity*total;
    return result;
}
    let pizza=add(2,199);
    let burger=add(3,99);
    console.log("Pizza Price :"+pizza);
    console.log("Burger Prize :"+burger);
    console.log("Result="+(pizza+burger));

const date=new Date();
console.log(date.toLocaleTimeString());

setInterval(()=>{
const date=new Date();
console.log(date.toLocaleTimeString());
},1000);
let promise=new Promise((resolve,reject)=>{
    let age=16;
    if(age>16){
        resolve("Successfull");
    }else{
        reject("Failure");
    }
});
promise
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("Finished...!")
})

function hello(){
        return new Promise((resolve)=>{
            setTimeout(()=>{
        resolve("Good Afternoon!");
    },3000);
})
}
function Js(){
        return new Promise((resolve)=>{
            setTimeout(()=>{
            resolve("Welcome To JavaScript!")
    },2000);
}
);
}
async function getday(){
let hellow=await hello();
console.log(hellow)
let jsw=await Js();
console.log(jsw);
}
getday();*/

/*setInterval(()=>{
console.log("Hello");
},1000);*/

let Details={
    name: "Bala",
    age:21,
   Details1: {
    address:"Madurai"
    }
}
console.log(Details.name);
console.log(Details.Details1.address);
console.log(`Details.(key)`);