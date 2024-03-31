import { Schema,model } from "mongoose";
import { TUser } from "./user.interface";


const userSchema = new Schema<TUser>({
    email: {
        type: String,
        required: true,
        
    },
    password: {
        type: String,
        required:true,
    },
    needsPasswordChange: {
        type: Boolean,
        required:true,
    },
    role: {
        type: String,
        enum: ['admin', 'user','seller'],
    },
    status: {
        type: String,
        enum: ['in-progress', 'blocked'],
    },
    isDeleted: {
        type: Boolean,
        requred:false,
    }

},
    {
    timestamps:true,
    })

export const User = model<TUser>('User', userSchema);