// code away!
const express = require("express")
const morgan = require("morgan")

const userRouter = require("./users/userRouter")
const postRouter = require("./posts/postRouter")

const server = express()
const port = 4001

server.use(express.json())

// LOGER
server.use(morgan("combined"))

server.use(userRouter)
server.use(postRouter)

// ERROR LOGGER
server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "something went wrong."
    })
})

server.listen(port, () => {
    console.log(`Server is live: http://localhost:${port}`)
})