import Image from "next/image";

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
      <main>
        <div className="content">
          <div className="tag-box">
            <div className="tag">INTRUCING {"\u2A5F"} </div>
          </div>
          <h1>
            ENAIL FOR <br />
            DEVELOPERS
          </h1>
          <p className="description">
            the best way to reach solution insted of spam folders, ever
            transactional and marketin emails at scale
          </p>
          <div className="buttons">
            <a href="#" className="btn-get-started">
              Documentation &gt;
            </a>
            <a href="#" className="btn-signing-main">
              Get started &gt;
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
//11.54
