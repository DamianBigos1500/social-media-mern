import { useEffect, useState } from 'react';

const useTimer = (second: number = 1) => {
  const [number, setNumber] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((number) => number + 1);
    }, 1000 * second);

    return () => clearInterval(interval);
  }, [number]);

  return [number];
};

export { useTimer };
