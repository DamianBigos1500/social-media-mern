import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';

const nextErrors = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(error.status || 500).json({
    error: error.message,
  });
};

export default nextErrors;
