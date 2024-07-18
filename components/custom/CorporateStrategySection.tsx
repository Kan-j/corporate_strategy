"use client"

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image'; // If you're using Next.js
import { TiTick } from 'react-icons/ti';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } }
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } }
};

const CorporateStrategySection = () => {
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
      className="h-screen w-full 2xl:h-fit 2xl:py-20 justify-center flex items-center bg-black"
    >
      <section className="flex flex-col">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={contentVariants}
          className="w-full flex justify-center pb-2"
        >
          <h1 className="text-3xl font-bold text-gray-100 2xl:text-5xl mb-8 2xl:mb-10">
            Corporate Strategy & Planning Unit
          </h1>
        </motion.div>

        <motion.section
          initial="hidden"
          animate={controls}
          variants={contentVariants}
          className="mt-2 flex-1 gap-6 flex md:flex-row flex-col items-center mx-auto w-10/12 justify-between"
        >
          <section className="bg-gray-900 md:w-1/2 w-full">
            <Image
              src="/placeholder_corporate.jpg"
              alt="alt"
              width={400}
              height={280}
              className="w-full h-full"
              objectFit="contain"
            />
          </section>
          <section className="h-full flex flex-col justify-center items-center w-full md:w-1/2">
            <div className="w-full flex justify-start pb-8">
              <h1 className="font-semibold text-3xl text-start text-gray-100">Our Responsibilities</h1>
            </div>

            <section className="flex flex-col gap-3">
              <section className="flex gap-2 items-center border-b pb-2">
                <div className="">
                  <TiTick size={25} />
                </div>
                <h1 className="text-gray-100">Monitor Implementation of Authority’s Strategic Plan</h1>
              </section>
              <section className="flex gap-2 items-center border-b pb-2">
                <div className="">
                  <TiTick size={25} />
                </div>
                <h1 className="text-gray-100">Electricity Supply & Demand Analysis Reports</h1>
              </section>
              <section className="flex gap-2 items-center border-b pb-2">
                <div className="">
                  <TiTick size={25} />
                </div>
                <h1 className="text-gray-100">Conducts Policy & Market Research to Improve Authority’s Strategic Plans</h1>
              </section>
              <section className="flex gap-2 items-center border-b pb-2">
                <div className="">
                  <TiTick size={25} />
                </div>
                <h1 className="text-gray-100">Communicates Authority’s Strategic Plan and other issues of strategic concern</h1>
              </section>
              <section className="flex gap-2 items-center border-b pb-2">
                <div className="">
                  <TiTick size={25} />
                </div>
                <h1 className="text-gray-100">Coordinate and Prepare Quarterly and Annual Corporate Performance Reports (incl. Corporate Plan, Performance Contract etc for SIGA).</h1>
              </section>
            </section>
          </section>
        </motion.section>
      </section>
    </motion.section>
  );
};

export default CorporateStrategySection;
