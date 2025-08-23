"use client";

import Image from "next/image";
import { Badge } from "@/components/LandingPage/Badge/Badge";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import iPhoneMockup from "@/public/images/iPhone.svg";
import HeroBackground from "@/public/images/HeroBG.svg";

export default function HeroSection() {
  return (
    <section className="relative bg-[var(--joloOrange)] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Your Market Plug – Everything from Market to Meal to Delivery.
          </h1>
          <p className="mt-6 text-base md:text-lg text-orange-100">
            We get it! Market runs can be hectic. That’s why Jolo makes it easy to shop everything you’d buy from your
            favorite markets, straight from your phone. From fresh produce to household staples, we handle the haggling,
            the queues, and the early morning hustle so you don’t have to.
          </p>

          {/* Badges */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Badge href="#" text="Get on Google Play">
              <FaGooglePlay className="w-5 h-5" />
            </Badge>
            <Badge href="#">
              <FaApple className="w-5 h-5" />
              <span>App Store</span>
            </Badge>
          </div>
        </div>

        <div className="flex justify-center md:justify-end relative">
          <div className="w-[260px] md:w-[320px] lg:w-[380px]">
            <Image src={iPhoneMockup} alt="Jolo App" width={400} height={800} className="relative z-10" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 flex items-center justify-center">
        <Image src={HeroBackground} alt="hero background" />
      </div>
    </section>
  );
}
