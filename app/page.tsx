import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full relative bg-[#f9f9f9]">
      <Navbar />


      <div className="relative">
        <div className=" hidden  md:block absolute top-80 left-1/2 transform -translate-x-1/2 text-center px-4">
          <h1 className="font-bold text-3xl md:text-4xl">
            Efficient Transport Solutions for <br className="hidden md:block" />
            Businesses Large and Small
          </h1>
          <p className="font-extralight text-base text-gray-600 leading-6 mt-4">
            We believe in consistent service, on-time deliveries,
            <br className="hidden md:block" />
            and customer satisfaction. <br className="hidden md:block" />
            Our experienced team ensures smooth and hassle-free
            <br className="hidden md:block" />
            transport from start to finish.
          </p>
          <button className="rounded-lg bg-white px-7 py-3 mt-4 hover:brightness-75 text-black cursor-pointer">
            Get a Quote
          </button>
        </div>
        <Image
          src="/main.jpg"
          width={800}
          height={500}
          className="w-full h-auto"
          alt="Main Image"
        />
      </div>


      <div className="flex flex-col text-center mt-10 px-4">
        <h1 className="font-bold text-4xl text-black">LM UNITED</h1>
        <p className="font-light text-2xl text-black mt-2">
          Tailored services for all your shipping needs.
        </p>
      </div>


      <div className="flex flex-wrap justify-center gap-10 px-4 mt-20">
        {[
          {
            img: "/cargo.jpg",
            title: "Cargo Transport You Can Rely On",
            desc: "From small shipments to large cargo, we handle it all with care and efficiency.",
          },
          {
            img: "/trucks.jpg",
            title: "Reliable Trucks for Every Journey",
            desc: "Our fleet is built for the road ahead, ensuring safe and timely deliveries.",
          },
          {
            img: "/interior.jpg",
            title: "Reliable People, Reliable Service",
            desc: "Our crew brings professionalism, care, and expertise to every job.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center max-w-sm"
          >
            <Image
              src={item.img}
              width={300}
              height={300}
              alt={item.title}
              className="rounded-lg"
            />
            <h4 className="text-black text-lg mt-3 font-semibold">
              {item.title}
            </h4>
            <span className="w-40 bg-[#1F2937] h-0.5 my-2"></span>
            <p className="font-light text-gray-700 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className=" mb-10 hidden relative md:flex items-center mt-14 ">
        <img src="/truckmid.jpg" alt="" width="950" height="950" />
        <div className="absolute w-[550px] h-[500px] bg-white z-10 text-start flex flex-col gap-2 items-center left-[41rem]">
          <h2 className="  font-semibold text-2xl m-1 text-black mt-14">
            Exceptional Service for Every Shipment
          </h2>
          <p className=" font-light text-base ml-12 text-gray-700">
            No matter the size or scope, we’re dedicated to providing reliable
            <br></br>
            and efficient transport solutions tailored to your unique needs.
            <br></br> From secure packaging to timely delivery, our service is
            designed to give you peace of mind with every <br></br>
            shipment.
          </p>

          <button className="bg-[#1F2937] right-44 relative rounded-lg py-2 px-4 mt-20 hover:brightness-75 cursor-pointer ">
            About Us
          </button>
        </div>
        <div className="absolute w-full max-w-lg bg-white z-10 text-center flex flex-col gap-2 p-6 shadow-lg rounded-lg md:hidden ">
          <h2 className="font-semibold text-2xl text-black mt-4">
            Exceptional Service for Every Shipment
          </h2>
          <p className="font-light text-base text-gray-700">
            No matter the size or scope, we’re dedicated to providing reliable
            and efficient transport solutions tailored to your needs. Secure
            packaging and timely delivery give you peace of mind with every
            shipment.
          </p>

          <button className="bg-[#1F2937] text-white mt-4 rounded-lg py-2 px-4 hover:brightness-75 cursor-pointer">
            About Us
          </button>
        </div>
      </div>
      <div className=" w-full max-w-lg mt-10 bg-white z-10 text-center flex flex-col gap-2 p-6 shadow-lg rounded-lg md:hidden ">
        
        <h2 className="font-semibold text-2xl text-black mt-4">
          
          Exceptional Service for Every Shipment
        </h2>
        <p className="font-light text-base text-gray-700">
          
          No matter the size or scope, we’re dedicated to providing reliable and
          efficient transport solutions tailored to your needs. Secure packaging
          and timely delivery give you peace of mind with every shipment.
        </p>
        <button className="bg-[#1F2937] text-white mt-4 rounded-lg py-2 px-4 hover:brightness-75 cursor-pointer">
          
          GET A QUOTE
        </button>
      </div>

      <div className="w-full h-0.5 bg-black mt-10"></div>
    </div>
  );
}
