import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="flex items-center gap-2 text-sm text-gray-900 mb-6 font-medium">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={index}>
            {/* If it has an href and is not the last item, render a Link */}
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="hover:text-emerald-600 transition-colors "
              >
                {item.label}
              </Link>
            ) : (
              /* Current page (last item) */
              <span className="text-gray-900">{item.label}</span>
            )}

            {/* Separator Chevron/Arrow */}
            {!isLast && (
              <span className="text-gray-700 text-sm">›</span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;