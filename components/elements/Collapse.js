"use client"

import React, {useState} from 'react';
import {ChevronLeft, ChevronLeftIcon} from "lucide-react";

const Collapse = ({content, title, h}) => {
    const [open, setOpen] = useState(true)

    return (
        <div className={"relative"}>

            <div
                className={`border-[#151515] border-[1px] p-4 rounded-lg shadow-lg transition-[300ms] ${open === true ? "h-[50px]" : h}`}>
                <button
                    className={"w-full relative text-left font-bold"}
                    onClick={() => {
                    setOpen(!open)
                }}>{title}</button>
                <div className={` transition-[300ms] text-sm ${open === false ? "opacity-100" : "opacity-0"}`}>
                    {content}
                </div>
            </div>
            <div className={"absolute top-4 m-auto w-fit h-fit right-4"}>
                <ChevronLeftIcon className={`transition-[300ms] ${open === false ? "-rotate-90" : "rotate-0"}`} size={20}/>
            </div>
        </div>
    );
};

export default Collapse;