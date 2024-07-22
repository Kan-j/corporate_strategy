'use client'
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'; // Adjust the import according to your tabs component
import { FaFolderOpen } from 'react-icons/fa';
import FolderItem from './FolderItem';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } }
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } }
};

const strategyAndPlanningData = [
  {
    resourceLink: '/',
    name: 'Operational Analysis Reports'
  },
  {
    resourceLink: '/',
    name: 'Macroeconomic Research & Analysis Reports'
  },
  {
    resourceLink: '/',
    name: 'Industry Research & Analysis Reports'
  },
  {
    resourceLink: '/',
    name: 'GoG and Policy Analysis Reports'
  },
]


const riskAndComplianceData = [
  {
    resourceLink: '/',
    name: 'Key Risk Indicator Reports'
  },
  {
    resourceLink: '/',
    name: 'Status Of Compliance Reports'
  },
  {
    resourceLink: '/',
    name: 'Quantitative Risk Analysis Reports'
  },
  {
    resourceLink: '/',
    name: 'Status of License, Permit and PSPAs Reports'
  },
  {
    resourceLink: '/',
    name: 'Assessment Reports'
  },
  {
    resourceLink: '/',
    name: 'Monitoring Reports'
  },
  {
    resourceLink: '/',
    name: 'MEGFIT Reports'
  },

]

const OurReportsSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.section
      id="our-reports"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
      className="h-screen w-full flex justify-center bg-gray-300 2xl:py-20 2xl:h-fit items-center"
    >
      <section className="flex flex-col">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={contentVariants}
          className="w-full flex justify-center pt-10 pb-2"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-12 md:mb-0">Our Reports</h1>
        </motion.div>

        <motion.section
          initial="hidden"
          animate={controls}
          variants={contentVariants}
          className="w-full"
        >
          <Tabs defaultValue="csp" className="w-10/12 flex flex-col items-center mx-auto">
            <TabsList className="bg-gray-300 flex flex-col md:flex-row">
              <TabsTrigger className='bg-gray-300 rounded-md text-gray-800 flex justify-start data-[state=active]:text-white data-[state=active]:bg-[#0F1825] data-[state=active]:border-t-[#0F1825] data-[state=active]:border-b data-[state=active]:border-b-blue-400' value="csp">Corporate Strategy and Planning</TabsTrigger>
              <TabsTrigger className='bg-gray-300 rounded-md text-gray-800 flex justify-start data-[state=active]:text-white data-[state=active]:bg-[#0F1825] data-[state=active]:border-t-[#0F1825] data-[state=active]:border-b data-[state=active]:border-b-blue-400' value="cpme">Performance and Monitoring Evaluation</TabsTrigger>
              <TabsTrigger className='bg-gray-300 rounded-md text-gray-800 flex justify-start data-[state=active]:text-white data-[state=active]:bg-[#0F1825] data-[state=active]:border-t-[#0F1825] data-[state=active]:border-b data-[state=active]:border-b-blue-400' value="risk">Risk & Compliance</TabsTrigger>
            </TabsList>
            <TabsContent value="csp">
              <section className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
               {strategyAndPlanningData.map((data)=>{
                return <FolderItem folderLink={data.resourceLink} folderName={data.name} />
               })}
              </section>
            </TabsContent>
            <TabsContent value="cpme">
              <section className="w-full flex flex-col gap-3 p-3 rounded-lg">
                {/* Add content for cpme here */}
              </section>
            </TabsContent>
            <TabsContent value="risk">
              <section className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
                {/* Add content for risk here */}
                {riskAndComplianceData.map((data)=>{
                return <FolderItem folderLink={data.resourceLink} folderName={data.name} />
               })}
              </section>
            </TabsContent>
          </Tabs>
        </motion.section>
      </section>
    </motion.section>
  );
};

export default OurReportsSection;
