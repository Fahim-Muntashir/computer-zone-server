import { Request, Response } from "express";
import { UserServices } from "./user.services";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const createUser = catchAsync(async (req, res) => {
     const user = req.body;
        const result = await UserServices.createUser(user);
       
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'User Created Successfully!!!',
            data: result,
          });
}  
)

const getAllUser =catchAsync( async (req, res) => {
    try {


        const result = await UserServices.getAllUserFromDB();
        res.status(200).json({
            success: true,
            message: "Users are Here",
            data:result,
        })

    } catch (err){
     console.log(err);   
    }
}
)
const getSingleUser = async (req: Request, res: Response) => {
    try {

        const { userId } = req.params;
        
        const result = await UserServices.getSingleUserFromDB(userId);
    
        res.status(200).json({
            success: true,
            message: "User Sigle Man Here",
            data:result,
        })

    } catch (err){
     console.log(err);   
    }
}





const deleteUser = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const userIdNum = parseInt(userId);



        // if the user exists 
        const existingUser = await UserServices.getSingleUserFromDB(userId);

        if (!existingUser) {
            res.status(404).json({
                success: false,
                message: "This User not Found",
                data:null,
            })
        }


        const result = await UserServices.deleteUserFromDB(userIdNum);

        res.status(200).json({
            success: true,
            message: "user is deleted successfully",
            data:result,
        })

    } catch (err) {
        console.log(err);
    }
}

export const UserControllers = {
    createUser,
    getAllUser,
    getSingleUser,
    deleteUser,
} 