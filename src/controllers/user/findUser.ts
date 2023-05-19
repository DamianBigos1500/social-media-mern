import { Request, Response } from 'express';
import prisma from '../../libs/server';

async function findUser(req: Request, res: Response) {
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

export default findUser;
