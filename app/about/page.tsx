"use client";

import Image from "next/image";
import AboutImg from "@/public/images/about/HeroImg.svg";
import MobileAboutImg from "@/public/images/about/HeroImgMobile.svg";
import MainLayout from "@/components/Layout/MainLayout";
import { FaqItems } from "@/components/LandingPage/FAQ/faq";
import FAQ from "@/components/LandingPage/FAQ/faqItem";

export default function AboutPage() {
  return (
    <MainLayout>
      <main>
        {/* Hero Section */}
        <section className="relative w-full min-h-[70vh] md:min-h-screen flex items-center justify-center">
          <Image
            src={AboutImg}
            alt="About Us background"
            fill
            className="object-cover object-center hidden md:block"
            priority
          />
          {/* for mobile view */}
          <Image
            src={MobileAboutImg}
            alt="About Us background mobile"
            fill
            className="object-cover object-center block md:hidden w-full h-full"
            priority
          />
        </section>

        <section className="relative bg-[#F9C29E] h-[400px] md:h-[500px] flex items-center justify-center">
          <div className="relative bg-[#3232321A] max-w-6xl w-full mx-auto px-6 rounded-xl h-auto md:h-[300px] py-8 md:py-0">
            {/* Inner card */}
            <div className="relative text-black h-full p-10">
              {/* Heading at top-left */}
              <h2
                className="text-2xl md:text-3xl font-semibold
                   md:absolute md:top-10 md:left-10"
              >
                Who We Are
              </h2>

              {/* Article at bottom-right */}
              <article
                className="mt-6 md:mt-0 text-sm md:text-base leading-relaxed
                   md:absolute md:bottom-10 md:right-10 md:max-w-md md:text-left"
              >
                Jolo is a smart grocery delivery service designed to bring market-fresh food items straight to your
                doorstep without the stress of the market or restaurant. We exist to simplify the way people shop for
                food, offering convenience, transparency, and reliable delivery across Nigeria.
              </article>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="bg-black text-white ">
          <div className="max-w-6xl mx-auto px-6 py-20 text-left">
            <h2 className="text-2xl md:text-3xl font-semibold mb-16">Our Philosophy</h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-200 max-w-6xl">
              We believe that grocery shopping shouldn’t be a time-consuming, frustrating chore. So, we’ve built a
              system that lets you shop from trusted markets and food vendors from the comfort of your phone. Our goal
              is to make fresh food accessible, fairly priced, and easy to order anytime.
            </p>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="bg-[#FEFAEF]">
          <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-16">Our Vision</h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                To become the most trusted name in local grocery delivery, connecting communities to fresh food without
                the market hassle.
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-16">Our Mission</h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                To deliver quality food items at real market prices while saving our users the stress, time, and mess of
                traditional shopping. We do the running around, so you can focus on what matters most.
              </p>
            </div>
          </div>
        </section>
      </main>

      <FAQ items={FaqItems} className="bg-gray-50" />
    </MainLayout>
  );
}
