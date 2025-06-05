import React from 'react';
import StarryBackground from './components/StarryBackground';
import { motion } from 'framer-motion';

// Імпортуємо ваші зображення з правильними назвами
import edmoonLogo from './assets/images/logo.png'; // Припускаємо, що назва файлу logo.png
import earthImage from './assets/images/earth-image.png'; // ВАША НАЗВА ФАЙЛУ ЗЕМЛІ (з розширенням)
import moonHorizonImage from './assets/images/moon_gorizont.png'; // ВАШ ФАЙЛ МІСЯЧНОГО ГОРИЗОНТУ (з розширенням)

import './index.css';

function App() {
  return (
    <div className="relative min-h-screen text-white flex flex-col items-center justify-center overflow-hidden">
      <StarryBackground />

      {/* МІСЯЧНИЙ ГОРИЗОНТ */}
      <motion.img
        src={moonHorizonImage}
        alt="Місячний горизонт"
        className="absolute bottom-0 left-0 w-full h-[80vh] object-cover z-10" 
        // h-[50vh] - встановлює висоту на 50% висоти екрану.
        initial={{ opacity: 0.5, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, delay: 0.1, ease: "easeOut" }}
      />

      {/* ЗОБРАЖЕННЯ ЗЕМЛІ */}
      <motion.img
        src={earthImage}
        alt="Земля на горизонті"
        // Оновлені класи для розміру Землі:
        className="absolute bottom-[5vh] left-1/2 transform -translate-x-1/2 w-full max-w-[360px] md:max-w-[560px] z-5 opacity-90 drop-shadow-[0_0_60px_rgba(100,150,255,0.5)]"
        // Вам, можливо, доведеться скоригувати bottom-[45vh] та загальне положення інших елементів,
        // оскільки Земля тепер більша і може потребувати більше простору або іншого вертикального позиціонування.
        initial={{ opacity: 0, x: "-50%", y: 200, scale: 0.6 }} 
        animate={{ opacity: 0.9, x: "-50%", y: 0, scale: 1 }} 
        transition={{ duration: 2.0, delay: 0.5, ease: "easeOut" }}
      />
      
      {/* Контейнер для логотипу та основного тексту */}
      <div className="absolute top-[5vh] md:top-[8vh] left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center text-center p-4">
        
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
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.8, 1, 0.8],
            scale: [1, 1.02, 1],
            textShadow: [
              "0 0 8px #fff, 0 0 12px #C084FC, 0 0 18px #C084FC",
              "0 0 10px #fff, 0 0 20px #A855F7, 0 0 30px #A855F7",
              "0 0 8px #fff, 0 0 12px #C084FC, 0 0 18px #C084FC",
            ],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
            delay: 1.8,
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