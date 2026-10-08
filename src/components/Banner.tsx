import Image from 'next/image';
import React from 'react';

const Banner = () => {
     return (
    <section className="bg-[#f4f6f3] px-4 py-6 mx-auto mt-6 flex h-[265px] max-w-[1050px] items-center justify-between rounded-[22px] border border-[#dfe7e1] bg-[#f8faf8] px-4 sm:px-6 lg:px-4">

      {/* Left Content */}
      <div className="flex-1">
        {/* Eyebrow */}
        <div className="mb-3 inline-flex rounded-full bg-[#e3f3e8] px-3 py-1 text-[13px] font-medium text-[#07883f]">
          মঙ্গলবার, ৬ অক্টোবর, ২০২৬
        </div>

        {/* Heading */}
        <h1 className="text-[32px] font-extrabold leading-[1.2] tracking-[-1px] text-[#18251d]">
          আজকের বাজারের দাম এক নজরে
        </h1>

        {/* Subtitle */}
        <p className="mt-4 max-w-[600px] text-[15px] leading-[1.55] text-[#68736d]">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তৃত,
          দ্রুত, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
        </p>

        {/* CTA */}
        <a
          href="#সব-পণ্য"
          className="btn mt-6 min-h-0 h-[40px] border-none bg-[#07883f] px-5 text-[13px] font-semibold text-white shadow-md hover:bg-[#056d32]"
        >
          সব পণ্য দেখুন
        </a>
      </div>

      {/* Right Image */}
<div className="flex w-[260px] shrink-0 items-center justify-center">
  <Image
   src="/bazar-hero.png"
    alt="বাজারের পণ্যের ঝুড়ি"
    width={230}
    height={230}
    className="h-auto w-[230px] object-contain"
  />
</div>

    </section>
  );
};

export default Banner;