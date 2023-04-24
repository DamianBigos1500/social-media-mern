 const redirectBackUrl = function (req: any, res: any) {
  res.redirect(req.cookies.redirect_url);
}

export default redirectBackUrl