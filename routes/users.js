import express from "express";
var router = express.Router();
import readData, { writeData } from "../utility/FileOperation.js";
import GenerateID from "../utility/GenerateID.js";

const tblName = "tblUsers";
function User(UID, name, emailid, password, age, profileimage,isActive) {
  return {
    id: Number(UID)==-1 ? GenerateID("UID"):UID,
    name,
    emailid,
    password,
    age,
    profileimage,
    isActive: Number(UID)==-1 ? 'true':isActive,
  };
}


//---------------------------------------------------------------------
function getUser() {
  let data = [];
  data = readData(tblName);
  return data;
}

//---------------------------------------------------------------------
function addUser(name, emailid, password, age, profileimage) {
  let oldData = getUser();
  let newUser = User(-1,name,emailid, password, age, profileimage,true);
  oldData.push(newUser);
  writeData(tblName, oldData);
}
//---------------------------------------------------------------------
function deleteUser(id) {
  let oldData = getUser();
  oldData = oldData.filter((x) => x.id !== id);
  writeData(tblName, oldData);
  return oldData;
}
//---------------------------------------------------------------------
function editUser(editobj) {
  let oldData = getUser();
  let objIndex = oldData.findIndex((obj) => obj.id == editobj.id);
  console.log(objIndex);
  oldData[objIndex].name = editobj.name;
  oldData[objIndex].age = editobj.age;
  oldData[objIndex].profileimage = editobj.profileimage;
  oldData[objIndex].isActive = editobj.isActive;
  oldData[objIndex].password = editobj.password;
  oldData[objIndex].emailid = editobj.emailid;

  writeData(tblName, oldData);
}
//---------------------------------------------------------------------
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send(JSON.stringify(getUser()));
});
//---------------------------------------------------------------------
router.post("/add", function (req, res, next) {
  res.send(addUser(req.body?.name,req.body?.emailid,req.body?.password, req.body?.age, req.body?.profileimage));
});

//---------------------------------------------------------------------
router.post("/delete", function (req, res, next) {
  res.send(JSON.stringify(deleteUser(4)));
});
//---------------------------------------------------------------------
router.post("/edit", function (req, res, next) {
  var _usr= new User(req.body?.id,req.body?.name,req.body?.emailid,req.body?.password,req.body?.age,req.body?.profileimage,req.body?.isActive);
  console.log(req.body);
  editUser(_usr);

  res.send("Edit successful....");
});

export default router;
