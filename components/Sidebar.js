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
    SettingsIcon, TerminalIcon
} from "lucide-react";

const Sidebar = () => {

    return (
        <div className={"w-[15%] p-3 items-start h-screen flex overflow-y-scroll flex-col relative"}>
            <Accordion type="multiple" collapsible="true"  className="w-full">
                <AccordionItem value={"about"}>
                    <AccordionTrigger><p className={"flex flex-row items-center justify-start gap-1.5"}><BookmarkIcon size={16}/> Denis</p></AccordionTrigger>
                    <AccordionContent className={"flex flex-col gap-1 items-start"}>
                        <Link href={"/"} className={"w-full flex flex-row justify-between"}>Merhaba</Link>
                        <Link href={"/developers"} className={"w-full flex flex-row justify-between"}>Geliştiriciler</Link>
                        <Link href={"/service/"} className={"w-full flex flex-row justify-between"}>Sistem Servisleri</Link>
                        <Link href={"/server/"} className={"w-full flex flex-row justify-between"}>Sunucu Kurulumu</Link>
                        <Link href={"/versions"} className={"w-full flex flex-row justify-between"}>Sürümlendirme ve Güncellemeler</Link>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value={"cli"}>
                    <AccordionTrigger><p className={"flex flex-row items-center justify-start gap-1.5"}><TerminalIcon size={16}/> Terminal Uygulaması</p></AccordionTrigger>
                    <AccordionContent className={"flex flex-col gap-1 items-start"}>
                        <Link href={"/cli/rust"} className={"w-full flex flex-row justify-between"}>Rust CLI <p className={"text-xs"}>Clap</p></Link>
                        <Link href={"/cli/java"} className={"w-full flex flex-row justify-between"}>Java CLI <p className={"text-xs"}>PicoCLI</p></Link>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem className={"w-full"} value={"examples"}>
                    <AccordionTrigger><p className={"flex flex-row items-center justify-start gap-1.5"}><PackageOpen size={16}/> Örnekler</p></AccordionTrigger>
                    <AccordionContent className={"flex flex-col gap-1 w-full"}>
                        <AccordionItem value={"examples_javascript"}>
                            <AccordionTrigger><p className={"flex flex-row items-center justify-start gap-1.5"}>Javascript</p></AccordionTrigger>
                            <AccordionContent className={"flex flex-col gap-1 items-start"}>
                                <Link href={"/documents/get/usage"} className={"w-full flex flex-row justify-between"}>Vanilla <p className={"text-xs"}>to_do-app</p></Link>
                                <Link href={"/documents/get/usage"} className={"w-full flex flex-row justify-between"}>React <p className={"text-xs"}>to_do-app</p></Link>
                                <Link href={"/documents/get/usage"} className={"w-full flex flex-row justify-between"}>NextJS <p className={"text-xs"}>blog-app</p></Link>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value={"examples_typescript"}>
                            <AccordionTrigger><p className={"flex flex-row items-center justify-start gap-1.5"}>Typescript</p></AccordionTrigger>
                            <AccordionContent className={"flex flex-col gap-1 items-start"}>
                                <Link href={"/documents/get/usage"} className={"w-full flex flex-row justify-between"}>Vanilla <p className={"text-xs"}>to_do-app</p></Link>
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
                    <AccordionTrigger><p className={"flex flex-row items-center justify-start gap-1.5"}><HardDriveIcon size={16}/> Sürücüler</p></AccordionTrigger>
                    <AccordionContent className={"flex flex-col gap-1 items-start"}>
                        <Link href={"/drivers/java"} className={"w-full flex flex-row justify-between"}>Java <p className={"text-xs"}>0.0.2</p></Link>
                        <Link href={"/drivers/rust"} className={"w-full flex flex-row justify-between"}>Rust <p className={"text-xs"}>0.0.0</p></Link>
                        <Link href={"/drivers/php"} className={"w-full flex flex-row justify-between"}>PHP <p className={"text-xs"}>0.0.1</p></Link>
                        <Link href={"/drivers/typescript"} className={"w-full flex flex-row justify-between"}>Typescript <p className={"text-xs"}>0.0.1</p></Link>
                        <Link href={"/drivers/javascript"} className={"w-full flex flex-row justify-between"}>Javascript <p className={"text-xs"}>0.0.1</p></Link>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value={"storage"}>
                    <AccordionTrigger><p className={"flex flex-row items-center justify-start gap-1.5"}><ArchiveRestoreIcon size={16}/> Depolama (Token) Yapısı</p></AccordionTrigger>
                    <AccordionContent className={"flex flex-col gap-1 items-start"}>
                        <Link href={"/storage/explanation"} className={"w-full flex flex-row justify-between"}>Token nedir ?</Link>
                        <Link href={"/storage/importance"} className={"w-full flex flex-row justify-between"}>Neden bu kadar önemli ?</Link>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value={"modals"}>
                    <AccordionTrigger><p className={"flex flex-row items-center justify-start gap-1.5"}><PackageIcon size={16}/> Modeller</p></AccordionTrigger>
                    <AccordionContent className={"flex flex-col gap-1 items-start"}>
                        <Link href={"/modals/usage"} className={"w-full flex flex-row justify-between"}>Kullanımı <p className={"text-xs"}>Example</p></Link>
                        <Link href={"/modals/library"} className={"w-full flex flex-row justify-between"}>Yapı <p className={"text-xs"}>Library</p></Link>
                        <Link href={"/modals/act/string"} className={"w-full flex flex-row justify-between"}>actString <p className={"text-xs"}>0.0.2</p></Link>
                        <Link href={"/modals/act/listrig"} className={"w-full flex flex-row justify-between"}>actListrig <p className={"text-xs"}>0.0.1</p></Link>
                        <Link href={"/modals/act/strist"} className={"w-full flex flex-row justify-between"}>actStrist<p className={"text-xs"}>0.0.1</p></Link>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value={"documents"}>
                    <AccordionTrigger><p className={"flex flex-row items-center justify-start gap-1.5"}><BookIcon size={16}/> Dökümantasyon</p></AccordionTrigger>
                    <AccordionContent className={"flex flex-col gap-1 w-full"}>
                        <AccordionItem value={"documents_auth"}>
                            <AccordionTrigger><p className={"flex flex-row items-center justify-start gap-1.5"}>AUTH</p></AccordionTrigger>
                            <AccordionContent className={"flex flex-col gap-1 items-start"}>
                                <Link href={"/documents/get/usage"} className={"w-full flex flex-row justify-between"}>Kullanım <p className={"text-xs"}>Example</p></Link>
                                <Link href={"/documents/get/structure"} className={"w-full flex flex-row justify-between"}>Yapı <p className={"text-xs"}>Library</p></Link>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value={"documents_get"}>
                            <AccordionTrigger><p className={"flex flex-row items-center justify-start gap-1.5"}>GET</p></AccordionTrigger>
                            <AccordionContent className={"flex flex-col gap-1 items-start"}>
                                <Link href={"/documents/get/usage"} className={"w-full flex flex-row justify-between"}>Kullanım <p className={"text-xs"}>Example</p></Link>
                                <Link href={"/documents/get/structure"} className={"w-full flex flex-row justify-between"}>Yapı <p className={"text-xs"}>Library</p></Link>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value={"documents_set"}>
                            <AccordionTrigger><p className={"flex flex-row items-center justify-start gap-1.5"}>SET</p></AccordionTrigger>
                            <AccordionContent className={"flex flex-col gap-1 items-start"}>
                                <Link href={"/documents/set/usage"} className={"w-full flex flex-row justify-between"}>Kullanım <p className={"text-xs"}>Example</p></Link>
                                <Link href={"/documents/set/structure"} className={"w-full flex flex-row justify-between"}>Yapı <p className={"text-xs"}>Library</p></Link>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value={"documents_delete"}>
                            <AccordionTrigger><p className={"flex flex-row items-center justify-start gap-1.5"}>DELETE</p></AccordionTrigger>
                            <AccordionContent className={"flex flex-col gap-1 items-start"}>
                                <Link href={"/documents/delete/usage"} className={"w-full flex flex-row justify-between"}>Kullanım <p className={"text-xs"}>Example</p></Link>
                                <Link href={"/documents/delete/structure"} className={"w-full flex flex-row justify-between"}>Yapı <p className={"text-xs"}>Library</p></Link>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value={"documents_heaven"}>
                            <AccordionTrigger><p className={"flex flex-row items-center justify-start gap-1.5"}>HEAVEN</p></AccordionTrigger>
                            <AccordionContent className={"flex flex-col gap-1 items-start"}>
                                <Link href={"/documents/heaven/usage"} className={"w-full flex flex-row justify-between"}>Kullanım <p className={"text-xs"}>Example</p></Link>
                                <Link href={"/documents/heaven/structure"} className={"w-full flex flex-row justify-between"}>Yapı <p className={"text-xs"}>Library</p></Link>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value={"documents_update"}>
                            <AccordionTrigger><p className={"flex flex-row items-center justify-start gap-1.5"}>UPDATE</p></AccordionTrigger>
                            <AccordionContent className={"flex flex-col gap-1 items-start"}>
                                <Link href={"/documents/update/usage"} className={"w-full flex flex-row justify-between"}>Kullanım <p className={"text-xs"}>Example</p></Link>
                                <Link href={"/documents/update/structure"} className={"w-full flex flex-row justify-between"}>Yapı <p className={"text-xs"}>Library</p></Link>
                            </AccordionContent>
                        </AccordionItem>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default Sidebar;