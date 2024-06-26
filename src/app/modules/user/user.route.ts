import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post('/create-user',UserControllers.createUser)
router.get('/',UserControllers.getAllUser)
router.get('/:userId',UserControllers.getSingleUser)
router.delete('/:userId',UserControllers.deleteUser)
export const UserRoutes = router;