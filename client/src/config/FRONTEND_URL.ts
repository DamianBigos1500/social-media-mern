import { IS_PRODUCTION } from './IS_PRODUCTION';

const FRONTEND_URL = IS_PRODUCTION
  ? 'https://social-media-app-mern-seven.vercel.app'
  : 'http://127.0.0.1:5173';

export default FRONTEND_URL;
