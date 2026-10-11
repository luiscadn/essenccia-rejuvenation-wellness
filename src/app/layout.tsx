import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/cart-context";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Essenccia Rejuvenation & Wellness | Westport, CT",
  description:
    "Where 23+ years of clinical aesthetics meets regenerative science. Non-surgical skin tightening, Rezenerate nano-needling, Cavi-Lipo body sculpting, and medical skincare boutique in Westport, Connecticut.",
  keywords: [
    "Essenccia Rejuvenation",
    "Westport CT medical spa",
    "skin tightening Westport",
    "Rezenerate nano needling",
    "Cavi-Lipo Westport",
    "PRX-T33 Connecticut",
    "Viora radiofrequency",
    "Ledy aesthetician"
  ],
  openGraph: {
    title: "Essenccia Rejuvenation & Wellness | Westport, CT",
    description: "23+ years of clinical aesthetics and regenerative wellness by Ledy.",
    url: "https://www.essencciarejuvenationwellness.com",
    siteName: "Essenccia Rejuvenation & Wellness",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", sizes: "192x192" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${plusJakarta.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#f7f7f4] text-[#484774] selection:bg-[#739cd2]/25 selection:text-[#484774]">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
