"use client";

import * as React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="p-2 w-9 h-9" />;
  }

  return (
    <div className="flex items-center gap-1 p-1 bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-full border border-black/5 dark:border-white/10">
      <button
        onClick={() => setTheme("light")}
        className={`p-1.5 rounded-full transition-all ${
          theme === "light"
            ? "bg-white text-black shadow-sm"
            : "text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white"
        }`}
        title="Light Mode"
      >
        <Sun size={16} />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`p-1.5 rounded-full transition-all ${
          theme === "dark"
            ? "bg-black text-white shadow-sm"
            : "text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white"
        }`}
        title="Dark Mode"
      >
        <Moon size={16} />
      </button>
      <button
        onClick={() => setTheme("system")}
        className={`p-1.5 rounded-full transition-all ${
          theme === "system"
            ? "bg-black/10 dark:bg-white/20 text-black dark:text-white shadow-sm"
            : "text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white"
        }`}
        title="System Mode"
      >
        <Monitor size={16} />
      </button>
    </div>
  );
}
