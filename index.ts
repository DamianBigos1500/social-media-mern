import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieSession from 'cookie-session';
import session from 'express-session';
import passport from 'passport';
import './passport';
import cors from 'cors';
import authRoute from './src/routes/authRoute';
import cookieParser from 'cookie-parser';

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: 'http://127.0.0.1:5173',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  })
);
app.use(cookieParser());

// app.use(
//   cookieSession({
//     name: 'session',
//     keys: ['lama'],
//     maxAge: 24 * 60 * 60 * 100,
//     sameSite: 'none',
//   })
// );

// app.use(function (request: any, response, next) {
//   if (request.session && !request.session.regenerate) {
//     request.session.regenerate = (cb: any) => {
//       cb();
//     };
//   }
//   if (request.session && !request.session.save) {
//     request.session.save = (cb: any) => {
//       cb();
//     };
//   }
//   next();
// });

app.use(
  session({
    secret: process.env.APP_SECRET || 'this is the default passphrase',
    resave: false,
    saveUninitialized: false,
    cookie: { sameSite: 'none' },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  console.log(req.cookies);
  console.log(req.session);
  console.log(req.user);
  next();
});

app.use('/auth', authRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(process.env.PORT, () => {
  console.log(
    `⚡️[server]: Server is running at http://127.0.0.1:${process.env.PORT}`
  );
});
