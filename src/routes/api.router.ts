import express from 'express';
import userRouter from './user.router';

const router = express.Router();

router.use(userRouter);
// router.post('/logout', logout);

export default router;
