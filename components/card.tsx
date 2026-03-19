"use client";

import React from 'react';
import Image from 'next/image';

interface CardProps {
  heading: string;
  description: string;
  image: string;
  content: string;
}

export default function CardComponent({ heading, description, image, content }: CardProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-8 items-stretch mb-16 bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100">
      {/* Visual Card Side */}
      <div className="lg:w-1/3 flex flex-col group">
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={image}
            fill
            alt={heading}
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        <div className="p-8 flex-grow flex flex-col justify-center bg-slate-50 group-hover:bg-orange-50 transition-colors duration-500">
          <h3 className="text-2xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
            {heading}
          </h3>
          <p className="text-sm text-slate-500 mt-2 font-medium uppercase tracking-wider">
            {description}
          </p>
        </div>
      </div>

      {/* Content Side */}
      <div className="lg:w-2/3 p-8 md:p-12 flex flex-col justify-center">
        <div className="w-12 h-1 bg-orange-500 mb-6 rounded-full" />
        <p className="text-lg text-slate-600 leading-relaxed font-light first-letter:text-4xl first-letter:font-bold first-letter:text-slate-900 first-letter:float-left first-letter:mr-3">
          {content}
        </p>
      </div>
    </div>
  );
}

