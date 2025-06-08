import React from 'react';
import { motion } from 'framer-motion';

const SocialButton = ({ href, children, bgColorClass = 'bg-gray-700', hoverBgColorClass = 'hover:bg-gray-600' }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center px-5 py-2.5 rounded-lg text-white font-semibold 
                  transition-opacity duration-300 ease-in-out 
                  ${bgColorClass} ${hoverBgColorClass} hover:opacity-80 focus:outline-none 
                  focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white 
                  min-w-[140px] text-center shadow-md`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
};

export default SocialButton;