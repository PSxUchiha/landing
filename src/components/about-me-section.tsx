"use client";
import dynamic from "next/dynamic";
import { User } from "lucide-react";

const AboutMe = dynamic(() => import("@/components/about-me-md"), { ssr: false });

export default function AboutMeSection() {
  return (
    <div className="w-full bg-background rounded-lg border border-border" suppressHydrationWarning>
      <h2 className="w-full flex items-center gap-3 text-muted-foreground px-5 py-3 border-b border-border">
        <User className="size-4" />
        <span className="text-sm font-mono">ABOUT-ME.md</span>
      </h2>
      <AboutMe />
    </div>
  );
} 