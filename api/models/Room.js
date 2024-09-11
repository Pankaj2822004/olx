const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    members:{
        type:[String]
    }
});

module.exports = mongoose.model('Room', RoomSchema);