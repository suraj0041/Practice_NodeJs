import express from 'express';
var router = express.Router();
import readData, { writeData } from '../utility/FileOperation.js';
//---------------------------------------------------------------------
function getUser() {
  let data = [];
  data = readData("Users")
  return data;
}

//---------------------------------------------------------------------
function addUser() {
  let oldData = getUser();

  let user = {
    id: 4,
    name: "New User",
    age: 30,
    language: ["PHP", "Go", "JavaScript"]
  };

  oldData.push(user)
  writeData("Users", oldData);
}
//---------------------------------------------------------------------
function deleteUser(id) {
  let oldData = getUser();
  oldData = oldData.filter(x => x.id !== id);
  writeData("Users", oldData);
  return oldData;
}
//---------------------------------------------------------------------
function editUser(id) {
  

}
//---------------------------------------------------------------------
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(JSON.stringify(getUser()));
});
//---------------------------------------------------------------------
router.get('/add', function (req, res, next) {
  res.send(addUser());
});

//---------------------------------------------------------------------
router.get('/delete', function (req, res, next) {
  res.send(JSON.stringify((deleteUser(4))));
});
//---------------------------------------------------------------------
router.get('/edit', function (req, res, next) {
  res.send(JSON.stringify(getUser()));
});

export default router;
