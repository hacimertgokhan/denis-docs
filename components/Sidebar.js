import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link";
import {BookIcon, BookmarkIcon, HardDriveIcon, PackageIcon, SettingsIcon} from "lucide-react";

const Sidebar = () => {

    return (
        <div className={"w-[15%] p-3 items-start h-screen flex overflow-y-scroll flex-col relative"}>
            <Accordion type="multiple" collapsible className="w-full">
                <AccordionItem value={"about"}>
                    <AccordionTrigger><p className={"flex flex-row items-center justify-start gap-1.5"}><BookmarkIcon size={16}/> Denis</p></AccordionTrigger>
                    <AccordionContent className={"flex flex-col gap-1 items-start"}>
                        <Link href={"/"} className={"w-full flex flex-row justify-between"}>Welcome</Link>
                        <Link href={"/versions"} className={"w-full flex flex-row justify-between"}>Updates & Versions</Link>
                        <Link href={"/developers"} className={"w-full flex flex-row justify-between"}>Developers</Link>
                        <Link href={"/server/setup"} className={"w-full flex flex-row justify-between"}>Denis Database Server Setup</Link>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value={"drivers"}>
                    <AccordionTrigger><p className={"flex flex-row items-center justify-start gap-1.5"}><HardDriveIcon size={16}/> Drivers</p></AccordionTrigger>
                    <AccordionContent className={"flex flex-col gap-1 items-start"}>
                        <Link href={""} className={"w-full flex flex-row justify-between"}>Java <p className={"text-xs"}>0.0.2</p></Link>
                        <Link href={""} className={"w-full flex flex-row justify-between"}>Javascript <p className={"text-xs"}>0.0.1</p></Link>
                        <Link href={""} className={"w-full flex flex-row justify-between"}>PHP <p className={"text-xs"}>0.0.1</p></Link>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value={"modals"}>
                    <AccordionTrigger><p className={"flex flex-row items-center justify-start gap-1.5"}><PackageIcon size={16}/> Modals</p></AccordionTrigger>
                    <AccordionContent className={"flex flex-col gap-1 items-start"}>
                        <Link href={""} className={"w-full flex flex-row justify-between"}>Usage <p className={"text-xs"}>Example</p></Link>
                        <Link href={""} className={"w-full flex flex-row justify-between"}>Structure <p className={"text-xs"}>Library</p></Link>
                        <Link href={""} className={"w-full flex flex-row justify-between"}>actString <p className={"text-xs"}>0.0.2</p></Link>
                        <Link href={""} className={"w-full flex flex-row justify-between"}>actListrig <p className={"text-xs"}>0.0.1</p></Link>
                        <Link href={""} className={"w-full flex flex-row justify-between"}>actStrist<p className={"text-xs"}>0.0.1</p></Link>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value={"documents"}>
                    <AccordionTrigger><p className={"flex flex-row items-center justify-start gap-1.5"}><BookIcon size={16}/> Documents</p></AccordionTrigger>
                    <AccordionContent className={"flex flex-col gap-1 w-full"}>
                        <AccordionItem value={"documents_get"}>
                            <AccordionTrigger><p className={"flex flex-row items-center justify-start gap-1.5"}>GET</p></AccordionTrigger>
                            <AccordionContent className={"flex flex-col gap-1 items-start"}>
                                <Link href={""} className={"w-full flex flex-row justify-between"}>Usage <p className={"text-xs"}>Example</p></Link>
                                <Link href={""} className={"w-full flex flex-row justify-between"}>Structure <p className={"text-xs"}>Library</p></Link>
                                <Link href={""} className={"w-full flex flex-row justify-between"}>GC <p className={"text-xs"}>0.0.2</p></Link>
                                <Link href={""} className={"w-full flex flex-row justify-between"}>GPCJ <p className={"text-xs"}>0.0.1</p></Link>
                                <Link href={""} className={"w-full flex flex-row justify-between"}>GPB <p className={"text-xs"}>0.0.1</p></Link>
                                <Link href={""} className={"w-full flex flex-row justify-between"}>GPBJ <p className={"text-xs"}>0.0.1</p></Link>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value={"documents_set"}>
                            <AccordionTrigger><p className={"flex flex-row items-center justify-start gap-1.5"}>SET</p></AccordionTrigger>
                            <AccordionContent className={"flex flex-col gap-1 items-start"}>
                                <Link href={""} className={"w-full flex flex-row justify-between"}>Usage <p className={"text-xs"}>Example</p></Link>
                                <Link href={""} className={"w-full flex flex-row justify-between"}>Structure <p className={"text-xs"}>Library</p></Link>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value={"documents_delete"}>
                            <AccordionTrigger><p className={"flex flex-row items-center justify-start gap-1.5"}>DELETE</p></AccordionTrigger>
                            <AccordionContent className={"flex flex-col gap-1 items-start"}>
                                <Link href={""} className={"w-full flex flex-row justify-between"}>Usage <p className={"text-xs"}>Example</p></Link>
                                <Link href={""} className={"w-full flex flex-row justify-between"}>Structure <p className={"text-xs"}>Library</p></Link>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value={"documents_heaven"}>
                            <AccordionTrigger><p className={"flex flex-row items-center justify-start gap-1.5"}>HEAVEN</p></AccordionTrigger>
                            <AccordionContent className={"flex flex-col gap-1 items-start"}>
                                <Link href={""} className={"w-full flex flex-row justify-between"}>Usage <p className={"text-xs"}>Example</p></Link>
                                <Link href={""} className={"w-full flex flex-row justify-between"}>Structure <p className={"text-xs"}>Library</p></Link>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value={"documents_update"}>
                            <AccordionTrigger><p className={"flex flex-row items-center justify-start gap-1.5"}>UPDATE</p></AccordionTrigger>
                            <AccordionContent className={"flex flex-col gap-1 items-start"}>
                                <Link href={""} className={"w-full flex flex-row justify-between"}>Usage <p className={"text-xs"}>Example</p></Link>
                                <Link href={""} className={"w-full flex flex-row justify-between"}>Structure <p className={"text-xs"}>Library</p></Link>
                            </AccordionContent>
                        </AccordionItem>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default Sidebar;