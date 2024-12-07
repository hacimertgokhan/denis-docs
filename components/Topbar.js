import React from 'react';
import {Bookmark, DownloadIcon, GithubIcon, Users} from "lucide-react";
import {Separator} from "@/components/ui/separator";
import Link from "next/link";

const Topbar = () => {
    return (
        <div className={"w-full items-start h-fit flex flex-col relative"}>
            <div className={"p-4 flex flex-row gap-2 items-center w-full justify-between"}>
                <div className={"flex flex-row gap-2 items-center justify-center"}>
                    <Link href={"https://github.com/hacimertgokhan/"}><GithubIcon size={16}/></Link>
                    <Link href={"https://github.com/hacimertgokhan/denis"}><Bookmark size={16}/></Link>
                    <Link href={"https://github.com/hacimertgokhan/denis/releases"}><DownloadIcon size={16}/></Link>
                </div>
                <p className={"text-sm"}>Denis Database, Bütün hakları saklıdır.</p>
            </div>
            <Separator orientation={"horizontal"} className={"bg-[#202020] right-0 top-0"}/>
        </div>
    );
};

export default Topbar;