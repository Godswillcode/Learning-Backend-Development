const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = new Schema(
	{
        fullName: { type: String,
            required: true
            },
   
       email: { type: String,
            required: true,
             lowercase: true 
           },

       password: { type: String,
        required: true 
       },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("users", User);