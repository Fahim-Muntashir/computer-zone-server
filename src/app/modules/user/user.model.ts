import { Schema, model, } from "mongoose";
import { TUser } from "./user.interface";



const userSchema = new Schema<TUser>({
    email: {
      type: String,
      required: true,
  },
  name: {
    type: String,
    required:true,
  }
  });
  
export const UserModel = model<TUser>('User', userSchema);