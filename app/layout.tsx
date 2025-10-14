// ------------- import external dependencies ---------------
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import Script from "next/script";

// --------------- import internal dependencies --------------
import ReactQueryProvider from "@/utils/ReactQueryProvider";
import "@/css/main.css";

export const metadata: Metadata = {
  title: "Jolo Website",
  description: "Jolojolo Website",
  icons: {
    icon: "/favicon.ico?v=2",
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
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id=' + i + dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXX');
            `,
          }}
        />
      </head>

      <body className={figtree.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N8L5PSPC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
