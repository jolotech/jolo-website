import Header from "../LandingPage/Header/Header";
import Footer from "../LandingPage/Footer/Footer";
import TestimonialSection from "../../app/testimonial/TestimonalSection";
import FAQ from "../LandingPage/FAQ/faqItem";
import { FaqItems } from "../LandingPage/FAQ/faq";
import Features from "../LandingPage/Features/feature";
import GettingStarted from "../LandingPage/GetStarted/getStarted";
import HeroSection from "../LandingPage/Hero/hero";

export default function LandingLayout() {
  return (
    <>
      <Header bgType="orange" />
      {/* <main className="min-h-screen">{children}</main> */}
      <HeroSection />
      <main id="main-content">
        <Features />
        <GettingStarted
          googlePlayUrl="https://play.google.com/store/apps/details?id=com.jolojolo.user.app"
          appStoreUrl="https://apps.apple.com/ng/app/jolo-delivery/id6748380014"
        />
        <TestimonialSection />
        <FAQ items={FaqItems} className="bg-gray-50" />
        <Footer />
      </main>
    </>
  );
}
