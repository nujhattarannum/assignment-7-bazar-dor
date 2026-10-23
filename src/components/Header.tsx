import React from 'react';
import Link from "next/link";
import Image from 'next/image';

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200 py-3 px-4 sm:px-6">
      <div className="max-w-[1080px] mx-auto flex items-center justify-between">
        
        {/* Left Section: Brand Logo, Title & Date */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
          <Image
            src="/logo-icon.png"
            alt="Logo"
            width={40}
            height={40}
            quality={100}
            className="bg-emerald-600 rounded-xl p-2 object-contain w-9 h-9 sm:w-10 sm:h-10 shrink-0"
          />
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
              বাজার দর
            </h1>
            <p className="text-[11px] sm:text-xs text-gray-500 font-medium mt-0.5">
              মঙ্গলবার, ৬ অক্টোবর, ২০২৬
            </p>
          </div>
        </Link>

        {/* Right Section: Sign In & Sign Up Buttons */}
        <div className="flex items-center gap-3 sm:gap-6">
          <Link 
            href="/signIn" 
            className="text-xs sm:text-sm font-semibold text-gray-800 hover:text-emerald-600 transition-colors"
          >
            সাইন ইন
          </Link>

          <Link 
            href="/signUp" 
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-xl shadow-sm transition-colors whitespace-nowrap"
          >
            সাইন আপ
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Header;