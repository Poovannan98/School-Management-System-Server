const mongoose = require("mongoose");

const MarkSchema = new mongoose.Schema(
    {
        EMIS_NO: {
            type: Number,
            required: true,
            unique: true,
        },
        Marks :{
            type: Array,
        }
    }
)