"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface AuroraButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  glowClassName?: string;
}

export function AuroraButton({
  className,
  children,
  onClick,
  glowClassName,
  ...props
}: AuroraButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative inline-flex items-center justify-center",
        className
      )}
      {...props}
    >
      {/* Gradient border container */}
      <div
        className={cn(
          "absolute -inset-[2px] rounded-lg bg-gradient-to-r from-purple-500 via-cyan-300 to-emerald-400 opacity-75 blur-lg transition-all",
          "group-hover:opacity-100 group-hover:blur-xl",
          glowClassName
        )}
      />

      {/* Button content */}
      <span
        className={cn(
          "relative rounded-lg bg-slate-950/90 px-4 py-2",
          "text-slate-100 shadow-xl",
          "transition-all group-hover:bg-slate-950/70",
          "border border-slate-800 w-full"
        )}
      >
        {children}
      </span>
    </button>
  );
}
