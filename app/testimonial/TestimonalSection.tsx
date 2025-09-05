"use client";

import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    quote:
      "Jolo has been a real life-saver. The times when I am caught up with office work and need to do market runs at the same time. It is not possible, But since I have been using Jolo App, It has been an amazing seamless experience.",
    author: "Mary Adekaija",
    rating: 5,
    row: "top",
  },
  {
    quote:
      "Jolo has been a real life-saver. The times when I am caught up with office work and need to do market runs at the same time. It is not possible, But since I have been using Jolo App, It has been an amazing seamless experience.",
    author: "Chinedu Okafor",
    rating: 5,
    row: "bottom",
  },
  {
    quote:
      "Jolo has been a real life-saver. The times when I am caught up with office work and need to do market runs at the same time. It is not possible, But since I have been using Jolo App, It has been an amazing seamless experience.",
    author: "Aisha Bello",
    rating: 4,
    row: "top",
  },
  {
    quote:
      "Jolo has been a real life-saver. The times when I am caught up with office work and need to do market runs at the same time. It is not possible, But since I have been using Jolo App, It has been an amazing seamless experience.",
    author: "Mary Adekaija",
    rating: 5,
    row: "bottom",
  },
  {
    quote:
      "Jolo has been a real life-saver. The times when I am caught up with office work and need to do market runs at the same time. It is not possible, But since I have been using Jolo App, It has been an amazing seamless experience.",
    author: "Mary Adekaija",
    rating: 5,
    row: "top",
  },
  {
    quote:
      "Jolo has been a real life-saver. The times when I am caught up with office work and need to do market runs at the same time. It is not possible, But since I have been using Jolo App, It has been an amazing seamless experience.",
    author: "Mary Adekaija",
    rating: 5,
    row: "bottom",
  },
  {
    quote:
      "Jolo has been a real life-saver. The times when I am caught up with office work and need to do market runs at the same time. It is not possible, But since I have been using Jolo App, It has been an amazing seamless experience.",
    author: "Mary Adekaija",
    rating: 5,
    row: "top",
  },
  {
    quote:
      "Jolo has been a real life-saver. The times when I am caught up with office work and need to do market runs at the same time. It is not possible, But since I have been using Jolo App, It has been an amazing seamless experience.",
    author: "Mary Adekaija",
    rating: 5,
    row: "bottom",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#FEFAEF] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Loved by our very own customers</h2>
      </div>

      {/* Horizontal Slider */}
      <div className="overflow-x-scroll scrollbar-hide ml-16">
        {/* left side respects layout, right side flushes */}
        <div className="flex justify-start">
          <div
            className="grid 
            grid-flow-col 
            auto-cols-max 
            grid-rows-2
            gap-x-4 md:gap-x-6
            gap-y-1 md:gap-y-2
            min-w-max 
            pl-6 pr-0 "
          >
            {testimonials.map((t, i) => (
              <TestimonialCard
                key={i}
                quote={t.quote}
                author={t.author}
                rating={t.rating}
                row={t.row as "top" | "bottom"}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-12">
        <a
          href="/testimonial"
          className="px-6 py-2 border border-black rounded-full text-sm hover:bg-black hover:text-white transition"
        >
          See all testimonials
        </a>
      </div>
    </section>
  );
}
