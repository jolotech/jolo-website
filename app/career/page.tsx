import React from "react";
import { Badge } from "@/components/LandingPage/Badge/Badge";
import MainLayout from "@/components/Layout/MainLayout";
import Image from "next/image";
import careerImg from "@/public/images/career.svg";

const career = () => {
  return (
    <MainLayout>
      <div className="flex items-center gap-3 bg-[#FEFAEF] px-6 py-3">
        <div className="text-black">
          <div className="flex items-center gap-3">
            <Image src={careerImg} alt="career" className="w-[6px] h-1" />
            <p>Career</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default career;
