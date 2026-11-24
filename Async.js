async function getdata(){
    return "Hello Js";
}
console.log(getdata());
async function getData() {
    return "Hello JavaScript";
}
async function display() {
    let result = await getData();
    console.log(result);
}
display();
let stack=[10,20];
console.log(stack);
stack.push(30);
console.log(stack);
stack.pop();
console.log(stack);
console.log(stack[stack.length-1]);
console.log(stack);
console.log(stack.length===2);
console.log(stack);