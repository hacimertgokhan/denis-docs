import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/Topbar";
import {Separator} from "@/components/ui/separator";
import React from "react";
import Sidebar from "@/components/Sidebar";
import Rightcontent from "@/components/RightContent";

const notoSans = Noto_Sans({
    subsets: ["latin"],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


export const metadata = {
  title: "Denis Database",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.variable} overflow-y-hidden bg-[#09090b] text-[#e2e2e2] flex flex-row relative justify-center items-center antialiased`}
      >
          <Sidebar/>
          <main className={"w-[70%] h-screen relative m-auto"}>
              <Topbar />
              <div className={"p-3 h-full w-full"}>
                  {children}
              </div>
              <Separator orientation={"vertical"} className={"absolute w-[1px] h-screen bg-[#202020] left-0 top-0 bottom-0"}/>
              <Separator orientation={"vertical"} className={"absolute w-[1px] h-screen bg-[#202020] right-0 top-0 bottom-0"}/>
          </main>
          <Rightcontent/>
      </body>
    </html>
  );
}
