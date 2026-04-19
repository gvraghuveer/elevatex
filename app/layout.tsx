import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/marketing/Navbar";
import CommandPalette from "@/components/common/CommandPalette";
import SystemHUD from "@/components/common/SystemHUD";
import FloatingDock from "@/components/common/FloatingDock";

import DemoNotice from "@/components/common/DemoNotice";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "ElevateX | AI Cloud Optimization (Beta)",
  description: "Autonomous cloud management and cost reduction engine - Beta Preview",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${font.className} antialiased bg-[#06080A] text-foreground`}>
        <Navbar />
        <CommandPalette />
        <SystemHUD />
        <FloatingDock />
        <DemoNotice />
        {children}
      </body>
    </html>
  );
}
