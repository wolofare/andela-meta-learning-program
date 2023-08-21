import Navbar from "@/components/ui/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const inter = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: {
    default: "Home | Forms",
    template: "%s | Forms",
  },
  description:
    "Forms working using React for uncontrolled, controlled, react-hook-form",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
