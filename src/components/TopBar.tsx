"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { ChevronDown, LogOut, Settings } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import CustomImage from "./CustomImage";

const menuItems = [
  { label: "Sobre nós", href: "/about" },
  { label: "Rede", href: "/network" },
  { label: "Agência", href: "/agency" },
  { label: "Notícias", href: "/news" },
  { label: "Oportunidades", href: "/opportunities" },
  { label: "Newsletter", href: "/newsletter" },
  { label: "Film Commission", href: "/film-commission" },
];

export const TopBar: React.FC = () => {
  const { user, signOut } = useAuth();
  const pathname = usePathname();


  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await signOut("/")
  }


  return (
    <div className="fixed z-12 w-full border-b-[1.3px] border-rede-white bg-rede-surface backdrop-blur-sm">
      <div className="mx-auto flex h-16 w-full max-w-360 items-center justify-between">
        <Link className="h-16 w-36" href="/">
          <img
            src="/assets/logo-small.png"
            alt="REDE Logo"
            className="h-full w-full object-cover"
          />
        </Link>

        <nav>
          <ul className="flex items-center gap-1 text-rede-white">
            {menuItems.map((item) => {
              const active = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link href={item.href}>
                    <Button isActive={active} variant={"secondary"} size={"sm"} className="border-none">
                      {item.label}
                    </Button>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {
          user ?
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-3 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <div className="h-10 w-10 rounded-full">
                  <CustomImage
                    src={user.avatarUrl}
                    fallbackSrc={"/assets/avatar.png"}
                    alt={user.name}
                    height={40}
                    width={40}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                </div>
                <div className="hidden text-left sm:block">
                  <p className="text-sm font-medium text-rede-white">{user.name}</p>
                  <p className="text-xs text-rede-gray">{user.profession}</p>
                </div>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 text-rede-gray transition-transform",
                    isOpen && "rotate-180"
                  )}
                />
              </button>

              {isOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 rounded-lg border border-white/10 bg-rede-surface py-1 shadow-lg">
                  <Link
                    href="/settings"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-rede-white hover:bg-white/5"
                    onClick={() => setIsOpen(false)}
                  >
                    <Settings className="h-4 w-4" />
                    Configurações
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-2 px-4 py-2 text-sm text-[#e6332a] hover:bg-white/5"
                  >
                    <LogOut className="h-4 w-4" />
                    Sair
                  </button>
                </div>
              )}
            </div>
            :
            <div className="flex gap-3">
              <Button variant={"secondary"} size={"sm"}>
                PT
              </Button>

              <Link href="/login">
                <Button size={"sm"}>
                  Login
                </Button>
              </Link>

              <Link href="/signup">
                <Button size={"sm"}>
                  Sign Up
                </Button>
              </Link>
            </div>
        }

      </div>
    </div>
  );
};