"use client";

import Link from "next/link";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    quote:
      "Jolo has been a real life-saver. The times when I am caught up with office work and need to do market runs at the same time. It is not possible, But since I have been using Jolo App, It has been an amazing seamless experience.",
    author: "Mary Adekaija",
    rating: 5,
    size: "medium",
  },
  {
    quote:
      "Since using Jolo, I’ve saved so much time. I can focus on work and still have my market runs done quickly. It’s amazing!",
    author: "Chinedu Okafor",
    rating: 5,
    size: "small",
  },
  {
    quote: "The convenience Jolo provides is unmatched. I no longer worry about delays — everything runs smoothly!",
    author: "Aisha Bello",
    rating: 4,
    size: "large",
  },
  {
    quote:
      "Jolo has been a real life-saver. The times when I am caught up with office work and need to do market runs at the same time. It is not possible, But since I have been using Jolo App, It has been an amazing seamless experience.",
    author: "Mary Adekaija",
    rating: 2,
    size: "small",
  },
  {
    quote:
      "Jolo has been a real life-saver. The times when I am caught up with office work and need to do market runs at the same time. It is not possible, But since I have been using Jolo App, It has been an amazing seamless experience.",
    author: "Mary Adekaija",
    rating: 5,
    size: "medium",
  },
  {
    quote:
      "Jolo has been a real life-saver. The times when I am caught up with office work and need to do market runs at the same time. It is not possible, But since I have been using Jolo App, It has been an amazing seamless experience.",
    author: "Mary Adekaija",
    rating: 2,
    size: "small",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#FEFAEF] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Loved by our very own customers</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(150px,_auto)]">
          {testimonials.map((t, index) => (
            <TestimonialCard
              key={index}
              quote={t.quote}
              author={t.author}
              rating={t.rating}
              size={t.size as "small" | "medium" | "large"}
            />
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-12">
          <Link
            href="/TestimonialSection"
            className="px-6 py-2 border border-black rounded-full text-sm hover:bg-black hover:text-white transition"
          >
            See all testimonials
          </Link>
        </div>
      </div>
    </section>
  );
}
