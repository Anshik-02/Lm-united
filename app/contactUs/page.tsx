"use client";

import React from 'react';
import { Phone, Mail } from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="flex justify-center items-center px-6 py-32 md:py-48">
        <div className="w-full max-w-2xl bg-white shadow-xl shadow-slate-200/50 rounded-[2.5rem] p-10 md:p-16 text-center border border-slate-100">
          <div className="w-16 h-1 w-16 bg-orange-500 mx-auto mb-8 rounded-full" />
          <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Contact Us</h2>
          <p className="text-slate-500 text-lg font-light mb-12">Have questions about our fleet or services? Reach out to us today.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <a
              href="tel:+6479689114"
              className="group flex flex-col items-center gap-4 p-8 rounded-3xl bg-slate-50 hover:bg-orange-50 transition-all duration-300 border border-transparent hover:border-orange-100"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Phone</p>
                <span className="text-slate-900 font-bold text-lg">647 968 9114</span>
              </div>
            </a>

            <a
              href="mailto:INFO@LMUNITEDTRANSPORT.COM"
              className="group flex flex-col items-center gap-4 p-8 rounded-3xl bg-slate-50 hover:bg-orange-50 transition-all duration-300 border border-transparent hover:border-orange-100"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email</p>
                <span className="text-slate-900 font-bold text-base break-all">INFO@LMUNITED...</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

