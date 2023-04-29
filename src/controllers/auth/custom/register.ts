import { sendEmail } from './../../../libs/mailer';
import { NextFunction, Request, Response } from 'express';
import prisma from '../../../libs/server';
import Users from '../../../models/User';
import HttpError from '../../../models/HttpError';

const registerController = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { first_name, last_name, email, password } = req.body;

  let newUser = null;

  try {
    // const users = new Users(prisma.user);
    // newUser = await users.signup({
    //   first_name,
    //   last_name,
    //   email,
    //   provider: 'credentials',
    //   password,
    // });
    sendEmail('asdasd', 'asdasd', 'asdads');

    console.log(newUser);
  } catch (err: any) {
    return next(new HttpError('Could not register new user', 500));
  }

  return res.status(200).json({ message: req.body, user: newUser });
};

export default registerController;
