import passport from 'passport';
import passportGoogleOauth20 from 'passport-google-oauth20';
import passportGithub2 from 'passport-github2';
import passportCustom from 'passport-custom';
import { db } from '../libs/server/db';

const GoogleStrategy = passportGoogleOauth20.Strategy;
const GithubStrategy = passportGithub2.Strategy;
const CustomStrategy = passportCustom.Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: '/auth/google/callback',
    },
    async function (
      accessToken: any,
      refreshToken: any,
      profile: any,
      done: any
    ) {
      const currentUser = await db.user.upsert({
        where: {
          email: profile._json.email,
        },
        update: {
          provider: 'google',
        },
        create: {
          first_name: profile._json.given_name,
          last_name: profile._json.family_name,
          email: profile._json.email,
          picture: profile._json.picture,
          provider: 'google',
        },
      });

      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      callbackURL: '/auth/github/callback',
      scope: ['user:email'],
    },
    async function (
      accessToken: any,
      refreshToken: any,
      profile: any,
      done: any
    ) {
      console.log(profile);
      // const currentUser = await prisma.user.upsert({
      //   where: {
      //     email: profile.emails[0].value,
      //   },
      //   update: {
      //     provider: 'github',
      //   },
      //   create: {
      //     first_name: profile._json.name,
      //     last_name: '',
      //     email: profile.emails[0].value,
      //     picture: profile._json.avatar_url,
      //     provider: 'github',
      //   },
      // });

      done(null, profile);
    }
  )
);

passport.use(
  new CustomStrategy(async function (req: any, done: any) {
    let currentUser;
    try {
      currentUser = await db.user.findUnique({
        where: {
          email: req.body.email,
        },
      });
    } catch (error) {
      console.log(error);
    }

    done(null, null);
  })
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user: any, done) => {
  done(null, user);
});

export default passport;
