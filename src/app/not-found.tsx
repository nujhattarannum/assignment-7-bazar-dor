import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-extrabold text-emerald-600">৪০৪</h1>
        <h2 className="text-2xl font-bold text-gray-800">পৃষ্ঠাটি পাওয়া যায়নি</h2>
        <p className="text-sm text-gray-500 max-w-sm mx-auto">
          আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি বিদ্যমান নেই বা স্থানান্তরিত হয়েছে।
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-2.5 rounded-xl shadow-sm transition-colors text-sm"
          >
            হোম পেজে ফিরে যান
          </Link>
        </div>
      </div>
    </div>
  );
}