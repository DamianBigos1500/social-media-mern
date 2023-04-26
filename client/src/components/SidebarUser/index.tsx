import { FC, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import styles from './sidebarUser.module.scss';

interface SidebarUserProps {}

const SidebarUser: FC<SidebarUserProps> = ({}) => {
  const { user } = useContext(AuthContext);

  return (
    <>
      {user && (
        <div className={styles.sidebar_user}>
          <div className={styles.sidebar_user__img}>
            <img src={user.picture} alt="Profile Image" />
          </div>
          <div className={styles.sidebar_user__info}>
            <span>
              {user.first_name} {user.last_name}
            </span>
            <span>{user.email}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default SidebarUser;
