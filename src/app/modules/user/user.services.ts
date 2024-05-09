import { TUser } from "./user.interface";
import { UserModel } from "./user.model";

const createUser = async(user: TUser) => {
   const result= await UserModel.create(user);
    return result;
}

const getAllUserFromDB = async () => {
    const result = await UserModel.find({})
    return result;
}

const getSingleUserFromDB = async (id: string) => {
    const result = await UserModel.findOne({ _id: id });
    console.log(result);
    return result;
}


const deleteUserFromDB = async (id: number) => {
    const result = await UserModel.findOneAndDelete({ userId: id })
    return result;
}

export const UserServices = {
    createUser,
    getAllUserFromDB,
    getSingleUserFromDB,
    deleteUserFromDB,
}