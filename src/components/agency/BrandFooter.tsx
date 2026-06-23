export function BrandFooter() {
  return (
    <div className="w-full bg-rede-black py-16 px-6 flex items-center justify-center gap-8">
      <span className="text-rede-red font-bold" style={{ fontSize: '120px', lineHeight: 1 }}>
        REDE
      </span>
      <div className="flex flex-col">
        <span className="text-rede-white font-bold text-4xl leading-tight">CINEMA E</span>
        <span className="text-rede-white font-bold text-4xl leading-tight">AUDIOVISUAL</span>
        <span className="text-rede-white font-bold text-4xl leading-tight">PALOP+TL</span>
      </div>
    </div>
  )
}