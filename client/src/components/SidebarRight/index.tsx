import { FC } from 'react';
import styles from './SidebarRight.module.scss';

interface indexProps {}

const index: FC<indexProps> = ({}) => {
  return <div className={styles.sidebar_right}>Right</div>;
};

export default index;
