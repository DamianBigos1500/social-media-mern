import { FC } from 'react';
import ResetSearchedProfile from '../../features/auth/components/ResetSearchedProfile';

interface indexProps {}

const index: FC<indexProps> = ({}) => {
  return (
    <div>
      <form>
        <div className="">Find your account</div>
        <div className="">
          Please enter your email address to reset your Account
        </div>
        <div className="">
          <input type="email" placeholder="Email address" />
        </div>

        <div className="">
          <button type="submit">Reset Account</button>
          <button type="submit">Cancel</button>
        </div>
      </form>

      <ResetSearchedProfile email="w@w.com"></ResetSearchedProfile>
    </div>
  );
};

export default index;
