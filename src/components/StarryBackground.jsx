import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';

// Компонент Star залишається майже таким же, але тепер приймає колір
const Star = ({ initialX, initialY, size, opacity, parallaxFactor, color }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const moveX = (clientX / window.innerWidth - 0.5) * parallaxFactor * 100;
      const moveY = (clientY / window.innerHeight - 0.5) * parallaxFactor * 100;
      x.set(moveX);
      y.set(moveY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [parallaxFactor, x, y]);

  const starStyle = {
    position: 'absolute',
    left: `${initialX}%`,
    top: `${initialY}%`,
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: '50%',
    backgroundColor: color, // <-- ВИКОРИСТОВУЄМО ПЕРЕДАНИЙ КОЛІР
    opacity: opacity,
    boxShadow: `0 0 ${size * 2}px ${color}`, // Світіння також використовує переданий колір
  };

  return <motion.div style={{ ...starStyle, translateX: x, translateY: y }} />;
};

// Функція для генерації випадкового числа в діапазоні
const randomNumber = (min, max) => Math.random() * (max - min) + min;

// Функція для вибору випадкового кольору з масиву
const randomColor = (colors) => colors[Math.floor(Math.random() * colors.length)];

const StarryBackground = () => {
  const [stars, setStars] = useState([]);
  const numStars = 250; // Загальна кількість зірок для всіх шарів

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      const colors = ['#FFFFFF', '#A6D1E6', '#90B2E8', '#F5E6A3']; // Білий, світло-блакитний, світло-синій, жовтий

      for (let i = 0; i < numStars; i++) {
        newStars.push({
          id: `star-${i}`,
          initialX: randomNumber(0, 100),
          initialY: randomNumber(0, 100),
          size: randomNumber(0.5, 2.5),
          opacity: randomNumber(0.3, 1.0),
          parallaxFactor: randomNumber(0.01, 0.15), // Різний фактор для глибини
          color: randomColor(colors), // Випадковий колір
        });
      }
      setStars(newStars);
    };
    generateStars();
  }, []);

  return (
    <div className="absolute inset-0 z-10 overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          // Використовуємо framer-motion для анімації мерехтіння
          animate={{
            opacity: [randomNumber(0.2, 0.5), randomNumber(0.8, 1), randomNumber(0.2, 0.5)],
          }}
          transition={{
            duration: randomNumber(2, 5), // Випадкова тривалість мерехтіння
            repeat: Infinity,
            repeatType: 'mirror',
          }}
        >
          <Star
            initialX={star.initialX}
            initialY={star.initialY}
            size={star.size}
            parallaxFactor={star.parallaxFactor}
            color={star.color}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default StarryBackground;