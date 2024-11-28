import React from 'react';
import {Bookmark, GithubIcon, Users} from "lucide-react";
import {Separator} from "@/components/ui/separator";

const Topbar = () => {
    return (
        <div className={"w-full items-start h-fit flex flex-col relative"}>
            <div className={"p-4 flex flex-row gap-2 items-center justify-center"}>
                <GithubIcon size={16}/>
                <Bookmark size={16}/>
                <Users size={16}/>
            </div>
            <Separator orientation={"horizontal"} className={"bg-[#202020] right-0 top-0"}/>
        </div>
    );
};

export default Topbar;