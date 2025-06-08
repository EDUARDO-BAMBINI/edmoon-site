import React from 'react';
import { useTranslation } from 'react-i18next';
import StarryBackground from './components/StarryBackground';
import { motion } from 'framer-motion';
import Footer from './components/Footer';
import SupplyCounter from './components/SupplyCounter';
import SocialButton from './components/SocialButton';
import LanguageSwitcher from './components/LanguageSwitcher';

// Імпортуємо всі необхідні зображення
import edmoonLogo from './assets/images/logo.png';
import earthImage from './assets/images/earth-image.png';
import moonHorizonImage from './assets/images/moon_gorizont.png';
import spaceBgImage from './assets/images/space.png';
import pancakeSwapButtonImage from './assets/images/pancakeSwap.png';

// Імпортуємо мультиязичність 
import './i18n';

// Імпортуємо головний CSS файл
import './index.css';

function App() {
  const { t } = useTranslation();
  
  return (
    <div className="relative min-h-screen text-white flex flex-col items-center justify-center overflow-hidden">
      
      {/* ========================================================== */}
      {/* ВСІ ШАРИ ФОНУ, ЗЕМЛІ ТА МІСЯЦЯ ЗАЛИШАЮТЬСЯ БЕЗ ЗМІН */}
      {/* ========================================================== */}
      <div 
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${spaceBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 z-10">
        <StarryBackground />
      </div>
      <motion.img
        src={earthImage}
        alt="Земля на горизонті"
        className="absolute bottom-[5vh] left-1/2 transform -translate-x-1/2 w-full max-w-[360px] md:max-w-[560px] z-20 opacity-90 drop-shadow-[0_0_60px_rgba(100,150,255,0.5)]"
        initial={{ opacity: 0, x: "-50%", y: 200, scale: 0.6 }} 
        animate={{ opacity: 1, x: "-50%", y: 0, scale: 1 }} 
        transition={{ duration: 2.0, delay: 0.5, ease: "easeOut" }}
      />
      <motion.img
        src={moonHorizonImage}
        alt="Місячний горизонт"
        className="absolute bottom-0 left-0 w-full h-[80vh] object-cover z-30"
        initial={{ opacity: 0.5, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, delay: 0.1, ease: "easeOut" }}
      />

      {/* ========================================================== */}
      {/* ЗМІНИ ВНЕСЕНО ТІЛЬКИ В ЦЬОМУ БЛОЦІ                  */}
      {/* ========================================================== */}

      {/* НАПИС EDMOON - тепер у верхньому лівому куті */}
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        // Додано класи для позиціонування
        className="absolute top-6 left-6 z-50 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400"
      >
        {t('edmoon_title', 'EDMOON')}
      </motion.h1>

      {/* Контейнер для елементів у верхньому правому куті */}
      <div className="absolute top-6 right-6 z-50 flex items-center gap-4">
        <LanguageSwitcher />
      </div>
      
      {/* Контейнер для центрального контенту (БЕЗ НАПИСУ EDMOON) */}
      <div className="absolute top-[5vh] md:top-[8vh] left-1/2 transform -translate-x-1/2 z-40 flex flex-col items-center text-center p-4">
        
        {/* Контейнер для логотипу та лічильника Supply */}
        <div className="flex flex-col items-center">
          <motion.img
            src={edmoonLogo}
            alt="EDMOON Logo"
            className="h-32 md:h-48 w-auto"
            initial={{ opacity: 0, scale: 0.5, y: -50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          />
          <motion.div
            className="mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <SupplyCounter />
          </motion.div>
        </div>

        {/* Напис EDMOON звідси видалено */}

        <motion.a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src={pancakeSwapButtonImage}
            alt={t('buy_button', 'Buy on PancakeSwap')}
            className="h-12 w-auto transition-all duration-300 ease-in-out hover:drop-shadow-[0_0_15px_rgba(52,211,153,0.8)]"
          />
        </motion.a>

        <motion.p
          className="mt-8 text-2xl md:text-3xl font-bold"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.8, 1, 0.8],
            scale: 1,
            textShadow: [
              "0 0 8px #fff, 0 0 12px #C084FC, 0 0 18px #C084FC",
              "0 0 10px #fff, 0 0 20px #A855F7, 0 0 30px #A855F7",
              "0 0 8px #fff, 0 0 12px #C084FC, 0 0 18px #C084FC",
            ],
          }}
          transition={{
            opacity: { duration: 2.4, delay: 1.8 },
            scale: { duration: 2.4, delay: 1.8 },
            textShadow: {
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
              delay: 4.2, 
            }
          }}
        >
          {t('tagline', 'To The Moon and Beyond!')}
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.3 }}
          className="mt-6 text-md md:text-lg text-gray-300"
        >
          {t('coming_soon', 'Landing Page Coming Soon...')}
        </motion.p>
        
        <motion.div 
          className="mt-10 flex sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.8 }}
        >
          <SocialButton 
            href="#"
            bgColorClass="bg-sky-500" 
            hoverBgColorClass="hover:bg-sky-600"
          >
            {t('socials.telegram', 'Telegram')}
          </SocialButton>
          <SocialButton 
            href="#"
            bgColorClass="bg-blue-500" 
            hoverBgColorClass="hover:bg-blue-600"
          >
            {t('socials.twitter', 'Twitter')}
          </SocialButton>
          <SocialButton 
            href="#"
            bgColorClass="bg-red-600" 
            hoverBgColorClass="hover:bg-red-700"
          >
            {t('socials.youtube', 'YouTube')}
          </SocialButton>
        </motion.div>
      </div>

      {/* Футер */}
      <div className="absolute bottom-4 left-4 z-50">
        <Footer />
      </div>
    </div>
  );
}

export default App;