import { Navbar2 } from '@/components/navbar';
import React from 'react';

export default function ContactUs() {
  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      <Navbar2 />


      <div className="flex justify-center items-center px-6 py-50 mt-20">
        <div className="w-full md:max-w-2xl  mx-auto p-6 bg-white shadow-lg rounded-lg text-center">
          <h2 className="text-3xl text-black font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700 text-lg">Have questions? Reach out to us!</p>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-center gap-2">
              <span className="text-xl">📞</span>
              <a href="tel:+ 647 968 9114" className="text-blue-600 text-lg font-medium hover:underline">
              647 968 9114
              </a>
            </div>

            <div className="flex items-center justify-center gap-2">
              <span className="text-xl">📧</span>
              <a href="mailto:INFO@LMUNITEDTRANSPORT.COM" className="text-blue-600 text-lg font-medium hover:underline">
                INFO@LMUNITEDTRANSPORT.COM
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
