import React, { useEffect, useState, useRef } from 'react';
    import { motion, useMotionValue, useTransform } from 'framer-motion';

    const Star = ({ initialX, initialY, size, opacity, parallaxFactor }) => {
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
        backgroundColor: `rgba(255, 255, 255, ${opacity})`,
        boxShadow: `0 0 ${size * 2}px rgba(255, 255, 255, ${opacity * 0.7})`,
      };

      return <motion.div style={{ ...starStyle, translateX: x, translateY: y }} />;
    };

    const StarryBackground = () => {
      const [stars, setStars] = useState([]);
      const numStars = 150;

      useEffect(() => {
        const generateStars = () => {
          const newStars = [];
          for (let i = 0; i < numStars; i++) {
            newStars.push({
              id: i,
              initialX: Math.random() * 100,
              initialY: Math.random() * 100,
              size: Math.random() * 2 + 0.5,
              opacity: Math.random() * 0.5 + 0.3,
              parallaxFactor: Math.random() * 0.05 + 0.01, // Smaller factor for subtle parallax
            });
          }
          setStars(newStars);
        };
        generateStars();
      }, []);

      return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
          {stars.map((star) => (
            <Star
              key={star.id}
              initialX={star.initialX}
              initialY={star.initialY}
              size={star.size}
              opacity={star.opacity}
              parallaxFactor={star.parallaxFactor}
            />
          ))}
        </div>
      );
    };

    export default StarryBackground;