const http = require ('http')

const server = http.createServer((req,res)=>{
    console.log(req.method);
    res.end()
})

const PORT =4000


server.listen(PORT,()=>console.log(`server is running ${PORT}`))