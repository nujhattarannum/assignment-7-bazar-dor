'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const SortDropDown = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSort = searchParams.get('sort') || 'default';

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams.toString());

    if (value === 'default') {
      params.delete('sort');
    } else {
      params.set('sort', value);
    }

    // Updates the URL query without reloading the entire page
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="bg-white rounded-2xl p-2 shadow-sm flex items-center justify-end gap-3 border border-gray-100">
      <span className="text-sm text-gray-600 font-medium">সাজান</span>
      <select
        value={currentSort}
        onChange={handleSortChange}
        className="bg-gray-50 border border-gray-400 rounded-lg text-sm px-3 py-1.5 focus:outline-none text-gray-700 font-medium cursor-pointer"
      >
        <option value="default">ডিফল্ট</option>
        <option value="price-low">দাম: কম থেকে বেশি</option>
        <option value="price-high">দাম: বেশি থেকে কম</option>
      </select>
    </div>
  );
};

export default SortDropDown;