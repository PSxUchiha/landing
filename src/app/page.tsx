import React from 'react';
import Container from "@/components/container";
import { Metadata } from "next";
import { Hero } from "@/components/hero";
import type { WebPage, WithContext } from "schema-dts";
import { Code, GitGraph, Info, User, School, Terminal, Mail } from "lucide-react";
import { TextScroll } from "@/components/ui/text-scroll";
import { TechStack } from "@/components/tech-stack";
import { ProjectShowcase } from "@/components/project-showcase";

import HeroImage from "@/assets/img/hero.jpg";
import HeroProfile from "@/assets/img/profpic-animated.webp";

export const metadata: Metadata = {
  title: "Landing | landing.",
  description: "Where it all begins.",
  openGraph: {
    title: "Landing | landing.",
    description: "Where it all begins.",
  },
};

export default function Home() {
  const jsonLd: WithContext<WebPage> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Priyanshu Sharma",
    alternateName: "landing.",
    mainEntityOfPage: "https://priyanshusharma.dev/",
    description: "Where it all begins.",
    url: "https://priyanshusharma.dev/",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Landing",
          item: "https://priyanshusharma.dev/",
        }
      ],
    },
  };

  return (
    <>
      <Container>
        <Hero img={HeroImage} profile={HeroProfile} />
        <div className="w-full bg-background rounded-lg border border-border">
          <h2 className="w-full flex items-center gap-3 text-muted-foreground px-5 py-3 border-b border-border">
            <User className="size-4" />
            <span className="text-sm font-mono">ABOUT-ME.md</span>
          </h2>
          <div className="px-5 py-3 space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <School className="size-4" />
              <p>B.Tech student in Electronics and Communication at MIT Manipal (2027)</p>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Terminal className="size-4" />
              <p>Passionate about development and collaboration</p>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="size-4" />
              <p>For inquiries, please reach out via <a href="mailto:priyanshusharma1803@outlook.com" className="underline underline-offset-2">email</a></p>
            </div>
          </div>
        </div>

        <div className="w-full bg-background rounded-lg border border-border">
          <h2 className="w-full flex items-center gap-3 text-muted-foreground px-5 py-3 border-b border-border">
            <Code className="size-4" />
            <span className="text-sm font-mono">TECH_STACK.md</span>
          </h2>
          <TechStack />
        </div>

        <div className="w-full bg-background rounded-lg border border-border">
          <h2 className="w-full flex items-center gap-3 text-muted-foreground px-5 py-3 border-b border-border">
            <GitGraph className="size-4" />
            <span className="text-sm font-mono">PROJECTS.md</span>
          </h2>
          <ProjectShowcase />
        </div>

        <div className="w-full bg-background rounded-lg border border-border">
          <h2 className="w-full flex items-center gap-3 text-muted-foreground px-5 py-3 border-b border-border">
            <Info className="size-4" />
            <span className="text-sm font-mono">ABOUT_SITE.md</span>
          </h2>
          <p className="px-5 py-3">
            This site is built using{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              Next.js
            </a>
            ,{" "}
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              TailwindCSS
            </a>
            ,{" "}
            <a
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              shadcn/ui
            </a>
            , and{" "}
            <a
              href="https://tanstack.com/query"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              Tanstack Query
            </a>
            . The source code is available on{" "}
            <a
              href="https://github.com/PSxUchiha/landing"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </Container>
      <TextScroll
        className="text-5xl md:text-7xl text-muted-foreground/50 dark:font-semibold font-bold py-24 md:space-y-2"
        textClassName="py-1 md:py-3 font-doto"
        default_velocity={0.66}
        text="Hard work is worthless for those that don't believe in themselves.  "
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
