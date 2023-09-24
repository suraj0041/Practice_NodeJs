import express from 'express';
var router = express.Router();
import readData, { writeData } from '../utility/FileOperation.js';
import GenerateID from '../utility/GenerateID.js';

const tblName="tblUsers";
function User(name,age,profileimage) {
  return {
    id: GenerateID("UID"),
    name,
    age,
    profileimage,
    isActive:true
  }
}

//---------------------------------------------------------------------
function getUser() {
  let data = [];
  data = readData(tblName)
  return data;
}

//---------------------------------------------------------------------
function addUser(name,age,profileimage) {
  let oldData = getUser();
  let newUser=User(name,age,profileimage)
  oldData.push(newUser)
  writeData(tblName, oldData);
}
//---------------------------------------------------------------------
function deleteUser(id) {
  let oldData = getUser();
  oldData = oldData.filter(x => x.id !== id);
  writeData(tblName, oldData);
  return oldData;
}
//---------------------------------------------------------------------
function editUser(editobj) {
  let oldData = getUser();
  let objIndex = oldData.findIndex((obj => obj.id == editobj.id));
  console.log(objIndex);
  oldData[objIndex].name = editobj.name;
  oldData[objIndex].age = editobj.age;
  writeData(tblName, oldData);
}
//---------------------------------------------------------------------
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(JSON.stringify(getUser()));
});
//---------------------------------------------------------------------
router.post('/add', function (req, res, next) {
  res.send(addUser(req.body?.name,req.body?.age,req.body?.profileimage));
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
