"use client"
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image'; // Adjust the import if you are using a different image component

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } }
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } }
};

const VraStrategySection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
      className="h-screen w-full flex justify-center bg-gray-300 2xl:py-20 2xl:h-fit items-center"
    >
      <section className="flex flex-col w-full">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={contentVariants}
          className="w-full flex justify-center pt-10 pb-2"
        >
          <h1 className="text-3xl font-bold text-gray-900">VRA's Strategy and Objectives</h1>
        </motion.div>
        <motion.section
          initial="hidden"
          animate={controls}
          variants={contentVariants}
          className="w-9/12 mx-auto mt-4"
        >
          <Image src="/braise-spice.jpg" alt="Braise-Spice" width={400} height={400} className="w-full" objectFit="contain"/>
        </motion.section>
      </section>
    </motion.section>
  );
};

export default VraStrategySection;
