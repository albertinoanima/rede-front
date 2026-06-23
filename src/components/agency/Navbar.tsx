'use client'
import Link from 'next/link'
import { ThemeToggle } from '../ThemeToggle'
import { Button } from '@/components/ui/button'

const links = [
  { label: 'Sobre Nós', href: '/sobre' },
  { label: 'Rede', href: '/rede' },
  { label: 'Agência', href: '/agencia' },
  { label: 'Notícias', href: '/noticias' },
  { label: 'Oportunidades', href: '/oportunidades' },
  { label: 'Workshops', href: '/workshops' },
  { label: 'Newsletter', href: '/newsletter' },
  { label: 'Film Commission', href: '/film-commission' },
]

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-rede-black border-b border-border">
      <div className="max-w-[1440px] mx-auto px-6 h-14 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <span className="text-rede-white font-bold text-lg tracking-widest">REDE</span>
        </Link>

        {/* Nav Links */}
        <ul className="hidden lg:flex items-center gap-5">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-btn2 text-rede-white/70 hover:text-rede-white transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <Button variant="secondary" size="sm">Log In</Button>
          <Button variant="danger" size="sm">Sign Up</Button>
        </div>
      </div>
    </nav>
  )
}