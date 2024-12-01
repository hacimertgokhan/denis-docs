"use client"

import React from 'react';
import { useEffect } from 'react';
import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/atom-one-dark.css';
import javascript from 'highlight.js/lib/languages/php';
import NodeCard from "@/components/elements/NodeCard";

const Page = () => {
    useEffect(() => {
        hljs.registerLanguage('java', javascript);
        hljs.highlightAll();
    }, []);

    const ddconnect = `
    <?php
    namespace Trxyazilim\\Denisdb;
    class DDConnect
    {
        private $socket;
        private $host;
        private $port;
        private $debug;
    
        public function __construct($host = '127.0.0.1', $port = 5142,$debug = false)
        {
            $this->host = $host;
            $this->port = $port;
            $this->debug = $debug;
    
            $this->connect();
        }
    
        private function connect()
        {
            $address = "tcp://{$this->host}:{$this->port}";
            $this->socket = @stream_socket_client($address, $errno, $errstr, 5);
    
            if (!$this->socket) {
                throw new \\Exception("Could not connect to DenisDB: [$errno] $errstr");
            }
    
            echo "Connected to DenisDB on {$this->host}:{$this->port}\\n";
        }
    
        public function sendCommand($command)
        {
            if (!$this->socket) {
                throw new \\Exception("No connection to DenisDB.");
            }
    
            // Komut gönderme
            $writeResult = fwrite($this->socket, $command . "\\n");
            if ($writeResult === false) {
                throw new \\Exception("Error writing command to DenisDB.");
            }
    
            // Yanıt alma
            $response = fgets($this->socket, 1024);
    
            // Yanıtı debug etmek için yazdıralım
            if ($response === false) {
                throw new \\Exception("Error reading response from DenisDB.");
            } else {
                if($this->debug){
                    echo "Response from DenisDB: " . $response . "\\n"; // Yanıtı gör
                }
    
            }
    
            return trim($response);
        }
    
    
        public function close()
        {
            if ($this->socket) {
                fclose($this->socket);
                $this->socket = null;
                if($this->debug){
                    echo "Connection to DenisDB closed.\\n";
                }
    
            }
        }
    
        public function __destruct()
        {
            $this->close();
        }
}`

    const denishost = `
    <?php
        require_once __DIR__ . '/vendor/autoload.php';
        
        use Trxyazilim\\Denisdb\\DDConnect; // Doğru namespace'i kullanın
        
        
        
        try {
            // DenisDB sunucusuna bağlan
            $db = new DDConnect('127.0.0.1', 5142);
            $db->sendCommand('SET key value');
        
        } catch (Exception $e) {
            echo "Error: " . $e->getMessage() . "\\n";
        }

`;
    return (
        <div className={"p-4 h-screen overflow-y-scroll"}>
            <h1 className={"text-3xl font-bold"}>PHP API</h1>
            <br/>
            <NodeCard title={"Komutu kullanarak PHP Sürücüsünü indirebilirsiniz."}
                      content={`  composer require trxyazilim/denisdb`}/>
            <br/>
            <div>
                <p>Kullanım</p>
                <pre className={"border-[1px] border-[#202020] rounded-md"}>
                  <code className="language-java rounded-md">{denishost}</code>
                </pre>
            </div>
            <br/>
            <div>
                <p>DDConnect.php</p>
                <pre className={"border-[1px] border-[#202020] rounded-md"}>
                  <code className="language-java rounded-md">{ddconnect}</code>
                </pre>
            </div>
            <br/>
            <br/>
            <br/>
        </div>
    );
};

export default Page;