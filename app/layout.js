import { Noto_Sans } from "next/font/google";
import "./globals.css";
import React from "react";
import { Toaster } from "sonner";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import Rightcontent from "@/components/RightContent";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Denis Database Docs",
  description: "A reorganized product documentation site for Denis Database.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${notoSans.className} min-h-screen bg-zinc-950 text-zinc-100 antialiased`}>
        <div className="mx-auto flex w-full flex-col gap-2 p-6 xl:flex-row">
          <Sidebar />
          <main className="min-w-0 flex-1">
            <Topbar />
            <div className="rounded-md border border-zinc-800 bg-zinc-950/70 p-6 md:p-8">{children}</div>
          </main>
          <Rightcontent />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
