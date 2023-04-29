const loginSuccess = function (req: any, res: any) {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: 'successfull',
      user: req.user,
    });
  } else {
    res.status(403).json({
      success: false,
      message: 'failiture',
      user: req.user,
    });
  }
};
export default loginSuccess;
