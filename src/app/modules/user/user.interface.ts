export type TUser ={
    email: string;
    password: string;
    needsPasswordChange: boolean;
    role: 'admin' | 'user' | 'seller';
    status: 'in-progress' | 'blocked';
    isDeleted: boolean;
}