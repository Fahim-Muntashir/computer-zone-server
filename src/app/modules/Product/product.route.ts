
import express, { Router } from 'express';
import { ProductController } from './product.controller';
import auth from '../../middleware.ts/auth';
import { USER_ROLE } from '../User/user.constant';

const router: Router = express.Router();

router.post('/',auth(USER_ROLE.user), ProductController.createProduct);

router.get('/',auth(USER_ROLE.user), ProductController.getAllProduct);
router.get('/:id',auth(USER_ROLE.user), ProductController.getSingleProduct);
router.put('/:id',auth(USER_ROLE.user), ProductController.updateProduct);
router.delete('/:id',auth(USER_ROLE.user), ProductController.deleteProduct);

// router.get('/search', auth(USER_ROLE.user), ProductController.searchProducts);

export const productRoutes= router;
