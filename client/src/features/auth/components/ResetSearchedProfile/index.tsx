import axios from '../../../../lib/axios';
import { FC } from 'react';

interface ResetSearchedProfileProps {
  email: string;
}

const ResetSearchedProfile: FC<ResetSearchedProfileProps> = ({ email }) => {
  const handleSearch = () => {
    axios.post('/api/find-user', { email });
  };

  return <div></div>;
};

export default ResetSearchedProfile;
