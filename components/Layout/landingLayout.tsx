import Header from "../LandingPage/Header/Header";
import Footer from "../LandingPage/Footer/Footer";
import TestimonialSection from "../../app/testimonial/TestimonalSection";
import FAQ from "../LandingPage/FAQ/faqItem";
import { FaqItems } from "../LandingPage/FAQ/faq";
import Features from "../LandingPage/Features/feature";
import GettingStarted from "../LandingPage/GetStarted/getStarted";
import HeroSection from "../LandingPage/Hero/hero";

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {/* <main className="min-h-screen">{children}</main> */}
      <HeroSection />
      <Features />
      <GettingStarted />
      <TestimonialSection />
      <FAQ items={FaqItems} className="bg-gray-50" />
      <Footer />
    </>
  );
}
