import React from 'react';
    import StarryBackground from '@/components/StarryBackground';
    import Flag from '@/components/Flag';
    import Earth from '@/components/Earth';
    import { motion } from 'framer-motion';

    function App() {
      return (
        <div className="relative min-h-screen text-white flex flex-col items-center justify-center overflow-hidden">
          <StarryBackground />
          <Flag />
          <Earth />
          <div className="relative z-10 flex flex-col items-center justify-center text-center p-4 mt-32 md:mt-24"> {/* Adjusted margin for flag visibility */}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400" // Slightly softer gradient
            >
              EDMOON
            </motion.h1>
            <motion.p
              className="mt-6 text-2xl md:text-4xl font-bold text-glow"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.7, 1, 0.7, 0], // Fade in, pulse, fade out slightly for initial reveal
                scale: [0.9, 1, 1.03, 1, 0.9],
                textShadow: [
                  "0 0 0px #fff, 0 0 0px #fff, 0 0 0px #C084FC, 0 0 0px #C084FC",
                  "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #C084FC, 0 0 20px #C084FC, 0 0 25px #C084FC, 0 0 30px #C084FC, 0 0 35px #C084FC",
                  "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #A855F7, 0 0 40px #A855F7, 0 0 50px #A855F7, 0 0 60px #A855F7, 0 0 70px #A855F7",
                  "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #C084FC, 0 0 20px #C084FC, 0 0 25px #C084FC, 0 0 30px #C084FC, 0 0 35px #C084FC",
                  "0 0 0px #fff, 0 0 0px #fff, 0 0 0px #C084FC, 0 0 0px #C084FC",
                ],
              }}
              transition={{
                duration: 3, // Slightly faster initial reveal
                ease: "easeInOut",
                delay: 1, // Delay after EDMOON title
                onComplete: () => ({ // After initial reveal, start continuous pulse
                  opacity: [0.7, 1, 0.7],
                  scale: [1, 1.03, 1],
                  textShadow: [
                    "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #C084FC, 0 0 20px #C084FC, 0 0 25px #C084FC, 0 0 30px #C084FC, 0 0 35px #C084FC",
                    "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #A855F7, 0 0 40px #A855F7, 0 0 50px #A855F7, 0 0 60px #A855F7, 0 0 70px #A855F7",
                    "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #C084FC, 0 0 20px #C084FC, 0 0 25px #C084FC, 0 0 30px #C084FC, 0 0 35px #C084FC",
                  ],
                  transition: {
                    duration: 2.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                  }
                })
              }}
            >
              To The Moon and Beyond!
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="mt-8 text-lg text-gray-400"
            >
              Landing Page Coming Soon...
            </motion.p>
          </div>
        </div>
      );
    }

    export default App;