"use client";

import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import styles from "./featuressection.module.css";

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
    <section className={`relative bg-jolo-white-100 ${className}`}>
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-4xl font-medium">{title}</h2>
          {subtitle && <p className="mt-2 text-base md:text-lg text-gray-600 font-normal">{subtitle}</p>}
        </div>

        <div className={styles.wrapper}>
          {features.map((feature) => (
            <Card key={feature.id}>
              <CardContent className="p-6 flex flex-col justify-center items-start h-full  ">
                <div className="text-2xl">{feature.icon}</div>
                <h3 className="font-medium text-lg mt-7 text-jolo-orange-100">{feature.title}</h3>
                <p className="text-sm text-gray-600 mt-4">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
