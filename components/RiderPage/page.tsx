"use client";

import Image from "next/image";
import RiderImg from "@/public/images/Rider.svg";
import MainLayout from "../Layout/MainLayout";
import FAQ from "../LandingPage/FAQ/faqItem";
import { FaqItems } from "../LandingPage/FAQ/faq";
import GettingStarted from "../LandingPage/GetStarted/getStarted";
import Link from "next/link";
import Feature from "./Feature";

export default function RiderPage() {
  return (
    <MainLayout>
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
          <div>
            <h2 className="text-4xl font-bold text-black leading-tight">
              Earn on Your Own <br />
              Terms – With Jolo
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Join our rider network and start earning by delivering market orders to customers across Lagos. Work when
              you want, get paid weekly, and enjoy in-app tools that make every trip smooth and rewarding.
            </p>

            <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition">
              <Link
                href="https://play.google.com/store/apps/details?id=com.jolo.rider_app.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join the Fleet
              </Link>
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center mb-20 ">
            <div className="rounded-2xl overflow-hidden ">
              <Image src={RiderImg} alt="Jolo Rider" className="object-cover w-full h-auto" />
            </div>
          </div>
        </div>
        <div>
          <Feature />
        </div>
        <div>
          {" "}
          <GettingStarted
            googlePlayUrl="https://play.google.com/store/apps/details?id=com.jolo.rider_app.app"
            appStoreUrl="https://apps.apple.com/ng/app/jolo-rider/id6748385926"
          />{" "}
        </div>
        <div>
          <FAQ items={FaqItems} className="bg-gray-50" />
        </div>
      </section>
    </MainLayout>
  );
}
