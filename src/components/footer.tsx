import { cn } from "@/lib/utils";

export function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        "flex flex-col items-center justify-center gap-3 py-3",
        className,
      )}
    >
      <p className="text-center text-sm text-muted-foreground">
        Built with ❤️ by Priyanshu Sharma
      </p>
    </footer>
  );
}
