import express from 'express';
import cors from 'cors';
//This are like nested api
import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import postRouter from './routes/post.js';
import timelineRouter from './routes/timeline.js';

import  bodyParser from 'body-parser';
//var cors=icors();
var app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(     
    cors({
    origin: "https://xqw73y.csb.app",
  })
);

// This are like controllers (Route table)
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/post", postRouter);
app.use("/timeline", timelineRouter);


app.listen(3000)