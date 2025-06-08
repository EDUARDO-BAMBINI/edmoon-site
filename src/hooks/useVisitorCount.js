// src/hooks/useVisitorCount.js
import { useState, useEffect } from 'react';
import { recordVisit, getVisitCount } from '../services/visitorService';

const useVisitorCount = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    // При першому завантаженні реєструємо візит
    recordVisit().then(initialCount => {
      if (initialCount !== null) {
        setCount(initialCount);
      }
    });

    // Встановлюємо інтервал для оновлення лічильника кожні 5 секунд
    const intervalId = setInterval(() => {
      getVisitCount().then(updatedCount => {
        if (updatedCount !== null) {
          setCount(updatedCount);
        }
      });
    }, 5000); // 5000 мілісекунд = 5 секунд

    // Очищуємо інтервал при розмонтуванні компонента
    return () => clearInterval(intervalId);
  }, []); // Пустий масив залежностей означає, що ефект виконається один раз

  return count;
};

export default useVisitorCount;