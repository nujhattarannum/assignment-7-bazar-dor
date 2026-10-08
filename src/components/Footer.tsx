import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#f1f5f2] border-t border-gray-200">
      <div className="max-w-[1250px] mx-auto px-4 h-[58px] flex items-center justify-between">

        {/* Left Text */}
        <p className="text-xs text-gray-700">
          বাজার দর — প্রত্যেকটি পণ্যের দাম এক নজরে।
        </p>

        {/* Right Text */}
        <p className="text-xs text-gray-700">
          সকল দাম সংগ্রহ; বাজার ব্যবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>

      </div>
    </footer>
  );
};

export default Footer;