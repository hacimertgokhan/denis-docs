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
                "https://api.github.com/repos/hacimertgokhan/denis/commits"
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
        <div className={"p-8"}>
            <h1 className={"text-3xl mb-2 flex flex-row items-center justify-between"}>Son Güncellemeler <p className={"text-[16px]"}>0.0.2.7-alpha</p></h1>
            <div className={"pt-2 gap-2 flex overflow-y-scroll h-[800px] flex-col"}>
                {
                    loading === false ? (
                        <div className={"pt-2 gap-2 flex overflow-y-scroll h-screen flex-col"}>
                            {commits.map((commit) => (
                                <Card className={"p-2 bg-[#09090b] border-[#202020] text-[14px] text-[#e2e2e2]"}
                                      key={commit.sha}>
                                    {commit.commit.author.name}:{" "}<strong>{commit.commit.message}</strong>

                                </Card>
                            ))}
                        </div>
                    ) : (
                        <div className={"w-full h-full flex items-center justify-center"}>
                            <div className="loader"></div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Page;