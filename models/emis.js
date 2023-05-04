const mongoose = require("mongoose");

const Student_details = new mongoose.Schema(
    {
        Name :{
            type: String,
            required: true,
        },
        EMIS_NO : {
            type: Number,
            required: true,
            unique: true,
        },
        Standard :{
            type: String,
            required: true,
        },
        Marks : {
            type: Object,
            required: true,
        }

    }
);

module.exports = mongoose.model("Student_details", Student_details);