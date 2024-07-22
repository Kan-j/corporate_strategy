"use client"
import React from 'react';
import Link from 'next/link'; // Import Link from Next.js

const FooterSection = () => {
  const scrollToSection = (id:any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0F1825] w-full text-blue-100 py-8 relative bottom-0">
      <div className="container mx-auto px-24 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="font-bold">Corporate Strategy</h2>
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
        
        <section className="flex gap-6">
        <button
          onClick={() => scrollToSection('our-sections')}
          className="hover:border-t text-blue-100 pt-1 cursor-pointer"
        >
          Our Sections
        </button>
        <button
          onClick={() => scrollToSection('our-reports')}
          className="hover:border-t text-blue-100 pt-1 cursor-pointer"
        >
          View Reports
        </button>
    
        </section>
      </div>
    </footer>
  );
};

export default FooterSection;
