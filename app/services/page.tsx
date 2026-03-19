import CardComponent from '@/components/card'
import Image from 'next/image'
import React from 'react'

export default function Service() {
    return (
        <div className='bg-slate-50 min-h-screen'>
            {/* Services Hero */}
            <section className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden">
                <Image
                    src="https://res.cloudinary.com/dp25f4ybo/image/upload/v1773938234/serives_bzxmxu.jpg"
                    fill
                    alt="Our Transport Services"
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">OUR SERVICES</h1>
                    <div className="w-24 h-1.5 bg-orange-500 mx-auto mt-6 rounded-full" />
                    <p className="text-slate-200 mt-6 text-lg max-w-xl mx-auto px-6 font-light">
                        Specialized logistics and transport solutions tailored to move your business forward.
                    </p>
                </div>
            </section>

            <div className='container mx-auto px-6 py-20'>
                <div className='text-center mb-16'>
                    <h2 className='text-3xl font-bold text-slate-900'>EXPERTISE YOU CAN TRUST</h2>
                    <p className='text-slate-500 mt-4 max-w-2xl mx-auto font-light'>
                        We offer a comprehensive range of shipping options to ensure your cargo arrives safely and efficiently, no matter the volume.
                    </p>
                </div>

                <div className="flex flex-col gap-12">
                    <CardComponent
                        image='https://res.cloudinary.com/dp25f4ybo/image/upload/v1773938262/serTruck_qxuyko.jpg'
                        heading='LTL (Less-Than-Truckload)'
                        description="Cost-effective solutions for smaller loads."
                        content="LTL shipping is ideal for businesses that have smaller freight volumes but still need reliable transportation. Instead of paying for an entire truck, multiple shipments are consolidated to optimize space and reduce costs. With LM United, your shipments are carefully routed and scheduled to ensure efficiency while minimizing handling and transit times. This method provides flexibility, real-time tracking, and significant cost savings."
                    />

                    <CardComponent
                        image='https://res.cloudinary.com/dp25f4ybo/image/upload/v1773938827/1_l5cwxy.jpg'
                        heading='FTL (Full Truckload)'
                        description="Dedicated transport for large-scale shipments."
                        content="FTL services are designed for businesses that need to transport large volumes of goods efficiently. With FTL, the entire truck is reserved for a single shipment, ensuring direct delivery without unnecessary stops or delays. This option is ideal for high-volume, fragile, or urgent shipments that require minimal handling and faster delivery times. Whether it's raw materials or retail stock, FTL provides a secure and efficient transport solution."
                    />
                </div>
            </div>
        </div>
    )
}
