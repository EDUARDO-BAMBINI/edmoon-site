import React from 'react';
    import { motion } from 'framer-motion';

    const Earth = () => {
      return (
        <motion.div
          className="fixed bottom-[-200px] md:bottom-[-300px] left-1/2 -translate-x-1/2 w-[450px] h-[450px] md:w-[650px] md:h-[650px] z-0" // Slightly larger and further down initially
          initial={{ y: 300, opacity: 0, scale: 0.8 }} // Start further down, smaller and invisible
          animate={{
            y: 0, // Slowly rises to final position
            opacity: 1,
            scale: 1,
            transition: {
              duration: 20, // Very slow appearance
              ease: [0.25, 0.1, 0.25, 1], // Smooth ease
              delay: 2, // Delay before starting animation
            }
          }}
        >
          <motion.div
            className="w-full h-full rounded-full"
            style={{
              background: 'radial-gradient(circle at 30% 30%, #a7c7e7 0%, #77b5fe 40%, #4682b4 100%)', // Softer blue tones for Earth
              // Initial subtle glow
            }}
            animate={{
              boxShadow: [ // Pulsating glow effect
                '0 0 60px 15px rgba(173, 216, 230, 0.2), inset 0 0 40px rgba(0,0,0,0.2)',
                '0 0 90px 25px rgba(200, 220, 255, 0.35), inset 0 0 50px rgba(0,0,0,0.25)', // Brighter, wider glow
                '0 0 60px 15px rgba(173, 216, 230, 0.2), inset 0 0 40px rgba(0,0,0,0.2)',
              ]
            }}
            transition={{
              duration: 8, // Slow glow pulsation
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
              delay: 20, // Start glowing after full appearance
            }}
          >
            <img 
              alt="Planet Earth slowly rising on the lunar horizon with a gentle glow"
              className="w-full h-full object-cover opacity-0" // Image is for semantics, visual is CSS
             src="https://images.unsplash.com/photo-1643330683233-ff2ac89b002c" />
          </motion.div>
        </motion.div>
      );
    };

    export default Earth;