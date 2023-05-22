import Icons from '../../../../components/UI/Icons';
import { FC } from 'react';
import styles from '../../../../page/Login/login.module.scss';
import FRONTEND_URL from '../../../../config/FRONTEND_URL';
import { redirect, useLocation } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import BACKEND_URL from '../../../../config/BACKEND_URL';
import axios from 'axios';
interface SocialLoginProps {}

const SocialLogin: FC<SocialLoginProps> = ({}) => {
  const { setUser } = useAuth();
  const location = useLocation();

  const onLoginAuth = (provider: string | null = null) => {
    if (provider) {
      const previousUrl = `${FRONTEND_URL}${location?.state?.from}`;
      window.open(
        `${BACKEND_URL}/auth/${provider}?redirectUrl=${previousUrl}`,
        '_self'
      );
    }
  };

  const fastLogin = async () => {
    const res = await axios.post(`${BACKEND_URL}/auth/login`, {
      email: 'w@w.com',
      password: '12345678',
    });

    setUser(res.data.user);
    redirect('/');
  };

  return (
    <div className={styles.login__strategies}>
      <button
        className={`${styles.login__btn} ${styles.btn_google}`}
        onClick={() => onLoginAuth('google')}
      >
        <span className={styles.btn__icon}>
          <Icons.GoogleIcon fill="white" width="16" height="16" />
        </span>
        <span>Continue with Google</span>
      </button>

      <button
        className={`${styles.login__btn} ${styles.btn_github}`}
        onClick={() => onLoginAuth('github')}
      >
        <span className={styles.btn__icon}>
          <Icons.GithubIcon fill="white" width="16" height="16" />
        </span>
        <span>Continue with Github</span>
      </button>

      <button
        className={`${styles.login__btn} ${styles.btn_default}`}
        onClick={fastLogin}
      >
        <span>Demo login</span>
      </button>
    </div>
  );
};

export default SocialLogin;
