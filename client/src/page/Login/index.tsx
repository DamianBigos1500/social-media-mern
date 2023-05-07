import { FC, useState } from 'react';
import { Form, redirect, useLocation } from 'react-router-dom';
import axios from '../../lib/axios';
import BACKEND_URL from '../../config/BACKEND_URL';
import Logo from '../../components/Logo';
import styles from './login.module.scss';
import useAuth from '../../hooks/useAuth';
import FRONTEND_URL from '../../config/FRONTEND_URL';
import Icons from '../../components/Icons';

interface LoginProps {}

const Login: FC<LoginProps> = ({}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [mode, setMode] = useState<string>('login');
  const location = useLocation();

  const { setUser } = useAuth();

  const fastLogin = () => {
    // setUser({
    //   id: '1',
    //   email: 'daravix1500@gmail.com',
    //   first_name: 'Damian',
    //   last_name: 'Bigos',
    //   picture: '',
    // });

    setEmail('');
    setPassword('');
  };

  const onLoginAuth = (provider: string | null = null) => {
    if (provider) {
      const previousUrl = `${FRONTEND_URL}${location?.state?.from}`;
      window.open(
        `${BACKEND_URL}/auth/${provider}?redirectUrl=${previousUrl}`,
        '_self'
      );
    }
  };

  return (
    <section className={styles.login}>
      <Logo />

      <Form className={styles.login__form} method="post" action="">
        {mode === 'login' ? (
          <>
            <legend>Login</legend>
            <fieldset>
              <label htmlFor="size_1">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="size_2">Password</label>
              <input type="password" name="password" id="password" />
            </fieldset>

            <button type='submit'>Send</button>
          </>
        ) : (
          <>
            <legend>Register</legend>
            <div>
              <label htmlFor="size_1">email</label>
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="size_2">password</label>
              <input type="password" name="password" id="password" />
            </div>

            <button>Send</button>
          </>
        )}

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

          <button className={`${styles.login__btn} ${styles.btn_default}`} onClick={fastLogin}>
            <span>Fast login</span>
          </button>
        </div>
      </Form>
    </section>
  );
};

export default Login;

export async function action({ request, params }: any) {
  const formData = await request.formData();
  console.log(formData.get('email'));

  try {
    axios.post('/auth/login', {
      email: 'daravix1500@gmail.com',
    });
  } catch (error: any) {}

  const redirectUrl = params.redirectUrl || '/';

  return redirect(redirectUrl);
}
