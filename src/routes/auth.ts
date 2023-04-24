import express from 'express';
import passportGoogle from '../controllers/auth/passport/passport-google';
import passportGithub from '../controllers/auth/passport/passport-github';
import passportCustom from '../controllers/auth/passport/passport-custom';
import getRedirectBackUrl from '../middleware/getRedirectBackUrl';
import redirectBackUrl from '../middleware/redirectBackUrl';
import loginSuccess from '../controllers/auth/passport/login-success';
import loginFailed from '../controllers/auth/passport/login-failed';
import logout from '../controllers/auth/passport/logout';

const router = express.Router();

router.get('/login/success', loginSuccess);
router.get('/login/failed', loginFailed);
router.get('/logout', logout);

// google
router.get('/google', getRedirectBackUrl, passportGoogle.googleLogin);
router.get('/google/callback', passportGoogle.googleCallback, redirectBackUrl);

// github
router.get('/github', getRedirectBackUrl, passportGithub.githubLogin);
router.get('/github/callback', passportGithub.githubCallback, redirectBackUrl);

// custom
router.post(
  '/login',
  getRedirectBackUrl,
  passportCustom.customLogin,
  redirectBackUrl
);

export default router;
