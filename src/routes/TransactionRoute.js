import express from 'express';
const router = express.Router();
import TransactionController from '../controllers/TransactionController';
import privateRoute from '../middlewares/verifyToken.js';

router.post('/transaction', privateRoute.authUser ,TransactionController.send);

export default router;