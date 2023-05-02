import { NextFunction, Request, Response } from 'express';
import prisma from '../../../libs/server';
import User from '../../../models/User';
import HttpError from '../../../models/HttpError';

const sendVerification = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    // const user = new User(prisma.user);
    const { user }: any = req.session?.passport;
    const prismaUser = await prisma.user.findUnique({
      where: { email: user.email },
    });

    const newuser = new User(prisma.user);
    await newuser.sendVerificationEmail();
  } catch (err: any) {
    return next(new HttpError('Could not send email to user', 500));
  }

  return res.status(200).json({
    success: true,
    message: 'Email has been send succesfully to user',
  });
};

export default sendVerification;
