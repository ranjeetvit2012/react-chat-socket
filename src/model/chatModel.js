const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    sender_id:{type:mongoose.Schema.Types.ObjectId},
    receiver_id:{type:mongoose.Schema.Types.ObjectId},
    message:{type:String}
},{timestamps:true})


const chat = mongoose.model("chat",chatSchema)
module.exports = chat;