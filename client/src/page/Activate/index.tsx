import axios from '../../lib/axios';
import { FC, useEffect } from 'react';
import {
  defer,
  isRouteErrorResponse,
  json,
  useLoaderData,
  useParams,
  useRouteError,
} from 'react-router-dom';

interface ActivateProps {}

export const activatePageLoader = async ({ params }: any) => {
  return axios.post('/auth/activate', {
    token: params.token,
  });
};

export const ActivatePageErrorBoundary = () => {
  let error = useRouteError();
  console.error(error);
  return <div>Error!</div>;
};

const Activate: FC<ActivateProps> = ({}) => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <p>Succesfully</p>
    </div>
  );
};

export default Activate;
