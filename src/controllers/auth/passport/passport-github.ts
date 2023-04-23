import express from 'express';
import passport from 'passport';
import getRedirectBackUrl from '../../../middleware/getRedirectBackUrl';

const router = express.Router();

router.get(
  '/github',
  getRedirectBackUrl,
  passport.authenticate('github', { scope: [ 'user:email' ] })
);

router.get(
  '/github/callback',
  passport.authenticate('github', {
    failureRedirect: '/auth/login/failed',
  }),
  function (req: any, res: any) {
    res.redirect(req.cookies.redirect_url);
  }
);

export default router;
