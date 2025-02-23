const router = require('express').Router();
const Message = require("../models/Message")
const Room = require("../models/Room")


router.get('/:id',async(req,res)=>{
  const messages = await Message.find({roomId:req.params.id})
  res.status(200).json(messages)
})

module.exports = router