"use client";

import React, { useEffect, useState } from 'react';
import { Users } from 'lucide-react';
import { fetchGithubContributors } from '@/lib/github';
import { cn } from '@/lib/utils';

export function ContributorsList({ owner, repo, className }) {
    const [contributors, setContributors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadContributors() {
            try {
                setLoading(true);
                const data = await fetchGithubContributors(owner, repo);
                setContributors(data);
            } catch (err) {
                setError('Failed to load contributors');
            } finally {
                setLoading(false);
            }
        }

        loadContributors();
    }, [owner, repo]);

    if (loading) {
        return (
            <div className="flex items-center justify-center p-8 animate-pulse">
                <Users className="w-6 h-6 text-muted-foreground" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-sm text-destructive p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                {error}
            </div>
        );
    }

    return (
        <div className={cn("space-y-4", className)}>
            <h2 className="text-lg font-semibold flex items-center gap-2">
                <Users className="w-5 h-5" />
                Contributors
            </h2>

            <div className="flex flex-wrap gap-2">
                {contributors.map((contributor) => (
                    <a
                        key={contributor.id}
                        href={contributor.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative"
                    >
                        <img
                            src={contributor.avatar_url}
                            alt={`${contributor.login}'s avatar`}
                            className="w-12 h-12 rounded-full ring-2 ring-border transition-all duration-200 group-hover:ring-primary"
                        />
                        <div className="absolute inset-0 flex items-center justify-center rounded-full bg-background/80 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                            <span className="text-xs font-medium">{contributor.contributions}</span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}