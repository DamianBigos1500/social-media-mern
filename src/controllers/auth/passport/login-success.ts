const loginSuccess = function (req: any, res: any) {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: 'successfull',
      user: req.user,
    });
  } else {
    res.status(404).json({
      success: false,
      message: 'successfull',
      user: req.user,
    });
  }
};
export default loginSuccess;