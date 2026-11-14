"use client";

import Image from "next/image";
import { UserRound } from "lucide-react";
import { useState } from "react";

export function ProfileAvatar({ src, name }: { src?: string; name: string }) {
  const [hasError, setHasError] = useState(false);

  if (!src?.trim() || hasError) {
    return (
      <div
        className="portrait-fallback"
        role="img"
        aria-label={`${name} profile image placeholder`}>
        <UserRound size={28} strokeWidth={1.25} />
      </div>
    );
  }

  return (
    <Image
      className="portrait"
      src={src}
      alt={`${name} profile portrait`}
      width={120}
      height={120}
      sizes="(max-width: 600px) 96px, 120px"
      quality={85}
      priority
      onError={() => setHasError(true)}
    />
  );
}
