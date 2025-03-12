import CardComponent from '@/components/card'

import { Navbar2 } from '@/components/navbar'
import Image from 'next/image'
import React from 'react'

export default function Service() {
  return (
    <div className='h-full bg-white'>
        <Navbar2 />

        <Image 
        width={0}
        height={0}
            src="/serives.jpg" 
            alt="Our Services" 
            className="mt-16 w-full" 
            layout="responsive"
        />

        <div className='mt-10 flex flex-col gap-10 px-7 md:px-16 lg:px-30'>
            <h2 className='font-bold text-3xl text-black text-center md:text-left'>
                SERVICES WE PROVIDE
            </h2>

            <div  className=" hidden md:flex flex-wrap justify-center gap-10">
                <CardComponent 
                    image='serTruck.jpg' 
                    heading='LTL' 
                    description="LTL shipping is a cost-effective solution for businesses shipping smaller loads that don't require a full truck." 
                    content="LTL (Less-Than-Truckload) shipping is ideal for businesses that have smaller freight volumes but still need reliable transportation. Instead of paying for an entire truck, multiple shipments are consolidated to optimize space and reduce costs.

With LTL, shipments are carefully routed and scheduled to ensure efficiency while minimizing handling and transit times. This method provides flexibility, real-time tracking, and cost savings, making it a great choice for businesses looking to move goods efficiently without the expense of a full truckload."
                />

                <CardComponent 
                    image='trucks.jpg' 
                    heading='FTL' 
                    description="FTL shipping offers a dedicated truck for a single shipment, making it the best choice for large, heavy, or time-sensitive freight." 
                    content="FTL (Full Truckload) services are designed for businesses that need to transport large volumes of goods efficiently. With FTL, the entire truck is reserved for a single shipment, ensuring direct delivery without unnecessary stops or delays.

This option is ideal for high-volume, fragile, or urgent shipments that require minimal handling and faster delivery times. Whether it's raw materials, retail stock, or industrial equipment, FTL provides a secure and efficient transport solution tailored to business needs."
                />
            </div>
            <div  className="flex md:hidden flex-wrap justify-center gap-10">
                <CardComponent 
                    image='serTruck.jpg' 
                    heading='LTL' 
                    description="LTL shipping is a cost-effective solution for businesses shipping smaller loads that don't require a full truck." 
                    content="LTL (Less-Than-Truckload) shipping is ideal for businesses that have smaller freight volumes but still need reliable transportation. Instead of paying for an entire truck, multiple shipments are consolidated to optimize space and reduce costs."
                />

                <CardComponent 
                    image='trucks.jpg' 
                    heading='FTL' 
                    description="FTL shipping offers a dedicated truck for a single shipment, making it the best choice for large, heavy, or time-sensitive freight." 
                    content="FTL (Full Truckload) services are designed for businesses that need to transport large volumes of goods efficiently. With FTL, the entire truck is reserved for a single shipment, ensuring direct delivery without unnecessary stops or delays."
                />
            </div>
        </div>
    </div>
  )
}