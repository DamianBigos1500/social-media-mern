import { FC } from 'react';

interface ChangePasswordProps {}

const ChangePassword: FC<ChangePasswordProps> = ({}) => {
  return (
    <div>
      <h2>ChangePassword</h2>
      <div>
        <form>
          <div>
            <label>New Password</label>
            <input type="password" />
          </div>
          <div>
            <label>Confirm New Password</label>
            <input type="password" />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
