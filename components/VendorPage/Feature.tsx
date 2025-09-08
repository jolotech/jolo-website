import FeatureSection from "@/components/LandingPage/Features/featureSection";

import Image from "next/image";

export default function Features() {
  const features = [
    {
      id: "1",
      icon: <Image src="/images/vendor/Frame (1).svg" alt="Personal Market Shopping" width={40} height={40} />,
      title: "Sell from your Shop or Stall",
      description: "No need to close shop or change Location - we bring the orders to you .",
    },
    {
      id: "2",
      icon: <Image src="/images/vendor/Frame (2).svg" alt="Personal Market Shopping" width={40} height={40} />,
      title: "Real-Time Orders",
      description: "Accept and process orders via our ease-to-use vendor app.",
    },
    {
      id: "3",
      icon: <Image src="/images/vendor/Frame (3).svg" alt="Personal Market Shopping" width={40} height={40} />,
      title: "Logistics Sorted",
      description: "We pick up and deliver so you can focus on your business.",
    },
    {
      id: "4",
      icon: <Image src="/images/vendor/Frame (4).svg" alt="Personal Market Shopping" width={40} height={40} />,
      title: "Flexible Payments",
      description: "Receive payments weekly or instantly; no stories, no stress.",
    },
    {
      id: "5",
      icon: <Image src="/images/vendor/Frame (5).svg" alt="Personal Market Shopping" width={40} height={40} />,
      title: "Access to more customers",
      description: "Get discovered by a wider audience that shops online daily.",
    },
    {
      id: "6",
      icon: <Image src="/images/vendor/Frame (6).svg" alt="Personal Market Shopping" width={40} height={40} />,
      title: "Vendor Support",
      description: " Need help? Our support team is available to guide you every step of the way.",
    },
  ];

  return <FeatureSection features={features} />;
}
