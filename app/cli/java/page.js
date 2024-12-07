"use client"

import { useState } from "react";
import Collapse from "@/components/elements/Collapse";

export default function Home() {
    const [activeCommand, setActiveCommand] = useState(null);

    const toggleCommand = (command) => {
        setActiveCommand(activeCommand === command ? null : command);
    };

    return (
        <div className="h-screen p-8 overflow-y-scroll">
            <h1 className="text-3xl font-bold text-gray-100 mb-4">DenisDB Komutları</h1>
            <p className="text-lg text-gray-50 mb-8">
                DenisDB, bellek ve protobuff tabanlı veritabanı dilidir. Aşağıdaki komutları
                kullanarak sistemi yönetebilirsiniz.
            </p>

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
        </div>
    );
}
