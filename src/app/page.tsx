import AllProduct from '@/components/AllProduct';
import Banner from '@/components/Banner';
import SelectiveProduct from '@/components/SelectiveProduct';
import React from 'react';

const page = () => {
  return (
   <main className="min-h-screen bg-[#f4f6f3]">
      <Banner />
      <SelectiveProduct/>
      <AllProduct />
    </main>
   
  );
};

export default page;