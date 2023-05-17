const sessionOptions = {
  secret: process.env.APP_SECRET || 'this is the default passphrase',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, maxAge: 60 * 60 * 24 * 365 },
};

export default sessionOptions;
