import React from "react";
import clsx from "clsx";

interface AppBadgeProps {
  href: string;
  children: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  text?: string;
}

export const Badge: React.FC<AppBadgeProps> = ({
  href,
  children,
  bgColor = "bg-black",
  textColor = "text-white",
  text = "Get the App",
}) => {
  return (
    <a
      href={href}
      className={clsx("inline-flex items-center px-6 py-3 gap-3 rounded-full space-x-2", bgColor, textColor, text)}
    >
      <span className="font-medium">{text}</span>
      {children}
    </a>
  );
};
