//React JS Requirements

//// import, export ////
import { add, subtract } from "./utils.js";

const num1 = 10,
  num2 = 5;

console.log(add(num1, num2));
console.log(subtract(num1, num2));

//// Objects (basically, C# dictionary) ////
const person1 = {
  firstName: "Reda",
  lastName: "Hilal",
  age: 20,
};

//add address properties to an object from outside
person1["address"] = "oman";
console.log(person1.address);

//pull variables from object
const { firstName, lastName, age } = person1;
console.log(firstName + " " + lastName + " " + age);

//copying object properties to new object, (we can change specfic values while keeping the other values)
const person2 = { ...person1, firstName: "Khalid" };
console.log(person2.firstName + " " + person2.lastName);

//can do the same with array
const arr1 = ["Reda", "Mohammed", "Mustafa"];
const arr2 = [...arr1, "Yousef"]; // arr1 + new element "Yousef"

// .map() and .filter()
const arr3 = ["Reda", "Mohammed", "Mustafa"];
const mappedArr3 = arr3.map((name) => {
  return "$" + name + "$";
});
const filteredArr3 = arr3.filter((name) => {
  return name.length <= 4;
});

console.log("arr3         : " + arr3);
console.log("mapped arr3  : " + mappedArr3);
console.log("filterd arr3 : " + filteredArr3);
