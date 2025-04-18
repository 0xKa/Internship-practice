/// Promise ///
const event = new Promise((resolve, reject) => {
  var Name = "Reda";
  Name === "Reda" ? resolve(Name) : reject(`Name was not Reda, it was ${Name}`);
});

//calling the promise
event
  .then((name) => {
    console.log(name);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => console.log("PROMISE FINISHED"));

//example
fetch("https://api.example.com/user")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log("Error:", err));

/// async + await + fetch ///
const getUser = async () => {
  try {
    const res = await fetch("https://api.example.com/user"); //fetch() will return a Promise, so we used the await keyword
    const data = await res.json(); //same here, we used the await keyword
    console.log(data);
  } catch (err) {
    console.log("Error::", err);
  } finally {
    console.log("DONE!");
  }
};

getUser();
