"use client";

import { useState } from "react";
import { Modal } from "../ui/modal";
import { Tag } from "../Tag";
import { Text } from "../ui/text";

interface TeamMember {
  name: string;
  role: string;
  location: string;
  imageUrl: string;
  bio: string;
}

const team: TeamMember[] = [
  {
    name: "Diana Manhiça",
    role: "Coordenação-geral e comunicação",
    location: "Moçambique",
    imageUrl: "/assets/team/diana.jpeg",
    bio: `Diana Manhiça (n.1975, Lisboa) é bacharel em Artes Plásticas pela Faculdade de Belas-Artes de Lisboa, mestre em Comunicação Educacional e Media Digitais pela Universidade Aberta, doutoranda em Media-Arte Digital pela Universidade do Algarve e em Educação à Distância e e-Learning pela Universidade do Minho.<br/><br/>
 
Desde 2005, está envolvida na produção cinematográfica de ficção e não ficção, em várias funções. Faz a curadoria de festivais de cinema, desenvolve propostas educativas, curriculares e iniciativas de mapeamento e networking, e gere a comunicação digital de projetos culturais.<br/>
Desenvolve investigação sobre história(s) do cinema em Moçambique, património audiovisual, domínio público e acesso, com atividades de reutilização, advocacia, conteúdos e contextos educativos assistidos por tecnologia.
 
Está associada à criação e produção de: a produtora audiovisual Zoom - Produção Gráfica & Vídeo; o KUGOMA - Fórum de Cinema Moçambique; a Semana de Cinema Africano Moçambique; a Associação Amigos do Museu do Cinema em Moçambique; a UPCycles - Residência Criativa Audiovisual; os Encontros do Património Audiovisual e a Rede de Cinema e Audiovisual PALOP+TL.<br/><br/>
 
 

 
Diana Manhiça (b.1975, Lisbon) holds a Bachelor's degree in Visual Arts from the Faculty of Fine Arts of Lisbon and a Master's in Educational Communication and Digital Media from Universidade Aberta. She is a PhD student in Digital Media-Art and in Distance Education and eLearning.<br/>
 
Since 2005, she has been involved in fiction and non-fiction film production in various capacities.<br/>
She curates film festivals, develops educational proposals, curricula, mapping and networking initiatives, and manages the digital communication of cultural projects.<br/>
She develops research on the history of cinema in Mozambique and access to audiovisual heritage, with reuse activities, advocacy, content and educational contexts assisted by technology.<br/>
 
She is associated with the creation and production of: the audiovisual production company Zoom - Produção Gráfica & Vídeo; the KUGOMA  - Mozambique Film Forum; the Mozambique African Film Week; the Friends of the Cinema Museum Association in Mozambique; UPCycles - Audiovisual Creative Residence; The Film Heritage Meetings, and the PALOP+TL Film and Audiovisual Network.
`,
  },
  {
    name: "António Maxlhaieie",
    role: "Assessoria de coordenação-geral",
    location: "Moçambique",
    imageUrl: "/assets/team/antonio.jpeg",
    bio: `António Simião Maxlhaieie é licenciado em Artes Cénicas - Especialização em Educação Musical (2025), e Mestrando em Artes Cénicas e Estudos Culturais, ambos pela Universidade Pedagógica de Maputo. Estudou Design (2015) e Audiovisual e Cinema (2013) no ISArC - Instituto Superior de Artes e Cultura. Tem formação complementar em temas transversais.
Iniciou a sua trajetória profissional em 2008, no Teatro do Oprimido. Em televisão, começou a sua experiência na TIM, onde chegou a coordenador de pós-produção e foi editor de vídeo no Big Brother Angola (Endemol Shine Group). 
Cineasta moçambicano, atua nas áreas de realização, produção, edição de imagem, caracterização e gestão cultural. Atualmente, concilia a prática criativa e empresarial na Maxfilm Creative e na direção de produção das actividades da AAMCM - Associação dos Amigos do Museu do  Cinema de Moçambique.
Na AAMCM, desde 2020, dirige a produção do KUGOMA - Fórum de Cinema Moçambique, da UPCycles e do FilmLab Moçambique - REDE de Cinema e Audiovisual PALOP+TL. Foi curador da secção de cinema do Mercado das Indústrias Culturais e Criativas de Moçambique (2026).
Dinamiza oficinas práticas de audiovisual, animação stop motion, técnicas de câmara para jovens e caracterização para cinema e televisão.`,
  },

  {
    name: "Telma Costa",
    role: "Gestão de projetos e subvenções",
    location: "Moçambique",
    imageUrl: "/assets/team/telma.png",
    bio: `Socióloga moçambicana com 20 anos de experiência em elaboração, gestão e avaliação de projetos. Experiência com projectos de Cooperação para o Desenvolvimento, Acção Humanitária e Investigação em países como Moçambique, São Tomé e Príncipe, Guiné-Bissau, Brasil, Haiti e Portugal. Responsável pela gestão de projectos e fundos de financiadores como UE, USAID, ONU, Camões I.P., AECID, EDCTP e BMGF. Consultora para o desenvolvimento e implementação de procedimentos e ferramentas de gestão de ONG e recrutamento e seleção de Recursos Humanos.`,
  },
  {
    name: "Katya Aragão",
    role: "Coordenação local",
    location: "São Tomé e Príncipe",
    imageUrl: "/assets/team/katya.png",
    bio: `Katya Aragão é guionista, realizadora e produtora. É também membro fundadora da Rede de Cinema e Audiovisual PALOP-TL e Diretora do São Tomé Film Lab. Licenciada em Ciências da Comunicação e Cultura pela Universidade Lusófona (ULHT), descobriu o fascínio pelo cinema ainda em criança em São Tomé, inspirada pelas histórias do pai e pelo encantamento dos filmes da Disney. Após mais de 10 anos como jornalista e produtora de televisão, estreou-se na realização em 2017. Em 2022 foi uma das 20 cineastas selecionadas para o concurso “African Folktales, Reimagined” da Netflix & UNESCO. A sua filmografia inclui Ximidô (2026), Mais do que Sobreviver (2025), A Batalha dos Gigantes (2023), Agora Podemos (2021), Nas Nossas Mãos (2019) e Mina Kiá (2017).`,
  },
  {
    name: "Emília Wojciechowska",
    role: "Coordenação local e curadoria",
    location: "Cabo Verde",
    imageUrl: "/assets/team/emilia.jpeg",
    bio: `Cineasta e produtora de origem polaca, reside e trabalha em Cabo Verde. Promotora da iniciativa Filmes na Mochila, dedicada a exibições itinerantes, e colabora como curadora na circulação internacional de cinema africano. Assistente de Abderrahmane Sissako no filme Black Tea, produtora do premiado filme Pirinha, de Natasha Craveiro.<br/>
Em 2022, realizou a sua primeira curta-metragem Sonho d’Narrador. Tem também trabalhado como mentora no São Tomé e Príncipe Film Lab (2022), no Klaket (2025) e no Filma Kabu Verdi (2026), entre outros. É cofundadora do Kuletivu Nhanha, do Kafuka African Film Festival e Cineclub Mankara.
`,
  },
  {
    name: "Samira Vera-Cruz",
    role: "Coordenação local, formação e parcerias",
    location: "Cabo Verde",
    imageUrl: "/assets/team/samira.png",
    bio: `Samira Vera-Cruz é uma cineasta cabo-verdiana multipremiada, comunicadora de ciência e diretora de fotografia subaquática. Formada em cinema pela American University of Paris, o seu trabalho explora as interseções entre ambiente, memória, identidade e histórias pós-coloniais através de uma narrativa poética centrada nas personagens. As suas curtas-metragens documentário, incluindo Sumara Maré (2023), foram exibidas e premiadas internacionalmente.
Membro fundadora da Rede de Cinema e Audiovisual PALOP-TL, Samira é também mentora e júri em várias iniciativas cinematográficas internacionais. Encontra-se atualmente a desenvolver a sua primeira longa-metragem documentário híbrida, Plastic Atlantis, com o apoio da Generation Africa 2.0, Visions du Réel e NEWF. O projeto, atualmente em pós-produção, recebeu seis prémios de destaque no Durban FilmMart Finance & Pitch Forum 2025, incluindo o Sundance Documentary 
Fund New Voices Award e o Sheffield DocFest Award, tendo posteriormente sido distinguido com o World Cinema Fund – TUI Care Foundation Award. `,
  },
  {
    name: "Fábio Ribeiro",
    role: "Assessoria do estudo sobre Film Commissions",
    location: "Moçambique",
    imageUrl: "/assets/team/fabio.png",
    bio: `Fábio Ribeiro é realizador, director de fotografia e produtor, com particular foco em documentário e animação, tendo nos seus filmes autorais um interesse particular pela identidade, memória e pelos arquivos pessoais da (des)colonização, e num plano mais abrangente, o desenvolvimento de pensamento crítico através do processo de criação, exibição e diálogo com o cinema. É coordenador do departamento de audiovisual do coletivo moçambicano ANIMA Estúdio Criativo e membro da REDE de Cinema e Audiovisual dos PALOP-TL, tendo tido ao longo da sua carreira profissional, a oportunidade de filmar um pouco por todo mundo, com particular foco no continente africano e nos países de língua portuguesa. É licenciado em Cinematografia pela Escola Superior de Teatro e Cinema de Lisboa e mestre em Antropologia Visual e dos Media pela Freie Universität de Berlim.`,
  },
  {
    name: "Kay Seran Limak",
    role: "Ponto focal",
    location: "Timor-Leste",
    imageUrl: "/assets/team/kay.jpeg",
    bio: `Kay Seran Limak é músico, compositor, produtor, multi-instrumentista, professor de música, investigador e agente cultural timorense. Natural de Díli, desenvolveu a sua formação e percurso profissional entre Timor-Leste, Portugal, Reino Unido e Áustria, com estudos em música contemporânea e jazz, Ciências Musicais, composição, improvisação e produção musical.
A sua prática artística cruza jazz, improvisação, música contemporânea e tradições musicais timorenses. Multi-instrumentista, toca guitarra, teclado, baixo, bateria e diversos instrumentos tradicionais de Timor-Leste. Paralelamente à sua atividade artística, tem desempenhado um papel ativo na criação de plataformas dedicadas à promoção e desenvolvimento da música e das indústrias criativas timorenses.
É fundador do Dili Jazz Festival, do Timor-Leste Blues Festival, do Timor-Leste Music Awards, do Garden Fest, da Timor-Leste Music Expo e do Festival Nacional de Música, iniciativas dedicadas à promoção da música timorense e da música produzida em Timor-Leste. É igualmente fundador do Youth Collective Timor-Leste, uma plataforma de promoção, capacitação e formação de jovens líderes no âmbito da Política Nacional da Juventude de Timor-Leste.
Kay Seran Limak é também fundador do Projeto Beialafonia, uma iniciativa de investigação e criação dedicada ao estudo e desenvolvimento de um sistema musical timorense. O projeto inclui a proposta de uma orquestra de instrumentos tradicionais, o desenvolvimento de sistemas próprios de notação e grafia musical e a criação do Lafa-Lian, um instrumento de treze cordas inspirado nas práticas musicais, na simbologia e no património cultural de Timor-Leste. É autor de um tratado sobre o sistema musical timorense, desenvolvido no âmbito do Projeto Beialafonia.
O Lafa-Lian e a investigação associada ao instrumento têm vindo a afirmar-se como uma proposta de diálogo entre património cultural imaterial, inovação criativa e desenvolvimento das indústrias culturais. Em 2025, Kay Seran Limak apresentou o Lafa-Lian 7.0 na República da Coreia, no âmbito de uma conferência internacional da UNESCO dedicada ao património cultural imaterial e à sua relação com a indústria criativa.
É também autor de Timorcentrismo: Uma Nova Epistemologia de Timor, um ensaio que propõe uma reflexão sobre Timor como sujeito epistemológico e sobre a necessidade de pensar e produzir conhecimento a partir das suas próprias referências históricas, culturais e civilizacionais.
Ao longo da sua carreira, Kay Seran Limak tem desenvolvido projetos de formação musical, investigação, produção artística, liderança juvenil e consultoria cultural, trabalhando com comunidades, jovens criadores, músicos, instituições culturais e entidades públicas. O seu trabalho procura contribuir para o desenvolvimento de uma expressão contemporânea enraizada nas referências culturais timorenses e para o fortalecimento do ecossistema musical, cultural e criativo de Timor-Leste.`,
  },
  {
    name: "Welket Bungué",
    role: "Ponto focal",
    location: "Guiné-Bissau",
    imageUrl: "/assets/team/welket.jpeg",
    bio: "",
  },
];

