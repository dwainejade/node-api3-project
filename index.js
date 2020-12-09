// code away!
const express = require("express")

const userRouter = require("./users/userRouter")
const postRouter = require("./posts/postRouter")

const server = express()
const port = 4000

server.use(express.json())

server.use(userRouter)
server.use(postRouter)

server.listen(port, () =>{
    console.log(`Server is live: http://localhost:${port}`)
})