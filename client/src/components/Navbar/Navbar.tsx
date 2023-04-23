import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const getUser = () => {
      fetch('http://127.0.0.1:8000/auth/login/success', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          console.log(response);

          throw new Error('authentication has been failed!');
        })
        .then((resObject) => {
          console.log(resObject);
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>

      {/* {user && <span>{user?.emails[0].value}</span>} */}
    </div>
  );
};

export default Navbar;
