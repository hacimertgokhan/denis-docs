"use client"

import React from 'react';
import 'highlight.js/styles/atom-one-dark.css';
import { useEffect } from 'react';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/java';
import NodeCard from "@/components/elements/NodeCard";

const Page = () => {
    useEffect(() => {
        hljs.registerLanguage('java', javascript);
        hljs.highlightAll();
    }, []);

    const denishost = `
    package github.hacimertgokhan.driver;

    public class DenisHost {
        private String host;
        private int port;
    
        public int getPort() {
            return port;
        }
    
        public void setPort(int port) {
            this.port = port;
        }
    
        public String getHost() {
            return host;
        }
    
        public void setHost(String host) {
            this.host = host;
        }
    
        public DenisHost(String host, int port) {
            this.host = host;
            this.port = port;
        }
    }

`;

    const denisdb = `
    package github.hacimertgokhan.driver;
    
    import java.io.BufferedReader;
    import java.io.InputStreamReader;
    import java.io.OutputStreamWriter;
    import java.io.PrintWriter;
    import java.net.Socket;
    
    public class DenisDB {
        public DenisHost denisHost;
    
        public DenisDB(DenisHost denisHost) {
            this.denisHost=denisHost;
        }
    
        public String command(String command) {
            try (Socket socket = new Socket(denisHost.getHost(), denisHost.getPort());
                 PrintWriter out = new PrintWriter(new OutputStreamWriter(socket.getOutputStream()), true);
                 BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()))) {
                out.println(command);
                return in.readLine();
            } catch (Exception e) {
                e.printStackTrace();
                return "ERROR: " + e.getMessage();
            }
        }
    }
  `;

    return (
        <div className={"p-8 h-screen overflow-y-scroll"}>
            <h1 className={"text-3xl font-bold"}>Java API</h1>
            <br/>
            <NodeCard title={"Java sürücüsünü indirmek için aşşağıdaki bağlantıya tıklayınız."}
                      content={`https://github.com/hacimertgokhan/denis/tree/master/drivers/history`}/>
            <br/>
            <div>
                <p>DenisDB.class</p>
                <pre className={"border-[1px] border-[#202020] rounded-md"}>
                  <code className="language-java">{denisdb}</code>
                </pre>
            </div>
            <br/>
            <div>
                <p>DenisHost.class</p>
                <pre className={"border-[1px] border-[#202020] rounded-md"}>
                  <code className="language-java">{denishost}</code>
                </pre>
            </div>
            <br/>
            <br/>
            <br/>
        </div>
    );
};

export default Page;