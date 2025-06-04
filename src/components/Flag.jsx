import React from 'react';
    import { motion } from 'framer-motion';

    const Flag = () => {
      return (
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
          <motion.div
            animate={{
              rotateZ: [0, 0.5, 0, -0.5, 0], // Gentle sway
              skewX: [0, 0.3, 0, -0.3, 0], // Slight fabric movement
            }}
            transition={{
              duration: 7, // Slower, more natural wind effect
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror"
            }}
            className="w-20 h-auto md:w-28" // Slightly smaller flag
          >
            <img 
              alt="EDMOON Logo Flag on Moon"
              className="w-full h-full object-contain filter drop-shadow-[0_3px_10px_rgba(200,180,255,0.4)]"
             src="https://images.unsplash.com/photo-1499565963581-cc72d5d157f3" />
          </motion.div>
          {/* Lunar Dust Animation */}
          <motion.div
            className="absolute bottom-[-50px] w-56 h-12 md:w-72 md:h-16 opacity-50" // Wider, thinner dust cloud
            animate={{
              opacity: [0.05, 0.15, 0.05], // More subtle opacity
              scaleX: [1, 1.05, 1],
              x: [-10, 10, -10], // Gentle side to side movement
              y: [0, 2, 0],
            }}
            transition={{
              duration: 8, // Slower, more ethereal dust movement
              ease: "linear",
              repeat: Infinity,
              repeatType: "mirror",
              delay: 1,
            }}
            style={{
              background: 'radial-gradient(ellipse at center, rgba(220, 220, 220, 0.1) 0%, rgba(220, 220, 220, 0) 70%)',
              filter: 'blur(3px)', // Softer blur
            }}
          />
        </div>
      );
    };

    export default Flag;