/*student={
    name:"Bala",
    age:21,
    course:"JavaScript"
}
console.log(student.name);
student.course="FullStack Developer";
console.log(student);
student.address="Madurai";
console.log(student);
console.log(student["name"]);
let property="name";
console.log(student.property);
let result=Object.keys(student);
console.log(result);
let result1=Object.values(student);
console.log(result1);
console.log(Object.entries(student));
Object.seal(student);
student.address="Chennai";
student.income=10000000;
console.log(student);
Object.freeze(student);
student.name="Arun";
student.age=22;
let person={
    name:"Ronaldo",
    age:21,
    address:{
        city:"Madurai"
    }
}
Object.freeze(person);
person.address.city="Chennai";
console.log(person);*/

let student = {
    name: "Bala",
    age: 22
};
let details = {
    city: "Madurai",
    course: "JavaScript"
};
let marks={
    topic:"Objects",
    mark:97
}
Object.assign(student, details,marks);
console.log(student);

let persons={
    greet: function(){
        console.log("Hello!")
    }
}
let Students=Object.create(persons);
Students.name="Bala";
Students.course="JavaScript";
Students.marks=97;
console.log(Students.name);
console.log(Object.keys(Students));
console.log(Object.values(Students));
console.log(Object.entries(Students));
Students.greet();

let players={
    name:"Ronaldo",
    age:21
}
let achivements=Object.create(players)
achivements.goals=980;
console.log(achivements);
console.log(achivements.name);
console.log(achivements.age);

let Books=[
    ["name" ,"JavaScript"],
    ["edition", 5],
    ["price",900]
]
let result=Object.fromEntries(Books);
console.log(result);

let teams={
   names: "Chennai Super Kings",
}
console.log(Object.hasOwn(teams,"names"));
console.log(Object.hasOwn(teams,"year"));

console.log(Object.is(10,10));
console.log(Object.is(10,20));
