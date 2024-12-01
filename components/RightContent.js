import React from 'react';
import {Bookmark, GithubIcon, Users} from "lucide-react";
import {Separator} from "@/components/ui/separator";
import {ContributorsList} from "@/components/Contributors";

const Rightcontent = () => {
    return (
        <div className={"w-[15%] p-3 items-start h-screen flex flex-col relative"}>
            <ContributorsList repo={"denis"} owner={"hacimertgokhan"}/>
        </div>
    );
};

export default Rightcontent;