"use client";

import type React from "react";
import { useDarkMode } from "@/hooks/useDarkMode";
import FloatingHeader from "./FloatingHeader";
import Footer from "./Footer";
import PageTransition from "./PageTransition";

interface LayoutProps {
  children: React.ReactNode;
  showSearch?: boolean;
  searchQuery?: string;
  setSearchQuery?: (value: string) => void;
}

export default function Layout({ children }: LayoutProps) {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}
    >
      <FloatingHeader darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="container mx-auto px-4 py-8 mt-20 min-h-screen">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </div>
  );
}
