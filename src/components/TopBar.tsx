"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

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
      </div>
    </div>
  );
};