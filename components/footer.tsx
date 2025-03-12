
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (  <footer className="bg-[#1F2937] text-white py-10">
    <div className="container mx-auto  md:px-10 lg:px-60">
      <div className="flex flex-col md:flex-row justify-between gap-10 text-center md:text-center">

        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-2xl">About Us</h2>
          <p className="font-light text-lg">LM UNITED</p>
        </div>


        <div className="flex flex-col gap-4 ml-20">
         <h2 className="font-bold text-2xl">Navigation</h2>
          <Link href={"/"}><p className="font-light text-lg">Home</p></Link>
          <Link href={"/aboutUs"}><p className="font-light text-lg">About Us</p></Link>
          <Link href={"/contactUs"}><p className="font-light text-lg">Contact Us</p></Link>
          <Link href={"/quote"}><p className="font-light text-lg">Get a Quote</p></Link>
        </div>


        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-2xl">Contact Us</h2>
          <a href="tel:+ 647 968 9114" className="font-light text-lg hover:underline">
          📞 647 968 9114
          </a>
    
          <a href="mailto:INFO@LMUNITEDTRANSPORT.COM" className="font-light text-lg hover:underline">
          📧 INFO@LMUNITEDTRANSPORT.COM
          </a>

        </div>

      </div>
    </div>
  </footer>
 

  )
}
