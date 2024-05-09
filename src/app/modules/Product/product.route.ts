
import express, { Router } from 'express';
import { ProductController } from './product.controller';
import auth from '../../middleware.ts/auth';
import { USER_ROLE } from '../User/user.constant';

const router: Router = express.Router();

router.post('/',auth(USER_ROLE.user), ProductController.createProduct);


export const productRoutes= router;
