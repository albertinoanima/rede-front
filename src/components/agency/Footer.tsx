
export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-16 px-8 md:px-16 lg:px-24 font-sans selection:bg-red-500 selection:text-white">
      {/* Secção de Links e Redes Sociais */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start mb-16">
        
        {/* Coluna 1: Redes Sociais (SVGs Inline para evitar erros de build) */}
        <div className="flex flex-col gap-4">
          {/* Facebook */}
          <a 
            href="#" 
            className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center hover:border-white transition-colors duration-300 text-gray-400 hover:text-white" 
            aria-label="Facebook"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>

          {/* Instagram */}
          <a 
            href="#" 
            className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center hover:border-white transition-colors duration-300 text-gray-400 hover:text-white" 
            aria-label="Instagram"
          >
            <svg className="w-5 h-5 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          {/* LinkedIn */}
          <a 
            href="#" 
            className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center hover:border-white transition-colors duration-300 text-gray-400 hover:text-white" 
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>

        {/* Coluna 2: Menu */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 tracking-wide">Menu</h3>
          <ul className="space-y-3 text-sm text-gray-300 font-light">
            <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Rede</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Agência</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Notícias</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Oportunidades</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Workshops</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Film Commission</a></li>
          </ul>
        </div>

        {/* Coluna 3: Contactos */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 tracking-wide">Contactos</h3>
          <ul className="space-y-3 text-sm text-gray-300 font-light">
            <li><a href="mailto:info@redepaloptl.org" className="hover:text-white transition-colors">info@redepaloptl.org</a></li>
            <li><a href="tel:+258840000000" className="hover:text-white transition-colors">+258 84 000 0000</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Film Commission</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Termos de uso</a></li>
          </ul>
        </div>
      </div>

      {/* Secção de Branding Gigante (Footer Bottom) */}
      <div className="max-w-7xl mx-auto border-t border-zinc-800 pt-8 flex flex-col lg:flex-row items-baseline lg:justify-between tracking-tighter">
        <h1 className="text-[12vw] lg:text-[14vw] font-black text-[#e53920] leading-none select-none uppercase pr-49">
          Rede
        </h1>
        
        <div className="text-[#e53920] font-black text-[4.5vw] lg:text-[4.5vw] leading-[1.05] tracking-tight uppercase max-w-2xl mt-4 lg:mt-0">
          Cinema e Audiovisual <br />
          PALOP+TL
        </div>
      </div>
    </footer>
  );
};

export default Footer;