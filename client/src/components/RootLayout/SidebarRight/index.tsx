import { FC } from 'react';
import styles from './SidebarRight.module.scss';
import { useTimer } from '../../../hooks/useTimer';

interface SidebarRightProps {}

const friends = [
  {
    full_name: 'Damian Bigos',
    image:
      'https://lh3.googleusercontent.com/a/AGNmyxZ-lXy9x_ytWiJ82WEiCegBsK3Nu6PxnP34PguSdQ=s96-c',
    active_ago: 12,
  },
  {
    full_name: 'Damian Bigos',
    image:
      'https://lh3.googleusercontent.com/a/AGNmyxZ-lXy9x_ytWiJ82WEiCegBsK3Nu6PxnP34PguSdQ=s96-c',
    active_ago: 12,
  },
  {
    full_name: 'Damian Bigos',
    image:
      'https://lh3.googleusercontent.com/a/AGNmyxZ-lXy9x_ytWiJ82WEiCegBsK3Nu6PxnP34PguSdQ=s96-c',
    active_ago: 12,
  },
  {
    full_name: 'Damian Bigos',
    image:
      'https://lh3.googleusercontent.com/a/AGNmyxZ-lXy9x_ytWiJ82WEiCegBsK3Nu6PxnP34PguSdQ=s96-c',
    active_ago: 12,
  },
  {
    full_name: 'Damian Bigos',
    image:
      'https://lh3.googleusercontent.com/a/AGNmyxZ-lXy9x_ytWiJ82WEiCegBsK3Nu6PxnP34PguSdQ=s96-c',
    active_ago: 12,
  },
  {
    full_name: 'Damian Bigos',
    image:
      'https://lh3.googleusercontent.com/a/AGNmyxZ-lXy9x_ytWiJ82WEiCegBsK3Nu6PxnP34PguSdQ=s96-c',
    active_ago: 12,
  },
  {
    full_name: 'Damian Bigos',
    image:
      'https://lh3.googleusercontent.com/a/AGNmyxZ-lXy9x_ytWiJ82WEiCegBsK3Nu6PxnP34PguSdQ=s96-c',
    active_ago: 12,
  },
  {
    full_name: 'Damian Bigos',
    image:
      'https://lh3.googleusercontent.com/a/AGNmyxZ-lXy9x_ytWiJ82WEiCegBsK3Nu6PxnP34PguSdQ=s96-c',
    active_ago: 12,
  },
  {
    full_name: 'Damian Bigos',
    image:
      'https://lh3.googleusercontent.com/a/AGNmyxZ-lXy9x_ytWiJ82WEiCegBsK3Nu6PxnP34PguSdQ=s96-c',
    active_ago: 12,
  },
  {
    full_name: 'Damian Bigos',
    image:
      'https://lh3.googleusercontent.com/a/AGNmyxZ-lXy9x_ytWiJ82WEiCegBsK3Nu6PxnP34PguSdQ=s96-c',
    active_ago: 12,
  },
  {
    full_name: 'Damian Bigos',
    image:
      'https://lh3.googleusercontent.com/a/AGNmyxZ-lXy9x_ytWiJ82WEiCegBsK3Nu6PxnP34PguSdQ=s96-c',
    active_ago: 12,
  },
  {
    full_name: 'Damian Bigos',
    image:
      'https://lh3.googleusercontent.com/a/AGNmyxZ-lXy9x_ytWiJ82WEiCegBsK3Nu6PxnP34PguSdQ=s96-c',
    active_ago: 12,
  },
  {
    full_name: 'Damian Bigos',
    image:
      'https://lh3.googleusercontent.com/a/AGNmyxZ-lXy9x_ytWiJ82WEiCegBsK3Nu6PxnP34PguSdQ=s96-c',
    active_ago: 12,
  },
  {
    full_name: 'Damian Bigos',
    image:
      'https://lh3.googleusercontent.com/a/AGNmyxZ-lXy9x_ytWiJ82WEiCegBsK3Nu6PxnP34PguSdQ=s96-c',
    active_ago: 12,
  },
  {
    full_name: 'Damian Bigos',
    image:
      'https://lh3.googleusercontent.com/a/AGNmyxZ-lXy9x_ytWiJ82WEiCegBsK3Nu6PxnP34PguSdQ=s96-c',
    active_ago: 12,
  },
  {
    full_name: 'Damian Bigos',
    image:
      'https://lh3.googleusercontent.com/a/AGNmyxZ-lXy9x_ytWiJ82WEiCegBsK3Nu6PxnP34PguSdQ=s96-c',
    active_ago: 12,
  },
];

const SidebarRight: FC<SidebarRightProps> = ({}) => {
  const [number] = useTimer(60);

  return (
    <aside className={styles.sidebar_right}>
      <div className={styles.sidebar_right__friends_content}>
        <h2 className={styles.sidebar_right__friends_title}>Friends</h2>

        <ul className={styles.sidebar_right__friends_list}>
          {friends.map((friend, index) => (
            <li key={index} className={styles.sidebar_right__friend}>
              <span className={styles.sidebar_right__friend_info}>
                <img src={friend.image} alt="" />
                <span>{friend.full_name}</span>
              </span>
              <span className={styles.sidebar_right__friend_active}>
                {friend.active_ago + number} min
              </span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SidebarRight;
