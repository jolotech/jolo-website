import React from "react";
import Masonry from "react-masonry-css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  { id: 1, text: "Jolo helped me scale my business fast 🚀", author: "Adedeji" },
  { id: 2, text: "Amazing support team!", author: "Fatima" },
  { id: 3, text: "The UI is so clean and smooth!", author: "Chinedu" },
  { id: 4, text: "Seamless transactions every time.", author: "Grace" },
  { id: 5, text: "Best app for vendors 💯", author: "John" },
];

const breakpoints = {
  default: 3,
  1100: 2,
  700: 1,
};

export default function MasonrySlider() {
  return (
    <div className="w-full px-4 py-12">
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation
        spaceBetween={30}
        slidesPerView={1}
        className="testimonial-swiper"
      >
        <SwiperSlide>
          <Masonry breakpointCols={breakpoints} className="flex gap-4" columnClassName="bg-transparent space-y-4">
            {testimonials.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl p-6 shadow-md">
                <p className="text-gray-700 text-base mb-4">“{item.text}”</p>
                <h4 className="text-gray-900 font-semibold">— {item.author}</h4>
              </div>
            ))}
          </Masonry>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
