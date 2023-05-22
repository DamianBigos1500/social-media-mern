import { Request, Response } from 'express';
import prisma from '../../libs/server';

export async function getUser(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    return res.json({ user: user, message: 'success' });
  } catch (error) {
    return res.status(404).json({ user: null, message: 'failed' });
  }
}

export async function getUserFriends(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: { id: id },
    });

    // const friends = await Promise.all(user?.friendIDs.map((e: any) => e));
    return res.status(200).json({ user: user, message: 'success' });
  } catch (error) {
    return res.status(404).json({ user: null, message: 'failed' });
  }
}

export async function addFriend(req: Request, res: Response) {
  try {
    const { id }: any = req.user;
    const { friendId } = req.params;

    if (id !== friendId) {
      const user = await prisma.user.findUnique({ where: { id } });

      if (!user?.friendIDs.includes(friendId)) {
        const addedUser = await prisma.user.update({
          where: { id },
          data: {
            friends: { connect: { id: friendId } },
          },
        });

        return res.status(200).json({ message: addedUser });
      } else {
        // user?.friends.push(friendId);
        // friendId.friends.push(id);
      }
      return res.status(200).json({ message: 'success' });
    } else {
      return res
        .status(404)
        .json({ message: 'Cannot send friend request to yourself' });
    }
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
}

export async function findUser(req: Request, res: Response) {
  const { email } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user)
      return res.status(404).json({
        message: 'User does not exist.',
        success: false,
      });

    return res.status(200).json({
      message: 'User has been found.',
      success: false,
      user: user,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Something went wrong!', success: false });
  }
}
