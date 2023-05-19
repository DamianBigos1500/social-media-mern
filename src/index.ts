import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import session from 'express-session';
import passport from 'passport';
import './config/passport';
import cors from 'cors';
import authRoutes from './routes/auth.router';
import cookieParser from 'cookie-parser';
import corsOptions from './config/cors';
import apiRoutes from './routes/api.router';
import path from 'path';
import nextErrors from './middleware/nextErrors';
import { IS_PRODUCTION } from './data/IS_PRODUCTION';
import FileStore from 'session-file-store';

const store = FileStore(session);

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));
app.use(cookieParser());

app.use(
  session({
    store: new store({ path: path.join(__dirname, 'session') }),
    secret: process.env.APP_SECRET || 'this is the default passphrase',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 60 * 60 * 24 * 365 },
  })
);

app.use(passport.initialize());
app.use(passport.session());

if (IS_PRODUCTION) {
  app.use(express.static(path.join(__dirname, '..', 'public', 'dist')));
}

app.use('/files', express.static(__dirname + '/public'));
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

app.use(nextErrors);

if (IS_PRODUCTION) {
  app.use((req: Request, res: Response) => {
    const filePath = path.resolve(
      __dirname,
      '..',
      'public',
      'dist',
      'index.html'
    );

    res.sendFile(filePath);
  });
} else {
  app.get('/', (req: Request, res: Response) => {
    res.send(
      `${req?.session?.passport?.user.id}` +
        `Express + TypeScript Server http://localhost:${process.env.PORT}`
    );
  });
}

app.listen(process.env.PORT, () => {
  console.log(`[server]: Server is running at http://localhost:8000`);
});
