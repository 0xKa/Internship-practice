//data types
const Name = "Reda";
const Age = 20;
const GPA = 1.75;
const IsCool = true;

console.log("Name    : " + Name);
console.log("Age     : " + Age);
console.log("GPA     : " + GPA);
console.log("IsCool  : " + IsCool);
console.log();

console.log("Type: " + typeof Name); //string

// null and undefined
const x = null;
const y = undefined;
console.log("null = " + x);
console.log("undefined = " + y);

//functions
function PrintNum(num) {
  console.log(num);
}
function PowerOf2(num) {
  return num * num;
}

console.log(PowerOf2(5));
PrintNum(8932193);

// object literals // same as class but one for use
const objPerson = {
  Name: "Reda",
  Age: 20,
  GPA: 1.75,
  IsCool: true,
  marks: [10, 20, 50, 90, 40, 33],
  Phone: "90901010",
  Address: "Earth",
};

console.log(objPerson);

//pull data from object into vaiables
const { Address, Phone } = objPerson;
console.log(Address + " " + Phone);

// class
class Person {
  constructor(name, age, gpa, isCool, marks, phone, address) {
    this.Name = name;
    this.Age = age;
    this.GPA = gpa;
    this.IsCool = isCool;
    this.marks = marks;
    this.Phone = phone;
    this.Address = address;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.Name}`);
  }
}

const p1 = new Person("Reda", 20, 2.0, true, [20, 30, 90], "88881111", "mars");
const p2 = new Person("ahmed", 21, 3.1, true, [29, 40, 88], "44441111", "moon");
const p3 = new Person("Khalid", 20, 3.9, true, [99, 31, 90], "22221111", "sun");
console.log(p1);

// Convert Obj Arr to JSON
const PeopleArr = [p1, p2, p3];
const PeopleArr_JSON = JSON.stringify(PeopleArr);
console.log(PeopleArr_JSON);

//for of
for (let p of PeopleArr) {
  console.log(p.Name);
}

// foreach: Runs a function on each item in the array — but doesn’t return anything.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach(function (num) {
  console.log(num * 2);
});
//OR
numbers.forEach((num) => console.log(num * 3));

// map: Creates a new array by transforming each element of the original array.
const doubled = numbers.map((num) => {
  return num * 2;
});

console.log(doubled);

// filter: Creates a new array by transforming each element of the original array.
const even = numbers.filter((num) => {
  return num % 2 === 0;
});

console.log(even);

// foreach, map, filter example:
const students = [
  { name: "Reda", gpa: 1.75 },
  { name: "Ali", gpa: 3.2 },
  { name: "Sara", gpa: 2.9 },
];

// 1. List all names
students.forEach((s) => console.log(s.name));

// 2. Create an array of GPAs only
const gpas = students.map((s) => s.gpa);

// 3. Get students with GPA >= 3
const topStudents = students.filter((s) => s.gpa >= 3);
