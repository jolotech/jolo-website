"use client";

import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

type Feature = {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
};

type FeatureSectionProps = {
  title?: string;
  subtitle?: string;
  features: Feature[];
  className?: string;
  bgColor?: string;
};

export default function FeatureSection({
  title = "Why People Love Jolo App",
  subtitle = "The amazing features thoughtfully packed for our users.",
  features,
  className = "",
  bgColor = "bg-[#fdf8f3]",
}: FeatureSectionProps) {
  return (
    <section className={`relative ${bgColor} ${className}`}>
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(200%+1.3px)] h-16"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M985.66 92.83C906.67 72 823.78 31 743.72 14.19 661.09-3.2 574.46-3.2 491.83 14.19 411.77 31 328.87 72 249.89 92.83c-66.49 17.64-133 22.29-199.88 12.57v16.6h1200v-16.6c-66.88 9.72-133.39 5.07-199.88-12.57z"
            className="fill-orange-200"
          />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
          {subtitle && <p className="mt-2 text-base md:text-lg text-gray-600">{subtitle}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card key={feature.id} className="bg-white shadow-sm border rounded-xl hover:shadow-md transition">
              <CardContent className="p-6 flex flex-col gap-3">
                <div className="text-2xl">{feature.icon}</div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
