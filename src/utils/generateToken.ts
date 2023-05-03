import jwt from 'jsonwebtoken';

export const generateToken = (
  payload: { [key: string]: any },
  expired: string
) => {
  return jwt.sign(payload, process.env.TOKEN_SECRET!, {
    expiresIn: expired,
  });
};
