import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        type: mongoose.ObjectId,
        ref: "Products",
      },
    ],
    payment: {},
    buyer: {
      type: mongoose.ObjectId,
      ref: "users",
    },
    status: {
      type: String,
      default: "Not Process",
      enum: ["Not Process", "Processing", "Shipped", "deliverd", "cancel"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);



// import { Mongoose } from "mongoose"


// const orderSchema = new Mongoose.Schema({
//     products : [{
//         type:Mongoose.ObjectId,
//         ref: "Products",
//     },],
//     payment:{},
//     buyer:{
//         type:Mongoose.ObjectId,
//         ref:'users',
//     },
//     status:{
//         type:String,
//         default:'Not Process',
//         enum:["Not Process", "Processing", "Shipped", "deliverd", "cancel"]
//     },


// }, {timestamps: true})

// export default Mongoose.model("Order", orderSchema)