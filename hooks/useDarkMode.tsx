"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";

const THEME_STORAGE_KEY = "portfolio-theme";

function applyTheme(darkMode: boolean) {
  document.documentElement.classList.toggle("dark", darkMode);
  document.documentElement.setAttribute(
    "data-theme",
    darkMode ? "dark" : "light",
  );
}

function getDarkModeSnapshot() {
  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

  if (savedTheme === "dark") return true;
  if (savedTheme === "light") return false;

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function subscribeToThemeChange(onStoreChange: () => void) {
  const colorScheme = window.matchMedia("(prefers-color-scheme: dark)");
  const handleStorageChange = (event: StorageEvent) => {
    if (event.key === THEME_STORAGE_KEY) onStoreChange();
  };
  const handleSystemThemeChange = () => {
    if (!window.localStorage.getItem(THEME_STORAGE_KEY)) onStoreChange();
  };

  window.addEventListener("storage", handleStorageChange);
  window.addEventListener("portfolio-theme-change", onStoreChange);
  colorScheme.addEventListener("change", handleSystemThemeChange);

  return () => {
    window.removeEventListener("storage", handleStorageChange);
    window.removeEventListener("portfolio-theme-change", onStoreChange);
    colorScheme.removeEventListener("change", handleSystemThemeChange);
  };
}

export function useDarkMode() {
  const darkMode = useSyncExternalStore(
    subscribeToThemeChange,
    getDarkModeSnapshot,
    () => false,
  );

  useEffect(() => {
    applyTheme(darkMode);
  }, [darkMode]);

  const setDarkMode = useCallback((nextDarkMode: boolean) => {
    window.localStorage.setItem(
      THEME_STORAGE_KEY,
      nextDarkMode ? "dark" : "light",
    );
    window.dispatchEvent(new Event("portfolio-theme-change"));
  }, []);

  return { darkMode, setDarkMode };
}
