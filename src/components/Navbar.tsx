import React from 'react';
import Link from 'next/link';
import { ICategory } from '../../type/categoriesType';
import CategoryNavLinks from './CategoryNavLinks';

const Navbar = async() => {

    const res = await fetch ('https://api.abcz.workers.dev/api/bazardor/categories');
    const categories : ICategory[] = await res.json();
    
return (
    <nav className ="w-full bg-white border-b border-gray-200 py-2.5 ">
     <CategoryNavLinks categories={categories} />
    </nav>
  );

};

export default Navbar;