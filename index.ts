import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieSession from 'cookie-session';
import session from 'express-session';
import passport from 'passport';
import './src/config/passport';
import cors from 'cors';
import authRoutes from './src/routes/authRoutes';
import cookieParser from 'cookie-parser';
import corsOptions from './src/config/cors';
import sessionOptions from './src/config/session';
import apiRoutes from './src/routes/apiRoutes';
import getRedirectBackUrl from './src/middleware/getRedirectBackUrl';

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(session(sessionOptions));

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send(`Express + TypeScript Server http://127.0.0.1:${process.env.PORT}`);
});

app.listen(process.env.PORT, () => {
  console.log(
    `⚡️[server]: Server is running at http://127.0.0.1:${process.env.PORT}`
  );
});
