import express from 'express';
import passportGoogle from '../controllers/auth/passport/passport-google';
import passportGithub from '../controllers/auth/passport/passport-github';
import passportCustom from '../controllers/auth/passport/passport-custom';
import getRedirectBackUrl from '../middleware/getRedirectBackUrl';
import redirectBackUrl from '../middleware/redirectBackUrl';
import loginSuccess from '../controllers/auth/passport/login-success';
import loginFailed from '../controllers/auth/passport/login-failed';
import logout from '../controllers/auth/passport/logout';
import registerController from '../controllers/auth/custom/register';
import createUserValidator from '../utils/validators/createUserValidator';
import handleValidation from '../utils/validators/handleValidation';
import sendVerification from '../controllers/auth/custom/sendVerification';
import activateAccount from '../controllers/auth/custom/activateAccount';

const router = express.Router();

router.post(
  '/register',
  createUserValidator,
  handleValidation,
  registerController
);

router.get('/login/success', loginSuccess);
router.get('/login/failed', loginFailed);
router.post('/logout', logout);
router.post('/activate', activateAccount);

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

router.post('/send-verification', sendVerification);

export default router;
