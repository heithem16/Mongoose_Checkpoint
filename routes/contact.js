const express=require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
const Contact = require('../model/Contact')
const route=express.Router()

route.post('/adduser',async(req,res)=>{
    const user=req.body
    try {
      const contact=await new Contact(user)  
      await contact.save()
      res.status(200).send({'added with success': contact})
    } catch (error) {
        console.log(error)
    }
})

route.get('/getuser', async(req,res)=>{
    try {
       const contact=await contact.find() 
        res.status(200).send({'users': contact})
    } catch (error) {
     // res.status(400).send('error to get user from database')
     console.log(error)
    }
})
route.put('/edituser/:id', async(req,res)=>{
    const {id}=req.params
    const user=req.body()
    try {
       const contact= await Contact.findByIdAndUpdate(id, user) 
       res.status(200).send({"user updated": contact})
    } catch (error) {
        console.log(error)
    }
})
route.delete('/deleteuser/id', async(req,res)=>{
    const {id}=req.params
    try {
      const contact=await Contact.findByIdAndDelete(id)  
      res.status(200).send("user deleted")
    } catch (error) {
        console.log(error)
    }
})
module.exports=route