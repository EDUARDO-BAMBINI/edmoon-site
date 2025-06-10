import { useState, useEffect } from 'react';
import { recordVisit, getVisitCount } from '../services/visitorService';

const useVisitorCount = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    recordVisit().then(initialCount => {
      if (initialCount !== null) {
        setCount(initialCount);
      }
    });

    const intervalId = setInterval(() => {
      getVisitCount().then(updatedCount => {
        if (updatedCount !== null) {
          setCount(updatedCount);
        }
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return count;
};

export default useVisitorCount;