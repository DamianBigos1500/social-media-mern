function logout(req: any, res: any, next: any) {

  req.logout(function (err: any) {
    if (err) {
      return res
        .status(500)
        .json({ message: 'Cannot log out user', success: false });
    }

    return res
      .status(200)
      .json({ message: 'Log out succesfully', success: true });
  });
}

export default logout;

