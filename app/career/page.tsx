"use client";

import React from "react";
import MainLayout from "@/components/Layout/MainLayout";
import Image from "next/image";
import careerImg from "@/public/images/career.svg";
import { Button } from "@/components/ui/button";
import heroImg from "@/public/images/career/hero.svg";

// ✅ Reusable Core Identity Card
type IdentityCardProps = {
  image: string;
  title: string;
  description: string;
};

const IdentityCard = ({ image, title, description }: IdentityCardProps) => (
  <div className="flex flex-col items-center text-center bg-white rounded-lg shadow-sm p-4">
    <Image src={image} alt={title} width={100} height={100} className="w-24 h-24 object-contain" />
    <h3 className="mt-4 font-semibold text-lg">{title}</h3>
    <p className="mt-2 text-sm text-gray-600">{description}</p>
  </div>
);

type JobCardProps = {
  title: string;
  type: "On-site" | "Remote";
};

const JobCard = ({ title, type }: JobCardProps) => (
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b py-4">
    <div>
      <h4 className="font-medium text-lg">{title}</h4>
      <p className="text-sm text-gray-500">{type}</p>
    </div>
    <Button className="mt-3 md:mt-0 bg-[var(--joloOrange)] text-white rounded-md">Learn more</Button>
  </div>
);

const Career = () => {
  return (
    <MainLayout>
      <section className="bg-[#FEFAEF] py-16">
        {/* Top career label */}
        <div className="flex justify-center items-center gap-2">
          <Image src={careerImg} alt="career" width={10} height={10} />
          <p className="text-gray-700 text-sm font-medium">Career</p>
        </div>

        {/* Heading + Button */}
        <div className="text-center mt-6 h-[180px]">
          <p className=" Instrument Sans text-6xl font-medium text-gray-900">Working with Jolojolo</p>
          <Button className="mt-4 bg-[var(--joloOrange)] text-white px-6 py-2 rounded-[16px]">
            Check Job Openings
          </Button>
        </div>

        {/* Image */}
        <div className="mt-10 flex justify-center">
          <div className="">
            <Image
              src={heroImg}
              alt="Team working"
              className="w-[1180px] h-[620] min-h-[345px] object-contain rounded-lg"
            />
          </div>
        </div>

        {/* Supporting text */}
        <div className="bg-[#FFFFFF] h-auto md:h-[350px] grid items-center mt-16 ">
          <div className=" grid md:grid-cols-2 justify-center max-w-[1440px] mx-auto mt-16 gap-8 px-8 py-12">
            <h2 className="text-5xl font-medium max-w-[476px]">Do you have what it takes to join us</h2>
            <p className="text-black font-normal text-base md:text-2xl">
              At Jolojolo, our people are our greatest asset. We’re building more than a business; we’re building a team
              that’s kind, curious, and driven to make life easier for others. We care about skills, but we care even
              more about attitude. If you love solving problems, working with people, and growing fast, you’ll fit right
              in.
            </p>
          </div>
        </div>

        {/* Core Identities */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-center">Our Core Identities</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <IdentityCard
              image="/images/career/value1.svg"
              title="Purpose"
              description="To make life easier for customers by providing dependable and timely delivery services."
            />
            <IdentityCard
              image="/images/career/value2.svg"
              title="Promise"
              description="Jolo is always there for you, ensuring your needs are met quickly and with care."
            />
            <IdentityCard
              image="/images/career/value3.svg"
              title="Personality"
              description="Friendly, compassionate, dependable, and proactive."
            />
            <IdentityCard
              image="/images/career/value4.svg"
              title="Values"
              description="Trust, service excellence, reliability, and speed."
            />
          </div>
        </div>

        {/* Open Positions */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-center">Our Open Positions</h2>
          <div className="mt-8 space-y-4 max-w-3xl mx-auto">
            <JobCard title="Account Executive" type="On-site" />
            <JobCard title="Software Engineer" type="Remote" />
            <JobCard title="Marketing Specialist" type="Remote" />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Career;
