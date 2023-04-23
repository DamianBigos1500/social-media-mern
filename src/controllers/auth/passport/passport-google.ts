import express from 'express';
import passport from 'passport';
import getRedirectBackUrl from '../../../middleware/getRedirectBackUrl';

const router = express.Router();

router.get(
  '/google',
  getRedirectBackUrl,
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/auth/login/failed',
  }),
  function (req: any, res: any) {
    res.redirect(req.cookies.redirect_url);
  }
);

export default router;
