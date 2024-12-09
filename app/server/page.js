"use client"

import React from 'react';
import Link from "next/link";
import BottomBar from "@/components/BottomBar";

const Page = () => {
    return (
        <div className={"p-8"}>
            <h1 className={"text-3xl font-bold"}>Veritabanı Kurulumu</h1>
            <p>
                Windows ve Linux kurulumları detaylandırma amacıyla farklılaştırılmıştır.<br/>
                <Link href={"/server/setup/linux"}># Linux için kurulum.</Link><br/>
                <Link href={"/server/setup/windows"}># Windows için kurulum.</Link>
            </p>
            <BottomBar isActive={true}
                       elements={
                           [
                               {
                                   name: "Linux",
                                   address: "/server/setup/linux",
                               },
                               {
                                   name: "Windows",
                                   address: "/server/setup/windows",
                               }
                           ]
                       }
            />
        </div>
    );
};

export default Page;