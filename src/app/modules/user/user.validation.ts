import { z } from "zod";

const UserValidationSchema = z.object({
    email: z.string(),
    password: z.string().max(20,{message: "Password can not be 20 characters"}),
    needsPasswordChange: z.boolean().optional().default(true),
    role: z.enum(['admin', 'user', 'seller']),
    status: z.enum(['in-progress', 'blocked']).default('in-progress'),
    isDeleted:z.boolean().optional().default(false),
})

export const UserValidation = {
    UserValidationSchema,
}