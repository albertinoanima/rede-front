"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const menuItems = [
  { label: "Sobre nós", href: "/about" },
  { label: "Rede", href: "/network" },
  { label: "Agência", href: "/agency" },
  { label: "Notícias", href: "/news" },
  { label: "Oportunidades", href: "/opportunities" },
  //{ label: "Workshops", href: "/workshops" },
  { label: "Newsletter", href: "/newsletter" },
  { label: "Film Commission", href: "/film-commission" },
];

export const TopBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="fixed z-12 w-full border-b-2 border-white bg-black/70 backdrop-blur-sm">
      <div className="mx-auto flex h-16 w-full max-w-360 items-center justify-between">
        <Link className="h-16 w-36" href="/">
          <img
            src="/assets/logo-small.png"
            alt="REDE Logo"
            className="h-full w-full object-cover"
          />
        </Link>

        <nav>
          <ul className="flex items-center gap-1 text-white">
            {menuItems.map((item) => {
              const active = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`rounded-full px-4 py-2 text-sm font-medium leading-4 transition-all duration-200 ${active
                        ? "bg-white text-black"
                        : "text-white hover:bg-white hover:text-black"
                      }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex gap-3">
          <Button className="h-7 border-2 border-white bg-black px-1.5 py-3.5 text-white">
            PT
          </Button>

          <Link href="/login">
            <Button className="h-7 w-30 border-2 border-white bg-black px-1.5 py-3.5 text-white">
              Login
            </Button>
          </Link>

          <Link href="/signup">
            <Button className="h-7 w-30 rounded-4xl bg-[#FCCB1C] px-1.5 py-4 text-[#1D1D1B]">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};