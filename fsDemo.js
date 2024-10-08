// import fs from 'fs';
import fs from 'fs/promises';

// fs.readFile('./text.txt','utf-8',(err,data)=>{
//   if(err)throw err;
//   console.log(data);
// })

// const data = fs.readFileSync('./text.txt','utf-8');
// console.log(data);

//promise version
// fs.readFile('./text.txt','utf-8')
//   .then((data)=>console.log(data))
//   .catch((err)=>console.log(err))

//async await version 
 const readfile =  async ()=>{
    try{
        const data = await fs.readFile('./text.txt','utf-8');
        console.log(data)
    }
    catch(err){
        console.log(err);
    }
 }
//write file

const writeFile = async ()=>{
    try{
      await fs.writeFile('./text.txt','hello i am white');
      console.log("file written to...")
    }
    catch(err){
        console.log(err);
    }
}

//append file

const appendFile = async ()=>{
    try{
      await fs.appendFile('./text.txt','\nhello i am sigma');
      console.log("file append  to...")
    }
    catch(err){
        console.log(err);
    }
}
writeFile();
appendFile();
 readfile();