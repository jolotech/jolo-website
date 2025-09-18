"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import JoloLogoWhite from "@/public/images/JoloLogo.svg";
import JoloLogoOrange from "@/public/images/JoloOrangeLogo.svg";
import Image from "next/image";
import { Badge } from "../Badge/Badge";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { Sling as Hamburger } from "hamburger-react";
import SkipToContent from "@/components/base/SkipToContent";
import Container from "@/components/container/Container";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useDeviceType } from "@/hooks/useDeviceType";

export default function Header({ bgType }: { bgType: "orange" | "white" }) {
  const [isOpen, setOpen] = useState(false);
  const [isOrange, setIsOrange] = useState(false);
  const [openItem, setOpenItem] = useState<string | null>(null);

  useEffect(() => {
    const hero = document.querySelector("section");
    if (hero) {
      const bg = window.getComputedStyle(hero).backgroundColor;
      if (bg.includes("249, 194, 158")) {
        setIsOrange(true);
      }
    }
  }, []);

  const headerBg = bgType === "orange" ? "bg-[var(--joloOrange)]" : "bg-white";
  const navText = bgType === "orange" ? "text-white" : "text-black";
  const badgeBg = bgType === "orange" ? "bg-white" : "bg-[var(--joloOrange)]";
  const badgeText = bgType === "orange" ? "text-black" : "text-white";
  const hamburgerColor = bgType === "orange" ? "#fff" : "#000";
  const LogoSrc = bgType === "orange" ? JoloLogoWhite : JoloLogoOrange;

  const device = useDeviceType();
  const getAppLink = (device: string) => {
    if (device === "android" || device === "windows") {
      return "https://play.google.com/store/apps/details?id=com.jolojolo.user.app";
    } else if (device === "ios" || device === "mac") {
      return "https://apps.apple.com/ng/app/jolo-delivery/id6748380014";
    } else {
      return "#";
    }
  };

  return (
    <header className={`w-full ${headerBg} shadow-md relative`}>
      <SkipToContent />
      <Container>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src={LogoSrc} alt="Jolo Logo" width={75} height={40} priority />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className={`hidden md:flex flex-1 justify-center gap-8 font-medium text-[20px] ${navText}`}>
            <Accordion
              type="single"
              collapsible
              className="flex gap-8 no-underline"
              value={openItem || ""}
              onValueChange={(value) => setOpenItem(value || null)}
            >
              {/* Partners Accordion */}
              <div
                className="relative no-underline"
                onMouseEnter={() => setOpenItem("partners no-underline")}
                onMouseLeave={() => setOpenItem(null)}
              >
                <AccordionItem value="partners no-underline" className="relative">
                  <AccordionTrigger className="hover:text-[#993D1F] no-underline">Partners</AccordionTrigger>
                  <AccordionContent className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md p-4 flex flex-col gap-5 min-w-[150px] z-50 h-auto text-base no-underline text-black">
                    <Link
                      href="/rider"
                      className="flex items-center gap-2 p-2 rounded-full transition-colors duration-200 hover:bg-[#FEFAEF] hover:text-[var(--joloOrange)] fill=none"
                    >
                      {/* Rider Icon */}
                      <Image
                        src="/images/hero/rider1.svg"
                        alt="Rider"
                        width={20}
                        height={20}
                        className="transition-colors duration-200 group-hover:filter group-hover:brightness-0 group-hover:invert text-base"
                      />
                      <span>Riders</span>
                    </Link>
                    <Link
                      href="/vendor"
                      className="flex items-center gap-2 p-2 rounded-full transition-colors duration-200 hover:bg-[#FEFAEF] hover:text-[var(--joloOrange)] fill=none"
                    >
                      <Image
                        src="/images/hero/vendor.svg"
                        alt="Rider"
                        width={20}
                        height={20}
                        className="transition-colors duration-200 group-hover:filter group-hover:brightness-0 group-hover:invert"
                      />
                      <span>Vendors</span>
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </div>

              {/* Company Accordion */}
              <div
                className="relative"
                onMouseEnter={() => setOpenItem("company no-underline")}
                onMouseLeave={() => setOpenItem(null)}
              >
                <AccordionItem value="company no-underline" className="relative">
                  <AccordionTrigger className="hover:text-[#993D1F]">Company</AccordionTrigger>
                  <AccordionContent className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md p-4 flex flex-col gap-5 min-w-[150px] z-50 h-auto text-black">
                    <Link
                      href="/about"
                      className="flex items-center gap-2 p-2 rounded-full transition-colors duration-200 hover:bg-[#FEFAEF] hover:text-[var(--joloOrange)] fill=none"
                    >
                      About Us
                    </Link>
                    <Link
                      href="/career"
                      className="flex items-center gap-2 p-2 rounded-full transition-colors duration-200 hover:bg-[#FEFAEF] hover:text-[var(--joloOrange)] fill=none"
                    >
                      Careers
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </div>
            </Accordion>

            {/* Normal Links */}
            <Link href="/Customers" className="hover:text-[#993D1F] text-center my-auto">
              Customers
            </Link>
            <Link href="/contact" className="hover:text-[#993D1F]  my-auto ">
              Contact
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} color={hamburgerColor} />
          </div>

          <div className="hidden md:flex flex-shrink-0">
            <Link href={getAppLink(device)} target="_blank" rel="noopener noreferrer">
              <Badge
                href="#"
                bgColor={badgeBg}
                textColor={badgeText}
                text="Get the app"
                className={`rounded-full px-4 h-12 flex items-center gap-2 ${badgeBg} ${badgeText}`}
              >
                <FaGooglePlay className="w-5 h-5" />
                <FaApple className="w-5 h-5" />
              </Badge>
            </Link>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden z-50">
          <Accordion type="single" collapsible className="w-full">
            {/* Partners Accordion */}
            <AccordionItem value="partners">
              <AccordionTrigger className="px-6">Partners</AccordionTrigger>
              <AccordionContent className="flex flex-col pl-10 gap-2">
                <Link href="/rider" onClick={() => setOpen(false)}>
                  Riders
                </Link>
                <Link href="/vendor" onClick={() => setOpen(false)}>
                  Vendors
                </Link>
              </AccordionContent>
            </AccordionItem>

            {/* Company Accordion */}
            <AccordionItem value="company">
              <AccordionTrigger className="px-6">Company</AccordionTrigger>
              <AccordionContent className="flex flex-col pl-10 gap-2">
                <Link href="/about" onClick={() => setOpen(false)}>
                  About Us
                </Link>
                <Link href="/career" onClick={() => setOpen(false)}>
                  Careers
                </Link>
              </AccordionContent>
            </AccordionItem>

            {/* Normal Links */}
            <AccordionItem value="customers">
              <AccordionTrigger className="px-6">
                <Link href="/Customers">Customers</Link>
              </AccordionTrigger>
            </AccordionItem>
            <AccordionItem value="contact">
              <AccordionTrigger className="px-6">
                <Link href="/contact">Contact</Link>
              </AccordionTrigger>
            </AccordionItem>

            {/* Mobile "Get the app" */}
            {/* <div className="px-6 py-4">
              <Badge
                href="#"
                bgColor="bg-[var(--joloOrange)]"
                textColor="text-white"
                text="Get the app"
                className="rounded-full px-4 h-12"
              >
                <Link
                  href="https://play.google.com/store/apps/details?id=com.jolojolo.user.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGooglePlay className="w-5 h-5 cursor-pointer hover:text-[var(--joloOrange)] transition-colors" />
                </Link>
                <Link
                  href="https://apps.apple.com/ng/app/jolo-delivery/id6748380014"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaApple className="w-5 h-5 cursor-pointer hover:text-[var(--joloOrange)] transition-colors" />
                </Link>
              </Badge>
            </div> */}
            <div className="px-6 py-4">
              <Link href={getAppLink(device)} target="_blank" rel="noopener noreferrer">
                <Badge
                  href="#"
                  bgColor="bg-[var(--joloOrange)]"
                  textColor="text-white"
                  text="Get the app"
                  className="rounded-full px-4 h-12 flex items-center gap-2"
                >
                  <FaGooglePlay className="w-5 h-5" />
                  <FaApple className="w-5 h-5" />
                </Badge>
              </Link>
            </div>
          </Accordion>
        </div>
      )}
    </header>
  );
}
