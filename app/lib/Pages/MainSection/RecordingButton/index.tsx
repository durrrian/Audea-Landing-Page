'use client';

import Image from 'next/image';
import src from './image.png';
import { motion } from 'framer-motion';

export default function RecordingButton({ ...props }) {
  return (
    <motion.button
      className="rounded-full w-fit h-fit overflow-hidden flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      {...props}
    >
      <Image
        src={src}
        alt={'Recording button'}
        quality={100}
        draggable={false}
        priority={true}
      />
    </motion.button>
  );
}
