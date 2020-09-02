const express = require("express")
const fs = require("fs-extra")
const fn = "microservices.json"
const cors = require("cors")
const server = express()

server.use(cors())
server.use(express.json())

server.post("/addmicroservice", async (req, res)=> {
    const nodes = JSON.parse(await fs.readFile(fn))
    if (!nodes.find(x => x === req.body.url)){
        nodes.push(req.body.url)
        console.log("MICROSERVICE ADDED => " + req.body.url)
        await fs.writeFile(fn, JSON.stringify(nodes))
    }
    res.send("OK")
} )

server.listen(4500, ()=>console.log("Server is Running on 4500"))