"use client";

import Image from "next/image";
import { useState } from "react";
import { UserRound } from "lucide-react";

export function ProfilePhoto() {
    const [imageUnavailable, setImageUnavailable] = useState(false);

    return (
        <div className="relative mb-8 h-36 w-36 overflow-hidden rounded-full border-4 border-zinc-200 bg-zinc-100 shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
            {!imageUnavailable ? (
                <Image
                    src="/images/profile.jpg"
                    alt="Fotografia de Ricardo Silva"
                    fill
                    priority
                    sizes="144px"
                    className="object-cover"
                    onError={() => setImageUnavailable(true)}
                />
            ) : (
                <div className="flex h-full flex-col items-center justify-center gap-1 text-zinc-500 dark:text-zinc-400">
                    <UserRound size={40} strokeWidth={1.25} />
                    <span className="text-[9px] font-mono">A tua fotografia</span>
                </div>
            )}
        </div>
    );
}
