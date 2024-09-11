import React from "react";
import { motion } from "framer-motion";

export default function Blob(){
  return (
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 360, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      style={{
        width: 200,
        height: 200,
        borderRadius: "50%",
        background: "purple",
      }}
    >
      Animated Blob
    </motion.div>
  );
};



