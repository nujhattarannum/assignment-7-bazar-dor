import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-4 px-4 sm:px-6">
      <div className="max-w-[1080px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">

        {/* Left Text */}
        <p className="text-xs sm:text-sm text-gray-900">
          বাজার দর — প্রত্যেকটি পণ্যের দাম এক নজরে।
        </p>

        {/* Right Text */}
        <p className="text-xs sm:text-sm text-gray-600">
          সকল দাম সংগ্রহ; বাজার ব্যবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>

      </div>
    </footer>
  );
};

export default Footer;