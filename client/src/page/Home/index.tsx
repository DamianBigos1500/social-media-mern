import { FC } from 'react';
import styles from './home.module.scss';

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  return (
    <div className={styles.home_content}>
      <div className={styles.home_header}>
        <h3>Videos for You</h3>
        <div>
          <input type="text" />
        </div>
      </div>

      <div>
        
      </div>
    </div>
  );
};

export default Home;
