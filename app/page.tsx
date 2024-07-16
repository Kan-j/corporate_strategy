import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import OurSectionsVerticalBar from "@/components/custom/OurSectionsVerticalBar"
import { TiTick } from "react-icons/ti";
import { Andika } from "next/font/google";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const andika = Andika({ weight: "400", subsets:["latin"] });

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      
      <nav className="fixed z-10 top-0 w-full bg-[#0F1825]/60 flex justify-between px-24 py-5">
          <Link href="/" className="hover:text-gray-200 text-blue-100 2xl:text-lg">Corporate Strategy</Link>
          <section className="flex gap-6">
            <Link href="href" className="hover:border-t text-blue-100 pt-1 2xl:text-lg font-semibold">Our Sections</Link>
            <Link href="href" className="hover:border-t text-blue-100 pt-1 2xl:text-lg font-semibold">View Reports</Link>
          </section>
      </nav>

      {/* Hero Section */}
      <section className="h-screen relative w-full overflow-hidden">
        <video autoPlay loop muted className='w-full hidden md:block absolute z-0  '>
              <source
                src='/chess.mp4'
                type='video/mp4'
              />
        </video>
       <section className="absolute flex justify-center text-white items-center  w-full h-full bg-gray-900/60">
          <section className="flex flex-col-reverse md:flex-row items-center mx-auto w-10/12 justify-between gap-10 md:gap-0">
            <section className="flex flex-col md:w-1/2 w-full  ">
              <h1 className={`andika-regular text-2xl 2xl:text-3xl ${andika.className}`}>We are</h1>
              <h2 className="text-5xl inter-bold font-bold mt-2 2xl:text-7xl">Corporate Strategy</h2>
              <p className="mt-5 leading-snug 2xl:text-lg">We assist the Executive to formulate, implement, monitor, evaluate the Authority’s Strategy, associated Risks and Compliance Obligations</p>
              <section className="mt-8 flex w-full gap-5">
                <Button className="bg-[#53E9F8] 2xl:text-lg text-gray-800 hover:text-gray-200 hover:bg-[#098591] font-semibold">View Reports</Button>
                <Button className="text-gray-900 bg-white 2xl:text-lg hover:bg-gray-300 font-semibold">Learn More about Us</Button>
              </section>
            </section>
            <section className="md:w-1/2 w-full flex justify-center">
              <Image
              src='/chessSvg.svg'
              alt="Chess Image"
              width={400}
              height={400}
              className="h-full 2xl:w-4/6"
              />
            </section>
          </section>
       </section>
      </section>

      <section className="h-screen 2xl:h-fit 2xl:py-20 justify-center flex items-center bg-gray-300 w-full">
        <section className="flex flex-col items-center">
            <div className="w-full flex justify-center pt-6 pb-2">
              <h1 className="text-3xl 2xl:text-5xl font-bold text-gray-900 2xl:mb-8">Our Three Sections</h1>
            </div>

            <section className="mt-4 flex-1 flex-col md:flex-row flex items-center mx-auto w-10/12 justify-between">
              <section className="bg-gray-900 w-1/2 h-full">
                  <Image src="/placeholder_corporate.jpg" alt="alt" width={400} height={280} className="w-full h-full" objectFit="cover" />
              </section>
              <section className="h-full flex items-center w-1/2">
                  <OurSectionsVerticalBar/>
              </section>
            </section>
        </section>
        
      </section>

      <section className="h-screen w-full 2xl:h-fit 2xl:py-20 justify-center flex items-center bg-black">
          <section className="flex flex-col">
            <div className="w-full flex justify-center pb-2">
              <h1 className="text-3xl font-bold text-gray-100 2xl:text-5xl mb-8 2xl:mb-10">Corporate Strategy & Planning Unit</h1>
            </div>

            <section className="mt-2 flex-1 gap-6 flex items-center mx-auto w-10/12 justify-between">
              <section className="bg-gray-900 w-1/2 ">
                  <Image src="/placeholder_corporate.jpg" alt="alt" width={400} height={280} className="w-full h-full" objectFit="contain" />
              </section>
              <section className="h-full flex flex-col justify-center items-center w-1/2">
                  <div className="w-full flex justify-start pb-8">
                      <h1 className="font-semibold text-3xl text-start">Our Responsibilities</h1>
                  </div>

                  <section className="flex flex-col gap-3">
                    
                    <section className="flex gap-2 items-center border-b pb-2">
                      <TiTick size={25}/>
                      <h1 className="">Monitor Implementation of Authority’s Strategic Plan</h1>
                    </section>
                    <section className="flex gap-2 items-center border-b pb-2">
                      <TiTick size={25}/>
                      <h1 className="">Electricity Supply & Demand Analysis Reports</h1>
                    </section>
                    <section className="flex gap-2 items-center border-b pb-2">
                      <TiTick size={25}/>
                      <h1 className="">Conducts Policy & Market Research to Improve Authority’s Strategic Plans</h1>
                    </section>
                    <section className="flex gap-2 items-center border-b pb-2">
                      <TiTick size={25}/>
                      <h1 className="">Communicates Authority’s Strategic Plan and other issues of strategic concern</h1>
                    </section>
                    <section className="flex gap-2 items-center border-b pb-2">
                      <TiTick size={25}/>
                      <h1 className="">Coordinate and Prepare Quarterly and Annual Corporate Performance Reports (incl. Corporate Plan, Performance Contract etc for SIGA).</h1>
                    </section>
                  </section>
              </section>
            </section>
          </section>
      </section>
      
      
      <section className="h-screen w-full flex justify-center bg-gray-300 text-gray-900 2xl:h-fit 2xl:py-20 items-center2xl:h-fit items-center">
          <section className="flex flex-col">
            <div className="w-full flex justify-center pt-10 pb-2">
              <h1 className="text-3xl font-bold text-gray-900 2xl:text-5xl mb-8 2xl:mb-10">Performance Monitoring & Evaluation</h1>
            </div>

            <section className="mt-2 flex-1 gap-6 flex items-center mx-auto w-10/12 justify-between">
              <section className="h-full flex flex-col justify-center items-center w-1/2">
                  <div className="w-full flex justify-start pb-8">
                      <h1 className="font-semibold text-3xl text-start">Our Responsibilities</h1>
                  </div>

                  <section className="flex flex-col gap-3">
                    <section className="flex gap-2 items-center border-b border-b-gray-500 pb-2">
                      <TiTick size={25}/>
                      <h1 className="">Corporate and Departmental Performance Monitoring, Assessment and Evaluation</h1>
                    </section>
                    <section className="flex gap-2 items-center border-b border-b-gray-500 pb-2">
                      <TiTick size={25}/>
                      <h1 className="">Cascading of Corporate Strategic Objectives to various functional areas for the development of Business Strategic Objectives aligned to corporate strategic direction</h1>
                    </section>
                    <section className="flex gap-2 items-center border-b border-b-gray-500 pb-2">
                      <TiTick size={25}/>
                      <h1 className="">Facilitate the preparation and submission of Departmental Business Plans of all functional areas of the Authority.</h1>
                    </section>
                  </section>
              </section>
              <section className="bg-gray-900 w-1/2 ">
                  <Image src="/placeholder_corporate.jpg" alt="alt" width={400} height={280} className="w-full h-full" objectFit="contain" />
              </section>
            </section>
          </section>
      </section>      
      
      <section className="h-screen w-full flex justify-center bg-black 2xl:py-20 items-center 2xl:h-fit ">
          <section className="flex flex-col">
            <div className="w-full flex justify-center pt-10 pb-2">
              <h1 className="text-3xl font-bold text-gray-100 2xl:text-5xl mb-8 2xl:mb-10">Risk Management & Compliance Unit</h1>
            </div>

            <section className="mt-2 flex-1 gap-6 flex items-center mx-auto w-10/12 justify-between">
              <section className="bg-gray-900 w-1/2 ">
                  <Image src="/placeholder_corporate.jpg" alt="alt" width={400} height={280} className="w-full h-full" objectFit="contain" />
              </section>
              <section className="h-full flex flex-col justify-center items-center w-1/2">
                  <div className="w-full flex justify-start pb-8">
                      <h1 className="font-semibold text-3xl text-start">Our Responsibilities</h1>
                  </div>

                  <section className="flex flex-col gap-3">
                    
                    <section className="flex gap-2 items-center border-b pb-2">
                      <TiTick size={25}/>
                      <h1 className="">Set up and review policy and strategy for risk management in the Authority</h1>
                    </section>
                    <section className="flex gap-2 items-center border-b pb-2">
                      <TiTick size={25}/>
                      <h1 className="">Co-ordinate the various functional activities which advise on risk management issues within the Volta River Authority</h1>
                    </section>
                    <section className="flex gap-2 items-center border-b pb-2">
                      <TiTick size={25}/>
                      <h1 className="">Prepare reports on risk for Management the Board and other stakeholders</h1>
                    </section>
                    <section className="flex gap-2 items-center border-b pb-2">
                      <TiTick size={25}/>
                      <h1 className="">Maintain a Risk Register for the Authority, which is updated periodically depending on the changes in risk exposures from the business environment.</h1>
                    </section>
                  </section>
              </section>
            </section>
          </section>
      </section>



      <section className="h-screen w-full flex justify-center bg-gray-300 2xl:py-20 2xl:h-fit items-center">
          <section className="flex flex-col">
            <div className="w-full flex justify-center pt-10 pb-2">
              <h1 className="text-3xl font-bold text-gray-900">VRA's Strategy and Objectives</h1>
            </div>
          </section>
      </section>

      <section className="h-screen w-full flex justify-center bg-gray-300 2xl:py-20  2xl:h-fit items-center">
          <section className="flex flex-col">
            <div className="w-full flex justify-center pt-10 pb-2">
              <h1 className="text-3xl font-bold text-gray-900">VRA's Strategy Pathway</h1>
            </div>
          </section>
      </section>

      <section className="h-screen w-full flex justify-center bg-gray-300 2xl:py-20 2xl:h-fit items-center">
          <section className="flex flex-col">
            <div className="w-full flex justify-center pt-10 pb-2">
              <h1 className="text-3xl font-bold text-gray-900">How We Fit in</h1>
            </div>
          </section>
      </section>


      <section className="h-screen w-full flex justify-center bg-gray-300 2xl:py-20 2xl:h-fit items-center" >
          <section className="flex flex-col">
            <div className="w-full flex justify-center pt-10 pb-2">
              <h1 className="text-3xl font-bold text-gray-900">Our Reports</h1>
            </div>

            <section className="w-full">
            <Tabs defaultValue="csp" className="w-full">
              <TabsList className=" bg-gray-300">
                  <TabsTrigger className='bg-gray-300 rounded-md text-gray-800  flex justify-start  data-[state=active]:text-white data-[state=active]:bg-[#0F1825] data-[state=active]:border-t-[#0F1825] data-[state=active]:border-b data-[state=active]:border-b-blue-400' value="csp">Corporate Strategy and Planning</TabsTrigger>
                  <TabsTrigger className='bg-gray-300 rounded-md text-gray-800  flex justify-start  data-[state=active]:text-white data-[state=active]:bg-[#0F1825] data-[state=active]:border-t-[#0F1825] data-[state=active]:border-b data-[state=active]:border-b-blue-400' value="cpme">Performance and Montioring Evaluation</TabsTrigger>
                  <TabsTrigger className='bg-gray-300 rounded-md text-gray-800  flex justify-start  data-[state=active]:text-white data-[state=active]:bg-[#0F1825] data-[state=active]:border-t-[#0F1825] data-[state=active]:border-b data-[state=active]:border-b-blue-400' value="risk">Risk & Compliance</TabsTrigger>
                  
              </TabsList>
              <TabsContent value="department">
                <section className=" w-full flex flex-col gap-3 p-3 rounded-lg">

                </section>
                <section className="w-full ">
                      <section className="w-3/4 justify-center items-center mt-2 mb-6">
                          
                      </section>
                </section>
                
              </TabsContent>
              <TabsContent value="corporate">
                  <section className=" w-full flex flex-col gap-3 p-3 rounded-lg">
                      
                </section>
                <section className="w-full ">
                      <section className="w-3/4 justify-center items-center mt-2 mb-6">
                        
                      </section>
                </section>
              </TabsContent>
            </Tabs>

            </section>
          </section>
      </section>

    
      

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
