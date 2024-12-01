"use client"

import React from 'react';
import Link from "next/link";

const Page = () => {
    return (
        <div className={"p-4"}>
            <h1 className={"text-3xl font-bold"}>Denis Database & Kurulum</h1>
            <p>
                Windows ve Linux kurulumları detaylandırma amacıyla farklılaştırılmıştır.<br/>
                <Link href={"/server/setup/linux"}># Linux için kurulum.</Link><br/>
                <Link href={"/server/setup/windows"}># Windows için kurulum.</Link>
            </p>
        </div>
    );
};

export default Page;