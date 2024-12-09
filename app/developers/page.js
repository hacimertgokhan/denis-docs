import React from 'react';
import Link from "next/link";

const developers = [
    {
        name: "Hacı Mert Gökhan",
        github: 'https://github.com/hacimertgokhan',
        role: "Java Sürücüsü ve Veritabanı Geliştiricisi"
    },
    {
        name: "Yusuf Özbaş",
        github: 'https://github.com/trxyazilimedu',
        role: "PHP, NodeJS Sürücü Geliştiricisi"
    }
]

const Page = () => {
    return (
        <div className={"p-8"}>
                <h1 className={"text-3xl mb-2 flex flex-row items-center justify-between"}>Geliştiriciler</h1>
                <p className={"flex flex-col gap-2 items-start justify-start w-full"}>
                    {
                        developers.map(developer => (
                            <Link className={"flex flex-row justify-between gap-1 w-full items-center"} href={developer.github} key={developer.github}>
                                {developer.name} <p>{developer.role}</p>
                            </Link>
                        ))
                    }
                </p>
            </div>
        );
    };

export default Page;