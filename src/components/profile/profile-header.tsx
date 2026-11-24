"use client";

import { useState } from "react";
import { Check, Share2 } from "lucide-react";
import type { ProfileConfig } from "@/types/profile";

export function ProfileHeader({ config }: { config: ProfileConfig }) {
  const [feedback, setFeedback] = useState("");
  const availability = config.identity.availability;

  async function shareProfile() {
    const url = config.identity.canonicalUrl;
    const shareData = {
      title: config.identity.name,
      text: config.identity.bio,
      url,
    };

    if (typeof navigator.share === "function") {
      try {
        await navigator.share(shareData);
        setFeedback("Profile shared");
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") return;
        setFeedback("Unable to share profile");
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        setFeedback("Profile link copied");
      } catch {
        setFeedback("Could not copy link. Please copy the profile URL from your browser.");
      }
    }

    window.setTimeout(() => setFeedback(""), 2600);
  }

  return (
    <header className="topbar">
      <div className="topbar-left">
        {availability?.enabled && (
          <span className="availability">
            <i aria-hidden="true" />
            {availability.label}
          </span>
        )}
      </div>
      <div className="topbar-right">
        {config.actions.shareProfile?.enabled && (
          <button
            className="top-cta"
            type="button"
            onClick={shareProfile}
            aria-label="Share profile"
            title="Share profile">
            {feedback === "Profile link copied" ? (
              <Check size={17} strokeWidth={1.8} />
            ) : (
              <Share2 size={17} strokeWidth={1.8} />
            )}
          </button>
        )}
        <span className="share-feedback" aria-live="polite" role="status">
          {feedback}
        </span>
      </div>
    </header>
  );
}
