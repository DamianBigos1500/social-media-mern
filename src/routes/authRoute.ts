import express from 'express';
import passport from 'passport';

const router = express.Router();

router.get('/login/success', (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: 'successfull',
      user: req.user,
      //   cookies: req.cookies
    });
  }
});

router.get('/login/failed', (req, res) => {
  res.status(401).json({
    success: false,
    message: 'failure',
  });
});

router.get('/logout', (req, res) => {
  // @ts-expect-error
  req.logout();
  res.redirect(process.env.CLIENT_URL!);
});

router.get(
  '/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: 'http://127.0.0.1:5173',
    failureRedirect: '/auth/login/failed',
  })
);

router.get('/login/protected', (req, res) => {
  res.send('hello here');
});

router.get('/check', (req, res) => {
  res.json({message:'hello here'});
});

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
