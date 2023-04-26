import { FC } from 'react';
import styles from './logo.module.scss';
interface LogoProps {}

const Logo: FC<LogoProps> = ({}) => {
  return (
    <div className={styles.logo}>
      <span className={styles.logo__icon}>[]</span>
      <h1 className={styles.logo__title}>Square</h1>
    </div>
  );
};

export default Logo;
