"use client";

import { useState } from "react";
import Image from "next/image";
import GettingStartedImg from "@/public/images/Getting_started.svg";
import { Badge } from "@/components/LandingPage/Badge/Badge";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import Link from "next/link";

type Step = {
  id: number;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    id: 1,
    title: "Download Jolo App from your Appstore/Playstore",
    description:
      "Go to your Google Playstore on Android or Appstore on your iOS device to download the Jolo app. Appstore on your iOS device to download the Jolojolo app.",
  },
  {
    id: 2,
    title: "Sign with email or phone number",
    description: "Easily sign in using your email address or phone number to create your Jolo account in seconds.",
  },
  {
    id: 3,
    title: "Set up your other information",
    description: "Complete your profile by adding essential information for a personalized shopping experience.",
  },
  {
    id: 4,
    title: "Start exploring",
    description: "Browse fresh groceries, meals, and more. Order easily and get items delivered right to your door.",
  },
];

export default function GettingStarted() {
  const [activeStep, setActiveStep] = useState(1);

  const currentStep = steps.find((s) => s.id === activeStep)!;

  return (
    <section className="relative bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 items-center">
        <div>
          <h2 className="text-5xl md:text-4xl font-medium leading-snug">Get started in these few steps</h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg">
            Jolo has come with the most seamless onboarding any customer has ever experienced. And you can get started
            with Jolo in these few steps.
          </p>

          <div className="mt-6 flex gap-3">
            <Badge
              href="#"
              bgColor="bg-black"
              textColor="text-white"
              text="Get the app"
              className="rounded-full px-4 bg-black h-12"
            >
              <Link
                href="https://play.google.com/store/apps/details?id=com.jolojolo.user.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGooglePlay className="w-5 h-5 cursor-pointer hover:text-[var(--joloOrange)] transition-colors" />
              </Link>
              <Link
                href="https://apps.apple.com/ng/app/jolo-delivery/id6748380014"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaApple className="w-5 h-5 cursor-pointer hover:text-[var(--joloOrange)] transition-colors" />
              </Link>
            </Badge>
          </div>

          <div className="mt-10 space-y-6">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`cursor-pointer border-b pb-4 transition ${
                  activeStep === step.id ? "border-gray-800 text-black" : "border-gray-200 text-gray-500"
                }`}
                onClick={() => setActiveStep(step.id)}
              >
                <h3 className="font-semibold flex items-center gap-2">
                  <span className="text-lg font-bold">{String(step.id).padStart(2, "0")}.</span>
                  {step.title}
                </h3>
                {activeStep === step.id && <p className="mt-2 text-sm text-gray-600">{step.description}</p>}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-[420px] md:max-w-[360px] lg:max-w-[420px]">
            <Image src={GettingStartedImg} alt="Getting Started illustration" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
