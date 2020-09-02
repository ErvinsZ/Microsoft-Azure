const express = require("express")
const fetch = require("node-fetch")
require("dotenv").config()
const fileRouter = require("./routes/index")

const app = express()

app.use("/files", fileRouter)

app.listen(process.argv[2], async () =>{
    console.log(`Running on ${process.argv[2]}`)

    const registration = await fetch("http://localhost:4500/addmicroservice",{
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            url:"http://localhost:" + process.argv[2]
        })
    })

    if (registration.ok){
        console.log("We're in")
        
    } else{
        console.log("Something went wrong")
    }
})

