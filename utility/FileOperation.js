import { writeFileSync, readFileSync, readFile } from 'fs';

function readData(table){
    let data = [];
    data = readFileSync(`./DataBase/${table}.json`);    
    return JSON.parse(data);
}

function writeData(table,data){
    writeFileSync("./DataBase/"+table+".json", JSON.stringify(data), err => {
        // Checking for errors
        if (err) throw err;
      });
}

export {writeData};
export default readData;