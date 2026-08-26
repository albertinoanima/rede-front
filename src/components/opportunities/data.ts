import { newsCategories } from "../news/data";
import { OpportunityType } from "../OpportunityCard";


export const opportunities: OpportunityType[] = [
  {
    id: "flmlbscvmz2026",
    title: "FilmLabs em Cabo Verde e Moçambique",
    description:
      "Laboratório de cinema intensivo para seis participantes selecionados/as por país, com formação prática em pitch, fundraising e distribuição, ao lado de profissionais experientes do setor.",
    isAvailable: false,
    status: "expired",
    startDate: "Agosto",
    endDate: "Outubro 2026",
    type: "Formação",
    eligibility: ["Cabo Verde", "Moçambique"],
    themes: ["FilmLabs", "Workshops", "Género", "Juventude", "Green Filming", "Pitch", "Distribuição"],
    country: "cabo verde",
    cover: "/assets/opportunities/film-labs.jpg",
  },
  {
    id: "sessabflmz2026",
    title: "Sessões abertas em formato híbrido, durante o FilmLab Moçambique",
    description:
      "Três sessões públicas híbridas do FilmLab em Maputo, com convidados/as internacionais discutindo conservação e ambiente, género e representação, e cinema de impacto.",
    isAvailable: false,
    status: "expired",
    startDate: "24 Ago",
    endDate: "4 Set 2026",
    type: "Workshop",
    eligibility: ["Moçambique"],
    themes: [
      "FilmLabs",
      "Workshops",
      "Género",
      "Representação",
      "Juventude",
      "Ambiente",
      "Green Filming",
      "Conservação",
      "Distribuição",
      "Impacto"
    ],
    country: "mocambique",
    cover: "/assets/opportunities/film-labs.jpg",
  },
  {
    id: "estgmapcv2026",
    title: "Estágios para o Mapeamento do setor audiovisual",
    description:
      "Processo seletivo para duas estagiárias em Cabo Verde, que reforçam a equipa local e apoiam o Mapeamento da REDE ao longo de três meses, com capacitação da equipa e de peritos envolvidos.",
    isAvailable: false,
    status: "expired",
    startDate: "15",
    endDate: "22 Julho 2026",
    type: "Estágio",
    eligibility: ["Cabo Verde"],
    themes: [
      "Género",
      "Juventude",
      "Formação",
      "Estágios",
      "Mapeamento",
      "Dados do Setor",
      "Estatísticas"
    ],
    country: "cabo verde",
    cover: "/assets/opportunities/estagiarias.jpg",
  },
];


export const opportunityCategories = newsCategories;

export type opportunityCategory = 'Emprego' | "Co-produção" | "Parceria" | "Financiamento" | "Festval" | "Encontro" | "Workshop" | "Formação"
