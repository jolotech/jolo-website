"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/LandingPage/Badge/Badge";
import HeroUnionimg from "@/public/images/herom-b.svg";
import iPhoneMockup from "@/public/images/HeroMain.svg";
import HeroBackground from "@/public/images/HeroBG.svg";
import PlayImg from "@/public/images/googleIcon.svg";
import AppleImg from "@/public/images/AppleImg.svg";
import Container from "@/components/container/Container";
import Link from "next/link";

export default function HeroSection() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-[var(--joloOrange)] text-white overflow-hidden">
      {/* Constrained text + buttons */}
      <Container>
        <div className="mt-16 sm:mt-8 md:mt-16 py-16 text-center">
          {/* Text animation */}
          <div className="max-w-4xl mx-auto">
            <article>
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-medium leading-tight transition-all duration-700 ease-out ${
                  animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
                }`}
              >
                Your Market Plug – Everything from Market to Meal to Delivery.
              </h1>

              <p
                className={`font-helvetica-neue mt-6 md:mt-10 text-base md:text-lg text-orange-100 transition-all duration-700 delay-200 ease-out ${
                  animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
                }`}
              >
                We get it! Market runs can be hectic. That’s why Jolo makes it easy to shop everything you’d buy from
                your favorite markets, straight from your phone. From fresh produce to household staples, we handle the
                haggling, the queues, and the early morning hustle so you don’t have to.
              </p>
            </article>
          </div>

          {/* Badges */}
          <div
            className={`mt-8 flex justify-center gap-4 transition-all duration-700 delay-300 ease-out ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
            }`}
          >
            <Badge href="#" text="" className="h-12 md:h-14 rounded-lg px-4">
              <Link
                href="https://play.google.com/store/apps/details?id=com.jolojolo.user.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center">
                  <Image src={PlayImg} alt="Google Play" className="w-10 h-10 object-contain" />
                  <div className="flex flex-col leading-tight ml-2">
                    <span className="text-xs text-left ">GET IT ON</span>
                    <span className="text-base font-semibold -mt-1">Google Play</span>
                  </div>
                </div>
              </Link>
            </Badge>

            <Badge href="#" text="" textColor="text-black" className="rounded-md px-4 bg-white">
              <Link
                href="https://apps.apple.com/ng/app/jolo-delivery/id6748380014"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center">
                  <Image src={AppleImg} alt="Apple Store" className="w-10 h-10 object-contain" />
                  <div className="flex flex-col leading-tight ml-2">
                    <span className="text-xs text-left">Download on the</span>
                    <span className="text-base font-semibold -mt-1">App Store</span>
                  </div>
                </div>
              </Link>
            </Badge>
          </div>
        </div>
      </Container>

      {/* Phone with background (full width) */}
      <div className="relative w-full flex justify-center">
        <Image
          src={HeroBackground}
          alt="hero background"
          className="absolute inset-0 w-full h-full object-cover opacity-[50%] mix-blend-overlay"
        />

        {/* Phone animation */}
        <div
          className={`relative w-[260px] md:w-[320px] lg:w-[380px] -mb-12 transition-all duration-700 ease-out ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <Image src={iPhoneMockup} alt="Jolo App" width={400} height={800} className="mx-auto relative z-10 md:mt-6" />
        </div>
      </div>

      {/* Union at the bottom (full width) */}
      <div className="absolute bottom-0 left-0 w-full">
        <Image src={HeroUnionimg} alt="Hero Union" className="w-full h-auto relative z-20" />
      </div>
    </section>
  );
}
