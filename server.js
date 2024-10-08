import http from 'http';
import fs from 'fs/promises';
const port = process.env.PORT;
import url from 'url';
import path from 'path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req,res)=>{
     try{
       if(req.method === 'GET'){
        let filePath;
        if(req.url === '/'){
           filePath = path.join(__dirname,'public','index.html');
        }
        else if(req.url === '/about'){
           filePath = path.join(__dirname,'public','about.html');
        }
        else {
            throw new error('404 not found');
        }
        const data = await fs.readFile(filePath);
        res.setHeader('Content-type','text/html');
        res.write(data);
        res.end();
       }
       else{
        throw new Error('method not allowed');
       }
     }
     catch(error){
        res.writeHead(500,{'Content-type':'text/html'});
        res.end('<h1>Server error</h1>');
     }
})

server.listen(port,()=>{
    console.log(`server is listening to ${port}`);
})