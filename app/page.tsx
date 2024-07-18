import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import OurSectionsVerticalBar from "@/components/custom/OurSectionsVerticalBar"
import { TiTick } from "react-icons/ti";
import { Andika } from "next/font/google";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GoArrowUpRight } from "react-icons/go";
import { BiFolder } from "react-icons/bi";
import { FaFolderOpen } from "react-icons/fa";
import HeroSection from "@/components/custom/HeroSection";
import CorporateStrategySection from "@/components/custom/CorporateStrategySection";
import PerformanceMonitoringSection from "@/components/custom/PerformanceMonitoringSection";
import RiskManagementSection from "@/components/custom/RiskManagementSection";
import OurReportsSection from "@/components/custom/OurReportsSection";
import VraStrategySection from "@/components/custom/VraStrategySection";
import OurThreeSectionsSection from "@/components/custom/OurThreeSectionsSection";

const andika = Andika({ weight: "400", subsets:["latin"] });

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      
      <nav className="fixed z-10 top-0 w-full bg-[#0F1825]/60 flex justify-between px-24 py-5">
          <Link href="/" className="hover:text-gray-200 text-blue-100 2xl:text-lg">Corporate Strategy</Link>
          <section className="md:flex gap-6 hidden">
            <Link href="href" className="hover:border-t text-blue-100 pt-1 2xl:text-lg font-semibold">Our Sections</Link>
            <Link href="href" className="hover:border-t text-blue-100 pt-1 2xl:text-lg font-semibold">View Reports</Link>
          </section>
      </nav>

      <HeroSection/>
      <OurThreeSectionsSection/>
      <CorporateStrategySection/>
      <PerformanceMonitoringSection/>    
      <RiskManagementSection/>
      <VraStrategySection/>

      {/* <section className="h-screen w-full flex justify-center bg-gray-300 2xl:py-20  2xl:h-fit items-center">
          <section className="flex flex-col">
            <div className="w-full flex justify-center pt-10 pb-2">
              <h1 className="text-3xl font-bold text-gray-900">VRA's Strategy Pathway</h1>
            </div>
          </section>
      </section> */}

      {/* <section className="h-screen w-full flex justify-center bg-gray-300 2xl:py-20 2xl:h-fit items-center">
          <section className="flex flex-col">
            <div className="w-full flex justify-center pt-10 pb-2">
              <h1 className="text-3xl font-bold text-gray-900">How We Fit in</h1>
            </div>
          </section>
      </section> */}


      <OurReportsSection/>

      <footer className="bg-[#0F1825] w-full text-blue-100 py-8 relative bottom-0">
        <div className="container mx-auto px-24 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className=" font-bold">Corporate Strategy</h2>
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
          
          <section className="flex gap-6">
          <Link href="href" className="hover:border-t text-blue-100 pt-1">Our Sections</Link>
          <Link href="href" className="hover:border-t text-blue-100 pt-1">View Reports</Link>
          </section>
        </div>
      </footer>
    </main>
  );
}
