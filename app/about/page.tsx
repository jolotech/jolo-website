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

        {/* <section className="relative bg-[#F9C29E]">
          <div className="relative max-w-4xl mx-auto px-6 py-16">
            <div className="bg-[var(--joloOrange)] text-black rounded-xl p-8 shadow">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Who We Are</h2>
              <p className="text-sm md:text-base leading-relaxed">
                Jolo is a smart grocery delivery service designed to bring market-fresh food items straight to your
                doorstep without the stress of the market or restaurant. We exist to simplify the way people shop for
                food, offering convenience, transparency, and reliable delivery across Nigeria.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-black text-white px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Philosophy</h2>
            <p className="text-sm md:text-base leading-relaxed">
              We believe that grocery shopping shouldn’t be a time-consuming, frustrating chore. So, we’ve built a
              system that lets you shop from trusted markets and food vendors from the comfort of your phone. Our goal
              is to make fresh food accessible, fairly priced, and easy to order anytime.
            </p>
          </div>
        </section>

        <section className="bg-[#FEFAEF] px-6 py-16">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Vision</h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                To become the most trusted name in local grocery delivery, connecting communities to fresh food without
                the market hassle.
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Mission</h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                To deliver quality food items at real market prices while saving our users the stress, time, and mess of
                traditional shopping. We do the running around, so you can focus on what matters most.
              </p>
            </div>
          </div>
        </section> */}
        {/* Who We Are Section */}
        <section className="relative bg-[#F9C29E]">
          <div className="relative max-w-6xl mx-auto px-6 py-20">
            {/* Inner card with slightly darker shade */}
            <div className="bg-[#F6A770] text-black rounded-xl p-10 shadow grid md:grid-cols-2 gap-8 items-center">
              <h2 className="text-2xl md:text-3xl font-semibold">Who We Are</h2>
              <p className="text-sm md:text-base leading-relaxed">
                Jolo is a smart grocery delivery service designed to bring market-fresh food items straight to your
                doorstep without the stress of the market or restaurant. We exist to simplify the way people shop for
                food, offering convenience, transparency, and reliable delivery across Nigeria.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="bg-black text-white">
          <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-8 items-center">
            <h2 className="text-2xl md:text-3xl font-semibold">Our Philosophy</h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-200">
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
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Vision</h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                To become the most trusted name in local grocery delivery, connecting communities to fresh food without
                the market hassle.
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Mission</h2>
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
