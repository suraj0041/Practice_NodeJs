import express from 'express';
var router = express.Router();
import readData, { writeData } from '../utility/FileOperation.js';
import GenerateID from '../utility/GenerateID.js';
const user = {
  id: 3,
  name: "New User",
  age: 30,
  language: ["PHP", "Go", "JavaScript"]
};

//---------------------------------------------------------------------
function getUser() {
  let data = [];
  data = readData("Users")
  return data;
}

//---------------------------------------------------------------------
function addUser() {
  let oldData = getUser();
  user.id=GenerateID("UID");
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
function editUser(editobj) {
  let oldData = getUser();
  let objIndex = oldData.findIndex((obj => obj.id == editobj.id));
  console.log(objIndex);
  oldData[objIndex].name = editobj.name;
  oldData[objIndex].age = editobj.age;
  writeData("Users", oldData);
}
//---------------------------------------------------------------------
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(JSON.stringify(getUser()));
});
//---------------------------------------------------------------------
router.post('/add', function (req, res, next) {
  res.send(addUser());
});

//---------------------------------------------------------------------
router.post('/delete', function (req, res, next) {
  res.send(JSON.stringify((deleteUser(4))));
});
//---------------------------------------------------------------------
router.post('/edit', function (req, res, next) {
  user.name=req.body?.name;
  user.age=req.body?.age;
  editUser(user);
  res.send("Edit successful....");
});

export default router;
