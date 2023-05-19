import { FC, ReactNode, useCallback, useState } from 'react';
import styles from '../../../../page/Login/login.module.scss';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';
import authService from '../../services/auth.service';
import { zodResolver } from '@hookform/resolvers/zod';
import { string, z } from 'zod';

interface RegisterFormProps {}

const schema = z.object({
  first_name: string(),
  last_name: string(),
  email: string().email(),
  password: string().min(8),
});

const RegisterForm: FC<RegisterFormProps> = ({}) => {
  const { setUser } = useAuth();
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
  });
  const { errors } = formState;

  const onSubmit = useCallback(async (data: any) => {
    const res1 = await authService.register({
      body: {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: data.password,
      },
    });
    
    const res2 = await authService.login({
      body: { email: data.email, password: data.password },
    });
    setUser(res2.data.user);
  }, []);

  return (
    <>
      <form className={styles.login__form} onSubmit={handleSubmit(onSubmit)}>
        <legend>Register</legend>
        <fieldset>
          <label htmlFor="">First Name</label>
          <input type="text" {...register('first_name')} />
          <div style={{ color: 'red' }}>
            {errors.name?.message as ReactNode}
          </div>
        </fieldset>
        <fieldset>
          <label htmlFor="">Last Name</label>
          <input type="text" {...register('last_name')} />
          <div style={{ color: 'red' }}>
            {errors.name?.message as ReactNode}
          </div>
        </fieldset>

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
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegisterForm;
