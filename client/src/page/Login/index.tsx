import { FC } from 'react';

interface LoginProps {}

const Login: FC<LoginProps> = ({}) => {
  const googleAuth = () => {
    const previousUrl = 'http://127.0.0.1:5173/asdasdad';
    window.open(
      `http://127.0.0.1:8000/auth/google?redirectUrl=${previousUrl}`,
      '_self'
    );
  };

  const githubAuth = () => {
    const previousUrl = 'http://127.0.0.1:5173/asdasdad';
    window.open(
      `http://127.0.0.1:8000/auth/github?redirectUrl=${previousUrl}`,
      '_self'
    );
  };

  return (
    <div className={''}>
      <h1 className={''}>Sign up Form</h1>
      <div className={''}>
        <div className={''}></div>
        <div className={''}>
          <button className={''} onClick={googleAuth}>
            <span>Sing up with Google</span>
          </button>

          <button className={''} onClick={githubAuth}>
            <span>Sing up with Github</span>
          </button>
          <p className={''}></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
