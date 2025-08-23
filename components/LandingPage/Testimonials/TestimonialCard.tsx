"use client";

import { FaQuoteLeft } from "react-icons/fa6";

type TestimonialCardProps = {
  quote: string;
  author: string;
  rating: number;
  size?: "small" | "medium" | "large";
};

export default function TestimonialCard({ quote, author, rating, size = "medium" }: TestimonialCardProps) {
  // Dynamic sizing classes
  const sizeClasses = {
    small: "col-span-1 row-span-1",
    medium: "col-span-1 md:col-span-2 row-span-1",
    large: "col-span-1 md:col-span-2 row-span-2",
  };

  return (
    <div
      className={`bg-[var(--joloOrangeLight,#F9C29E)] rounded-2xl p-6 flex flex-col justify-between shadow-sm ${sizeClasses[size]}`}
    >
      {/* Quote Icon + Text */}
      <div>
        <FaQuoteLeft className="text-xl text-[var(--joloOrangeDark,#993D1F)] mb-3" />
        <p className="text-sm md:text-base leading-relaxed">{quote}</p>
      </div>

      {/* Author + Rating */}
      <div className="mt-4">
        <p className="font-medium">{author}</p>
        <div className="flex">
          {Array.from({ length: rating }).map((_, i) => (
            <span key={i} className="text-black text-sm">
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
