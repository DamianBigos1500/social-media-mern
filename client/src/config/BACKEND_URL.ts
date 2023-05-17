import { IS_PRODUCTION } from './IS_PRDUCTION';

const BACKEND_URL = IS_PRODUCTION
  ? 'https://social-media-app-mern-seven.vercel.app'
  : 'http://127.0.0.1:8000';

export default BACKEND_URL;
