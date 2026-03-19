"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

const NAV_LINKS = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/aboutUs" },
  { name: "SERVICES", href: "/services" },
  { name: "CONTACT US", href: "/contactUs" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm ${isScrolled ? "h-16" : "h-20"
        }`}
    >

      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center h-full">
        <Link href="/" className="relative flex items-center h-full transition-transform duration-300 hover:scale-105">
          <span className="text-2xl font-black tracking-tighter text-slate-900 flex items-center gap-1 uppercase">
            LM <span className="text-orange-600">United</span>
          </span>
        </Link>


        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative py-2 text-sm font-medium tracking-wider text-black transition-colors duration-300 hover:text-orange-600"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          <Link href="/quote">
            <button className="group relative overflow-hidden rounded-full bg-orange-500 px-6 py-2.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-orange-600 hover:shadow-orange-200/50 hover:-translate-y-0.5 active:translate-y-0">
              <span className="relative z-10 flex items-center gap-2">
                REQUEST A QUOTE
                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-black md:hidden transition-colors hover:bg-black/5"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-x-0 top-0 -z-10 h-screen w-full bg-white transition-all duration-500 ease-in-out md:hidden ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8 px-6">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-2xl font-light tracking-widest text-black transition-all duration-500 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              style={{ transitionDelay: `${i * 100}ms` }}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/quote"
            className={`mt-4 w-full max-w-xs transition-all duration-500 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            style={{ transitionDelay: `${NAV_LINKS.length * 100}ms` }}
            onClick={() => setIsOpen(false)}
          >
            <button className="w-full rounded-full bg-orange-500 py-4 text-lg font-bold text-white shadow-xl">
              REQUEST A QUOTE
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

