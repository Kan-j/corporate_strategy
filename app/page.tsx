import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import OurSectionsVerticalBar from "@/components/custom/OurSectionsVerticalBar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      
      <nav className="fixed z-10 top-0 w-full bg-[#0F1825] flex justify-between px-24 py-5">
          <Link href="/" className="hover:text-gray-200 text-blue-100">Corporate Strategy</Link>
          <section className="flex gap-6">
            <Link href="href" className="hover:border-t text-blue-100 pt-1">Our Sections</Link>
            <Link href="href" className="hover:border-t text-blue-100 pt-1">View Reports</Link>
          </section>
      </nav>

      {/* Hero Section */}
      <section className="h-screen relative w-full overflow-hidden">
        <video autoPlay loop muted className='w-full absolute z-0  mt-5 '>
              <source
                src='/chess.mp4'
                type='video/mp4'
              />
        </video>
       <section className="absolute flex justify-center text-white items-center  w-full h-full bg-gray-900/60">
          <section className="flex items-center mx-auto w-10/12 justify-between ">
            <section className="flex flex-col w-1/2  ">
              <h1 className="andika-regular text-2xl">We are</h1>
              <h2 className="text-5xl inter-bold font-bold mt-2">Corporate Strategy</h2>
              <p className="mt-5 leading-snug">We assist the Executive to formulate, implement, monitor, evaluate the Authority’s Strategy, associated Risks and Compliance Obligations</p>
              <section className="mt-8 flex w-full gap-5">
                <Button className="bg-[#53E9F8] text-gray-800 hover:text-gray-200 hover:bg-[#098591]">View Reports</Button>
                <Button className="text-gray-900 bg-white hover:bg-gray-300">Learn More about Us</Button>
              </section>
            </section>
            <section className="w-1/2 flex justify-center">
              <Image
              src='/chessSvg.svg'
              alt="Chess Image"
              width={400}
              height={400}
              className="h-full"
              />
            </section>
          </section>
       </section>
      </section>

      <section className="h-screen flex items-center bg-gray-300 w-full">
        <section className="flex flex-col items-center">
            <div className="w-full flex justify-center pt-6 pb-2">
              <h1 className="text-3xl font-bold text-gray-900">Our Three Sections</h1>
            </div>

            <section className="mt-4 flex-1 flex items-center mx-auto w-10/12 justify-between">
              <section className="bg-gray-900 w-1/2 h-full">
                  <Image src="/placeholder_corporate.jpg" alt="alt" width={400} height={280} className="w-full h-full" objectFit="cover" />
              </section>
              <section className="h-full flex items-center w-1/2">
                  <OurSectionsVerticalBar/>
              </section>
            </section>
        </section>
        
      </section>


      <section className="h-screen bg-black">

      </section>

    </main>
  );
}
