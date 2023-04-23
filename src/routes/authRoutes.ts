import express from 'express';
import passportGoogle from '../controllers/auth/passport/passport-google';
import passportGithub from '../controllers/auth/passport/passport-github';

const router = express.Router();

router.get('/login/success', (req: any, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: 'successfull',
      user: req.user,
    });
  }
});

router.get('/login/failed', (req, res) => {
  res.status(401).json({
    success: false,
    message: 'failure',
  });
});

router.get('/logout', (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
  res.redirect(process.env.CLIENT_URL!);
});

router.use(passportGoogle);
router.use(passportGithub);

// router.get('/github', passport.authenticate('github', { scope: ['profile'] }));

// router.get(
//   '/github/callback',
//   passport.authenticate('github', {
//     successRedirect: CLIENT_URL,
//     failureRedirect: '/login/failed',
//   })
// );

// router.get(
//   '/facebook',
//   passport.authenticate('facebook', { scope: ['profile'] })
// );

// router.get(
//   '/facebook/callback',
//   passport.authenticate('facebook', {
//     successRedirect: CLIENT_URL,
//     failureRedirect: '/login/failed',
//   })
// );

export default router;
