import FeatureSection from "@/components/LandingPage/Features/featureSection";
import { ShoppingCart, ShoppingBag, Wallet, Truck, Utensils, ClipboardList } from "lucide-react";
import Frame from "@/public/images/Frame.svg";
import Image from "next/image";

export default function Features() {
  const features = [
    {
      id: "1",
      icon: <Frame />,
      title: "Personal Market Shopping",
      description:
        "No need to leave the house or stress about traffic. Just tell us what you need, we’ll shop for you like you would.",
    },
    {
      id: "2",
      icon: <ShoppingBag />,
      title: "Fresh, Handpicked Ingredients",
      description:
        "Our trained shoppers know how to choose the best vegetables, meat, and pantry items – fresh, clean, and just how you like them.",
    },
    {
      id: "3",
      icon: <Wallet />,
      title: "Real Market Prices",
      description: "You’ll pay exactly what’s paid at the market. No surprises, no inflated costs.",
    },
    {
      id: "4",
      icon: <Truck />,
      title: "Clean & Timely Delivery",
      description: "Your items are carefully packed and delivered on time and in tact without spilling.",
    },
    {
      id: "5",
      icon: <Utensils />,
      title: "Ready Meals Available",
      description: "Order hot local meals from nearby restaurants when you need something ready-to-eat.",
    },
    {
      id: "6",
      icon: <ClipboardList />,
      title: "Full Order Updates",
      description:
        "From the moment we start shopping to when it gets to your door, you can track your order every step of the way.",
    },
  ];

  return <FeatureSection features={features} />;
}
