"use client";

import { FC, ReactNode } from "react";
import Link from "next/link";

interface AppBadgeProps {
  text?: string;
  href?: string;
  children?: ReactNode;
}

const Badge: FC<AppBadgeProps> = ({ text = "Get the App", href = "#", children }) => {
  return (
    <Link
      href={href}
      className="
        inline-flex items-center gap-3 
        rounded-full px-6 py-3 
        bg-[var(--background-color,#fdfbf5)] text-black
        shadow-sm hover:shadow-md transition
      "
    >
      <span className="font-medium text-base">{text}</span>
      <div className="flex items-center gap-2">{children}</div>
    </Link>
  );
};

export default Badge;
