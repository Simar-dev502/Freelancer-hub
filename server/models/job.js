const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
{
    title:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },

    budget:{
        type:Number,
        required:true
    },

    category:{
        type:String,
        required:true
    },

    skills:[
        {
            type:String
        }
    ],

    client:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    status:{
        type:String,
        enum:["open","closed"],
        default:"open"
    }

},
{
    timestamps:true
}
);

module.exports = mongoose.model(
    "Job",
    jobSchema
);