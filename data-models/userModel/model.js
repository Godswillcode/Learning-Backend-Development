const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Todo = new Schema(
  {
    name: { type: String,
         required: true
         },

    email: { type: String,
         required: true,
          lowercase: true 
        },

    zipCode: {
      type: Number,
      min: [10000, "Zipcode to short"],
      max: [99999, "Zipcode to long"],
    },

    phoneNumber: { type: String,
     required: true 
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("todos", Todo);
