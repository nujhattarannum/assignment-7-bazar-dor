'use client';

import Link from 'next/link';
import React, { useEffect, useState, use } from 'react';
import { MarketPrice, Product } from '../../../../type/categoriesType';

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
  // Unwrap params in Next.js 15+
  const resolvedParams = use(params);
  const productId = resolvedParams.id;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProductDetails() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`	/api/bazardor/products?category={product.category}`);

        if (!response.ok) {
          throw new Error("পণ্যটির তথ্য লোড করা যায়নি");
        }

        const data: Product = await response.json();
        setProduct(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("একটি সমস্যা হয়েছে");
        }
      } finally {
        setLoading(false);
      } 
    }

    if (productId) {
      fetchProductDetails();
    }
  }, [productId]);

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-[#f3f6f3] flex items-center justify-center">
        <div className="text-gray-600 font-medium animate-pulse">
          ডেটা লোড হচ্ছে...
        </div>
      </div>
    );
  }

  // Error State
  if (error || !product) {
    return (
      <div className="min-h-screen bg-[#f3f6f3] flex flex-col items-center justify-center gap-4">
        <p className="text-red-600 font-semibold">{error || "পণ্য পাওয়া যায়নি"}</p>
        <Link href="/" className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm">
          হোম পেজে ফিরে যান
        </Link>
      </div>
    );
  }

  // Calculate overall Min, Max, and Avg dynamically from the markets array
  const allMins = product.markets?.map((m: MarketPrice) => m.min) || [];
  const allMaxs = product.markets?.map((m: MarketPrice) => m.max) || [];

  const minPrice = allMins.length > 0 ? Math.min(...allMins) : product.today;
  const maxPrice = allMaxs.length > 0 ? Math.max(...allMaxs) : product.today;
  
  // Difference between today and yesterday
  const priceDiff = Math.abs(product.today - product.yesterday);

  return (
    <div className="min-h-screen bg-[#f3f6f3] text-gray-800 py-6">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

        {/* Top Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center p-3 flex-shrink-0 text-4xl">
              {product.image || "🍚"}
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">{product.nameBn}</h1>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">{product.unit} · {product.categoryNameBn || product.category}</p>
              
              <p className="text-xs sm:text-sm text-gray-600 mt-2">
                গতকালের তুলনায় আজ দাম <span className="font-bold text-gray-900">{product.change.dir === "up" ? "বেড়েছে" : "কমেছে"}</span> · {priceDiff} টাকা
              </p>
            </div>
          </div>

          {/* Today's Price */}
          <div className="bg-gray-100/80 rounded-2xl p-4 text-center min-w-[140px] w-full sm:w-auto flex-shrink-0">
            <span className="text-xs text-gray-500 font-medium block">আজকের দাম</span>
            <span className="text-3xl sm:text-4xl font-extrabold text-gray-900 block my-0.5">
              {product.today}
            </span>
            <span className="text-xs text-gray-500 block">টাকা / কেজি</span>
            <span className={`text-xs font-bold inline-flex items-center justify-center gap-1 mt-1 ${product.change.dir === "up" ? 'text-red-600' : 'text-emerald-600'}`}>
              {product.change.dir === "up" ? '▲' : '▼'} {product.change.pct}%
            </span>
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm space-y-8">
          
          {/* Summary Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-gray-900">দামের সারসংক্ষেপ</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gray-50/70 rounded-2xl p-5 border border-gray-100">
                <span className="text-xs text-gray-500 font-medium block">সর্বনিম্ন দাম</span>
                <span className="text-2xl font-bold text-emerald-600 block mt-1">
                  {minPrice} টাকা
                </span>
                <span className="text-xs text-gray-500 block mt-1">সবচেয়ে কম দামের বাজার</span>
              </div>

              <div className="bg-gray-50/70 rounded-2xl p-5 border border-gray-100">
                <span className="text-xs text-gray-500 font-medium block">সর্বাধিক দাম</span>
                <span className="text-2xl font-bold text-red-500 block mt-1">
                  {maxPrice} টাকা
                </span>
                <span className="text-xs text-gray-500 block mt-1">সবচেয়ে বেশি দামের বাজার</span>
              </div>

              <div className="bg-gray-50/70 rounded-2xl p-5 border border-gray-100">
                <span className="text-xs text-gray-500 font-medium block">গড় দাম</span>
                <span className="text-2xl font-bold text-emerald-600 block mt-1">
                  {product.today} টাকা
                </span>
                <span className="text-xs text-gray-500 block mt-1">প্রতি কেজি-এর হিসাবে</span>
              </div>
            </div>
          </div>

          {/* Market Table Section */}
          <div className="space-y-4 pt-2">
            <h2 className="text-lg font-bold text-gray-900">বাজারভিত্তিক আজকের দাম</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="text-xs text-gray-500 font-semibold border-b border-gray-200">
                    <th className="py-3 px-2">বাজার</th>
                    <th className="py-3 px-2">বিভাগ</th>
                    <th className="py-3 px-2 text-center">সর্বনিম্ন</th>
                    <th className="py-3 px-2 text-center">সর্বাধিক</th>
                    <th className="py-3 px-2 text-right">গড়</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-sm text-gray-800 font-medium">
                  {product.markets?.map((row: MarketPrice, index: number) => {
                    const rowAvg = Math.round((row.min + row.max) / 2);
                    return (
                      <tr key={index} className="hover:bg-gray-50/80 transition-colors">
                        <td className="py-3.5 px-2 font-semibold text-gray-900">{row.market}</td>
                        <td className="py-3.5 px-2 text-gray-600">{row.division}</td>
                        <td className="py-3.5 px-2 text-center text-gray-700">{row.min} টাকা</td>
                        <td className="py-3.5 px-2 text-center text-gray-700">{row.max} টাকা</td>
                        <td className="py-3.5 px-2 text-right font-extrabold text-gray-900">{rowAvg} টাকা</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
};

export default Page;