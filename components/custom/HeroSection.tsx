"use client"
// import React from 'react'
import { Button } from '../ui/button'
// import Image from 'next/image'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'; 
import { Andika } from "next/font/google";
const andika = Andika({ weight: "400", subsets:["latin"] });

const heroVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } }
};

const HeroSection = () => {
  const scrollToSection = (id:any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <section className="h-screen relative w-full overflow-hidden">
      <video autoPlay loop muted className='w-full hidden md:block absolute z-0'>
        <source src='/chess.mp4' type='video/mp4' />
      </video>
      <motion.section
        initial="hidden"
        animate="visible"
        variants={heroVariants}
        className="absolute flex justify-center text-white items-center w-full h-full bg-gray-900/60"
      >
        <section className="flex flex-col md:flex-row items-center mx-auto w-10/12 justify-between gap-10 md:gap-0">
          <motion.section
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col md:w-1/2 w-full"
          >
            <h1 className={`andika-regular text-2xl 2xl:text-3xl ${andika.className}`}>We are</h1>
            <h2 className="text-5xl inter-bold font-bold mt-2 2xl:text-7xl">Corporate Strategy</h2>
            <p className="mt-5 leading-snug 2xl:text-lg">
              We assist the Executive to formulate, implement, monitor, evaluate the Authority’s Strategy, associated Risks and Compliance Obligations
            </p>
            <section className="mt-8 flex w-full gap-5">
              <Button onClick={()=>scrollToSection('our-reports')} className="bg-[#53E9F8] 2xl:text-lg text-gray-800 hover:text-gray-200 hover:bg-[#098591] font-semibold">View Reports</Button>
              <Button onClick={()=>scrollToSection('our-sections')} className="text-gray-900 bg-white 2xl:text-lg hover:bg-gray-300 font-semibold">Learn More about Us</Button>
            </section>
          </motion.section>
          <motion.section
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="md:w-1/2 w-full flex justify-center"
          >
            <Image
              src='/chessSvg.svg'
              alt="Chess Image"
              width={400}
              height={400}
              className="h-full 2xl:w-4/6"
            />
          </motion.section>
        </section>
      </motion.section>
    </section>
  );
};

export default HeroSection;
