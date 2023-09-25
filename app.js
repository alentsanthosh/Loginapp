const express = require("express")
const cors = require("cors")
const collections = require("./mongoose")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
 
app.get("/",cors(),(req,res)=>
{})

app.post("/", async(req,res)=>
{
    const {email,password}= req.body
    try{
        const check = await collections.findOne({email:email})
    if(check)
    {
        res.json("exist")
    }
    else
        {
            res.json("notexist")
        }
    }
catch(e) {
    console.log("error while processing email")
}
})

app.post("/signup",async (req,res)=>
{
    const {email,password}= req.body
    const data = {
        email :email,
        password : password
    }
    try{
        const check = await collections.findOne({email:email})
    if(check)
    {
        res.json("exist")
    }
    else
        {
            res.json("notexist")
            await collections.insertMany([data])
        }
    }
catch(e) {
   // res.json("fail")
   console.log(e)
}
})


app.listen(8000,()=>
{
    console.log("listening on port 8000")
})

