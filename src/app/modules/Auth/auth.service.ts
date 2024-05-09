import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { UserModel } from "../User/user.model";
import { createToken } from "./auth.utils";
import config from "../../config";

const loginUser = async (data: any) =>{
    // console.log(data);
    const user = await UserModel.findOne({ email: data.email });

    if (!user) {
        throw new Error('This user is not found!');
    }

    if (!(await UserModel.isPasswordMatched(data?.password, user?.password)))
        throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched');
    

    
  //create token 

  const jwtPayload = {
    userEmail:user.email,
    role: user.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string,
  );

  return {
    accessToken,
    refreshToken,
  };

}

export const AuthService = {
    loginUser
}