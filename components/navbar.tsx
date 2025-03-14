"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`z-1000 h-20 w-full fixed top-0 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent "
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center h-full">
        <Link href={"/"}><h1 className="font-bold text-2xl text-black">LM UNITED</h1></Link>
        <div className="hidden md:flex gap-7 items-center">
          <Link href={"/"}>
          <p className="font-light text-xl text-black cursor-pointer ">HOME</p></Link>
          <Link href={"/aboutUs"}><p className="font-light text-xl text-black cursor-pointer">ABOUT US</p></Link>
          <Link href={"/services"}><p className="font-light text-xl text-black cursor-pointer">SERVICES</p></Link>
          <Link href={"/contactUs"}><p className="font-light text-xl text-black cursor-pointer">CONTACT US</p></Link>
          <Link href={"/quote"}><button className="rounded-lg px-3 py-2 bg-[#F59E0B] cursor-pointer">
            Request a Quote
          </button></Link>
        </div>
        <button className="md:hidden text-black" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="" size={30} /> : <Menu size={30} />}
        </button>
      </div>
    
{
isOpen&&(<div>

<div className="absolute top-20 left-0 w-full bg-white shadow-md md:hidden">

        <div className="md:hidden flex flex-col bg-white px-6 py-4 shadow-md items-center">
          <Link href="/" className="py-2 text-black" onClick={() => setIsOpen(false)}>HOME</Link>
          <Link href="/aboutUs" className="py-2 text-black" onClick={() => setIsOpen(false)}>ABOUT US</Link>
          <Link href="/services" className="py-2 text-black" onClick={() => setIsOpen(false)}>SERVICES</Link>
          <Link href="/contactUs" className="py-2 text-black" onClick={() => setIsOpen(false)}>CONTACT US</Link>
          <Link href="/quote">
            <button className="rounded-lg px-4 py-2 bg-[#F59E0B] text-white mt-2 w-full">
              Request a Quote
            </button>
          </Link>
        </div>
       
      </div>

  
</div>)
}



    </nav>
  );
}




import { Menu, X } from "lucide-react"; 

export function Navbar2() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center h-20">
      <Link href={"/"}> <h1 className="font-bold text-2xl text-black">LM UNITED</h1></Link>

     
        <div className="hidden md:flex gap-7 items-center">
          <Link href="/" className="font-light text-xl text-black">HOME</Link>
          <Link href="/aboutUs" className="font-light text-xl text-black">ABOUT US</Link>
          <Link href="/services" className="font-light text-xl text-black">SERVICES</Link>
          <Link href="/contactUs" className="font-light text-xl text-black">CONTACT US</Link>
          <Link href="/quote">
            <button className="rounded-lg px-4 py-2 bg-[#F59E0B] text-white">
              Request a Quote
            </button>
          </Link>
        </div>

        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

    
      {isOpen && (
        <div className="md:hidden flex flex-col bg-white px-6 py-4 shadow-md items-center">
          <Link href="/" className="py-2 text-black" onClick={() => setIsOpen(false)}>HOME</Link>
          <Link href="/aboutUs" className="py-2 text-black" onClick={() => setIsOpen(false)}>ABOUT US</Link>
          <Link href="/services" className="py-2 text-black" onClick={() => setIsOpen(false)}>SERVICES</Link>
          <Link href="/contactUs" className="py-2 text-black" onClick={() => setIsOpen(false)}>CONTACT US</Link>
          <Link href="/quote">
            <button className="rounded-lg px-4 py-2 bg-[#F59E0B] text-white mt-2 w-full">
              Request a Quote
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
