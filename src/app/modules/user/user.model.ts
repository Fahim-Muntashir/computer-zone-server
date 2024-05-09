import { Schema, model, } from "mongoose";
import { TUser, UserModelType } from "./user.interface";
import bcrypt from 'bcrypt'
import config from "../../config";


const userSchema = new Schema<TUser,UserModelType>({

  name: {
    type: String,
    required:true,
  },
  email: {
      type: String,
      required: true,
      unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required:true,
  }
});

userSchema.pre('save', async function (next) {

  const user = this;
  // hashing password 
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();

});

userSchema.statics.isPasswordMatched = async function (
  plainTextPassword,
  hashedPassword,
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};

userSchema.statics.isUserExistsByCustomEmail = async function (email: string) {
  return await UserModel.findOne({ email }).select('+password');
};


  
export const UserModel = model<TUser,UserModelType>('User', userSchema);