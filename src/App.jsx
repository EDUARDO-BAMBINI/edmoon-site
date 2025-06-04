import React from 'react';
import StarryBackground from './components/StarryBackground'; // Переконайтеся, що шлях правильний
import Earth from './components/Earth';                     // Переконайтеся, що шлях правильний
import { motion } from 'framer-motion';

// Імпортуємо ваш логотип
import edmoonLogo from './assets/images/logo.png'; // Шлях до вашого логотипу

// Імпортуємо головний CSS файл, де є директиви Tailwind
import './index.css';

function App() {
  return (
    <div className="relative min-h-screen text-white flex flex-col items-center justify-center overflow-hidden">
      {/* Космічний анімований фон */}
      <StarryBackground />

      {/* Земля на горизонті (якщо вона має бути під лого та текстом) */}
      {/* Ви можете змінити порядок, якщо Земля має бути на іншому шарі */}
      <Earth />

      {/* Контейнер для логотипу та основного тексту, щоб вони були поверх фону та Землі */}
      {/* Додаємо z-index та відступи, щоб контент був видимий */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center p-4">
        
        {/* Ваш логотип EDMOON */}
        <motion.img
          src={edmoonLogo}
          alt="EDMOON Logo"
          className="h-48 md:h-64 w-auto mb-6" // Налаштуйте розмір (h-, w-) та відступ знизу (mb-)
          initial={{ opacity: 0, scale: 0.5, y: -50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          // Якщо хочете додати анімацію хитання, як для прапора:
          // whileHover={{ rotate: [0, -1.5, 1.5, -1.5, 0], transition: { duration: 0.5, repeat: Infinity } }}
        />

        {/* Напис EDMOON */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }} // Затримка після появи лого
          className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400"
        >
          EDMOON
        </motion.h1>

        {/* Мерехтливий напис “To The Moon and Beyond!” */}
        <motion.p
          className="mt-6 text-2xl md:text-4xl font-bold" // Стилі для мерехтіння будуть через textShadow
          initial={{ opacity: 0 }}
          animate={{ // Постійна пульсація textShadow
            opacity: [0.8, 1, 0.8],
            scale: [1, 1.02, 1], // Легка пульсація розміру
            textShadow: [ // Анімація тіні тексту для ефекту мерехтіння
              "0 0 8px #fff, 0 0 12px #C084FC, 0 0 18px #C084FC",
              "0 0 10px #fff, 0 0 20px #A855F7, 0 0 30px #A855F7",
              "0 0 8px #fff, 0 0 12px #C084FC, 0 0 18px #C084FC",
            ],
          }}
          transition={{
            duration: 2, // Тривалість одного циклу пульсації
            ease: "easeInOut",
            repeat: Infinity, // Нескінченне повторення
            repeatType: "mirror", // "Дзеркальне" повторення для плавності
            delay: 1, // Затримка після появи EDMOON
          }}
        >
          To The Moon and Beyond!
        </motion.p>

        {/* Напис "Landing Page Coming Soon..." */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }} // Затримка після попереднього тексту
          className="mt-8 text-lg text-gray-400"
        >
          Landing Page Coming Soon...
        </motion.p>
      </div>
    </div>
  );
}

export default App;