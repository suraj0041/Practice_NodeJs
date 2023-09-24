import express from 'express';
var router = express.Router();
import readData, { writeData } from '../utility/FileOperation.js';
import GenerateID from '../utility/GenerateID.js';

const tblName="tblPost";
function PostTLModal(id=0,userid=0,title="",comment="",images=[],postedtime="") {
  return {
    id,
    userid,
    title,
    comment,
    images,
    postedtime
  }
};

//---------------------------------------------------------------------------------------------
function getPost(){
  let data = [];
  data = readData(tblName)
  return data;
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(JSON.stringify(getPost()))
});
//---------------------------------------------------------------------------------------------

function addPost(post){
  let oldData = getPost();
  oldData.push(post)
  writeData(tblName, oldData);
}

/* Post home page. */
router.post('/add', function(req, res, next) {

  console.log(JSON.stringify(req.body));
  let NewPost=PostTLModal(GenerateID("PID"),req.body?.userid,req.body?.title,req.body?.comment,req.body?.images,Date())
  addPost(NewPost);

  res.status(200).send('Added successful....')
});


export default router;
