"use client";

import React from 'react';

const Page = () => {
    return (
        <div className={"p-8"}>
            <section>
                <h2 className="text-2xl font-bold">Genel Bakış</h2>
                <p>
                    Denis Veritabanı (DDB), Redis mantığına dayalı olarak geliştirilmiş güçlü ve hafif bir Java kütüphanesidir.
                    Verileri etkili önbellekleme mekanizmaları ve sezgisel bir yapı ile saklamayı ve manipüle etmeyi kolaylaştırır,
                    bu da onu geçici veri yönetimi için ideal bir çözüm haline getirir.
                </p>
                <br />
                <h2 className="text-2xl font-bold">Temel Özellikler</h2>
                <ul>
                    <li><strong>Basit ve Verimli:</strong> CRUD işlemlerini kolayca gerçekleştirmek için kullanımı kolay yöntemler sunar.</li>
                    <li><strong>Esnek Veri Yapıları:</strong> <code>String</code>, <code>List&lt;String&gt;</code> ve birleştirilmiş eşlemeleri sorunsuzca yönetir.</li>
                    <li><strong>Paralel İşlemler:</strong> <code>ConcurrentHashMap</code> üzerinde çalışarak, eşzamanlı ve yüksek performanslı görevler için güvenli bir yapı sağlar.</li>
                    <li><strong>Eylem Tabanlı Kategorilendirme:</strong> Verileri durumlarına göre organize ederek geliştirme süreçlerini daha düzenli hale getirir.</li>
                </ul>
                <br />
                <h2 className="text-2xl font-bold">Neden Denis Veritabanı?</h2>
                <p>
                    Denis Veritabanı, geliştiricilere geçici ve yapılandırılmış verileri etkili bir şekilde yönetme gücü verir.
                    Hiyerarşik veri modelleri, basit eşlemeler veya paralel işlemleri ele alırken, hız ve sadelikten ödün vermeden
                    yapı ve performansı garanti eder.
                </p>
                <p><strong>Denis Veritabanı'nı bugün keşfedin ve uygulamanızı geliştirin!</strong></p>
            </section>
        </div>
    );
};

export default Page;