"use client";

import Link from "next/link";
import Image from "next/image";
import { Badge } from "../Badge/Badge";
import { FaGooglePlay, FaApple, FaInstagram, FaLinkedin, FaFacebook, FaXTwitter } from "react-icons/fa6";
import JoloLogo from "@/public/images/JoloLogo.svg";
import Container from "@/components/container/Container";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <Container>
        <div className="py-12 flex flex-row justify-between items-center gap-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug text-left Fredoka">
            Ready to explore <br /> with Jolo
          </h2>
          <div className="mt-6 md:mt-0">
            <Badge
              href="#"
              bgColor="bg-white"
              textColor="text-black"
              text="Get the app"
              className="rounded-full px-4 bg-white h-12"
            >
              <FaGooglePlay className="w-5 h-5" />
              <FaApple className="w-5 h-5" />
            </Badge>
          </div>
        </div>{" "}
      </Container>

      <div className="bg-[var(--joloOrange)] text-[var(--background-color)] rounded-t-2xl ">
        <Container>
          <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <Image src={JoloLogo} alt="Jolo Logo" width={40} height={40} className="mb-4" />
              <p className="text-sm leading-relaxed max-w-xs">
                Jolo is a logistics company that connects its users to their favorite food vendors, making sure they
                don’t have to wait on the common delays in our regular delivery companies.
              </p>

              <div className="flex gap-4 mt-4 text-xl">
                <Link href="#">
                  <FaXTwitter />
                </Link>
                <Link href="#">
                  <FaInstagram />
                </Link>
                <Link href="#">
                  <FaLinkedin />
                </Link>
                <Link href="#">
                  <FaFacebook />
                </Link>
              </div>
            </div>

            <Container>
              <h4 className="font-medium mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm text-jolo-white-100">
                <li>
                  <Link href="/#">Small Businesses</Link>
                </li>
                <li>
                  <Link href="/#">Customers</Link>
                </li>
                <li>
                  <Link href="/#">Partners</Link>
                </li>
              </ul>
            </Container>

            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/careers">Careers</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Features</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/careers">Careers</Link>
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
