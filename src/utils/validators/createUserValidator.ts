import { check } from 'express-validator';
import prisma from '../../libs/server';

const createUserValidator = [
  check('first_name').exists(),
  check('last_name').exists(),
  check('email')
    .isEmail()
    .custom(async (value) => {
      const existingUser = await prisma.user.findUnique({
        where: { email: value },
      });

      if (existingUser) {
        throw new Error('A user already exists with this e-mail address');
      }
    }),
  check('password').isLength({ min: 8 }),
];

export default createUserValidator;
