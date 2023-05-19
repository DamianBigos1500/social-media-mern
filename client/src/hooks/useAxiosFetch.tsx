import axios from '../lib/axios';
import { useEffect, useState } from 'react';

const useAxiosFetch = (
  url: string,
  method: 'get' | 'post' | 'patch',
  { headers, body, onInit = true }: any
) => {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const sendRequest = async () => {
    try {
      const response = await axios[method](url, body, headers);
      setData(response.data);
      console.log(response);
    } catch (error: any) {
      setError(error);
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (onInit) sendRequest();
  }, []);

  return { data, error, loading, sendRequest };
};

export default useAxiosFetch;
