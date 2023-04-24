import { FC, useState } from 'react';
import { Form, redirect } from 'react-router-dom';
import axios from '../../lib/axios';

interface LoginProps {}

const Login: FC<LoginProps> = ({}) => {
  const [email, setEmail] = useState('');

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
        <Form className={''} method="post" action="">
          <legend>Login</legend>
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
        </Form>

        <Form className={''}>
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
        </Form>

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
