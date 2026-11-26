/*let a=10;
const b=[1,2,3,4,5];
var c=15;
let d="ABCD";
console.log(typeof(a),typeof(b),typeof(c),typeof(d));
let x=5;
let z="5";
console.log(x==z);
console.log(x===z);*/

/*var a=10
{
var b=11;
console.log(a);
}
console.log(b);*/

/*let a=10;
{
    let b=11;
    console.log(b);
}
console.log(a);*/

/*let a=5;
let b=+a;
console.log(b);*/

/*const add=((a,b)=>{
    return a+b;
});
console.log(add(5,6));*/

const fruits=["Apple","Orange","Mango"];
const[first,second,third]=fruits;
console.log(first);

let a=10;
let b=20;
[a,b]=[b,a];
console.log(a);
console.log(b);

let numbers=[10,20,30];
let number=[...numbers,40,50];
console.log(number);

let name="Bala";
console.log(`Welcom to the world of Javascript ${name}`);

const students=new Map();
students.set("name","Bala");
students.set("age",21);
students.set("course","javascript");
console.log(students);
console.log(students.get("name"));
console.log(students.has("name"));
console.log(students.delete("age"));
console.log(students);
console.log(students.size);
for (let[key,values] of students)
    console.log(key,values);

