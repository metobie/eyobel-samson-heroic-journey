import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

const ScrollArrow = ({ direction = 'down', onClick, className, mobilePosition }) => {
  const Icon = direction === 'down' ? ChevronDown : ChevronUp;

  const positionClass = direction === 'down'
    ? `bottom-8 ${mobilePosition || ''}`
    : `top-8 ${mobilePosition || ''}`;

  return (
    <motion.div
      className={`absolute ${positionClass} left-1/2 transform -translate-x-1/2 cursor-pointer z-20 ${className}`}
      animate={{ y: direction === 'down' ? [0, 10, 0] : [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
      onClick={onClick}
    >
      <Icon size={32} className="text-white" />
    </motion.div>
  );
};

export default ScrollArrow;