import React from 'react';
import { Product } from '../../type/categoriesType';
import ProductCard from './ProductCard';

const SelectiveProduct = async () => {
  const response = await fetch('https://api.abcz.workers.dev/api/bazardor/products');
  const allProducts: Product[] = await response.json();

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
    <section className="w-full bg-[#f4f6f3] py-8 px-4 sm:px-6 lg:px-8">
      {/* Price Up Section */}
      <div className="max-w-[1080px] mx-auto mb-10">
        <h2 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-extrabold text-gray-900">
          আজ দাম বেড়েছে ▲
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {topUpProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Price Down Section */}
      <div className="max-w-[1080px] mx-auto">
        <h2 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-extrabold text-gray-900">
          আজ দাম কমেছে ▼
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {topDownProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectiveProduct;