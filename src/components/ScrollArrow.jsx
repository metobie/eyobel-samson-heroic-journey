import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

const ScrollArrow = ({ direction = 'down', onClick, className }) => {
  const Icon = direction === 'down' ? ChevronDown : ChevronUp;

  return (
    <motion.div
      className={`absolute ${direction === 'down' ? 'bottom-8' : 'top-8'} left-1/2 transform -translate-x-1/2 cursor-pointer z-20 hidden md:block ${className}`}
      animate={{ y: direction === 'down' ? [0, 10, 0] : [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
      onClick={onClick}
    >
      <Icon size={32} className="text-white" />
    </motion.div>
  );
};

export default ScrollArrow;