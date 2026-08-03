// components/ProjectoSection.tsx

interface ProjectoItem {
  text: string;
}

const items: ProjectoItem[] = [
  {
    text: "O projeto atualmente em curso, decorre entre julho de 2025 e junho de 2027 e é financiado, maioritariamente, pelo programa PROCERIS, da Cooperação Portuguesa, tendo recebido outros apoios pontuais, nomeadamente, do programa FEF-Criação África, através da Embaixada de França em Moçambique, e do Cultiv’Arte, programa financiado pela União Europeia, numa parceria com o Ministério da Educação e Cultura de Moçambique e implementação da Expertise France.",
  }
];

export function ProjectsSection() {
  return (
    <section className="bg-rede-bg py-16">
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-2 gap-x-12 gap-y-10">
          <h2 className="col-span-2 text-2xl font-bold text-rede-white">
            Projecto
          </h2>

          {items.map((item, index) => (
            <div key={index} className="contents">
              <p className="text-sm leading-relaxed text-rede-white">
                {item.text}
              </p>
              <div className="aspect-square w-full rounded-md bg-[#D9D9D9]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}