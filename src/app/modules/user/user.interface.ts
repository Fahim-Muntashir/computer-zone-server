import { Model } from "mongoose";

export type TUser = {
    _id: string;
    name: string;
    email: string;
    password: string;
    role: string;
}


export interface UserModelType extends Model<TUser> {
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}