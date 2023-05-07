// const FRONTEND_URL = 'http://127.0.0.1:5173';
// const FRONTEND_URL = 'http://127.0.0.1:8000';

const FRONTEND_URL =
  process.env.FRONTEND_URL ?? 'https://social-media-app-mern-seven.vercel.app';

export default FRONTEND_URL;
