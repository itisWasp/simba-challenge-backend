import express from 'express';
const router = express.Router();
import UsersController from '../controllers/AuthController.js';
import privateRoute from '../middlewares/verifyToken.js';

router.post('/register', UsersController.saveUser);
router.get('/users',  privateRoute.authUser , UsersController.getUsers);
router.post('/login', UsersController.userLogin);


export default router;