import React from 'react';
import StarryBackground from './components/StarryBackground';
import { motion } from 'framer-motion';

import edmoonLogo from './assets/images/logo.png';
import earthImage from './assets/images/earth-image.png';
import moonHorizonImage from './assets/images/moon_gorizont.png'; // Використовуємо .png
import spaceBgImage from './assets/images/space.png'; // Повертаємо до .png

import './index.css';

function App() {
  return (
    <div className="relative min-h-screen text-white flex flex-col items-center justify-center overflow-hidden">
      
      {/* Шар 1: Фонове зображення space.png (найнижчий) */}
      <div 
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${spaceBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Шар 2: Зірки (компонент StarryBackground тепер без свого фону) */}
      <StarryBackground />

      {/* Шар 3: ЗОБРАЖЕННЯ ЗЕМЛІ */}
      <motion.img
        src={earthImage}
        alt="Земля на горизонті"
        className="absolute bottom-[5vh] left-1/2 transform -translate-x-1/2 w-full max-w-[360px] md:max-w-[560px] z-20 opacity-90 drop-shadow-[0_0_60px_rgba(100,150,255,0.5)]"
        initial={{ opacity: 0, x: "-50%", y: 200, scale: 0.6 }} 
        animate={{ opacity: 1, x: "-50%", y: 0, scale: 1 }} 
        transition={{ duration: 2.0, delay: 0.5, ease: "easeOut" }}
      />

      {/* Шар 4: МІСЯЧНИЙ ГОРИЗОНТ (над Землею) */}
      <motion.img
        src={moonHorizonImage}
        alt="Місячний горизонт"
        className="absolute bottom-0 left-0 w-full h-[80vh] object-cover z-30"
        initial={{ opacity: 0.5, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, delay: 0.1, ease: "easeOut" }}
      />
      
      {/* Шар 5: Контейнер для логотипу та основного тексту (найвищий) */}
      <div className="absolute top-[5vh] md:top-[8vh] left-1/2 transform -translate-x-1/2 z-40 flex flex-col items-center text-center p-4">
        
        <motion.img
          src={edmoonLogo}
          alt="EDMOON Logo"
          className="h-32 md:h-48 w-auto mb-4"
          initial={{ opacity: 0, scale: 0.5, y: -50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        />

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400"
        >
          EDMOON
        </motion.h1>

        <motion.p
          className="mt-4 text-xl md:text-3xl font-bold"
          // Початковий стан: повністю прозорий та розміром з піксель
          initial={{ opacity: 0, scale: 0 }} 
          animate={{
            // Кінцевий стан:
            opacity: [0, 0.8, 1, 0.8], // Додаємо 0 на початку, щоб плавно з'являвся з прозорості
            scale: 1, // Анімується до повного розміру
            // Постійна анімація мерехтіння/пульсації:
            textShadow: [
              "0 0 8px #fff, 0 0 12px #C084FC, 0 0 18px #C084FC",
              "0 0 10px #fff, 0 0 20px #A855F7, 0 0 30px #A855F7",
              "0 0 8px #fff, 0 0 12px #C084FC, 0 0 18px #C084FC",
            ],
          }}
          transition={{
            // Налаштування для анімації появи (opacity та scale)
            // Вони виконаються один раз завдяки затримці
            opacity: { duration: 2.4, delay: 1.8, ease: "easeOut" },
            scale: { duration: 2.4, delay: 1.8, ease: "easeOut" },
            
            // Налаштування для постійної анімації мерехтіння
            textShadow: {
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
              delay: 2.6, // Починається після того, як напис повністю з'явився
            }
          }}
        >
          To The Moon and Beyond!
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.3 }}
          className="mt-6 text-md md:text-lg text-gray-300"
        >
          Landing Page Coming Soon...
        </motion.p>
      </div>
    </div>
  );
}

export default App;