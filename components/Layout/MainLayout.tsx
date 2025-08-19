import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import TestimonialSection from "../Testimonials/TestimonalSection";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <TestimonialSection />
      <Footer />
    </>
  );
}
