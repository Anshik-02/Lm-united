import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ShieldCheck, Truck, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dp25f4ybo/image/upload/v1773937883/main_bxa9s8.jpg"
          fill
          className="object-cover transition-transform duration-1000 scale-105"
          alt="Fleet of LM United Trucks"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-md">
              Efficient Transport <br /> Solutions for <span className="text-orange-500">Businesses</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-200 mt-6 leading-relaxed max-w-2xl font-light">
              We provide consistent service, on-time deliveries, and unmatched customer satisfaction.
              Our experienced team ensures smooth and hassle-free transport from start to finish.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link href="/quote">
                <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-orange-900/40 transition-all flex items-center gap-2 group">
                  Get a Quote
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/aboutUs">
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-bold py-4 px-8 rounded-full transition-all">
                  About Our Fleet
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Title Section */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-sm font-bold tracking-[0.3em] text-orange-600 uppercase mb-4">The Gold Standard</h1>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900">LM UNITED</h3>
          <p className="text-xl text-slate-500 mt-4 max-w-2xl mx-auto font-light">
            Tailored logistics and shipping services designed for your unique business needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              img: "https://res.cloudinary.com/dp25f4ybo/image/upload/v1773937921/cargo_lvuken.jpg",
              title: "Reliable Cargo Transport",
              desc: "From small shipments to large cargo, we handle it all with care and efficiency.",
              icon: <Truck className="text-orange-600" size={32} />
            },
            {
              img: "https://res.cloudinary.com/dp25f4ybo/image/upload/v1773938827/1_l5cwxy.jpg",
              title: "State-of-the-Art Fleet",
              desc: "Our vehicles are built for the road ahead, ensuring safe and timely deliveries.",
              icon: <ShieldCheck className="text-orange-600" size={32} />
            },
            {
              img: "https://res.cloudinary.com/dp25f4ybo/image/upload/v1773937949/interior_unst31.jpg",
              title: "Professional Logistics Team",
              desc: "Our crew brings professionalism, care, and expertise to every single job.",
              icon: <Users className="text-orange-600" size={32} />
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={item.img}
                  fill
                  alt={item.title}
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <div className="mb-6">{item.icon}</div>
                <h4 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h4>
                <div className="w-12 h-1 bg-orange-500 my-4 rounded-full group-hover:w-24 transition-all duration-500" />
                <p className="text-slate-600 leading-relaxed font-light">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Exceptional Service Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <Image
            src="https://res.cloudinary.com/dp25f4ybo/image/upload/v1773938081/truckmid_y1uj2h.jpg"
            fill
            alt="Trucking Service"
            className="object-cover opacity-60 mix-blend-multiply"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="lg:w-1/2 bg-white/95 backdrop-blur-xl p-10 md:p-16 rounded-[2rem] shadow-2xl border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Exceptional Service <br className="hidden md:block" /> for Every Shipment
            </h2>
            <p className="text-lg text-slate-600 mt-8 leading-relaxed font-light">
              No matter the size or scope, we’re dedicated to providing reliable and efficient transport solutions
              tailored to your unique needs. From secure packaging to timely delivery, our service is
              designed to give you peace of mind with every shipment.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link href="/aboutUs">
                <button className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-full transition-all">
                  Learn About Us
                </button>
              </Link>
              <Link href="/quote">
                <button className="bg-orange-100 text-orange-700 hover:bg-orange-200 font-bold py-4 px-8 rounded-full transition-all">
                  Request Quote
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Bar */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-orange-600 rounded-3xl p-12 text-center text-white relative overflow-hidden group">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to ship with LM United?</h2>
              <p className="mt-4 text-orange-50 font-light text-lg">Get an instant quote tailored to your shipping needs today.</p>
              <Link href="/quote" className="inline-block mt-10 bg-white text-orange-600 hover:bg-orange-50 font-bold py-4 px-10 rounded-full text-lg transition-all shadow-xl shadow-orange-900/20">
                Get Started Now
              </Link>
            </div>
            {/* Abstract background element */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
          </div>
        </div>
      </section>

      {/* Bottom Spacer */}
      <div className="py-12" />
    </div>
  );
}

