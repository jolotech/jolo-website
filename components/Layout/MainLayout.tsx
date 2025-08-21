import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import TestimonialSection from "../Testimonials/TestimonalSection";
import FAQ from "../FAQ/faqItem";
import { FaqItems } from "../FAQ/faq";
import Features from "../Features/feature";
import GettingStarted from "../GetStarted/getStarted";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <GettingStarted />
      <Features />
      <TestimonialSection />
      <FAQ items={FaqItems} className="bg-gray-50" />
      <Footer />
    </>
  );
}
