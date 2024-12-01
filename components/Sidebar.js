import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link";
import {
    ArchiveRestoreIcon,
    BookIcon,
    BookmarkIcon,
    HardDriveIcon,
    PackageIcon,
    PackageOpen,
    SettingsIcon
} from "lucide-react";

const Sidebar = () => {

    return (
        <div className={"w-[15%] p-3 items-start h-screen flex overflow-y-scroll flex-col relative"}>
            <Accordion type="multiple" collapsible="true"  className="w-full">
                <AccordionItem value={"about"}>
                    <AccordionTrigger><p className={"flex flex-row items-center justify-start gap-1.5"}><BookmarkIcon size={16}/> Denis</p></AccordionTrigger>
                    <AccordionContent className={"flex flex-col gap-1 items-start"}>
                        <Link href={"/"} className={"w-full flex flex-row justify-between"}>Welcome</Link>
                        <Link href={"/versions"} className={"w-full flex flex-row justify-between"}>Updates & Versions</Link>
                        <Link href={"/developers"} className={"w-full flex flex-row justify-between"}>Developers</Link>
                        <Link href={"/server/"} className={"w-full flex flex-row justify-between"}>Denis Database Server Setup</Link>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem className={"w-full"} value={"examples"}>
                    <AccordionTrigger><p className={"flex flex-row items-center justify-start gap-1.5"}><PackageOpen size={16}/> Examples</p></AccordionTrigger>
                    <AccordionContent className={"flex flex-col gap-1 w-full"}>
                        <AccordionItem value={"examples_javascript"}>
                            <AccordionTrigger><p className={"flex flex-row items-center justify-start gap-1.5"}>Javascript</p></AccordionTrigger>
                            <AccordionContent className={"flex flex-col gap-1 items-start"}>
                                <Link href={"/documents/get/usage"} className={"w-full flex flex-row justify-between"}>React <p className={"text-xs"}>to_do-app</p></Link>
                                <Link href={"/documents/get/usage"} className={"w-full flex flex-row justify-between"}>NextJS <p className={"text-xs"}>blog-app</p></Link>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value={"examples_rust"}>
                            <AccordionTrigger><p className={"flex flex-row items-center justify-start gap-1.5"}>Rust</p></AccordionTrigger>
                            <AccordionContent className={"flex flex-col gap-1 items-start"}>
                                <Link href={"/documents/get/usage"} className={"w-full flex flex-row justify-between"}>CLI <p className={"text-xs"}>to_do-cli-app</p></Link>
                                <Link href={"/documents/get/usage"} className={"w-full flex flex-row justify-between"}>Actix <p className={"text-xs"}>to_do-backend</p></Link>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value={"examples_php"}>
                            <AccordionTrigger><p className={"flex flex-row items-center justify-start gap-1.5"}>PHP</p></AccordionTrigger>
                            <AccordionContent className={"flex flex-col gap-1 items-start"}>
                                <Link href={"/documents/get/usage"} className={"w-full flex flex-row justify-between"}>Vanilla <p className={"text-xs"}>to_do-backend</p></Link>
                                <Link href={"/documents/get/usage"} className={"w-full flex flex-row justify-between"}>Vanilla <p className={"text-xs"}>to_do-app</p></Link>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value={"examples_java"}>
                            <AccordionTrigger><p className={"flex flex-row items-center justify-start gap-1.5"}>Java</p></AccordionTrigger>
                            <AccordionContent className={"flex flex-col gap-1 items-start"}>
                                <Link href={"/documents/get/usage"} className={"w-full flex flex-row justify-between"}>Swagger <p className={"text-xs"}>to_do-backend</p></Link>
                                <Link href={"/documents/get/usage"} className={"w-full flex flex-row justify-between"}>Vanilla <p className={"text-xs"}>to_do-cli-app</p></Link>
                            </AccordionContent>
                        </AccordionItem>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value={"drivers"}>
                    <AccordionTrigger><p className={"flex flex-row items-center justify-start gap-1.5"}><HardDriveIcon size={16}/> Drivers</p></AccordionTrigger>
                    <AccordionContent className={"flex flex-col gap-1 items-start"}>
                        <Link href={"/drivers/java"} className={"w-full flex flex-row justify-between"}>Java <p className={"text-xs"}>0.0.2</p></Link>
                        <Link href={"/drivers/rust"} className={"w-full flex flex-row justify-between"}>Rust <p className={"text-xs"}>0.0.0</p></Link>
                        <Link href={"/drivers/javascript"} className={"w-full flex flex-row justify-between"}>Javascript <p className={"text-xs"}>0.0.1</p></Link>
                        <Link href={"/drivers/php"} className={"w-full flex flex-row justify-between"}>PHP <p className={"text-xs"}>0.0.1</p></Link>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value={"storage"}>
                    <AccordionTrigger><p className={"flex flex-row items-center justify-start gap-1.5"}><ArchiveRestoreIcon size={16}/> Storage (Token) Structure</p></AccordionTrigger>
                    <AccordionContent className={"flex flex-col gap-1 items-start"}>
                        <Link href={"/storage/explanation"} className={"w-full flex flex-row justify-between"}>What is token ?</Link>
                        <Link href={"/storage/importance"} className={"w-full flex flex-row justify-between"}>Why is that important ?</Link>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value={"modals"}>
                    <AccordionTrigger><p className={"flex flex-row items-center justify-start gap-1.5"}><PackageIcon size={16}/> Modals</p></AccordionTrigger>
                    <AccordionContent className={"flex flex-col gap-1 items-start"}>
                        <Link href={"/modals/usage"} className={"w-full flex flex-row justify-between"}>Usage <p className={"text-xs"}>Example</p></Link>
                        <Link href={"/modals/library"} className={"w-full flex flex-row justify-between"}>Structure <p className={"text-xs"}>Library</p></Link>
                        <Link href={"/modals/act/string"} className={"w-full flex flex-row justify-between"}>actString <p className={"text-xs"}>0.0.2</p></Link>
                        <Link href={"/modals/act/listrig"} className={"w-full flex flex-row justify-between"}>actListrig <p className={"text-xs"}>0.0.1</p></Link>
                        <Link href={"/modals/act/strist"} className={"w-full flex flex-row justify-between"}>actStrist<p className={"text-xs"}>0.0.1</p></Link>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value={"documents"}>
                    <AccordionTrigger><p className={"flex flex-row items-center justify-start gap-1.5"}><BookIcon size={16}/> Documents</p></AccordionTrigger>
                    <AccordionContent className={"flex flex-col gap-1 w-full"}>
                        <AccordionItem value={"documents_get"}>
                            <AccordionTrigger><p className={"flex flex-row items-center justify-start gap-1.5"}>GET</p></AccordionTrigger>
                            <AccordionContent className={"flex flex-col gap-1 items-start"}>
                                <Link href={"/documents/get/usage"} className={"w-full flex flex-row justify-between"}>Usage <p className={"text-xs"}>Example</p></Link>
                                <Link href={"/documents/get/structure"} className={"w-full flex flex-row justify-between"}>Structure <p className={"text-xs"}>Library</p></Link>
                                <Link href={"/documents/get/get-cache"} className={"w-full flex flex-row justify-between"}>GC <p className={"text-xs"}>0.0.2</p></Link>
                                <Link href={"/documents/get/get-cache-use-json"} className={"w-full flex flex-row justify-between"}>GCJ <p className={"text-xs"}>0.0.1</p></Link>
                                <Link href={"/documents/get/get-protobuff"} className={"w-full flex flex-row justify-between"}>GPB <p className={"text-xs"}>0.0.1</p></Link>
                                <Link href={"/documents/get/get-protobuff-use-json"} className={"w-full flex flex-row justify-between"}>GPBJ <p className={"text-xs"}>0.0.1</p></Link>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value={"documents_set"}>
                            <AccordionTrigger><p className={"flex flex-row items-center justify-start gap-1.5"}>SET</p></AccordionTrigger>
                            <AccordionContent className={"flex flex-col gap-1 items-start"}>
                                <Link href={"/documents/set/usage"} className={"w-full flex flex-row justify-between"}>Usage <p className={"text-xs"}>Example</p></Link>
                                <Link href={"/documents/set/structure"} className={"w-full flex flex-row justify-between"}>Structure <p className={"text-xs"}>Library</p></Link>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value={"documents_delete"}>
                            <AccordionTrigger><p className={"flex flex-row items-center justify-start gap-1.5"}>DELETE</p></AccordionTrigger>
                            <AccordionContent className={"flex flex-col gap-1 items-start"}>
                                <Link href={"/documents/delete/usage"} className={"w-full flex flex-row justify-between"}>Usage <p className={"text-xs"}>Example</p></Link>
                                <Link href={"/documents/delete/structure"} className={"w-full flex flex-row justify-between"}>Structure <p className={"text-xs"}>Library</p></Link>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value={"documents_heaven"}>
                            <AccordionTrigger><p className={"flex flex-row items-center justify-start gap-1.5"}>HEAVEN</p></AccordionTrigger>
                            <AccordionContent className={"flex flex-col gap-1 items-start"}>
                                <Link href={"/documents/heaven/usage"} className={"w-full flex flex-row justify-between"}>Usage <p className={"text-xs"}>Example</p></Link>
                                <Link href={"/documents/heaven/structure"} className={"w-full flex flex-row justify-between"}>Structure <p className={"text-xs"}>Library</p></Link>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value={"documents_update"}>
                            <AccordionTrigger><p className={"flex flex-row items-center justify-start gap-1.5"}>UPDATE</p></AccordionTrigger>
                            <AccordionContent className={"flex flex-col gap-1 items-start"}>
                                <Link href={"/documents/update/usage"} className={"w-full flex flex-row justify-between"}>Usage <p className={"text-xs"}>Example</p></Link>
                                <Link href={"/documents/update/structure"} className={"w-full flex flex-row justify-between"}>Structure <p className={"text-xs"}>Library</p></Link>
                            </AccordionContent>
                        </AccordionItem>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default Sidebar;