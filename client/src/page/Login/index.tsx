import { FC, useState } from 'react';
import {
  Form,
  redirect,
  useActionData,
  useLocation,
  useNavigation,
  useSubmit,
} from 'react-router-dom';
import Logo from '../../components/Logo';
import styles from './login.module.scss';
import LoginForm from '../../features/auth/components/LoginForm/LoginForm';
import RegisterForm from '../../features/auth/components/RegisterForm/RegisterForm';
import SocialLogin from '../../features/auth/components/SocialLogin/SocialLogin';
import authService from '../../features/auth/services/auth.service';

interface LoginProps {}

const Login: FC<LoginProps> = ({}) => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const actionData = useActionData();
  // let submit = useSubmit();

  // submit(null, {
  //   method: 'post',
  //   action: '/login',
  // });

  const changeMode = () => {
    if (isLogin) setIsLogin(false);
    else setIsLogin(true);
  };

  return (
    <section className={styles.login}>
      <Logo />
      {isLogin ? <LoginForm /> : <RegisterForm />}

      <p onClick={() => changeMode()}>change mode</p>
      <SocialLogin />
    </section>
  );
};

export default Login;

export async function action({ request, params }: any) {
  const formData = await request.formData();

  const action = formData.get('action');
  if (action === 'login') {
    await authService.login({
      body: {
        email: formData.get('email'),
        password: formData.get('password'),
      },
    });
  } else if (action === 'register') {
    await authService.register({
      body: {
        email: formData.get('email'),
        password: formData.get('password'),
      },
    });
  }

  // try {
  //   axios.post('/auth/login', {
  //     email: formData.get('email'),
  //   });
  // } catch (error: any) {}
  const redirectUrl = params.redirectUrl || '/';

  return redirect(redirectUrl);
}
