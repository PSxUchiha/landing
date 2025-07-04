import { User } from "lucide-react";
import { readFileSync } from "fs";
import { join } from "path";
import ReactMarkdown from "react-markdown";

function getAboutMeContent() {
  const filePath = join(process.cwd(), "public", "about-me.md");
  const content = readFileSync(filePath, "utf8");
  return content;
}

export default function AboutMeSection() {
  const content = getAboutMeContent();

  return (
    <div className="w-full bg-background rounded-lg border border-border">
      <h2 className="w-full flex items-center gap-3 text-muted-foreground px-5 py-3 border-b border-border">
        <User className="size-4" />
        <span className="text-sm font-mono">ABOUT-ME.md</span>
      </h2>
      <div className="prose prose-invert px-5 py-3">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
} 