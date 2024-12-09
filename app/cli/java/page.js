"use client"

import { useState } from "react";
import Collapse from "@/components/elements/Collapse";
import NodeCard from "@/components/elements/NodeCard";

export default function Home() {
    return (
        <div className="h-screen p-8 overflow-y-scroll">
            <h1 className="text-3xl font-bold text-gray-100 mb-4">Denis Java TKU</h1>
            <p className="text-lg text-gray-50">
                Denis, bellek ve protobuff tabanlı veritabanı dilidir. Java TKU<sup>1</sup> Aşağıdaki komutları
                kullanarak sistemi yönetebilirsiniz.
            </p>
            <br/>
            <p>Java TKU, Veritabanı sunucusunun içerisine entegre edilmiş şekilde bulunur. Denis Rust TKU ile arasındaki
                fark ise kullanım farklılığıdır. Rust TKU, yapı olarak bir karmaşıklık içermez ve direkt olarak sunucu
                ile ilgili işlemleri gerçekleştirebilir. <br/> <br/>Tüm bunların dahilinde Rust TKU, karmaşıklaşmış
                dosya
                yapılarından sizi uzaklaştırır. Sıfırlama, yeniden oluşturma ve diğer benzeri işlemleri Java TKU
                içerisinde barındırmıyorken
                Rust TKU bu yapıları destekler.</p>
            <NodeCard
                title={"Linux Denis Java TKU Kullanımı"}
                content={`
                VERSION=$(grep -oP '^sem_ver=\\K.*' denis.conf)
echo "Denis Database Integrated CLI (jcli-lnx-0.0.2alpha)"
java -Dfile.encoding=UTF-8 -cp "denis-$VERSION-alpha.jar:lib/*" github.hacimertgokhan.denisdb.cli.CLIMain
`}
            />
            <NodeCard
                title={"Windows Denis Java TKU Kullanımı"}
                content={`
@echo off
setlocal enabledelayedexpansion
for /f "tokens=1,2 delims==" %%A in (denis.conf) do (
    if "%%A"=="sem_ver" (set VERSION=%%B))
echo Denis Database Integrated CLI (jcli-win-0.0.1alpha)
java -Dfile.encoding=UTF-8 -cp "denis-%VERSION%-alpha.jar;lib/*" github.hacimertgokhan.denisdb.cli.CLIMain

`}
            />
            <br/>
            <Collapse
                h={"h-[75px]"}
                content={
                    <div>
                        Sürüm bilgilerini gösterir.
                    </div>
                }
                title={"--version"}
            />
            <br/>
            <Collapse
                h={"h-[75px]"}
                content={
                    <div>
                        Veritabanı hakkında bilgi verir.
                    </div>
                }
                title={"--about"}
            />
            <br/>
            <Collapse
                h={"h-[75px]"}
                content={
                    <div>
                        DenisDB'nin bellek kullanımını izlersiniz.
                    </div>
                }
                title={"--mu"}
            />
            <br/>
            <Collapse
                h={"h-[150px]"}
                content={
                    <div>
                        DenisDB Yetkilendirme ve bölümlere erişimleri sınırlandırmak için kullanılan
                        gruplandırma sistem.
                        <div className="mt-4 space-y-2 pl-4">
                            <div className="text-gray-100">-cng: Yeni bir grup oluşturursunuz.</div>
                            <div className="text-gray-100">-aa: Grupları ve grupların eriştiği bölümleri listeler.</div>
                        </div>
                    </div>
                }
                title={"--access"}
            />
            <br/>
            <Collapse
                h={"h-[75px]"}
                content={
                    <div>
                        DenisDB'nin bellek kullanımını süreç yapısı şeklinde izlersiniz.
                    </div>
                }
                title={"--lm"}
            />
            <br/>
            <Collapse
                h={"h-[175px]"}
                content={
                    <div>
                        Veri tokenleri kullanımı.
                        <div className="mt-4 space-y-2 pl-4">
                            <div className="text-gray-100">-l: Token listesini önizler.</div>
                            <div className="text-gray-100">-c: Yeni bir token (veri bölümü) oluşturur.</div>
                            <div className="text-gray-100">-i: Tokenler (veri bölümleri) hakkında bilgi verir.</div>
                        </div>
                    </div>
                }
                title={"--token"}
            />
            <br/>
            <Collapse
                h={"h-[200px]"}
                content={
                    <div>
                        DenisDB'nin ayarlarını ve kullanıcı tercihlerini hızlıca değiştirir.
                        <div className="mt-4 space-y-2 pl-4">
                            <div className="text-gray-100">-lang: Dil seçeneklerini ayarlayın.</div>
                            <div className="text-gray-100">-smts: Maksimum oluşturulabilir token (veri bölümü) miktarını
                                ayarlar.
                            </div>
                            <div className="text-gray-100">-ctea: Seçilen token için her girişte yeni token sistemini
                                aktif/pasif yapar.
                            </div>
                            <div className="text-gray-100">-umte: Genel token sistemini aktif/pasif yapar.</div>
                        </div>
                    </div>
                }
                title={"--opt"}
            />
            <br/>
            <Collapse
                h={"h-[75px]"}
                content={
                    <div>
                        Manuel moddan çıkış yapar.
                    </div>
                }
                title={"--exit"}
            />
            <br/>
            <div className="mt-1 text-gray-50 text-sm">
                Burada yapılan tüm değişiklikler manuel olarak da yapılabilir, işlemler <span
                className="font-semibold">denis.properties</span> dosyasına kaydedilir.
            </div>
            <br/>
            <div className={"text-xs"}>
                <p>1: Terminal Komut Uygulaması</p>
            </div>
            <br/>
            <br/>
            <br/>
        </div>
    );
}
