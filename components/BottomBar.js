"use client"

import React from 'react';
import Link from "next/link";
import {Card} from "@/components/ui/card";

const BottomBar = ({elements, isActive}) => {
    if(isActive) {
        return (
            <div className={"flex fixed bottom-0 left-0 right-0 flex-row gap-3 items-center justify-center w-fit h-[125px] m-auto"}>
                {
                    elements.map((item, index) => {
                        return(
                           <Card className={"px-2 hover:bg-[#09090b] hover:text-[#e2e2e2] transition-all"} key={index}>
                               <Link className={"text-xs"} href={item.address}>{item.name}</Link>
                           </Card>
                        )}
                    )
                }
            </div>
        );
    } else {
        return null;
    }
};

export default BottomBar;