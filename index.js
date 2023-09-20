import temp from './testM.js';

let olddata=[{name:"suraj"}]
let newdata={name:"harini"}
var as=temp(olddata)
console.log(as.Display())
as.Add(newdata);
console.log(as.data)