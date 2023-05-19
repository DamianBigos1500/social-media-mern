import express from 'express';
import findUser from '../controllers/user/findUser';

const router = express.Router();

router.post('/find-user', findUser);
// router.post('/logout', logout);

export default router;
