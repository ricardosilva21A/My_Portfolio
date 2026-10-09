"use client";

import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

export function Footer() {
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const update = () => {
            setTime(new Date().toLocaleTimeString('en-GB', { timeZone: 'Europe/Lisbon', hour: '2-digit', minute:'2-digit', second:'2-digit', hour12: false }));
        };
        update();
        const interval = setInterval(update, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="w-full mt-24 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 pb-24 md:pb-0">
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 py-4 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                <span className="font-sans font-medium">© Ricardo Silva · People, Processes &amp; Operations</span>

                <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5"><Clock size={12} /> {time || "00:00:00"} Lisbon time</span>
                </div>
            </div>
        </footer>
    );
}
