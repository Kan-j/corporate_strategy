"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'; // Adjust the import based on your routing library

const Navbar = () => {
  const scrollToSection = (id:any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="fixed z-10 top-0 w-full bg-[#0F1825]/60 flex justify-between px-24 py-5"
    >
      <Link href="/" className="hover:text-gray-200 text-blue-100 2xl:text-lg" >
        Corporate Strategy
      </Link>
      <section className="md:flex gap-6 hidden">
        <a
          href="#our-sections"
          onClick={() => scrollToSection('our-sections')}
          className="hover:border-t text-blue-100 pt-1 2xl:text-lg font-semibold cursor-pointer"
        >
          Our Sections
        </a>
        <a
          href="#our-reports"
          onClick={() => scrollToSection('our-reports')}
          className="hover:border-t text-blue-100 pt-1 2xl:text-lg font-semibold cursor-pointer"
        >
          View Reports
        </a>
      </section>
    </motion.nav>
  );
};

export default Navbar;
