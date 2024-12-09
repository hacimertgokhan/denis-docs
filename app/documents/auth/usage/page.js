import React from 'react';
import NodeCard from "@/components/elements/NodeCard";
import Link from "next/link";

const Page = () => {
    return (
        <div className={"p-8"}>
            <h1 className={"text-2xl font-bold"}>AUTH</h1>
            <p>Auth 0.0.2 sürümü ile beraber gelen ve bölümler arasında direkt geçiş yapmanızı sağlayan temel komutlardan birisidir.<br/>Bölüm (Token) oluşturmak için ya da mevcut bölüme giriş yapmak için kullanılabilir.</p>
            <NodeCard title={"Yeni bölüm oluşturmak için"} content={"AUTH CREATE"}/>
            <p className={"mt-2"}><strong>AUTH CREATE</strong> neden kullanılmalı ?</p>
            <p>Sunucu kurulumu sonrası veritabanına giriş yapmanız halinde sizi boş bir hoşgeldiniz ekranı karşılayacaktır. Veritabanında hali hazırda olan ve geliştirme aşamasında oluşturulan bazı bölümler bulunabilir, ancak yapılacak olan işlemlerinizi böyle genel bölümlerde (tokenlerde) tutmak çok büyük bir sistem açığı yaratabilir.</p>
            <p>Sunucu kurulumu sonrasında <Link className={"text-blue-300"} href={"/cli/rust"}>Rust TKU</Link> ile beraber temiz bir kurulum gerçekleştirebilirsiniz.</p>
        </div>
    );
};

export default Page;