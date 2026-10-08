import AllProduct from '@/components/AllProduct';
import Banner from '@/components/Banner';
import Marquee from '@/components/Marquee';
import React from 'react';

const page = () => {
  return (
   <main className="min-h-screen bg-[#f4f6f3]">
    <Marquee/>
      <Banner />
      <AllProduct />
    </main>
   
  );
};

export default page;