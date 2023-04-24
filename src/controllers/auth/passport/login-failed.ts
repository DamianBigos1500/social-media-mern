function loginFailed(_req: any, res: any) {
  res.status(401).json({
    success: false,
    message: 'failure',
  });
}

export default loginFailed;
