"use client";

import Masonry from "react-masonry-css";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    quote: "Jolo has been a real life-saver. The times when I am caught up...",
    author: "Mary Adekaija",
    rating: 5,
    size: "medium",
  },
  {
    quote: "Since using Jolo, I’ve saved so much time. I can focus on work...",
    author: "Chinedu Okafor",
    rating: 5,
    size: "small",
  },
  {
    quote: "The convenience Jolo provides is unmatched. I no longer worry...",
    author: "Aisha Bello",
    rating: 4,
    size: "medium",
  },
  {
    quote: "It’s been an amazing seamless experience using Jolo...",
    author: "Mary Adekaija",
    rating: 5,
    size: "small",
  },
  {
    quote: "It’s been an amazing seamless experience using Jolo...",
    author: "Mary Adekaija",
    rating: 5,
    size: "small",
  },
  {
    quote: "It’s been an amazing seamless experience using Jolo...",
    author: "Mary Adekaija",
    rating: 5,
    size: "small",
  },
  {
    quote: "It’s been an amazing seamless experience using Jolo...",
    author: "Mary Adekaija",
    rating: 5,
    size: "small",
  },
  {
    quote: "It’s been an amazing seamless experience using Jolo...",
    author: "Mary Adekaija",
    rating: 5,
    size: "small",
  },
  {
    quote: "It’s been an amazing seamless experience using Jolo...",
    author: "Mary Adekaija",
    rating: 5,
    size: "small",
  },
  {
    quote: "It’s been an amazing seamless experience using Jolo...",
    author: "Mary Adekaija",
    rating: 5,
    size: "small",
  },
  {
    quote: "It’s been an amazing seamless experience using Jolo...",
    author: "Mary Adekaija",
    rating: 5,
    size: "small",
  },
  {
    quote: "It’s been an amazing seamless experience using Jolo...",
    author: "Mary Adekaija",
    rating: 5,
    size: "small",
  },
];

// Masonry responsive breakpoints
const breakpointColumnsObj = {
  default: 3,
  768: 1,
};

export default function TestimonialsSection() {
  return (
    <section className="bg-[#FEFAEF] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Loved by our very own customers</h2>

        {/* Horizontal scroll with Masonry */}
        <div className="overflow-y-auto">
          <div className="min-w-[1200px]">
            {" "}
            {/* ensures overflow */}
            <Masonry breakpointCols={breakpointColumnsObj} className="flex gap-6" columnClassName="space-y-6">
              {testimonials.map((t, i) => (
                <TestimonialCard
                  key={i}
                  quote={t.quote}
                  author={t.author}
                  rating={t.rating}
                  size={t.size as "small" | "medium"}
                />
              ))}
            </Masonry>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-12">
          <a
            href="/TestimonialSection"
            className="px-6 py-2 border border-black rounded-full text-sm hover:bg-black hover:text-white transition"
          >
            See all testimonials
          </a>
        </div>
      </div>
    </section>
  );
}
