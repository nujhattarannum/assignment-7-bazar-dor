import React from 'react';
import { Product } from '../../type/categoriesType';
import ProductCard from './ProductCard';

const SelectiveProduct = async() => {
    
     const response = await fetch('https://api.abcz.workers.dev/api/bazardor/products');
     const allProducts:Product[] =await response.json();

     const upProducts = allProducts.filter(
  (product) => product.change.dir === "up"
);

const downProducts = allProducts.filter(
  (product) => product.change.dir === "down"
);

const topUpProducts = [...upProducts]
  .sort((a, b) => b.today - a.today)
  .slice(0, 6);

  const topDownProducts = [...downProducts]
  .sort((a, b) => a.today - b.today)
  .slice(0, 6);

   return (
    <section className="w-full bg-[#f4f6f3] py-8 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto mb-6">
        {/* Header for price up*/}
       
          <h2 className=" mb-6 text-2xl font-extrabold text-gray-900">
            দাম বেড়েছে
          </h2>
        
    
        {/* Grid  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {topUpProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

        <div className="max-w-7xl mx-auto">
        {/* Header for price down */}
      
          <h2 className=" mb-6 text-2xl font-extrabold text-gray-900">
           দাম কমেছে
            </h2>
    

        {/* Grid  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {topDownProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectiveProduct;