import {createServer} from 'http';
const port = process.env.PORT;
const users = [
    {id:1,name:'john doe'},
    {id:2,name:'jim doe'},
    {id:3,name:'jay doe'}
];
//logger middleware
const logger = (req,res,next)=>{
 console.log(`${req.method} ${req.url}`);
 next();
}
//json middleware
const jsonMiddleware = (req,res,next)=>{
    res.setHeader('Content-Type','application/json');
    next();}

//route handler  for  get  users
const  getUserHandler = (req,res)=>{
    res.write(JSON.stringify(users));
    res.end();
}
//route handler for get users by id
const getUserHandlerByid = (req,res)=>{
    const id = req.url.split('/')[3];
    const user = users.find((user)=>user.id === parseInt(id));
    if(user){
       
        res.write(JSON.stringify(user));
        res.end();
    }
    else{
      
        res.statusCode = 404;
        res.write(JSON.stringify({message:'user not found'}));
        res.end();
    }
}
//not found handler
const notFoundHandler = (req,res)=>{
    res.statusCode = 404;
    res.write(JSON.stringify({message:'route not found'}));
    res.end();
}
//route handler for POST req 
const createUserHandler = (req,res)=>{
    let body= '';
    req.on('data',(chunk)=>{
       body+=chunk.toString();
    })
    req.on('end',()=>{
        const newUser = JSON.parse(body);
        users.push(newUser);
        res.statusCode = 201;
        res.write(JSON.stringify(newUser));
        res.end();

    })
}

const server = createServer((req,res)=>{
    logger(req,res,()=>{
          jsonMiddleware(req,res,()=>{
            if(req.url === '/api/users' && req.method === 'GET'){
                getUserHandler(req,res);
            }
            else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'){
                getUserHandlerByid(req,res);
            }else if(req.url === '/api/users' && req.method === 'POST'){
               createUserHandler(req,res);
            }
            else{
                notFoundHandler(req,res);
            }
          })
    })
    
})
server.listen(port,()=>{
    console.log(`server is listening to ${port}`);
})




