"use client";

import React from 'react';
import {Clipboard, ClipboardCopy} from "lucide-react";
import {toast} from "sonner";

const NodeCard = ({content}, props) => {
    return (
        <div
            onClick={() => {
                toast("Yey ! Content copied.", {
                    description: `You just copied "${content}".`,
                })
            }}
            className={"border-[#202020] border-[1px] gap-3 w-fit py-2 px-3 cursor-pointer rounded-md text-sm flex items-center justify-center"} {...props}>
            ${" "}{content}{" "}<ClipboardCopy size={16} className={"text-[#e2e2e2]"}/>
        </div>
    );
};

export default NodeCard;