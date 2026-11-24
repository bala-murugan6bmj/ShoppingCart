console.log("Start");
setTimeout(function(){
    console.log("JavaScript!")
},4000);
console.log("End!")

setTimeout(()=>{
    console.log("Welcome To")
},2000);

/*let i=1;
setInterval(()=>{
    console.log(i);
    i++;
},1000);*/

let time=setTimeout(()=>{
    console.log("Welcome to the world of javascript!") 
},6000);

let timer = setTimeout(() => {
    console.log("Your session is expired!");
}, 5000);
function cancelTimer() {
    clearTimeout(timer);
    console.log("Timer Cancelled!");
}
cancelTimer();

let count = 1;

let times = setInterval(() => {
    console.log(count);
    count++;
    if (count > 5) {
        clearInterval(times);
        console.log("Timer Stopped!");
    }

}, 1000);

function showTime() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    console.log(time);
}
setInterval(showTime, 10000);

console.log("Task 1");

let start = Date.now();

while (Date.now() - start < 5000) {
    // Wait for approximately 5 seconds
}

console.log("Task 2");

console.log("Task 3");