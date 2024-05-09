import { Model } from "mongoose";
import { USER_ROLE } from "./user.constant";

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
  isUserExistsByCustomEmail(id: string): Promise<TUser>;

}

export type TUserRole = keyof typeof USER_ROLE;