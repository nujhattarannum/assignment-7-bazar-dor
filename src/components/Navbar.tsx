import React from 'react';
import Link from 'next/link';
import { ICategory } from '../../type/categoriesType';



const Navbar = async() => {

    const res = await fetch ('https://api.abcz.workers.dev/api/bazardor/categories');
    const categories : ICategory[]= await res.json();


return (
    <nav className="w-full bg-white border-b border-gray-200 py-2.5 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-start gap-8 overflow-x-auto text-sm text-gray-700 font-medium scrollbar-none">
        {categories.map((item) => (
          <Link 
            key={item.id} 
            href=''
            className="flex items-center gap-2 hover:text-emerald-600 transition-colors whitespace-nowrap"
          >
            <span className="text-base">{item.icon}</span>
            <span>{item.nameBn}</span>
          </Link>
        ))}
      </div>
    </nav>
  );

};

export default Navbar;