type TeamMemberModalProps = {
  member: TeamMember | null;
  onClose: () => void;
};


const TeamMemberModal: React.FC<TeamMemberModalProps> = ({ member, onClose }) => {
  return (
    <Modal
      open={Boolean(member)}
      onClose={onClose}
      className="items-start justify-end bg-rede-surface/70 p-4 sm:px-13 sm:py-10"
      wrapperClassName="h-full w-full max-w-[680px] motion-safe:animate-[teamModalSlideIn_280ms_cubic-bezier(0.22,1,0.36,1)]"
      panelClassName="h-full max-h-[calc(100vh-2rem)] w-full max-w-[680px] overflow-y-auto rounded-none border-[1.3px] border-white/90 bg-rede-surface p-0 sm:max-h-[calc(100vh-5rem)]"
      closeButtonClassName="!left-auto !right-4 !top-4 !ml-0 !border-0 !bg-rede-surface !text-rede-white hover:!bg-rede-white hover:!text-rede-surface sm:!right-full sm:!top-6"
    >
      {member && (
        <div className="relative min-h-full bg-rede-surface px-5 pb-18 pt-18 text-rede-white sm:grid sm:grid-cols-[250px_minmax(0,1fr)] sm:gap-8 sm:px-5 sm:pb-24 sm:pt-5">
          <p className="absolute -top-7 left-0 hidden text-[12px] leading-4 text-rede-bg-200 sm:block">
            Bio
          </p>

          <div className="flex flex-col sm:pt-[380px]">
            <h3 className="text-[16px] font-semibold leading-5 text-rede-white">
              {member.name}
            </h3>
            <p className="mt-1 text-[12px] font-medium leading-4 text-rede-white/80">
              {member.role}
            </p>
            <div className="mt-4 flex">
              <Tag className="inline-flex w-auto shrink-0 whitespace-nowrap border-rede-white/35 text-rede-white">
                {member.location}
              </Tag>
            </div>
          </div>

          <div className="min-w-0">
            <div className="h-[300px] w-full overflow-hidden bg-rede-bg-600 sm:h-[340px]">
              <img
                src={member.imageUrl}
                alt={`Retrato de ${member.name}`}
                className="h-full w-full object-cover grayscale"
              />
            </div>

            <div className="mt-7 max-w-[315px] text-rede-white">
              <Text className="mt-8 text-[14px] leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: member.bio }} />
            </div>
          </div>
        </div>
      )}
      <style jsx global>{`
        @keyframes teamModalSlideIn {
          from {
            opacity: 0;
            transform: translateX(72px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </Modal>
  );
};

export const TeamSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section className="bg-rede-bg py-12 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <button
              type="button"
              key={member.name}
              className="flex h-auto min-h-95 cursor-pointer flex-col overflow-hidden bg-rede-surface text-left transition-opacity hover:opacity-85 focus:outline-none focus-visible:ring-2 focus-visible:ring-rede-white/80 lg:h-95 lg:min-h-0"
              onClick={() => setSelectedMember(member)}
              aria-label={`Abrir biografia de ${member.name}`}
            >
              <span className="relative block aspect-4/3 w-full shrink-0 overflow-hidden">
                <img
                  src={member.imageUrl}
                  alt={`Retrato de ${member.name}`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </span>

              <span className="flex w-full flex-1 flex-col px-4 pb-4 pt-2">
                <span className="text-base font-semibold text-rede-white">
                  {member.name}
                </span>

                <span className="mb-3 mt-1 text-[12px] font-medium leading-4 text-rede-white/80">
                  {member.role}
                </span>

                <span className="mt-auto flex">
                  <Tag className="inline-flex w-auto shrink-0 whitespace-nowrap">
                    {member.location}
                  </Tag>
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <TeamMemberModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </section>
  );
};