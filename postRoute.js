const postRouter = require('express').Router()

postRouter.post('/',(req,res)=>{
    res.send('post request')
})

postRouter.put('/',(req,res)=>{
    res.send('update request')
})

postRouter.delete('/',(req,res)=>{
    res.send('delete request')
})

module.exports= postRouter