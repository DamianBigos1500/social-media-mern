function logout() {
  (req: any, res: any, next: any) => {
    req.logout(function (err: any) {
      if (err) {
        return next(err);
      }
      res.redirect('/');
    });
    res.redirect(process.env.CLIENT_URL!);
  };
}

export default logout;
