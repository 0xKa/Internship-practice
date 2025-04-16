document.querySelector(".items").remove(); //remove items list

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === "" || emailInput.value === "") {
    msg.textContent = "Please Enter Name and Email.";
    msg.classList.add("error");
  } else {
    console.log("Name  : " + nameInput.value);
    console.log("email : " + emailInput.value);

    AddUser(nameInput.value, emailInput.value);

    msg.textContent = "";
    msg.classList.remove("error");

    nameInput.value = "";
    emailInput.value = "";
  }
}

function AddUser(name, email) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(`Name: ${name}, Email: ${email}`));

  userList.appendChild(li);
}

/* BASICS
console.log(document);

// single element
const form = document.getElementById("my-form");
const h1 = document.querySelector("h1"); // use # and . prefix for id and class elements

console.log(form);
console.log(h1);

// multiple element
const ListItems = document.querySelectorAll(".item");
console.log(ListItems);

// remove button
// document.querySelector(".btn").remove();

// edit h1
document.querySelector("h1").textContent = "Reda";

// edit list items
document.querySelector(".items").firstElementChild.textContent = "New Item 1";
document.querySelector(".items").children[1].textContent = "New Item 2";
document.querySelector(".items").children[2].innerHTML = "<b>ITEM 3</b>";

// change button color
const btn = document.querySelector(".btn");
btn.style.background = "red";

// button click event
btn.addEventListener("click", (e) => {
  e.preventDefault(); //cancel the button functionality (cancel submit)
  console.log("button clicked");
  console.log(e.target);

  document.querySelector("#my-form").style.background = "#ccc"; //change form bg
  document.querySelector("body").classList.add("bg-dark"); //add class to the body, to apply the class css
});

*/
