import mongoose, { Schema, model } from "mongoose";


const userSchema = new Schema({
  productName: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true
  },image: {
    data: Buffer, 
    contentType: String 
  }
}, { timestamps: true });


const User = mongoose.model('User', userSchema);

export default User;
