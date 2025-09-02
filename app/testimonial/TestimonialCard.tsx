import Image from "next/image";

interface Props {
  quote: string;
  author: string;
  rating: number;
  row: "top" | "bottom";
}

export default function TestimonialCard({ quote, author, rating, row }: Props) {
  // Row–based sizing
  const sizeClasses = row === "top" ? "w-[480px] h-[206px]" : "w-[380px] h-[230px]";

  return (
    // <div className={`bg-[#F9C29E] rounded-xl p-4 shadow-md flex flex-col justify-between ${sizeClasses}`}>
    //   {/* Icon + Quote inline */}
    //   <div className="flex items-start gap-2">
    //     {/* replace with your custom imported icon */}
    //     <Image src="/images/QuoteIcon.svg" alt="quote" width={20} height={20} />
    //     <p className="text-sm md:text-base ">{quote}</p>
    //   </div>

    //   {/* Author + Rating */}
    //   <div className="mt-4">
    //     <div className="font-semibold">{author}</div>
    //     <div className="text-black">{"★".repeat(rating)}</div>
    //   </div>
    // </div>
    <div className={`bg-[#F9C29E] rounded-xl p-6 shadow-md flex flex-col justify-between ${sizeClasses}`}>
      {/* Top Icon + Quote */}
      <div className="flex items-start gap-2">
        {/* replace FaQuoteLeft with your custom icon */}
        <Image src="/images/QuoteIcon.svg" alt="quote" width={20} height={20} />
        <p className="text-sm md:text-base leading-relaxed">{quote}</p>
      </div>

      {/* Author + Rating */}
      <div className="mt-2">
        <div className="font-semibold">{author}</div>
        <div className="text-black">{"★".repeat(rating)}</div>
      </div>
    </div>
  );
}
