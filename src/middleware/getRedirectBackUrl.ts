const getRedirectBackUrl = function (req: any, res: any, next: any) {
  const redirectUrl = req.query.redirectUrl || '/';
  res.cookie('redirect_url', redirectUrl, { maxAge: 900000, httpOnly: true });

  next();
};

export default getRedirectBackUrl;
