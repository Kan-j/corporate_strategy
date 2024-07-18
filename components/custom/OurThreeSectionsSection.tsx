"use client"
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image'; // Adjust the import if you are using a different image component
import OurSectionsVerticalBar from './OurSectionsVerticalBar'; // Assuming this is your custom component

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } }
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } }
};

const OurThreeSectionsSection = () => {
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
      className="h-screen 2xl:h-fit 2xl:py-20 justify-center flex items-center bg-gray-300 w-full py-12 md:py-0"
    >
      <section className="flex flex-col items-center mb-10 md:mb-0">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={contentVariants}
          className="w-full flex justify-center pt-6 pb-2"
        >
          <h1 className="text-3xl 2xl:text-5xl font-bold text-gray-900 2xl:mb-8">Our Three Sections</h1>
        </motion.div>

        <motion.section
          initial="hidden"
          animate={controls}
          variants={contentVariants}
          className="mt-4 flex-1 flex-col md:flex-row flex items-center mx-auto w-10/12 justify-between"
        >
          <section className="bg-gray-900 md:w-1/2 w-full h-full">
            <Image src="/placeholder_corporate.jpg" alt="alt" width={400} height={280} className="w-full h-full" objectFit="cover" />
          </section>
          <section className="h-full flex items-center md:w-1/2 w-full">
            <OurSectionsVerticalBar />
          </section>
        </motion.section>
      </section>
    </motion.section>
  );
};

export default OurThreeSectionsSection;
