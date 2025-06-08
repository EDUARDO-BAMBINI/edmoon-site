import React, { useState, useEffect } from 'react';

const SupplyCounter = () => {
  const initialSupply = 1000000000;
  const [currentSupply, setCurrentSupply] = useState(initialSupply);

  useEffect(() => {
    const interval = setInterval(() => {
      const decrease = Math.floor(Math.random() * 123) + 1;
      setCurrentSupply((prevSupply) => Math.max(0, prevSupply - decrease));
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    // Тепер компонент повертає тільки параграф з числом, без фону та заголовка
    <p className="text-xl font-bold text-amber-400 text-center">
      {currentSupply.toLocaleString('en-US')}
    </p>
  );
};

export default SupplyCounter;