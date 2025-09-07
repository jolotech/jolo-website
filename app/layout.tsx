// ------------- import external dependencies ---------------
import type { Metadata } from "next";
import { Figtree } from "next/font/google";

// --------------- import internal dependencies --------------
import ReactQueryProvider from "@/utils/ReactQueryProvider";
import "@/css/main.css";

export const metadata: Metadata = {
  title: "Jolo Website",
  description: "Jolojolo Website",
  icons: {
    icon: "/favicon.ico",
  },
};

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  preload: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
