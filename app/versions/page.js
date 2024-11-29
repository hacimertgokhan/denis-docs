"use client"

import React, {useEffect, useState} from 'react';
import {Card} from "@/components/ui/card";

const Page = () => {
    const [commits, setCommits] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchCommits = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(
                "https://api.github.com/repos/hacimertgokhan/denis/commits" // Örnek public repo
            );

            if (!response.ok) {
                throw new Error("Failed to fetch commits");
            }

            const data = await response.json();
            setCommits(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCommits()
    }, [])


    return (
        <div className={"p-4"}>
            <h1 className={"text-3xl mb-2 flex flex-row items-center justify-between"}>Last Updates <p className={"text-[16px]"}>0.0.0.2-alpha</p></h1>
            <div className={"pt-2 gap-2 flex overflow-y-scroll h-screen flex-col"}>
                {
                    loading === false ? (
                        <div className={"pt-2 gap-2 flex overflow-y-scroll h-screen flex-col"}>
                            {commits.map((commit) => (
                                <Card className={"p-2 bg-[#09090b] border-[#202020] text-[14px] text-[#e2e2e2]"}
                                      key={commit.sha}>
                                    <strong>{commit.commit.message}</strong> by{" "}
                                    {commit.commit.author.name}
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <div className="loader"></div>
                    )
                }
            </div>
        </div>
    );
};

export default Page;