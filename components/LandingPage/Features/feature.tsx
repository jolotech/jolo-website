import FeatureSection from "@/components/LandingPage/Features/featureSection";
import { ShoppingCart, ShoppingBag, Wallet, Truck, Utensils, ClipboardList } from "lucide-react";
import Image from "next/image";

export default function Features() {
  const features = [
    {
      id: "1",
      icon: <Image src="/images/features/Features1.svg" alt="Features icon" width={40} height={40} />,
      title: "Personal Market Shopping",
      description:
        "No need to leave the house or stress about traffic. Just tell us what you need, we’ll shop for you like you would.",
    },
    {
      id: "2",
      icon: <Image src="/images/features/Features2.svg" alt="Features icon" width={40} height={40} />,
      title: "Fresh, Handpicked Ingredients",
      description:
        "Our trained shoppers know how to choose the best vegetables, meat, and pantry items – fresh, clean, and just how you like them.",
    },
    {
      id: "3",
      icon: <Image src="/images/features/Features3.svg" alt="Features icon" width={40} height={40} />,
      title: "Real Market Prices",
      description: "You’ll pay exactly what’s paid at the market. No surprises, no inflated costs.",
    },
    {
      id: "4",
      icon: <Image src="/images/features/Features4.svg" alt="Features icon" width={40} height={40} />,
      title: "Clean & Timely Delivery",
      description: "Your items are carefully packed and delivered on time and in tact without spilling.",
    },
    {
      id: "5",
      icon: <Image src="/images/features/Features5.svg" alt="Features icon" width={40} height={40} />,
      title: "Ready Meals Available",
      description: "Order hot local meals from nearby restaurants when you need something ready-to-eat.",
    },
    {
      id: "6",
      icon: <Image src="/images/features/Features6.svg" alt="Features icon" width={40} height={40} />,
      title: "Full Order Updates",
      description:
        "From the moment we start shopping to when it gets to your door, you can track your order every step of the way.",
    },
  ];

  return <FeatureSection features={features} />;
}
