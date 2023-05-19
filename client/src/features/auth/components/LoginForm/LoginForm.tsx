import { FC, ReactNode, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import styles from '../../../../page/Login/login.module.scss';
import useAuth from '../../../../hooks/useAuth';
import authService from '../../services/auth.service';
import { zodResolver } from '@hookform/resolvers/zod';
import { string, z } from 'zod';

interface LoginFormProps {}

const schema = z.object({
  email: string().email(),
  password: string().min(8),
});

const LoginForm: FC<LoginFormProps> = ({}) => {
  const { setUser } = useAuth();
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
  });
  const { errors } = formState;

  const onSubmit = useCallback(async (data: any) => {
    const res = await authService.login({
      body: { email: data.email, password: data.password },
    });
    setUser(res.data.user);
  }, []);

  return (
    <>
      <form className={styles.login__form} onSubmit={handleSubmit(onSubmit)}>
        <legend>Login</legend>
        <fieldset>
          <label htmlFor="">Register</label>
          <input type="text" {...register('email')} />
          <div style={{ color: 'red' }}>
            {errors.email?.message as ReactNode}
          </div>
        </fieldset>

        <fieldset>
          <label htmlFor="">Password</label>
          <input type="password" {...register('password')} />
          <div style={{ color: 'red' }}>
            {errors.password?.message as ReactNode}
          </div>
        </fieldset>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginForm;
