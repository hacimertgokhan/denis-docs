"use client";

import 'highlight.js/styles/atom-one-dark.css';
import React, {useEffect} from 'react';
import hljs from "highlight.js/lib/core";
import javascript from 'highlight.js/lib/languages/vim';
import NodeCard from "@/components/elements/NodeCard";
import BottomBar from "@/components/BottomBar";

const Page = () => {

    useEffect(() => {
        hljs.registerLanguage('vim', javascript);
        hljs.highlightAll();
    }, []);


    return (
        <div className={"p-8"}>
            <section id={"ubuntu"}>
                <h1 className={"font-bold text-3xl"}>Ubuntu 24.04 & 6.8 Kernel</h1>
                <p>Belirtilen servis DDB sunucusunun arkaplanda çalışmasına olanak sağlar.</p>
                <br/>
                <div className={"flex flex-col gap-1"}>
                    <p>Denis, Servis dosyasını otomatik olarak kurmaz.</p>
                    <br/>
                    <NodeCard
                        title={"Servisi Başlatmak İçin"}
                        content={`sudo systemctl start denis.service`}
                    />
                    <NodeCard
                        title={"Servisi Durdurmak İçin"}
                        content={`sudo systemctl stop denis.service`}
                    />
                </div>
            </section>
            <br/>
            <pre>
                <code className={"language-vim"}>
                    {`
    [Unit]
    Description=Denis
    After=network.target
    
    [Service]
    User=hacimertgokhan
    WorkingDirectory=/opt/denis
    ExecStart=env DISPLAY=:0 SSH_ASKPASS=/usr/lib/ssh/ssh-askpass sudo -A /opt/denis/ddb.sh -start
    SuccessExitStatus=143
    Restart=always
    RestartSec=5
    
    [Install]
    WantedBy=multi-user.target
    
`}
                </code>
            </pre>
            <br/>
            <section id={"window"}>
                <h1 className={"font-bold text-3xl"}>Windows işletim sistemleri için bir servis
                    bulunmamaktadır.</h1>
                <p>Denis, Mevcut olarak windows işletim sistemlerinde herhangi bir servis desteği sağlamamaktadır.</p>
                <BottomBar isActive={true}
                           elements={
                               [
                                   {
                                       name: "Ubuntu",
                                       address: "#ubuntu"
                                   },
                                   {
                                       name: "Windows",
                                       address: "#window"
                                   }
                               ]
                           }
                />
            </section>
        </div>
    );
};

export default Page;