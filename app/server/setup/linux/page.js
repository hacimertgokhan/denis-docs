"use client"

import React from 'react';
import NodeCard from "@/components/elements/NodeCard";
import Link from "next/link";
import Image from "next/image";

import files from "@/images/Ekran Görüntüsü - 2024-12-01 12-46-04.png";

const Page = () => {
    return (
        <div className={"p-8 h-[900px] overflow-y-scroll"}>
            <div>
                <h1 className={"font-bold text-3xl"}>Adım 1</h1>
                <p>
                    Sunucu kurulumu için öncelikle <Link className={"text-blue-300"}
                                                         href={"https://github.com/hacimertgokhan/release"}>hazır sunucu
                    dosyasını</Link> indiriniz. <br/>
                    <br/>
                    <strong>
                        Aşşağıda görmüş görselde sırasıyla şunlar mevcuttur:
                    </strong>
                    <div className={"flex flex-col items-start"}>
                        <span># 1 ve 2. sırada hazır denis database kurulum dosyası.</span>
                        <span># 3. sırada sadece sunucu dosyası (Önerilmez)</span>
                    </div>
                    <br/>
                    <p><strong>Not:</strong> denis-driver, Denis database için geliştirilen Java API'sidir. Sunucu
                        üzerinde yönetim yetkisi yoktur.</p>
                </p>
                <Image className={"rounded-lg"} src={files} alt={"Files"}/>
            </div>
            <br/>
            <NodeCard
                title={"ddb.sh"}
                variant={"default"}
                content={"" +
                    "                        VERSION=0.0.0.2\n" +
                    "                        echo \"Denis Database $VERSION-alpha, All rights reserved. (https://denisdb.agnozia.com)\"\n" +
                    "                        if lsof -i:5142 &gt; /dev/null; then\n" +
                    "                        echo \"Denis Database runs on 5142 port but this port currently using from another application or\n" +
                    "                        services.\"\n" +
                    "                        echo \"Stop the other service (If its not import)\"\n" +
                    "                        echo \" * in linux: sudo systemctl stop (service that using 5142 port)\"\n" +
                    "                        else\n" +
                    "                        echo \"Denis Database starting...\"\n" +
                    "                        java -Dfile.encoding=UTF-8 -cp \"denis-$VERSION-alpha.jar:lib/*\" github.hacimertgokhan.Main\n" +
                    "                        fi"}
            />
            <p className={"mt-1"}>Bu shell scripti ile beraber veritabanını başlatırsınız.
                Denis <strong>5142</strong> portunda çalışır.</p>
            <br/>
            <NodeCard
                title={"start_ddb_cli.sh"}
                variant={"default"}
                content={"VERSION=0.0.0.2\n" +
                    "echo \"Denis Database Integrated CLI (0.0.1alpha)\"\n" +
                    "java -Dfile.encoding=UTF-8 -cp \"denis-$VERSION-alpha.jar:lib/*\" github.hacimertgokhan.denisdb.cli.CLIMain"}
            />
            <p className={"mt-1"}>Bu shell scripti ile beraber veritabanını yönetmek için geliştirilen komutları önizlersiniz.
                Shell scripti çalıştırıldıktan sonra <strong>--help</strong> yazmanız tavsiye edilir.</p>
        </div>
    );
};

export default Page;