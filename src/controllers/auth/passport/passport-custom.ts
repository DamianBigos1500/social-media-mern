import passport from 'passport';

const passportCustom = {
  customLogin: passport.authenticate('custom', {
    failureRedirect: '/auth/login/failed',
  }),
};

export default passportCustom;
