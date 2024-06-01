//http
const http=require("http");

const server =http.createServer();

server.listen(3005,"127.0.0.1",(err)=>{
    if(!err){
        console.log("Server is listining to port: 3003");
        console.log("Press CTRL+C to disconnet server");
    }
});

