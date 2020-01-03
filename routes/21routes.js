const express=require('express')
const service=require('./../service/getallservice')
const router=express.Router()
router.get('/getall',async(req,res)=>{
    res.send(await service.getall())
})
router.get('/getbyplace/:dat',async(req,res)=>{
    let data=(req.params.dat)
    res.send(await service.getallbyplace(data))
})
router.get('/getbydlapplied/:dat',async(req,res)=>{
    let data=(req.params.dat)
    res.send(await service.getallbydl_applied(data))
})
module.exports=router