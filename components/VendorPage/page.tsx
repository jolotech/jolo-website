"use client";

import Image from "next/image";
import MainLayout from "../Layout/MainLayout";
import FAQ from "../LandingPage/FAQ/faqItem";
import { FaqItems } from "../LandingPage/FAQ/faq";
import GettingStarted from "../LandingPage/GetStarted/getStarted";
import Feature from "./Feature";
import vendorImg from "@/public/images/vendor/vendorImage.svg";

export default function VendorPage() {
  return (
    <MainLayout>
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
          <div>
            <h2 className="text-4xl font-bold text-black leading-tight">
              Grow Your Business & <br /> Be Your Own Master.
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Join our vendor network and grow your business by reaching thousands of customers looking to shop smarter.
              Whether you're a market woman, food vendor, pharmacy or store owner, Jolo helps you sell more without
              changing how you work.
            </p>

            {/* <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition">
              Join the Fleet
            </button> */}
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden ">
              <Image src={vendorImg} alt="Jolo Rider" className="object-cover w-full h-auto" />
            </div>
          </div>
        </div>
        <div>
          <Feature />
        </div>
        <div>
          {" "}
          <GettingStarted />{" "}
        </div>
        <div>
          <FAQ items={FaqItems} className="bg-gray-50" />
        </div>
      </section>
    </MainLayout>
  );
}
