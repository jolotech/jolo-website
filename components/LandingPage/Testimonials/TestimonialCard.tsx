import { FaQuoteLeft } from "react-icons/fa";

interface Props {
  quote: string;
  author: string;
  rating: number;
  size: "small" | "medium";
}

const sizeClasses = {
  small: "w-[320px] h-[220px]",
  medium: "w-[380px] h-[240px]",
};

export default function TestimonialCard({ quote, author, rating, size }: Props) {
  return (
    <div className={`bg-[#F9C29E] rounded-xl p-6 shadow-md flex flex-col justify-between ${sizeClasses[size]}`}>
      {/* Top Icon + Quote */}
      <div>
        <FaQuoteLeft className="text-brown-800 mb-3" />
        <p className="text-sm md:text-base leading-relaxed">{quote}</p>
      </div>

      {/* Author + Rating */}
      <div className="mt-4">
        <div className="font-semibold">{author}</div>
        <div className="text-black">{"★".repeat(rating)}</div>
      </div>
    </div>
  );
}
