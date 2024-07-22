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
import Navbar from "@/components/custom/NavBar";
import FooterSection from "@/components/custom/FooterSection";

const andika = Andika({ weight: "400", subsets:["latin"] });

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">

      <Navbar/>
      <HeroSection/>
      <OurThreeSectionsSection/>
      <CorporateStrategySection/>
      <PerformanceMonitoringSection/>    
      <RiskManagementSection/>
      {/* <VraStrategySection/> */}
      <OurReportsSection/>
      <FooterSection/>

    </main>
  );
}
