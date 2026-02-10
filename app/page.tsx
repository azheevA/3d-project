import SplineScene from "@/components/SplineScene";
import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Image
        src="/gradient.png"
        width={600}
        height={600}
        alt="not founded"
        className="absolute top-0 right-0 opacity-50 -z-1"
      />
      <div className="h-0 w-120 absolute top-1/5 right-0 shadow-[0_0_700px_15px_rgba(255,255,255,1)] -rotate-30 -z-1"></div>
      <div className="w-full mx-auto py-8 relative overflow-hidden">
        <header className="flex justify-between items-center py-4 px-20 z-999">
          <h1 className="m-0 text-white font-light text-3xl">MCODE</h1>
          <nav className="flex items-center gap-12 -ml-[5%] ">
            <a
              href="#"
              className="text-[1rem] tracking-widest text-inherit hover:text-[#a7a7a7]"
            >
              COMPANY
            </a>
            <a
              href="#"
              className="text-[1rem] tracking-widest text-inherit hover:text-[#a7a7a7]"
            >
              FEATURES
            </a>
            <a
              href="#"
              className="text-[1rem] tracking-widest text-inherit hover:text-[#a7a7a7]"
            >
              RESOURCES
            </a>
            <a
              href="#"
              className="text-[1rem] tracking-widest text-inherit hover:text-[#a7a7a7]"
            >
              DOCS
            </a>
          </nav>
          <button
            className="bg-[#a7a7a7] text-black py-[0.8rem] 
          px-8 rounded-[50px] text-[1rem] 
          font-medium transition-colors duration-200 
          ease-in-out hover:bg-white"
          >
            SIGNING
          </button>
        </header>
      </div>
      <main className="flex flex-col justify-center min-h-[90%-6rem] p-40">
        <div className="max-w-160 ml-10% z-999">
          <div
            className="relative w-[18rem] h-10 rounded-[50px] 
             bg-size-[200%] animate-gradient-move
             bg-my-gradient
             shadow-[0_0_15px_rgba(255,255,255,0.3)] "
          >
            <div
              className="absolute inset-0.75 bg-black rounded-[50px] 
            flex items-center justify-center transition-all duration-500 ease-out
            hover:text-[#5300a0] cursor-pointer"
            >
              INTRUCING {"\u2A5F"}{" "}
            </div>
          </div>
          <h1
            className="text-[4rem] border-none tracking-widest leading-[1.2] my-8 mx-0 
          [text-shadow:0_0_10px_rgba(128,128,128,0.418)]"
          >
            EMAIL FOR <br />
            DEVELOPERS
          </h1>
          <p className="text-[1.2rem] tracking-wider leading-relaxed max-w-140 text-gray-500">
            the best way to reach solution insted of spam folders, ever
            transactional and marketin emails at scale
          </p>
          <div className="flex gap-4 my-20">
            <a
              href="#"
              className="no-underline border border-[#2a2a2a] 
            py-[0.7rem] px-[1.2rem] rounded-[50px] text-[1.2rem] font-semibold 
            tracking-widest hover:bg-[#1a1a1a] transition-colors
             duration-200 ease-out"
            >
              Documentation &gt;
            </a>
            <a
              href="#"
              className="no-underline bg-gray-300 text-black py-[0.6rem]
              px-10 rounded-[50px] text-[1.2rem] font-semibold tracking-widest
               transition-colors duration-200 ease-out"
            >
              Get started &gt;
            </a>
          </div>
        </div>
        <SplineScene />
      </main>
    </>
  );
}
//11.54
