"use client";

import Link from "next/link";
import React from "react";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-slate-300">
      {/* Top Footer Section */}
      <div className="container mx-auto px-6 py-16 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company Info */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-black text-white tracking-tighter uppercase">LM <span className="text-orange-500">United</span></h2>

            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              Providing world-class transport and logistics solutions. We ensure your cargo reaches its destination safely, efficiently, and on time.
            </p>

          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link href="/aboutUs" className="hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-orange-500 transition-colors">Our Services</Link></li>
              <li><Link href="/contactUs" className="hover:text-orange-500 transition-colors">Contact Us</Link></li>
              <li><Link href="/quote" className="hover:text-orange-500 transition-colors">Get a Quote</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-orange-500 mt-1 shrink-0" size={18} />
                <span className="text-sm"> Canada</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-orange-500 shrink-0" size={18} />
                <a href="tel:+6479689114" className="text-sm hover:text-orange-500 transition-colors">647 968 9114</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-orange-500 shrink-0" size={18} />
                <a href="mailto:INFO@LMUNITEDTRANSPORT.COM" className="text-sm hover:text-orange-500 transition-colors break-all">INFO@LMUNITEDTRANSPORT.COM</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-semibold text-white">Newsletter</h3>
            <p className="text-sm text-slate-400">Subscribe to get the latest news and updates.</p>

          </div>

        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-6 py-8 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium tracking-wider">
          <p>© {currentYear} LM UNITED TRANSPORT. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">PRIVACY POLICY</Link>
            <Link href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

