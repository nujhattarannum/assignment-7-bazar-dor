import React from 'react';
import Link from "next/link";

const Header = () => {
return (
    <header className="w-full bg-white border-b border-gray-100 py-3 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left Section: Brand Logo, Title & Date */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Green Shopping Cart Icon Box */}
          <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white text-xl shadow-sm">
            🛒
          </div>

          {/* Title & Bengali Date */}
          <div>
            <h1 className="text-xl font-bold text-gray-900 leading-tight">
              বাজার দর
            </h1>
            <p className="text-xs text-gray-500 font-medium mt-0.5">
              মঙ্গলবার, ৬ অক্টোবর, ২০২৬
            </p>
          </div>
        </Link>

        {/* Right Section: Sign In & Sign Up Buttons */}
        <div className="flex items-center gap-6">
          {/* Sign In Text Link */}
          <Link 
            href="/login" 
            className="text-sm font-semibold text-gray-800 hover:text-emerald-600 transition-colors"
          >
            সাইন ইন
          </Link>

          {/* Sign Up Solid Green Button */}
          <Link 
            href="/register" 
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-5 py-2 rounded-xl shadow-sm transition-colors"
          >
            সাইন আপ
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Header;