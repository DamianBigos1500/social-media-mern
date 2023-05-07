function loginFailed(_req: any, res: any) {
  res.status(401).json({
    success: false,
    message: 'Failed to log in user',
  });
}

export default loginFailed;
