import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <section className="bg-[#f8faf8] border border-[#dfe7e1] mx-4 sm:mx-6 lg:mx-auto mt-6 max-w-[1080px] rounded-[22px] px-4  sm:px-6 py-6 sm:py-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">

      {/* Left Content */}
      <div className="flex-1 text-center md:text-left">
        {/* Eyebrow */}
        <div className="mb-3 inline-flex rounded-full bg-[#e3f3e8] px-3 py-1 text-xs sm:text-[14px] font-medium text-[#07883f]">
          মঙ্গলবার, ৬ অক্টোবর, ২০২৬
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-[32px] font-extrabold leading-tight tracking-[-0.5px] sm:tracking-[-1px] text-[#18251d]">
          আজকের বাজারের দাম এক নজরে
        </h1>

        {/* Subtitle */}
        <p className="mt-3 sm:mt-4 max-w-[600px] text-sm sm:text-[16px] leading-relaxed text-gray-500 mx-auto md:mx-0">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তৃত,
          দ্রুত, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
        </p>

        {/* CTA */}
        <div className="mt-5 sm:mt-6">
          <a
            href="#সব-পণ্য"
            className="inline-flex items-center justify-center min-h-0 h-[40px] rounded-xl bg-[#07883f] px-5 text-[13px] font-semibold text-white shadow-md hover:bg-[#056d32] transition-colors"
          >
            সব পণ্য দেখুন
          </a>
        </div>
      </div>

      {/* Right Image (Now visible on mobile, tablet, and desktop) */}
      <div className="flex w-full sm:w-[220px] md:w-[260px] shrink-0 items-center justify-center">
        <Image
          src="/bazar-hero.png"
          alt="বাজারের পণ্যের ঝুড়ি"
          width={230}
          height={230}
          className="h-auto w-[160px] sm:w-[200px] md:w-[230px] object-contain"
        />
      </div>

    </section>
  );
};

export default Banner;