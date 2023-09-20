const users = require("./DataBase/Users.json");
// Defining new user
let user = {
  name: "New User",
  age: 30,
  language: ["PHP", "Go", "JavaScript"]
};

// STEP 2: Adding new data to users object
users.push(user);

//console.log(users);


const fs = require("fs");
// STEP 3: Writing to a file
fs.writeFile("./DataBase/Users.json", JSON.stringify(users), err => {

  // Checking for errors
  if (err) throw err;

  console.log("Done writing"); // Success
});