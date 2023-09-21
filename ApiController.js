import express from 'express';

//This are like nested api
import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';

var app = express()
// This are like controllers (Route table)
app.use("/", indexRouter);
app.use("/users", usersRouter);

app.listen(3000)