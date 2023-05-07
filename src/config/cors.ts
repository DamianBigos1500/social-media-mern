import cors from 'cors';

const corsOptions = {
  origin: [
    'http://127.0.0.1:5173',
    'http://127.0.0.1:8000',

    'http://localhost:5173',
    'http://localhost:8000',
    
    'https://social-media-app-mern-seven.vercel.app',
  ],
  methods: 'GET,POST,PUT,DELETE',
  credentials: true,
};

export default corsOptions;
