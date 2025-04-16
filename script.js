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
console.log(x);
console.log(y);

// object literals
const Person = {
  Name: "Reda",
  Age: 20,
  GPA: 1.75,
  IsCool: true,
  marks: [10, 20, 50, 90, 40, 33],
};

console.log(Person.marks[5]);
