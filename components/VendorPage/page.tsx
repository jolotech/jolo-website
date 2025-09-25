"use client";

import Image from "next/image";
import MainLayout from "../Layout/MainLayout";
import FAQ from "../LandingPage/FAQ/faqItem";
import { FaqItems } from "../LandingPage/FAQ/faq";
import GettingStarted from "../LandingPage/GetStarted/getStarted";
import Feature from "./Feature";
import vendorImg from "@/public/images/vendor/vendorImage.svg";
import Link from "next/link";
import { Badge } from "../LandingPage/Badge/Badge";
import PlayImg from "@/public/images/googleIcon.svg";
import AppleImg from "@/public/images/AppleImg.svg";
import { useDeviceType } from "@/hooks/useDeviceType";

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
              Whether you&#39;re a market woman, food vendor, pharmacy or store owner, Jolo helps you sell more without
              changing how you work.
            </p>
            <div
              className={`mt-8 flex flex-wrap gap-4 
              }`}
            >
              <Badge href="#" text="" className="h-12 rounded-xl px-4 border-black border-2">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.jolo.vendor_app.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center">
                    <Image src={PlayImg} alt="Google Play" className="w-12 h-12 object-contain" />
                    <div className="flex flex-col leading-tight ml-2">
                      <span className="text-xs text-left">GET IT ON</span>
                      <span className="text-base font-semibold -mt-1">Google Play</span>
                    </div>
                  </div>
                </Link>
              </Badge>

              <Badge href="#" text="" textColor="text-black" className="rounded-xl px-4 bg-white border-black border-2">
                <Link
                  href="https://apps.apple.com/ng/app/jolo-vendor/id6748384649"
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

            {/* <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition">
              Join the Fleet
            </button> */}
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden ">
              <Image src={vendorImg} alt="Jolo Rider" className="object-cover w-full h-auto mb-20" />
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
