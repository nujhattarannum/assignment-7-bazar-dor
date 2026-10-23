'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ICategory } from '../../type/categoriesType'; // Adjust path if needed

interface Props {
  categories: ICategory[];
}

export default function CategoryNavLinks({ categories }: Props) {
  const pathname = usePathname();

  return (
    <div className="max-w-[1080px] mx-auto flex items-center justify-start gap-3 overflow-x-auto text-sm text-gray-700 font-medium scrollbar-none px-6">
      {categories.map((item) => {
        const href = `/category/${item.slug}`;
        const isActive = pathname === href; // Checks if current URL matches this category link

        return (
          <Link 
            key={item.id} 
            href={href}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all whitespace-nowrap shrink-0 ${
              isActive
                ? 'bg-emerald-600 text-white shadow-sm' // Active highlighted state (Figma style)
                : 'bg-white text-gray-700 hover:text-emerald-600 border border-gray-100' // Default state
            }`}
          >
            <span className="text-base">{item.icon}</span>
            <span className="font-bold">{item.nameBn}</span>
          </Link>
        );
      })}
    </div>
  );
}