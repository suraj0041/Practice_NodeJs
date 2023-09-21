import express from 'express';
var router = express.Router();

import { writeFileSync, readFileSync, readFile } from 'fs';
//---------------------------------------------------------------------
function getUser() {
  let data = [];
  data = readFileSync("./DataBase/Users.json");
  return JSON.parse(data);
}
//---------------------------------------------------------------------
function addUser() {
  let oldData = getUser();

  let user = {
    name: "New User",
    age: 30,
    language: ["PHP", "Go", "JavaScript"]
  };
  // STEP 2: Adding new data to users object
  oldData.push(user)
  // STEP 3: Writing to a file
  writeFileSync("./DataBase/Users.json", JSON.stringify(oldData), err => {
    // Checking for errors
    if (err) throw err;
  });
}
//---------------------------------------------------------------------
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(JSON.stringify(getUser()));
});
//---------------------------------------------------------------------
router.get('/add', function(req, res, next) {
  res.send(addUser());
});

export default router;
