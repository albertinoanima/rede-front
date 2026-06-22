import Link from 'next/link'
// import { Facebook, Instagram, Youtube } from 'lucide-react'
import { Text } from '@/components/ui/text'
import { Heading } from '@/components/ui/heading'

const menuLinks = [
  { label: 'Sobre Nós', href: '/sobre' },
  { label: 'Rede', href: '/rede' },
  { label: 'Agência', href: '/agencia' },
  { label: 'Notícias', href: '/noticias' },
  { label: 'Oportunidades', href: '/oportunidades' },
  { label: 'Workshops', href: '/workshops' },
  { label: 'Newsletter', href: '/newsletter' },
  { label: 'Film Commission', href: '/film-commission' },
]

const contactos = [
  { label: 'info@redapaloptl.org', href: 'mailto:info@redapaloptl.org' },
  { label: '+258 84 000 0000', href: 'tel:+258840000000' },
  { label: 'Film Commission', href: '/film-commission' },
  { label: 'Termos de uso', href: '/termos' },
]

export function Footer() {
  return (
    <footer className="w-full bg-rede-black border-t border-border py-16 px-6">
      <div className="max-w-[1440px] mx-auto grid grid-cols-3 gap-12">
        {/* Social */}
        <div className="flex flex-col gap-4">
          <div className="flex gap-3">
            {/* {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/30 transition-colors hover:border-foreground"
              >
                <Icon size={16} className="text-foreground" />
              </a>
            ))} */}
          </div>
        </div>

        {/* Menu */}
        <div className="flex flex-col gap-4">
          <Heading level="h3" as="h4" className="text-foreground">
            Menu
          </Heading>

          <ul className="flex flex-col gap-2">
            {/* {menuLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>
                  <Text
                    variant="body2"
                    as="span"
                    className="text-foreground/60 transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Text>
                </Link>
              </li>
            ))} */}
          </ul>
        </div>

        {/* Contactos */}
        <div className="flex flex-col gap-4">
          <Heading level="h3" as="h4" className="text-foreground">
            Contactos
          </Heading>

          <ul className="flex flex-col gap-2">
            {contactos.map((c) => (
              <li key={c.href}>
                <a href={c.href}>
                  <Text
                    variant="body2"
                    as="span"
                    className="text-foreground/60 transition-colors hover:text-foreground"
                  >
                    {c.label}
                  </Text>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}