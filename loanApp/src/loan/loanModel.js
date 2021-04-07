import { Schema, model } from 'mongoose'

const loanSchema = new Schema(
  {
    user_id: { type: String,
         required: true,
         ref: "Users"
         },

    amount: { type: Number,
         required: true,
          
        },

        period: { type: Number,
            required: true,
             default: 1
           },
           repaidAmount: { type: Number,
             default: 0
           },

           monthlyRepaymentAmount: { type: Number,
            required: true,
           },
           interest: { type: Number,
            required: true,
           },

           request_date: { type: Date,
            required: true,
             default: Date.now,
           },

           status: { type: String,
              enum: ["requested", "approved", "cancelled", "paid"],
              default: "requested"
           },

  },
  
);

const loanModel = mongoose.model("Loan", loanSchema)

export default loanModel;
