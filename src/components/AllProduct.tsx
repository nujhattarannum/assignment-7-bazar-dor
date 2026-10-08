import React from 'react';
import { Product } from '../../type/categoriesType';
import ProductCard from './ProductCard';

const toBanglaNumber = (number: number) => {
  const banglaDigits = "০১২৩৪৫৬৭৮৯";

  return number
    .toString()
    .replace(/\d/g, (digit) => banglaDigits[Number(digit)]);
};

const AllProduct = async() => {

     const response = await fetch('https://api.abcz.workers.dev/api/bazardor/products');
     const allProducts:Product[] =await response.json();

   return (
    <section className="w-full bg-[#f4f6f3] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Kutaa */}
        <div className="mb-6">
          <h2 className="text-2xl font-extrabold text-gray-900">সব পণ্য</h2>
          <p className="text-xs text-gray-500 mt-1">
            মোট {toBanglaNumber(allProducts.length)}টি পণ্য দেখানো হচ্ছে
          </p>
        </div>

        {/* Grid Oomishaalee */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProduct;