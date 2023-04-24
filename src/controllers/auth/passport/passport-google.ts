import passport from 'passport';

const passportGoogle = {
  googleLogin: passport.authenticate('google', { scope: ['email', 'profile'] }),
  googleCallback: passport.authenticate('google', {
    failureRedirect: '/auth/login/failed',
  }),
};

export default passportGoogle;
