"use client";

import { useState } from "react";
import Link from "next/link";
import JoloLogo from "@/public/images/JoloLogo.svg";
import Image from "next/image";
import { Badge } from "../Badge/Badge";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { Sling as Hamburger } from "hamburger-react";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="w-full bg-[var(--joloOrange)] shadow-md relative">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image src={JoloLogo} alt="Jolo Logo" width={40} height={40} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center gap-8 text-white font-medium text-[16px]">
          <Link href="/Partners" className="hover:text-[#993D1F]">
            Partners
          </Link>
          <Link href="/Company" className="hover:text-[#993D1F]">
            Company
          </Link>
          <Link href="/Customers" className="hover:text-[#993D1F]">
            Customers
          </Link>
          <Link href="/contact" className="hover:text-[#993D1F]">
            Contact
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} color="#fff" />
        </div>

        {/* Play and App store */}
        <div className="hidden md:flex flex-shrink-0">
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
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden z-50">
          <ul className="flex flex-col items-center gap-4 py-6 text-black font-medium">
            <li>
              <Link href="/Partners" onClick={() => setOpen(false)} className="hover:text-[var(--joloOrange)]">
                Partners
              </Link>
            </li>
            <li>
              <Link href="/Company" onClick={() => setOpen(false)} className="hover:text-[var(--joloOrange)]">
                Company
              </Link>
            </li>
            <li>
              <Link href="/Customers" onClick={() => setOpen(false)} className="hover:text-[var(--joloOrange)]">
                Customers
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setOpen(false)} className="hover:text-[var(--joloOrange)]">
                Contact
              </Link>
            </li>
            {/* Mobile "Get the app" */}
            <li>
              <Badge
                href="#"
                bgColor="bg-[var(--joloOrange)]"
                textColor="text-white"
                text="Get the app"
                className="rounded-full px-4 h-12"
              >
                <FaGooglePlay className="w-5 h-5" />
                <FaApple className="w-5 h-5" />
              </Badge>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
