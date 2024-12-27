const mongoose = require("mongoose");

const schema = mongoose.Schema({

    book:{
        type: String,
        required: true,
    },
    author:{
        type: String,
        required: true,
    },
    price:{
        type: String,
        required: true,
    },
    date:{
        type: String,
        required: true,
    },
});

const firstSchema = mongoose.model("Book",schema);
module.exports = firstSchema;
