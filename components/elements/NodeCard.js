"use client"

import React, { useState } from 'react';
import { Check, ClipboardCopy } from "lucide-react";
import { cn } from "@/lib/utils";
import { variants } from "@/lib/variants";
import { copyToClipboard } from "@/lib/clipboard";
import { showToast } from "@/lib/toast";

const NodeCard = ({
                      content,
                      title,
                      variant = 'default',
                      className,
                      ...props
                  }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        copyToClipboard(content, setCopied, showToast);
    };

    // Split content by newlines and filter out empty lines
    const lines = content.split('\n').filter(line => line.trim() !== '');

    return (
        <div className="space-y-2">
            {title && (
                <p className="text-sm font-medium text-muted-foreground">{title}</p>
            )}
            <div
                onClick={handleCopy}
                className={cn(
                    "group relative border rounded-lg transition-all duration-200",
                    "p-4 cursor-pointer select-none",
                    variants[variant],
                    className
                )}
                {...props}
            >
                <div className="flex items-center justify-between gap-2">
                    <code className="font-mono text-sm whitespace-pre-wrap text-left flex-1">
                        {lines.map((line, index) => (
                            <React.Fragment key={index}>
                                {line.trim()}
                                {index < lines.length - 1 && <br />}
                            </React.Fragment>
                        ))}
                    </code>
                    <div className="text-muted-foreground transition-opacity duration-200 flex-shrink-0">
                        {copied ? (
                            <Check size={16} className="text-emerald-500" />
                        ) : (
                            <ClipboardCopy size={16} className="group-hover:text-foreground" />
                        )}
                    </div>
                </div>

                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>
        </div>
    );
};

export default NodeCard;