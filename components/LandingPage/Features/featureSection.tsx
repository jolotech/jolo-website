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
  bgColor = "bg-[#FEFAEF]",
}: FeatureSectionProps) {
  return (
    <section className={`relative ${bgColor} ${className}`}>
      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
          {subtitle && <p className="mt-2 text-base md:text-lg text-gray-600">{subtitle}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center ">
          {features.map((feature) => (
            <Card key={feature.id} className="bg-white  transition h-[360px] w-auto">
              <CardContent className="p-6 flex flex-col justify-center items-start h-full">
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
