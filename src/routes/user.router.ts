import express from 'express';
import {
  addFriend,
  findUser,
  getUser,
  getUserFriends,
} from '../controllers/user/user.controller';

const router = express.Router();

router.get('/user/:id', getUser);

router.get('/user/:id/friends', getUserFriends);

router.patch('/user/add-friend/:friendId', addFriend);

router.post('/find-user', findUser);
// router.post('/logout', logout);

export default router;
