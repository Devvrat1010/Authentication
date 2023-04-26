import express from 'express'
import cors from 'cors'

import {createClient} from '@supabase/supabase-js'
// const { createClient } from '@supabase/supabase-js'
import dotenv from "dotenv"

// const api =(process.env["API"]);
// const url =(process.env["URl"]);
const app=express()
app.use(cors())

dotenv.config()
const url=process.env.url
const api=process.env.api

const uname="hello world"
const name="Devvrat"
const age="21"
const password="12345"

const supabase =createClient(url,api);

// const{error}=await supabase
//     .from("user_data")
//     .insert({"username":uname,"name":name,"age":age,"password":password})
// console.log(error)


const data=await supabase.from("user_data").select("*").eq('name','janmejay')

async function write_data(uname,email,pass){
    const {error}=await supabase
    .from("data")
    .insert({"username":uname,"email":email,"pass":pass})
    console.log(error)
}


app.get(('/'),(req,res)=>{
    const uname=req.query.uname
    const email=req.query.email
    const pass=req.query.pass

    
    const dict={"uname":uname,"pass":pass,"email":email}
    res.send({output:write_data(uname,email,pass)})
    // res.send("Hellow World")
})

app.listen(5173,()=>{
    console.log("someone visited this site")
})
console.log(data.data)