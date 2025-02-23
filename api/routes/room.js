const router =  require("express").Router()
const Room = require("../models/Room")
const User = require("../models/User")


//CHECK WHETHER ROOM EXISTS
router.get("/:senderId/:recieverId", async(req,res)=>{
    try{
        const chat = await Room.findOne({
            members: {$all: [req.params.senderId,req.params.recieverId]} })
            console.log({chat})
            if(chat){
                
                return res.status(200).json(chat)
            }else{
                const newChat = new Room({
                    members:[req.params.senderId,req.params.recieverId]
                })
                await newChat.save()
                console.log({newChat})
                return res.status(200).json(newChat)


            }
    }catch(e){
        res.status(500).json(e)
    }
} )

//get all user chats
router.get("/:senderId", async(req,res)=>{
    try{
        const chats = await Room.find({
            members: {$in: [req.params.senderId]}        })
const userFields = ['name', 'email', "_id"]
     const allChats =    await Promise.all(chats.map(async(chat)=>
        {
            const user1 = await User.findById(chat.members[0]).select(userFields);
            const user2 = await User.findById(chat.members[1]).select(userFields);
            return {...chat._doc, users:[user1 ,user2]}



        }
        ))
        console.log(allChats)
        res.status(200).json(allChats)

    }catch(e){
        res.status(500).json(e)
    }
} )
module.exports =  router