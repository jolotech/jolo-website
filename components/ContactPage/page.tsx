"use client";

import MainLayout from "@/components/Layout/MainLayout";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import FAQ from "../LandingPage/FAQ/faqItem";
import { FaqItems } from "../LandingPage/FAQ/faq";
import Container from "@/components/container/Container";
import XIcon from "@/public/images/contact/X.svg";
import Image from "next/image";
import InstagramIcon from "@/public/images/contact/Instagram.svg";
import FaceBookIcon from "@/public/images/contact/Facebook.svg";
import LinkedInIcon from "@/public/images/contact/linkedin.svg";
type Social = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const SOCIALS: Social[] = [
  {
    href: "https://x.com/Jolodelivery?t=p7fVZuMsKw46Pao8jMDP9Q&s=09",
    label: "X (Twitter)",
    icon: <Image src={XIcon} alt="x icon" className="h-[32px] w-[32px]" />,
  },
  {
    href: "https://www.instagram.com/jolodelivery?utm_source=ig_web_button_share_sheet&igsh=MWJwZGwxNXk2NjR3Ng==",
    label: "Instagram",
    icon: <Image src={InstagramIcon} alt="instagram icon" className="h-[32px] w-[32px]" />,
  },
  {
    href: "https://www.linkedin.com/company/jolo-delivery/",
    label: "LinkedIn",
    icon: <Image src={LinkedInIcon} alt="LinkedIn icon" className="h-[32px] w-[32px]" />,
  },
  {
    href: "https://www.facebook.com/share/16w6ZZ52VP/",
    label: "Facebook",
    icon: <Image src={FaceBookIcon} alt="Facebook icon" className="h-[32px] w-[32px]" />,
  },
];

export default function ContactPage() {
  return (
    <MainLayout>
      <section className="bg-[var(--site-bg,#FBF6EA)]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            <div className="max-w-xl">
              <p className="text-sm font-medium text-black/70">Contact us</p>
              <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-black sm:text-5xl">Drop us a line</h1>
              <p className="mt-4 text-black/70">Fill up this form and we’d get straight to it</p>

              <div className="mt-6 flex items-center gap-4">
                {SOCIALS.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-[32px] w-[32px] items-center justify-center  text-black transition hover:scale-105 hover:border-black"
                  >
                    {s.icon}
                  </Link>
                ))}
              </div>

              <div className="mt-32 space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-black">Looking for support?</h3>
                  <p className="mt-2 max-w-md text-black/70">
                    We might have what you are looking for. Check out our FAQs section or head to our dedicated Help
                    Center.
                  </p>
                </div>
                <hr className="max-w-md border-black/20" />
                <div>
                  <h3 className="text-lg font-semibold text-black">Support email</h3>
                  <p className="mt-2 text-black/70">
                    Reach out to us at{" "}
                    <a href="mailto:support@jolojolo.com" className="underline hover:opacity-80">
                      support@jolojolo.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:pl-4">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="rounded-2xl bg-black p-6 text-white shadow-xl md:p-8"
              >
                <h2 className="text-xl font-semibold">Send us a message</h2>

                <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="firstName" className="text-white/80">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="Enter first name"
                      className="mt-2 border-neutral-700 bg-neutral-800 text-white placeholder:text-neutral-400"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-white/80">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Enter last name"
                      className="mt-2 border-neutral-700 bg-neutral-800 text-white placeholder:text-neutral-400"
                      required
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <Label htmlFor="email" className="text-white/80">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter email address"
                    className="mt-2 border-neutral-700 bg-neutral-800 text-white placeholder:text-neutral-400"
                    required
                  />
                </div>

                <div className="mt-4">
                  <Label htmlFor="message" className="text-white/80">
                    How can we help you?
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Enter your message here"
                    className="mt-2 min-h-[140px] border-neutral-700 bg-neutral-800 text-white placeholder:text-neutral-400"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="mt-6 w-full rounded-xl bg-[var(--joloOrange)] py-6 text-base font-semibold text-white hover:bg-[#C35C27]"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
        <FAQ items={FaqItems} className="bg-gray-50" />
      </section>
    </MainLayout>
  );
}
