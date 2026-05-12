import { ReactNode } from "react";

export default function SectionHeader({
  title,
  linkHref,
  linkLabel = "Lihat Semua",
  rightElement,
}: {
  title: string;
  linkHref?: string;
  linkLabel?: string;
  rightElement?: ReactNode;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
      <h2 className="text-lg font-bold text-gray-900 pl-3 border-l-4 border-blue-600">
        {title}
      </h2>
      {rightElement ? (
        rightElement
      ) : linkHref ? (
        <a
          href={linkHref}
          className="text-sm text-blue-600 font-medium hover:text-blue-700 transition-colors"
        >
          {linkLabel} →
        </a>
      ) : null}
    </div>
  );
}
