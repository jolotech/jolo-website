import FeatureSection from "@/components/LandingPage/Features/featureSection";

import Image from "next/image";

export default function Features() {
  const features = [
    {
      id: "1",
      icon: <Image src="/images/Frame.svg" alt="Personal Market Shopping" width={40} height={40} />,
      title: "Flexible Scheduling",
      description: "You choose when to ride, Full-time or Part-time, Jolo works around your schedule.",
    },
    {
      id: "2",
      icon: <Image src="/images/rider/Rider1.svg" alt="Personal Market Shopping" width={40} height={40} />,
      title: "Weekly Payouts",
      description: "Get paid every week directly into your bank account.",
    },
    {
      id: "3",
      icon: <Image src="/images/rider/Rider2.svg" alt="Personal Market Shopping" width={40} height={40} />,
      title: "In-App Navigation",
      description: "Route optimization and live order tracking make deliveries faster and easier.",
    },
    {
      id: "4",
      icon: <Image src="/images/rider/Rider3.svg" alt="Personal Market Shopping" width={40} height={40} />,
      title: "24/7 Support",
      description: "We’ve got your back with live rider support when you need it.",
    },
    {
      id: "5",
      icon: <Image src="/images/rider/Rider4.svg" alt="Personal Market Shopping" width={40} height={40} />,
      title: "Performance Rewards",
      description: "Earn more when you deliver more. Bonuses and incentives available.",
    },
    {
      id: "6",
      icon: <Image src="/images/rider/Rider1.svg" alt="Personal Market Shopping" width={40} height={40} />,
      title: "Rider Support",
      description: " Need help? Our support team is available to guide you every step of the way.",
    },
  ];

  return <FeatureSection features={features} />;
}
