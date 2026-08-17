import Image from "next/image";
import { Text } from "../ui/text";

export const ProjectsSection = () => {
  return (
    <section className="w-full bg-rede-bg py-16">
      <div className="mx-auto max-w-300 mr-auto ml-auto px-4">
        <div className="flex flex-col gap-10">

          <div className="w-full h-112.5 bg-rede-yellow" >
            <Image src="/assets/about/Cartografia_Y.jpg" alt="" width={1000} height={450} className="w-full h-full object-contain" />
          </div>

          <div className="w-full flex gap-4">
            <div className="w-1/2">
              <h2 className="col-span-2 text-2xl font-bold text-rede-white">
                Projecto
              </h2>
              <Text className="text-[14px] leading-relaxed text-rede-white">
                O projeto atualmente em curso, decorre entre julho de 2025 e junho de 2027 e é financiado, maioritariamente, pelo programa PROCERIS, da Cooperação Portuguesa, tendo recebido outros apoios pontuais, nomeadamente, do programa FEF-Criação África, através da Embaixada de França em Moçambique, e do Cultiv’Arte, programa financiado pela União Europeia, numa parceria com o Ministério da Educação e Cultura de Moçambique e implementação da Expertise France.
              </Text>
            </div>

            <div className="w-1/2">
              <h2 className="col-span-2 text-2xl font-bold text-rede-white">
                Visão
              </h2>
              <div className="text-[14px] leading-relaxed text-rede-white">
                Inicialmente constituída com profissionais de Angola, Cabo Verde, Moçambique e São Tomé e Príncipe, e hoje com pontos focais para a Guiné-Bissau e Timor-Leste, a REDE desenvolve atividades com foco na: <br /><br />

                <ul className="list-disc">
                  <li className="ml-8">Atualização e comunicação de dados sobre o sector;</li>
                  <li className="ml-8">Promoção de networking entre profissionais;</li>
                  <li className="ml-8">Reforço da exibição e distribuição regional e internacional de obras;</li>
                  <li className="ml-8">Desenho de propostas para reforço da coprodução regional e internacional;</li>
                  <li className="ml-8">Implementação de atividades de reforço de competências técnicas e artísticas;</li>
                  <li className="ml-8">Promoção da igualdade de género e das temáticas ambientais, através de ações afirmativas;</li>
                  <li className="ml-8">Advocacia junto das entidades públicas e parceiros de cooperação;</li>
                </ul>

                <br />

                Esta Plataforma faz parte da nossa estratégia para promover a colaboração e a divulgação de profissionais e empresas, e dos produtos e serviços que estes oferecem e produzem.<br />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}