"use client";

import TestimonialCard from "./TestimonialCard";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const animation = { duration: 10000, easing: (t: number) => t };

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
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: { spacing: 15, perView: 2.5 },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <section className="bg-[#FEFAEF] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Loved by our very own customers</h2>
      </div>

      {/* Horizontal Slider */}
      <div className="max-w-7xl mx-auto px-6">
        <div>
          <div ref={sliderRef} className="keen-slider">
            {testimonials.map((t, i) => (
              <div className="keen-slider__slide" key={i}>
                <TestimonialCard quote={t.quote} author={t.author} rating={t.rating} row={t.row as "top" | "bottom"} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="hidden md:flex justify-center mt-12">
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
