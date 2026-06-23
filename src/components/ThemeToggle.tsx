"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export const ThemeToggle=() =>{
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Evita erros de hidratação no Next.js (espera o componente montar no cliente)
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-10 h-10" />; // Retorna um placeholder vazio enquanto carrega

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-10 h-10 rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus:outline-none"
      aria-label="Alternar tema"
    >
      {theme === "dark" ? (
        // Ícone do Sol (Modo Claro)
        <svg className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M18.36 18.36l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
        </svg>
      ) : (
        // Ícone da Lua (Modo Escuro)
        <svg className="w-5 h-5 text-zinc-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
        </svg>
      )}
    </button>
  );
}