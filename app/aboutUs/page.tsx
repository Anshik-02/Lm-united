import { Navbar2 } from "@/components/navbar";
import Image from "next/image";


export default function AboutUs() {
  return (
    <div className="h-full bg-[#FFFFFF]">
      <Navbar2 />

      <div className="flex justify-center mt-10">
        <div className="w-full max-w-5xl bg-[#F2F2F2] border-[3px] mb-10 mt-20 border-gray-300 rounded-3xl p-10 flex flex-col md:flex-row items-center md:items-start gap-8 shadow-lg">

          <div className="md:w-1/2">
            <h1 className="font-bold text-4xl md:text-5xl text-black">INTRODUCING</h1>
            <h1 className="font-bold text-4xl md:text-5xl text-black mt-2">LM UNITED</h1>
            <p className="text-lg text-gray-700 mt-2">Innovating for a better tomorrow.</p>
            <p className="text-sm text-gray-500 mt-1">
              Learn more about who we are and what we do.
            </p>


            <div className="mt-6">
              <h2 className="font-bold text-2xl text-black">ABOUT US</h2>
              <p className="text-lg text-gray-800 mt-3 leading-relaxed">
              LM United is a trusted transportation company committed to delivering reliable, efficient, and cost-effective solutions across the USA. With a strong focus on customer satisfaction, we offer a wide range of services, from freight shipping to custom transport solutions. Our team is dedicated to ensuring timely and secure deliveries, 
              and we take great pride in providing exceptional service to businesses and individuals alike.
              
              </p>
              <p className="text-lg text-gray-800 mt-4 leading-relaxed">
              At LM United, we value transparency, reliability, and building long-term relationships with our clients.
              To ensure the highest quality service, we have invested in new, state-of-the-art equipment that enhances the efficiency and safety of our operations.
              </p>
              <p className="text-lg text-gray-800 mt-4 leading-relaxed">
               Our modern fleet is regularly maintained to meet industry standards, allowing us to offer dependable and on-time deliveries. 
              Whether youre looking to ship goods across the country or need specialized transport, LM United is here to meet your needs with professionalism and care.
              </p>
        
              <p className="text-lg text-gray-800 mt-4 leading-relaxed font-semibold">
                At LM United, we don’t just move freight—we drive American businesses forward.
              </p>
            </div>
          </div>

  
          <div className="md:w-1/2">
            <Image
              src="/aboutus.jpg"
              alt="LM United Trucks"
              width={500}
              height={300}
              className="rounded-2xl shadow-md border-gray-200 border-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
