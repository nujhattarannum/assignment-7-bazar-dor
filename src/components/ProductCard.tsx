import React from 'react';
import { Product } from '../../type/categoriesType';
import Link from 'next/link';


type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const {
    change: { dir, pct },
  } = product;

  return (
    <Link
          key={product.id} 
          href={`/details/${product.id}`}
          className="block transition-transform hover:scale-[1.01]"
        >
    <div className="flex min-w-[280px] flex-col justify-between rounded-xl border border-gray-100 bg-white p-4 shadow-sm">

      {/* Top Section */}
      <div className="flex items-center gap-3">

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-50 p-2 text-2xl">
          {product.image}
        </div>

        <div>
          <h3 className="text-base font-bold leading-tight text-gray-900">
            {product.nameBn}
          </h3>

          <p className="mt-0.5 text-xs text-gray-500">
            প্রতি {product.unit}
          </p>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="mt-4 flex items-end justify-between">

        <div>
          <p className="text-xs font-medium text-gray-400">
            আজকের দাম
          </p>

          <p className="mt-0.5 text-lg font-extrabold text-gray-900">
            {product.today}{" "}
            <span className="text-sm font-semibold">
              টাকা
            </span>
          </p>
        </div>

        {/* Change */}
        <div
          className={`flex items-center gap-1 rounded-md px-2 py-0.5 text-xs font-semibold ${
            dir === "up"
              ? "bg-rose-50 text-rose-600"
              : dir === "down"
                ? "bg-emerald-50 text-emerald-600"
                : "bg-gray-100 text-gray-500"
          }`}
        >
          <span>
            {dir === "up"
              ? "▲"
              : dir === "down"
                ? "▼"
                : "—"}
          </span>

          <span>{pct}%</span>
        </div>

      </div>
    </div>
    </Link>
  );
};

export default ProductCard;