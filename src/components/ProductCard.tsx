import React from 'react';
import { Product } from '../../type/categoriesType';
import Link from 'next/link';


type ProductCardProps = {
  product: Product;
};

// Bangla translation helpers
const toBanglaNumber = (num: number | string): string => {
  const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return num
    .toString()
    .replace(/\d/g, (digit) => banglaDigits[parseInt(digit, 10)]);
};

const toBanglaUnit = (unit: string): string => {
  const unitMap: Record<string, string> = {
    kg: 'কেজি',
    litre: 'লিটার',
    liter: 'লিটার',
    dozen: 'ডজন',
    piece: 'পিস',
  };
  return unitMap[unit.toLowerCase()] || unit;
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
    <div className="flex min-w-[280px] flex-col justify-between rounded-xl border border-gray-100 bg-white p-4 shadow-md">

      {/* Top Section */}
      <div className="flex items-center gap-3">

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-50 p-2 text-2xl">
          {product.image}
        </div>

        <div>
          <h3 className="text-xl font-bold leading-tight text-gray-900">
            {product.nameBn}
          </h3>

          <p className="mt-0.5 text-sm text-gray-600">
            প্রতি {toBanglaUnit(product.unit)}
          </p>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="mt-4 flex items-end justify-between">

        <div>
          <p className="text-sm font-medium text-gray-600">
            আজকের দাম
          </p>

          <p className="mt-0.5 text-xl font-bold text-gray-900">
            {toBanglaNumber(product.today)}{' '}
            <span className="text-md font-bold">
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

          <span>{toBanglaNumber(pct)}%</span>
        </div>

      </div>
    </div>
    </Link>
  );
};

export default ProductCard;