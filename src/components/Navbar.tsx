import React from 'react';
import Link from 'next/link';

export interface CategoryItem {
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: boolean;
}


export interface CategoriesApiResponse {
  success: boolean;
  count: number;
  cachedAt: string;
  data: CategoryItem[];
}

const Navbar = async() => {

    const res = await fetch ('https://news-api-v2.vercel.app/api/categories');
    const {data} :CategoriesApiResponse = await res.json();


return (
    <nav className="w-full bg-white border-b border-gray-200 py-2.5 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-start gap-8 overflow-x-auto text-sm text-gray-700 font-medium scrollbar-none">
        {categories.map((item) => (
          <Link 
            key={item.id} 
            href={item.href}
            className="flex items-center gap-2 hover:text-emerald-600 transition-colors whitespace-nowrap"
          >
            <span className="text-base">{item.emoji}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );

};

export default Navbar;