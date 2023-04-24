import passport from 'passport';

const passportGithub = {
  githubLogin: passport.authenticate('github', { scope: ['user:email'] }),
  githubCallback: passport.authenticate('github', {
    failureRedirect: '/auth/login/failed',
  }),
};

export default passportGithub;
