const packages = [
  {
    title: "Curadoria 1",
    type: "Uso comercial",
  },
  {
    title: "Curadoria 2",
    type: "Uso não comercial",
  },
  {
    title: "Curadoria 3",
    type: "Uso não comercial",
  },
  {
    title: "Curadoria 4",
    type: "Uso comercial",
  },
  {
    title: "Curadoria 5",
    type: "Uso não comercial",
  },
  {
    title: "Curadoria 6",
    type: "Uso não comercial",
  },
]

export const PackagesSection = () => {
  return (
    <section className="w-full bg-[#141414] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-6xl font-bold text-[#FF4338]">
            Pacotes de Curtas
          </h2>

          <p className="mt-6 text-sm text-white/80 leading-7">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua, oferecendo pacotes curados de curtas-metragens
            para distribuição e licenciamento.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">

          {packages.map((item, index) => (
            <div
              key={index}
              className="border border-white/40 p-7 flex flex-col"
            >

              {/* Header */}
              <div className="flex justify-between items-start">

                <h3 className="text-4xl font-bold text-white">
                  {item.title}
                </h3>

                <span className="px-4 py-1 rounded-full bg-white text-black text-xs">
                  {item.type}
                </span>

              </div>

              <p className="mt-3 text-xs text-white/60 leading-5 max-w-xs">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-y-3 gap-x-6 mt-8">

                {[
                  "Ideal para festivais",
                  "Direitos de distribuição",
                  "Exibição paga",
                  "Licença temporária",
                ].map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-white text-sm"
                  >
                    <span>◉</span>
                    <span>{feature}</span>
                  </div>
                ))}

              </div>

              {/* Button */}
              <button className="mt-8 w-fit rounded-full bg-[#FFD328] px-5 py-2 text-xs font-semibold text-black hover:scale-105 transition">
                Solicitar Proposta
              </button>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}