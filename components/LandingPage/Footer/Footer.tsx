"use client";

import Link from "next/link";
import Image from "next/image";
import { Badge } from "../Badge/Badge";
import { FaGooglePlay, FaApple, FaInstagram, FaLinkedin, FaFacebook, FaXTwitter } from "react-icons/fa6";
import JoloLogo from "@/public/images/JoloLogo.svg";
import Container from "@/components/container/Container";
import { useDeviceType } from "@/hooks/useDeviceType";

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
        <div className="py-12 flex flex-row justify-between items-center gap-6 max-md:flex-col max-md:justify-between max-md:items-center max-md:gap-0">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug text-left Fredoka">
            Ready to explore <br /> with Jolo
          </h2>
          <div className="mt-6 md:mt-0 md:flex flex-shrink-0 h-auto">
            <Link href={getAppLink(deviceType)} target="_blank" rel="noopener noreferrer">
              <Badge
                href="#"
                bgColor="bg-white"
                textColor="text-black"
                text="Get the app"
                className="rounded-full px-4 bg-white h-[40px]"
              >
                <FaGooglePlay className="w-5 h-5 cursor-pointer" />

                <FaApple className="w-5 h-5 cursor-pointer" />
              </Badge>
            </Link>
          </div>
        </div>{" "}
      </Container>

      <div className="bg-[var(--joloOrange)] text-[var(--background-color)] rounded-t-2xl ml-4 mr-4 mb-4">
        <Container>
          <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Logo + About */}
            <div className="order-2 md:order-1">
              <Image src={JoloLogo} alt="Jolo Logo" width={40} height={40} className="mb-4" />
              <p className="text-sm leading-relaxed max-w-xs">
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
                  href="https://www.facebook.com/share/16w6ZZ52VP/"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook />
                </Link>
              </div>
            </div>

            {/* Solutions */}
            <div className="order-1 md:order-2">
              <h4 className="font-medium mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm text-jolo-white-100">
                <li>
                  <Link href="/career">Careers</Link>
                </li>
                <li>
                  <Link href="/rider">Riders</Link>
                </li>
                <li>
                  <Link href="/vendor">Vendors</Link>
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
        </Container>

        <div className="border-t border-white/20 mt-8 py-4 px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© Jolo, 2025</p>
          <div className="flex gap-6 mt-3 md:mt-0 underline">
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
