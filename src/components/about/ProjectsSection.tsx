// components/ProjectoSection.tsx

import { Text } from "../ui/text";

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
    <section className="w-full bg-rede-bg py-16">
      <div className="mx-auto max-w-300 mr-auto ml-auto px-4">
        <div className="flex justify-between gap-10">

          <div className="w-1/2 flex flex-col gap-4">
            <h2 className="col-span-2 text-2xl font-bold text-rede-white">
              Projecto
            </h2>
            <Text className="text-sm leading-relaxed text-rede-white">
              O projeto atualmente em curso, decorre entre julho de 2025 e junho de 2027 e é financiado, maioritariamente, pelo programa PROCERIS, da Cooperação Portuguesa, tendo recebido outros apoios pontuais, nomeadamente, do programa FEF-Criação África, através da Embaixada de França em Moçambique, e do Cultiv’Arte, programa financiado pela União Europeia, numa parceria com o Ministério da Educação e Cultura de Moçambique e implementação da Expertise France.
            </Text>
          </div>

          <div className="w-1/2 aspect-square rounded-md bg-[#D9D9D9]" />

        </div>
      </div>
    </section>
  );
}