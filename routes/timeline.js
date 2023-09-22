import express from 'express';
var router = express.Router();
import readData, { writeData } from '../utility/FileOperation.js';


const TimelineModal = {
    profileimage: "",
    username: "",
    body: {
        Title: "",
        Comment: "",
        images: []
    },
    postedtime: "",
    commentcount: 0,
    likecount: 0
};

//--------------------------------------------------
function getTimeline() {
    let postdata = readData("tblPost");
    let userdata = readData("Users");
    let output = [];
    for (let i = 0; i < postdata.length; i++) {
        let objuser = userdata.filter(x => x.id === postdata[i].userid)[0];
        let newTimelineModal= Object.create(TimelineModal);
        // newTimelineModal.username = objuser.name
        // newTimelineModal.body.Title = postdata[i].title;
        // newTimelineModal.body.Comment = postdata[i].Comment;
        // newTimelineModal.body.images = postdata[i].images;
        // newTimelineModal.postedtime = postdata[i].postedtime;
        //output.push(newTimelineModal);
        console.log(newTimelineModal);
    }
    return output;
}
/* GET home page. */
router.get('/', function (req, res, next) {
    res.send(JSON.stringify(getTimeline()))
});
export default router;
