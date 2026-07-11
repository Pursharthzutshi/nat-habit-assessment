import "./globals.css";
import type { Metadata } from "next";
import ReduxProvider from "@/components/ReduxProvider";

export const metadata: Metadata = {
  title: {
    default: "E Commerce Website | Scalable Product Discovery Storefront",
    template: "%s | E Commerce Storefront",
  },
  description: "Discover beauty, wellness, and everyday essentials at E commerce Habit marketplace.",
  openGraph: {
    title: "E Commerce Storefront",
    description: "Discover beauty, wellness, and everyday essentials.",
    siteName: "E Commerce",
  },
};

import Navbar from "@/components/HomePage/Navbar/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <ReduxProvider>
          <Navbar />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
