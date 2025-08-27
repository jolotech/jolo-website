import React from "react";
import clsx from "clsx";

interface AppBadgeProps {
  href: string;
  children: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  text?: string;
  className?: string;
}

export const Badge: React.FC<AppBadgeProps> = ({
  href,
  children,
  bgColor = "bg-black",
  textColor = "text-white",
  text = "Get the App",
  className,
}) => {
  return (
    <a
      href={href}
      className={clsx("inline-flex items-center gap-1 space-x-2 font-medium", bgColor, textColor, className)}
    >
      {text && <span>{text}</span>}
      {children}
    </a>
  );
};
