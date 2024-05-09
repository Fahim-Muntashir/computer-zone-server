import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import AppError from '../errors/AppError';

import catchAsync from '../utils/catchAsync';
import { UserModel } from '../modules/User/user.model';
import { TUserRole } from '../modules/User/user.interface';


declare global {
    namespace Express {
      interface Request {
        user?: JwtPayload & { role: string };
      }
    }
  }
  
const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    // if the tokenmissing
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
    }

    // checking if the  token 
    const decoded = jwt.verify(
      token,
      config.jwt_access_secret as string,
    ) as JwtPayload;

    const { role, userEmail, iat } = decoded;

    // check if the user is exist
    const user = await UserModel.isUserExistsByCustomEmail(userEmail);

    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
    }
 
    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new AppError(
        httpStatus.UNAUTHORIZED,
        'You are not authorized  hi!',
      );
    }

      req.user = decoded as JwtPayload & { role: string };
      
    next();
  });
};

export default auth;