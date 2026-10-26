import React from 'react';
import { notFound } from 'next/navigation';
import { ICategory, Product } from '../../../../type/categoriesType';
import SortDropDown from '@/components/SortDropDown';
import ProductCard from '@/components/ProductCard';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    sort?: string;
  }>;
}

const toBanglaNumber = (num: number | string): string => {
  const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return num
    .toString()
    .replace(/\d/g, (digit) => banglaDigits[parseInt(digit, 10)]);
};

const CategoryWisePage = async ({ params, searchParams }: PageProps) => {
  const { slug } = await params;
  const { sort } = await searchParams;

  let data: Product[] = [];
  let categories: ICategory | null = null;

  // 1. Wrap ONLY the fetch logic in try/catch
  try {
    const [productsRes, categoriesRes] = await Promise.all([
      fetch(`https://api.abcz.workers.dev/api/bazardor/products?category=${slug}`),
      fetch(`https://api.abcz.workers.dev/api/bazardor/categories/${slug}`)
    ]);

    if (!productsRes.ok || !categoriesRes.ok) {
      notFound();
    }

    data = await productsRes.json();
    categories = await categoriesRes.json();
  } catch (error) {
    notFound();
  }

  // 2. Trigger notFound() if data is empty or invalid
  if (!Array.isArray(data) || data.length === 0 || !categories?.nameBn) {
    notFound();
  }

  // 3. Sort array based on the query parameter
  const sortedProducts = [...data];
  if (sort === 'price-low') {
    sortedProducts.sort((a, b) => Number(a.today) - Number(b.today));
  } else if (sort === 'price-high') {
    sortedProducts.sort((a, b) => Number(b.today) - Number(a.today));
  }

  // 4. JSX is now completely outside of try/catch
  return (
    <div className="min-h-screen bg-[#f3f6f3] text-gray-800 ">
      <div className="max-w-[1080px] mx-auto pt-6 space-y-5">

        {/* --- Category Banner Header Card --- */}
        <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-4 border border-gray-100">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-3xl shrink-0">
            {categories.icon}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{categories.nameBn}</h1>
            <p className="text-sm text-gray-500 mt-1">
              {toBanglaNumber(data.length)}টি পণ্যের আজকের দাম ও পরিবর্তন
            </p>
          </div>
        </div>

        {/* --- Sort Bar --- */}
        <SortDropDown />

        {/* --- Items Count Text --- */}
        <div className="text-sm text-gray-500 font-medium">
          মোট {toBanglaNumber(data.length)}টি পণ্য দেখানো হচ্ছে
        </div>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {sortedProducts.map((item: Product) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>

      </div>
    </div> 
  );
};

export default CategoryWisePage;