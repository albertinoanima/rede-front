// components/MissaoVisaoObjetivosSection.tsx

const objetivos = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
];

export function MisionVisionObjetivesSection() {
  return (
    <section className="bg-rede-bg py-16">
      <div className="mx-auto max-w-5xl px-4 space-y-6">
        {/* Missão */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-rede-white">
              Missão
            </h2>
            <div className="text-sm leading-relaxed text-rede-white">
              A REDE de Cinema e Audiovisual PALOP+TL é uma iniciativa de realizadores, produtores e directores de festivais dos Países Africanos de Língua Oficial Portuguesa, com o propósito de contribuir para melhorar o ecossistema do sector audiovisual destes países, através de trabalho em rede.
              <br /><br />

              <ul className="list-none">
                <li>ANGOLA</li>
                <li>CABO VERDE</li>
                <li>GUINÉ-BISSAU</li>
                <li>MOÇAMBIQUE</li>
                <li>SÃO TOMÉ E PRÍNCIPE</li>
                <li>TIMOR-LESTE</li>
              </ul>
            </div>
          </div>
          <div className="aspect-[4/3] w-full rounded-md bg-[#D9D9D9]" />
        </div>

        {/* Visão */}
        <div className="grid grid-cols-2 gap-8">
          <div className="aspect-[4/3] w-full rounded-md bg-[#D9D9D9]" />
          <div>
            <h2 className="mb-4 text-2xl font-bold text-rede-white">
              Visão
            </h2>
            <p className="text-sm leading-relaxed text-rede-white">
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

              <br /><br />

              Esta Plataforma faz parte da nossa estratégia para promover a colaboração e a divulgação de profissionais e empresas, e dos produtos e serviços que estes oferecem e produzem.<br />
              <b>- Estratégia de Comunicação;</b><br />
              <b>- Quadro de Governação Digital;</b>

            </p>
          </div>
        </div>

        {/* Objetivos */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-rede-white">
              Objetivos
            </h2>
            <div>
              Nesta fase do nosso trabalho, os objetivos principais são: <br/><br/>

              <b>Divulgar e promover, regional e internacionalmente</b>, a produção e os profissionais de audiovisual dos PALOP e Timor-Leste, através da (re)ativação do trabalho em rede, contribuindo para a visibilidade de produtos e serviços, e a viabilidade de negócios culturais geridos, em particular, por mulheres.<br/><br/>

              <b>Contribuir para a capacitação técnica e artística</b> de jovens e mulheres produtores e realizadores dos PALOP e Timor-Leste, e a promoção internacional dos seus trabalhos, através da escrita, produção e curadoria sobre temáticas transversais como: direitos fundamentais, direitos de autor e questões ambientais.

            </div>
          </div>
          <div className="aspect-[4/3] w-full rounded-md bg-[#D9D9D9]" />
        </div>
      </div>
    </section>
  );
}