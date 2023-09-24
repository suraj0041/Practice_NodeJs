import express from 'express';
var router = express.Router();
import readData, { writeData } from '../utility/FileOperation.js';


function TimelineModal(profileimage="",username="",title="",comment="",images=[],postedtime,commentcount=0,likecount=0) {
    return {
        profileimage,
        username,
        body: {
            title,
            comment,
            images
        },
        postedtime,
        commentcount,
        likecount
    }
};

//--------------------------------------------------
function getTimeline() {
    let postdata = readData("tblPost");
    let userdata = readData("tblUsers");
    let output = [];
    for (let i = 0; i < postdata.length; i++) {
        let objuser = userdata.filter(x => x.id === postdata[i].userid)[0];
        output.push(TimelineModal(objuser.profileimage,objuser.name,postdata[i].title,postdata[i].comment,postdata[i].images,postdata[i].postedtime,postdata[i].commentcount,postdata[i].likecount));
    }
    return output;
}
/* GET home page. */
router.get('/', function (req, res, next) {
    res.send(JSON.stringify(getTimeline()))
});
export default router;
