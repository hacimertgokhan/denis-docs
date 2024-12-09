import React from 'react';
import Link from "next/link";
import BottomBar from "@/components/BottomBar";

const Page = () => {
    return (
        <div className={"p-8"}>
            <h1 className={"font-bold text-3xl"}>Model Kullanımları</h1>
            <br/>
            <div>
                Veritabanını direkt olarak komutlar ile beraber kullananlar için modeller önemsizdir. Çünkü modeller
                temelde yazılımınızı geliştirme ile ilgilidir.<br/>
                <br/>
                Mevcut modeller;<br/>
                - String: String -&gt; actString<br/>
                - Dizi: String -&gt; actListrig<br/>
                - String: Dizi -&gt; actStrist<br/>
                <br/>
                Şeklinde veri tutumu yapar. (Listede [anahtar: değer] eşleştirilmesi yapılmıştır.)
                <br/>
                <br/>
                <h2 className={"font-bold"}>Neden integer, boolean, float ya da double veri sınıflandırması yok ?</h2>
                <p>
                    Temel nedenlerinden biri çoğu yapının string değerinin tutulabilmesidir. Örnek olarak integer veri
                    tipi 1 olan bir anahtar düşünürsek bu veri "1" şeklinde de tutulabilir ve veri okuma işlemi
                    sırasında <Link href={"/modals/get/usage"}>GET</Link> yapısının döndürdüğü değerde herhangi bir
                    tırnak işareti bulunamaz.
                </p>
                <p>
                    Ancak bu, eksik olan veri yapılarının eklenmeyeceği anlamına gelmez.
                </p>
                <br/>
                <h2 className={"font-bold"}>Çoktan teke gitmenin mantığı nedir ?</h2>
                <p>
                    Çoktan teke gitmek kodlama açısından bakıldığında çokta önemli görülmeyebilir ancak ihtiyaç duyduğumuz bir çok nokta vardır. Örneği şu şekilde verilebilir;<br/>
                    Elma, Armut ve Muz isimlerine sahip 3 elemanlı bir dizimizin olduğunu varsayalım. Bu dizinin adı "Meyveler" olarak adlandırılır ise GET ["Elma", "Armut", "Muz"] sorgusunun bize döngüsü Meyveler olur.
                    Yani üst sorumlu değere gitmek için alt elemanları kullanarak üst sorumlu elemana ulaşabiliriz.
                </p>
            </div>
            <BottomBar isActive={true}
                       elements={
                           [
                               {
                                   name: "actString",
                                   address: "/modals/act/string"
                               },
                               {
                                   name: "actListrig",
                                   address: "/modals/act/listrig"
                               },
                               {
                                   name: "actStrist",
                                   address: "/modals/act/strist"
                               }
                           ]
                       }
            />
        </div>
    );
};

export default Page;