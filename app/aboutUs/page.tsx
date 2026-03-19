import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* About Us Hero */}
      <section className="relative h-[40vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dp25f4ybo/image/upload/v1773938378/aboutus_wbugdi.jpg"
          fill
          alt="LM United Fleet"
          className="object-cover transition-transform duration-1000 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/60 transition-opacity" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">OUR STORY</h1>
          <div className="w-24 h-1.5 bg-orange-500 mx-auto mt-6 rounded-full" />
        </div>
      </section>

      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Text Content */}
          <div className="lg:w-3/5">
            <div className="mb-8">
              <h2 className="text-sm font-bold tracking-[0.3em] text-orange-600 uppercase mb-4">Precision & Growth</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                Driving American <br /> <span className="text-orange-600">Businesses Forward</span>
              </h3>
            </div>

            <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
              <p>
                <span className="font-bold text-slate-900">LM United</span> is a trusted transportation company committed to delivering reliable, efficient, and cost-effective solutions across the USA. With a strong focus on customer satisfaction, we offer a wide range of services, from freight shipping to custom transport solutions.
              </p>

              <div className="bg-white p-8 rounded-3xl shadow-sm border-l-4 border-orange-500 my-8 italic">
                &quot;Our team is dedicated to ensuring timely and secure deliveries, and we take great pride in providing exceptional service to businesses and individuals alike.&quot;
              </div>

              <p>
                At LM United, we value transparency, reliability, and building long-term relationships with our clients. To ensure the highest quality service, we have invested in new, state-of-the-art equipment that enhances the efficiency and safety of our operations.
              </p>

              <p>
                Our modern fleet is regularly maintained to meet industry standards, allowing us to offer dependable and on-time deliveries. Whether you&apos;re looking to ship goods across the country or need specialized transport, LM United is here to meet your needs with professionalism and care.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 py-8 border-t border-slate-200">
              <div>
                <h4 className="text-3xl font-bold text-slate-900">100%</h4>
                <p className="text-slate-500 text-sm font-medium uppercase tracking-wider mt-1">Reliability Rate</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-slate-900">24/7</h4>
                <p className="text-slate-500 text-sm font-medium uppercase tracking-wider mt-1">Cargo Support</p>
              </div>
            </div>
          </div>

          {/* Image/Visual Side */}
          <div className="lg:w-2/5 relative">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src="https://res.cloudinary.com/dp25f4ybo/image/upload/v1773938378/aboutus_wbugdi.jpg"
                alt="LM United Professionalism"
                width={600}
                height={800}
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-600/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="bg-slate-900 py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
            To revolutionize the transport industry through innovative logistics, unwavering reliability, and a customer-first approach that drives success for every business we serve.
          </p>
        </div>
      </section>
    </div>
  );
}

