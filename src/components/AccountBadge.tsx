"use client";

import Link from "next/link";
import { BadgeCheck } from "lucide-react";
import type { AccountBadge as AccountBadgeType } from "@/types";

interface AccountBadgeProps {
  account: AccountBadgeType;
  size?: "sm" | "md";
  showAvatar?: boolean;
  className?: string;
}

export default function AccountBadge({
  account,
  size = "sm",
  showAvatar = true,
  className = "",
}: AccountBadgeProps) {
  const textSize = size === "sm" ? "text-[11px]" : "text-[13px]";
  const avatarSize =
    size === "sm" ? "w-5 h-5 text-[10px]" : "w-7 h-7 text-[14px]";
  const checkSize = size === "sm" ? 10 : 13;

  return (
    <Link
      href={`/u/${account.username}`}
      className={`flex items-center gap-1.5 min-w-0 overflow-hidden group/account ${className}`}
      onClick={(e) => e.stopPropagation()}
    >
      {showAvatar && (
        <span
          className={`${avatarSize} rounded-full bg-white/10 flex items-center justify-center flex-shrink-0`}
        >
          {account.avatar}
        </span>
      )}
      <span
        className={`${textSize} text-foreground/60 group-hover/account:text-warm-white transition-colors truncate`}
      >
        {account.displayName}
      </span>
      {/* {account.verified && (
        <BadgeCheck
          size={checkSize}
          className="text-accent flex-shrink-0"
          fill="currentColor"
          strokeWidth={0}
        />
      )} */}
    </Link>
  );
}
