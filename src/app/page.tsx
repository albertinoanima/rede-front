import Link from "next/link";


// ─── Icons ───────────────────────────────────────────────────────────────────
const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronLeft = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M13 4l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ─── Data ────────────────────────────────────────────────────────────────────
const navLinks = ["Sobre Nós", "Rede", "Agência", "Notícias", "Oportunidades", "Workshops", "Newsletter", "Fale Connosco"];

const newsItems = [
  { tag: "Festival", date: "12 Mai 2025", title: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna." },
  { tag: "Produção", date: "08 Mai 2025", title: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore." },
  { tag: "Entrevista", date: "02 Mai 2025", title: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore." },
];

const opportunities = [
  { tags: ["0–18", "Financiamento", "Angola"], title: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore." },
  { tags: ["18–35", "Residência", "Angola"], title: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore." },
  { tags: ["0–35", "Co-produção", "Angola"], title: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore." },
];

const workshops = [
  { tags: ["Lisboa", "8h", "Cinematografia", "Inglês"], title: "Lorem ipsum dolor sit amet consectetur adipiscing elit." },
  { tags: ["Maputo", "16h", "Montagem", "Português"], title: "Lorem ipsum dolor sit amet consectetur adipiscing elit." },
  { tags: ["Online", "4h", "Produção", "Inglês"], title: "Lorem ipsum dolor sit amet consectetur adipiscing elit." },
];

const partners = {
  "Parceiro Fundador": [{ name: "Museu do Cinema", logo: null }],
  "Parceiros de Implementação": [
    { name: "ADIRP" }, { name: "PARADOX" }, { name: "CCFM" }, { name: "TELA DIGITAL" },
  ],
  "Projectos Financiados Por": [
    { name: "Camões Instituto da Cooperação e da Língua Portugal" },
  ],
  "Outros Apoios Principais": [
    { name: "Création Africa Mozambique" }, { name: "Personalidade" }, { name: "Institut Français" },
  ],
  "Projectos financiados com o apoio da União Europeia": [
    { name: "União Europeia" }, { name: "PALOP-TL UE" },
  ],
  "": [
    { name: "INIC" }, { name: "Ministério da Cultura e das Indústrias Criativas" },
  ],
};

const footerMenuLinks = ["Início", "Rede", "Agência", "Notícias", "Oportunidades", "Workshops", "Newsletter", "Fale Connosco"];

// ─── Sub-components ──────────────────────────────────────────────────────────

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-[#F5C518] font-black text-xl tracking-tight leading-none">REDE</span>
          <span className="hidden sm:block w-px h-5 bg-white/20" />
          <span className="hidden sm:block text-white/50 text-[10px] uppercase tracking-widest leading-tight">
            Cinema &<br />Audiovisual
          </span>
        </Link>

        {/* Nav links */}
        <ul className="hidden xl:flex items-center gap-6">
          {navLinks.map((l) => (
            <li key={l}>
              <Link href="#" className="text-white/60 hover:text-white text-xs font-medium tracking-wide transition-colors">
                {l}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="#"
          className="shrink-0 bg-[#F5C518] text-black text-xs font-bold px-4 py-2 hover:bg-yellow-300 transition-colors"
        >
          Entrar
        </Link>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex flex-col">
      {/* Background image overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30 z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1600&q=80')" }}
      />

      {/* Split hero */}
      <div className="relative z-20 flex-1 grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto w-full px-6 pt-32 pb-20 gap-10">
        {/* Left – Agência */}
        <div className="flex flex-col justify-center">
          <span className="text-white/40 text-xs uppercase tracking-widest mb-4 font-medium">Para criadores</span>
          <h1 className="text-[#F5C518] font-black text-6xl md:text-7xl xl:text-8xl leading-none tracking-tight mb-6">
            Agência
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-xs leading-relaxed mb-8">
            Vai a fundo na tua vocação. Chega mais longe. Cria projetos e junta-te a quem é capaz de pegar e ajudar a realizar.
          </p>
          <Link
            href="#"
            className="self-start flex items-center gap-2 bg-[#F5C518] text-black font-bold px-6 py-3 text-sm hover:bg-yellow-300 transition-colors"
          >
            Explorar <ArrowRight />
          </Link>
        </div>

        {/* Right – Rede */}
        <div className="flex flex-col justify-center">
          <span className="text-white/40 text-xs uppercase tracking-widest mb-4 font-medium">Para profissionais</span>
          <h1 className="text-white font-black text-6xl md:text-7xl xl:text-8xl leading-none tracking-tight mb-6">
            Rede
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-xs leading-relaxed mb-8">
            Encontra, conecta-te e colabora com outros profissionais dos Países, enquanto aumentas a tua presença na rede.
          </p>
          <Link
            href="#"
            className="self-start flex items-center gap-2 border border-white/30 text-white font-bold px-6 py-3 text-sm hover:bg-white/10 transition-colors"
          >
            Explorar <ArrowRight />
          </Link>
        </div>
      </div>

      {/* Join community bar */}
      <div className="relative z-20 bg-white/5 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-white font-bold text-lg mb-1">Junte-se à comunidade</h3>
            <p className="text-white/50 text-sm max-w-md">
              Faça parte da maior rede de cinema e audiovisual dos países de língua portuguesa em África.
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="#" className="bg-[#F5C518] text-black font-bold px-5 py-2.5 text-sm hover:bg-yellow-300 transition-colors">
              Registar
            </Link>
            <Link href="#" className="border border-white/30 text-white font-bold px-5 py-2.5 text-sm hover:bg-white/10 transition-colors">
              Entrar
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tag({ label, yellow }: { label: string; yellow?: boolean }) {
  return (
    <span
      className={`inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${yellow ? "bg-[#F5C518] text-black" : "bg-white/10 text-white/60"
        }`}
    >
      {label}
    </span>
  );
}

function SectionHeader({ title, href }: { title: string; href?: string }) {
  return (
    <div className="flex items-center justify-between mb-8">
      <h2 className="text-white font-black text-4xl md:text-5xl tracking-tight">{title}</h2>
      {href && (
        <div className="flex items-center gap-2">
          <Link href={href} className="text-[#F5C518] text-xs font-bold uppercase tracking-widest hover:underline hidden sm:block">
            Ver todos
          </Link>
          <div className="flex gap-1">
            <button className="w-8 h-8 border border-white/20 flex items-center justify-center text-white/50 hover:border-white/60 hover:text-white transition-colors">
              <ChevronLeft />
            </button>
            <button className="w-8 h-8 border border-white/20 flex items-center justify-center text-white/50 hover:border-white/60 hover:text-white transition-colors">
              <ChevronRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function NewsSection() {
  const images = [
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&q=80",
    "https://images.unsplash.com/photo-1574169208507-84376144848b?w=600&q=80",
    "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80",
  ];

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Notícias" href="#" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-4 aspect-video bg-zinc-900">
                <img
                  src={images[i]}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <Tag label={item.tag} yellow />
                  <Tag label={item.date} />
                </div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed group-hover:text-white transition-colors line-clamp-3">
                {item.title}
              </p>
              <div className="mt-3 flex items-center gap-1 text-[#F5C518] text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                Ler mais <ArrowRight />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function OpportunitiesSection() {
  const images = [
    "https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=600&q=80",
    "https://images.unsplash.com/photo-1500210624946-3c72c56427e6?w=600&q=80",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
  ];

  return (
    <section className="bg-zinc-950 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Oportunidades" href="#" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {opportunities.map((item, i) => (
            <article key={i} className="group cursor-pointer border border-white/5 hover:border-[#F5C518]/30 transition-colors">
              <div className="relative overflow-hidden aspect-[4/3] bg-zinc-900">
                <img
                  src={images[i]}
                  alt=""
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {item.tags.map((t, j) => (
                    <Tag key={j} label={t} yellow={j === 0} />
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed line-clamp-3 group-hover:text-white transition-colors">
                  {item.title}
                </p>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[#F5C518] text-xs font-bold">Ver oportunidade</span>
                  <div className="w-6 h-6 bg-[#F5C518] flex items-center justify-center">
                    <ArrowRight />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkshopsSection() {
  const images = [
    "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=600&q=80",
    "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&q=80",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
  ];

  return (
    <section className="bg-[#F5C518] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Workshops" href="#" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {workshops.map((item, i) => (
            <article key={i} className="group cursor-pointer bg-black">
              <div className="relative overflow-hidden aspect-video bg-zinc-900">
                <img
                  src={images[i]}
                  alt=""
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                  {item.tags.map((t, j) => (
                    <Tag key={j} label={t} yellow={j === 0} />
                  ))}
                </div>
              </div>
              <div className="p-4">
                <p className="text-white/70 text-sm leading-relaxed group-hover:text-white transition-colors">
                  {item.title}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[#F5C518] text-xs font-bold">Inscrever-se</span>
                  <div className="w-6 h-6 bg-[#F5C518] flex items-center justify-center">
                    <ArrowRight />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsletterSection() {
  return (
    <section className="relative bg-zinc-900 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518155317743-a8ff43ea6a5f?w=1400&q=80')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-lg">
          <h2 className="text-white font-black text-5xl md:text-6xl tracking-tight mb-4">Newsletter</h2>
          <p className="text-white/60 text-base mb-8 leading-relaxed">
            Recebe as últimas notícias, oportunidades e eventos do cinema e audiovisual dos PALOP directamente no teu email.
          </p>
          <div className="flex gap-0">
            <input
              type="email"
              placeholder="O teu endereço de email"
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-[#F5C518] transition-colors"
            />
            <button className="bg-[#F5C518] text-black font-bold px-6 py-3 text-sm hover:bg-yellow-300 transition-colors whitespace-nowrap">
              Subscrever
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnersSection() {
  const categories = [
    {
      label: "Parceiro Fundador",
      logos: ["Museu do Cinema"],
    },
    {
      label: "Parceiros de Implementação",
      logos: ["ADIRP", "PARADOX", "CCFM", "TELA DIGITAL"],
    },
    {
      label: "Projectos Financiados Por",
      logos: ["Camões — Instituto da Cooperação e da Língua"],
    },
    {
      label: "Outros Apoios Principais",
      logos: ["Création Africa Mozambique", "Instituto", "Institut Français"],
    },
    {
      label: "Projectos financiados com apoio da União Europeia",
      logos: ["União Europeia", "PALOP-TL UE"],
    },
    {
      label: "Financiamento Nacional",
      logos: ["INIC", "Ministério da Cultura e das Indústrias Criativas"],
    },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-black font-black text-4xl md:text-5xl tracking-tight mb-14">Parceiros</h2>
        <div className="space-y-10">
          {categories.map((cat) => (
            <div key={cat.label}>
              <p className="text-black/30 text-[10px] uppercase tracking-widest font-bold mb-4">{cat.label}</p>
              <div className="flex flex-wrap items-center gap-6">
                {cat.logos.map((logo) => (
                  <div
                    key={logo}
                    className="border border-black/10 px-5 py-3 text-black/60 text-xs font-bold uppercase tracking-wide hover:border-[#F5C518] hover:text-black transition-colors cursor-pointer"
                  >
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-zinc-950 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Social */}
        <div>
          <div className="flex gap-4 mb-6">
            {["f", "in", "ig"].map((s) => (
              <a
                key={s}
                href="#"
                className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 hover:border-[#F5C518] hover:text-[#F5C518] transition-colors text-xs font-bold"
              >
                {s}
              </a>
            ))}
          </div>
          <p className="text-white/30 text-xs leading-relaxed max-w-xs">
            A maior rede de cinema e audiovisual dos países de língua portuguesa em África.
          </p>
        </div>

        {/* Menu */}
        <div>
          <h4 className="text-[#F5C518] font-bold text-xs uppercase tracking-widest mb-5">Menu</h4>
          <ul className="space-y-2.5">
            {footerMenuLinks.map((l) => (
              <li key={l}>
                <Link href="#" className="text-white/50 text-sm hover:text-white transition-colors">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h4 className="text-[#F5C518] font-bold text-xs uppercase tracking-widest mb-5">Contactos</h4>
          <address className="not-italic space-y-2 text-white/50 text-sm">
            <p>info@redeaudiovisual.org</p>
            <p>+258 21 000 000</p>
            <p className="leading-relaxed">
              Maputo, Moçambique<br />
              Lisboa, Portugal
            </p>
          </address>
        </div>
      </div>

      {/* Bottom bar – wordmark */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-baseline gap-3">
              <span className="text-[#F5C518] font-black text-4xl tracking-tight">REDE</span>
              <div className="text-white/40 text-xs uppercase tracking-wider leading-tight">
                <div>Cinema e</div>
                <div>Audiovisual</div>
                <div className="text-[#F5C518]/70">PALOP+TL</div>
              </div>
            </div>
          </div>
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} REDE Cinema e Audiovisual PALOP+TL. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}


// ─── Page ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <main className="bg-black">
      <Navbar />
      <HeroSection />
      <NewsSection />
      <OpportunitiesSection />
      <WorkshopsSection />
      <NewsletterSection />
      <PartnersSection />
      <Footer />
    </main>
  );
}