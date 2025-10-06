"use client";

import Link from "next/link";
import Image from "next/image";
import { Badge } from "../Badge/Badge";
import { FaGooglePlay, FaApple, FaInstagram, FaLinkedin, FaFacebook, FaXTwitter } from "react-icons/fa6";
import JoloLogo from "@/public/images/JoloLogo.svg";
import Container from "@/components/container/Container";
import { useDeviceType } from "@/hooks/useDeviceType";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export default function Footer() {
  const deviceType = useDeviceType();
  const getAppLink = (device: string) => {
    if (device === "android") {
      return "https://play.google.com/store/apps/details?id=com.jolojolo.user.app";
    } else if (device === "ios") {
      return "https://apps.apple.com/ng/app/jolo-delivery/id6748380014";
    } else if (device === "windows" || device === "mac" || device === "pc") {
      return "https://shop.jolojolo.com";
    } else {
      return "https://shop.jolojolo.com";
    }
  };
  return (
    <footer className="bg-black text-white">
      <Container>
        <div className="py-12 flex flex-row justify-between items-center gap-6 max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-6">
          {/* Heading */}
          <h2
            className={`${fredoka.className}text-[64px] font-medium leading-snug text-left
               max-md:text-[40px] max-md:font-medium max-md:text-center`}
          >
            Ready to explore <br /> with Jolo
          </h2>

          {/* Badge Section */}
          <div className="mt-6 md:mt-0 flex justify-center md:justify-start flex-shrink-0 h-auto">
            <Link href={getAppLink(deviceType)} target="_blank" rel="noopener noreferrer">
              <Badge
                href="#"
                bgColor="bg-white"
                textColor="text-black"
                text=""
                className="rounded-full px-4 bg-white h-[64px] w-[209px] flex justify-center items-center"
              >
                <span className="font-[Inter] font-semibold text-[20px] ">Get the app</span>
                <FaGooglePlay className="w-5 h-5 cursor-pointer" />
                <FaApple className="w-5 h-5 cursor-pointer ml-2" />
              </Badge>
            </Link>
          </div>
        </div>
      </Container>

      <div className="bg-[var(--joloOrange)] text-[var(--background-color)] rounded-t-2xl mx-4">
        <Container>
          <div className="py-12 grid grid-cols-1 md:grid-cols-6 gap-10 md:gap-32">
            {/* Logo + About */}
            <div className="col-span-2 md:-order-none order-1">
              <Image src={JoloLogo} alt="Jolo Logo" width={40} height={40} className="mb-4" />
              <p className="text-base leading-relaxed font-light">
                Jolo is a logistics company that connects its users to their favorite food vendors, making sure they
                don’t have to wait on the common delays in our regular delivery companies.
              </p>

              <div className="flex gap-4 mt-4 text-xl">
                <Link
                  href="https://x.com/Jolodelivery?t=p7fVZuMsKw46Pao8jMDP9Q&s=09"
                  aria-label="X (Twitter)"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaXTwitter />
                </Link>
                <Link
                  href="https://www.instagram.com/jolodelivery?utm_source=ig_web_button_share_sheet&igsh=MWJwZGwxNXk2NjR3Ng=="
                  aria-label="Instagram"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/jolo-delivery/"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </Link>
                <Link
                  href="https://web.facebook.com/p/Jolo-Delivery-61577741350506/?_rdc=1&_rdr#"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook />
                </Link>
              </div>
            </div>

            <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-24">
              {/* Solutions */}
              <div className="order-1 md:order-2">
                <h4 className="font-medium mb-4">Solutions</h4>
                <ul className="space-y-2 text-sm font-light text-jolo-white-100">
                  <li>
                    <Link href="/">Small Businesses</Link>
                  </li>
                  <li>
                    <Link href="/rider">Customers</Link>
                  </li>
                  <li>
                    <Link href="/vendor">Partners</Link>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div className="order-1 md:order-3">
                <h4 className="font-medium mb-4">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/career">Careers</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>

              {/* Features */}
              <div className="order-1 md:order-4">
                <h4 className="font-medium mb-4">Features</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/career">Careers</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>

        <div className="border-t border-white/20 mt-8 py-4 px-6 max-w-7xl mx-auto md:flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; Jolo, {new Date().getFullYear()}</p>
          <div className="flex gap-6 mt-3 md:mt-0 underline">
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/privacy">Privacy Policy</Link>
            {/* <Link href="/cookies">Cookie Policy</Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
