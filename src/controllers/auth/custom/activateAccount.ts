import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import prisma from '../../../libs/server';

interface UserJWT {
  id: string;
}

async function activateAccount(req: Request, res: Response) {
  const { token } = req.body;

  try {
    const decoded = <UserJWT>jwt.verify(token, process.env.TOKEN_SECRET!);

    const user = await prisma.user.findUnique({
      where: {
        id: decoded.id,
      },
    });
    if (!user)
      return res
        .status(500)
        .json({ message: 'User does not exist.', success: false });

    if (user.verifiedAt) {
      return res
        .status(400)
        .json({ message: 'This email is already activated', success: false });
    } else {
      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          verifiedAt: 'Viola the Magnificent',
        },
      });

      return res
        .status(200)
        .json({ message: 'Account has beeen activated successfully.' });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Cannot activate email', success: false });
  }
}

export default activateAccount;
