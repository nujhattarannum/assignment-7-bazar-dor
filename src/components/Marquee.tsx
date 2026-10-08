import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"
import React from 'react';
import { Product } from "../../type/categoriesType";


const toBanglaNumber = (value: number) => {
  const banglaDigits = "০১২৩৪৫৬৭৮৯";

  return value
    .toString()
    .replace(/\d/g, (digit) => banglaDigits[Number(digit)]);
};

const Marquee = async () => {

  const response = await fetch( "https://api.abcz.workers.dev/api/bazardor/products" );

  const products: Product[] = await response.json();

  return (

    <MarqueeText direction = "right" duration ={15}>
    <div className="w-full overflow-hidden border-y border-gray-200 bg-white">
        {/* First copy */}
        <div className="flex">
          {products.map((product) => {
            const { dir, pct } = product.change;

            return (
              <div
                key={product.id}
                className="flex h-9 items-center whitespace-nowrap border-r border-gray-200 px-4 text-xs"
              >
                {/* Icon */}
                <span className="mr-2 text-sm">
                  {product.image}
                </span>

                {/* Product name */}
                <span className="text-gray-700">
                  {product.nameBn}
                </span>

                {/* Price */}
                <span className="mx-1 text-gray-600">
                  {toBanglaNumber(product.today)} টাকা/{product.unit}
                </span>

                {/* Change */}
                <span
                  className={
                    dir === "up"
                      ? "font-semibold text-red-500"
                      : dir === "down"
                        ? "font-semibold text-green-600"
                        : "font-semibold text-gray-500"
                  }
                >
                  {dir === "up"
                    ? "▲"
                    : dir === "down"
                      ? "▼"
                      : "—"}{" "}
                  {toBanglaNumber(pct)}%
                </span>
              </div>
            );
          })}
        </div>
    </div>
    </MarqueeText>
  );
};

export default Marquee;