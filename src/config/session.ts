const sessionOptions = {
  secret: process.env.APP_SECRET || 'this is the default passphrase',
  resave: false,
  saveUninitialized: false,
  cookie: { sameSite: false },
};

export default sessionOptions;
