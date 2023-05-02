import { NextFunction, Request, Response } from 'express';
import prisma from '../../../libs/server';
import User from '../../../models/User';
import HttpError from '../../../models/HttpError';

const registerController = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { first_name, last_name, email, password } = req.body;

  let newUser = null;

  try {
    const user = new User(prisma.user);
    newUser = await user.signup({
      first_name,
      last_name,
      email,
      provider: 'credentials',
      password,
    });
    await user.sendVerificationEmail();
  } catch (err: any) {
    return next(new HttpError('Could not register new user', 500));
  }

  return res
    .status(200)
    .json({
      success: true,
      message: 'Succesfully created account, please check your email',
      user: newUser,
    });
};

export default registerController;
