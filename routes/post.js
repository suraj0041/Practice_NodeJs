import express from 'express';
var router = express.Router();
import readData, { writeData } from '../utility/FileOperation.js';
import GenerateID from '../utility/GenerateID.js';

const tblName="tblPost";
const PostTLModal = {
  id:0,
  userid: "",
  title: "",
  comment: "",
  images: [],
  postedtime: ""
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

  PostTLModal.id=GenerateID("PID");
  PostTLModal.userid=req.body?.userid;
  PostTLModal.title=req.body?.title;
  PostTLModal.comment=req.body?.comment;
  PostTLModal.images=req.body?.images;
  PostTLModal.postedtime=Date();
  addPost(PostTLModal);

  res.send('Added successful....')
});


export default router;
