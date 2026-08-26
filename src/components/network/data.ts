//

import { ProfileType } from "../ProfileCard";
import { angolaCitiesByProvince, angolaProvincesList, caboVerdeIslandsList, caboVerdeMunicipalitiesByIsland, guineaBissauRegionsList, guineaBissauSectorsByRegion, mozambiqueDistrictsByProvince, mozambiqueProvincesList, saoTomePrincipeCitiesByRegion, saoTomePrincipeRegionsList, SelectItemType, timorLesteAdministrativePostsByMunicipality, timorLesteMunicipalitiesList } from "./filters";


//Array de perfis
export const profiles: ProfileType[] = [
    {
        id: "fhxtuhndkuhndxrjdx",
        cover: "/assets/profiles/logo-1.png",
        tags: ["Guiné-Bissau", "Bissau", "Fotográfo"],
        title: "Lorem ipsum dolor sit consectetur",
        country: "guine-bissau", province: "sector-autonomo-de-bissau", city: "bissau",
        type: "profissionais", category: "fotografxs",
    },
    {
        id: "qmpwlszkvbterygaxc",
        cover: "/assets/opportunities/image-5.png",
        tags: ["Moçambique", "Nampula", "Produtor"],
        title: "Lorem ipsum dolor sit consectetur",
        country: "mocambique", province: "nampula", city: "nampula",
        type: "profissionais", category: "produtorxs",
    },
    {
        id: "znxbdotgmreiaqycvh",
        cover: "/assets/profiles/photo-2.png",
        tags: ["Moçambique", "Nampula", "Produtor"],
        title: "Lorem ipsum dolor sit consectetur",
        country: "mocambique", province: "nampula", city: "nampula",
        type: "profissionais", category: "produtorxs",
    },
    {
        id: "jrkeulcmxzsqbgtvfw",
        cover: "/assets/opportunities/image-6.png",
        tags: ["Guiné-Bissau", "Bissau", "Fotográfo"],
        title: "Lorem ipsum dolor sit consectetur",
        country: "guine-bissau", province: "sector-autonomo-de-bissau", city: "bissau",
        type: "profissionais", category: "fotografxs",
    },
    {
        id: "wmvqcslzjnrytexbao",
        cover: "/assets/profiles/logo-2.png",
        tags: ["Angola", "Luanda", "Animador"],
        title: "Lorem ipsum dolor sit consectetur",
        country: "angola", province: "luanda", city: "luanda",
        type: "profissionais", category: "animadorxs",
    },
    {
        id: "gpxfuadyvnmzeklcqi",
        cover: "/assets/opportunities/image-7.png",
        tags: ["Guiné-Bissau", "Bissau", "Fotográfo"],
        title: "Lorem ipsum dolor sit consectetur",
        country: "guine-bissau", province: "sector-autonomo-de-bissau", city: "bissau",
        type: "profissionais", category: "fotografxs",
    },
    {
        id: "btnhysjcmqvewxoduz",
        cover: "/assets/profiles/photo-5.png",
        tags: ["Angola", "Luanda", "Animador"],
        title: "Lorem ipsum dolor sit consectetur",
        country: "angola", province: "luanda", city: "luanda",
        type: "profissionais", category: "animadorxs",
    },
    {
        id: "lcvmyszqpajodwiukr",
        cover: "/assets/profiles/logo-3.png",
        tags: ["Angola", "Luanda", "Animador"],
        title: "Lorem ipsum dolor sit consectetur",
        country: "angola", province: "luanda", city: "luanda",
        type: "profissionais", category: "animadorxs",
    },
    {
        id: "vhqzmdotuenraxysbc",
        cover: "/assets/opportunities/image-7.png",
        tags: ["Angola", "Luanda", "Animador"],
        title: "Lorem ipsum dolor sit consectetur",
        country: "angola", province: "luanda", city: "luanda",
        type: "profissionais", category: "animadorxs",
    },
    {
        id: "eyoltqbxvdznucpmiw",
        cover: "/assets/profiles/logo-4.png",
        tags: ["Guiné-Bissau", "Bissau", "Fotográfo"],
        title: "Lorem ipsum dolor sit consectetur",
        country: "guine-bissau", province: "sector-autonomo-de-bissau", city: "bissau",
        type: "profissionais", category: "fotografxs",
    },
    {
        id: "rzupwmavjcxnbeqhkt",
        cover: "/assets/opportunities/image-8.png",
        tags: ["Moçambique", "Nampula", "Produtor"],
        title: "Lorem ipsum dolor sit consectetur",
        country: "mocambique", province: "nampula", city: "nampula",
        type: "profissionais", category: "produtorxs",
    },
    {
        id: "ndqxytlvamockjzguf",
        cover: "/assets/opportunities/image-2.png",
        tags: ["Moçambique", "Nampula", "Produtor"],
        title: "Lorem ipsum dolor sit consectetur",
        country: "mocambique", province: "nampula", city: "nampula",
        type: "profissionais", category: "produtorxs",
    }
];





export type CountryCode =
  | 'angola'
  | 'cabo-verde'
  | 'guine-bissau'
  | 'mocambique'
  | 'sao-tome-e-principe'
  | 'timor-leste'

const sortByLabel = (a: SelectItemType, b: SelectItemType) =>
  a.label.localeCompare(b.label, 'pt')

export const provincesByCountry: Record<CountryCode, SelectItemType[]> = {
  angola: angolaProvincesList,
  'cabo-verde': caboVerdeIslandsList,
  'guine-bissau': guineaBissauRegionsList,
  mocambique: mozambiqueProvincesList,
  'sao-tome-e-principe': saoTomePrincipeRegionsList,
  'timor-leste': timorLesteMunicipalitiesList,
}

export const citiesByCountryAndProvince: Record<
  CountryCode,
  Record<string, SelectItemType[]>
> = {
  angola: angolaCitiesByProvince,
  'cabo-verde': caboVerdeMunicipalitiesByIsland,
  'guine-bissau': guineaBissauSectorsByRegion,
  mocambique: mozambiqueDistrictsByProvince,
  'sao-tome-e-principe': saoTomePrincipeCitiesByRegion,
  'timor-leste': timorLesteAdministrativePostsByMunicipality,
}

export const profileTypesList: SelectItemType[] = [
  { label: 'Empresa', value: 'empresa' },
  { label: 'Festival', value: 'festival' },
  { label: 'Instituição', value: 'instituicao' },
  { label: 'Profissionais', value: 'profissionais' },
].sort(sortByLabel)

export const categoriesList: SelectItemType[] = [
  { label: 'Aderecistas', value: 'aderecistas' },
  { label: 'Animadorxs', value: 'animadorxs' },
  { label: 'Anotadorxs', value: 'anotadorxs' },
  { label: 'Argumentistas', value: 'argumentistas' },
  { label: 'Atores/Atrizes', value: 'atores-atrizes' },
  { label: 'Chefes de produção e assistentes', value: 'chefes-de-producao-e-assistentes' },
  { label: 'Compositorxs de músicas', value: 'compositorxs-de-musicas' },
  { label: 'Coloristxs', value: 'coloristxs' },
  { label: 'Coordenadorxs de intimidade', value: 'coordenadorxs-de-intimidade' },
  { label: 'Coordenadorxs de distribuição e ou aquisições', value: 'coordenadorxs-de-distribuicao-e-ou-aquisicoes' },
  { label: 'Coordenadorxs de licenciamento e propriedade intelectual', value: 'coordenadorxs-de-licenciamento-e-propriedade-intelectual' },
  { label: 'Coordenadorxs de pós produção', value: 'coordenadorxs-de-pos-producao' },
  { label: 'Críticxs', value: 'criticxs' },
  { label: 'Curadorxs', value: 'curadorxs' },
  { label: 'Diretorxs de arte e assistentes', value: 'diretorxs-de-arte-e-assistentes' },
  { label: 'Diretorxs de casting e assistentes', value: 'diretorxs-de-casting-e-assistentes' },
  { label: 'Diretorxs de fotografia', value: 'diretorxs-de-fotografia' },
  { label: 'Diretorxs de guarda roupa e figurinistas', value: 'diretorxs-de-guarda-roupa-e-figurinistas' },
  { label: 'Diretorxs de som', value: 'diretorxs-de-som' },
  { label: 'Fotógrafxs', value: 'fotografxs' },
  { label: 'Green consultants', value: 'green-consultants' },
  { label: 'Guionistas', value: 'guionistas' },
  { label: 'Investigadorxs', value: 'investigadorxs' },
  { label: 'Montadorxs/Editorxs e assistentes', value: 'montadorxs-editorxs-e-assistentes' },
  { label: 'Operadorxs de câmara e assistentes', value: 'operadorxs-de-camara-e-assistentes' },
  { label: 'Perchistxs', value: 'perchistxs' },
  { label: 'Pós-produtx de som', value: 'pos-produtx-de-som' },
  { label: 'Produtorxs', value: 'produtorxs' },
  { label: 'Produtorxs de animação', value: 'produtorxs-de-animacao' },
  { label: 'Produtorxs executivas', value: 'produtorxs-executivas' },
  { label: 'Professorxs/Formadorxs', value: 'professorxs-formadorxs' },
  { label: 'Programadorxs', value: 'programadorxs' },
  { label: 'Realizadorxs e assistentes', value: 'realizadorxs-e-assistentes' },
  { label: 'Tradutorxs', value: 'tradutorxs' },
  { label: 'Videógrafxs', value: 'videografxs' },
  { label: 'Videoartista', value: 'videoartista' },
  { label: 'Videomapping', value: 'videomapping' },
  { label: 'VFX', value: 'vfx' },
  { label: 'Outros', value: 'outros' },
].sort(sortByLabel)

export const companiesCategoryList: SelectItemType[] = [
  { label: 'Desenvolvimento de Projetos', value: 'desenvolvimento-de-projetos' },
  { label: 'Escrita', value: 'escrita' },
  { label: 'Produção Audiovisual', value: 'producao-audiovisual' },
  { label: 'Gestão de Produção', value: 'gestao-de-producao' },
  { label: 'Aluguer de Equipamentos', value: 'aluguer-de-equipamentos' },
  { label: 'Infraestruturas', value: 'infraestruturas' },
  { label: 'Apoio à Produção', value: 'apoio-a-producao' },
  { label: 'Captação de Imagem', value: 'captacao-de-imagem' },
  { label: 'Direção Artística', value: 'direcao-artistica' },
  { label: 'Casting e Locações', value: 'casting-e-locacoes' },
  { label: 'Captação de Som', value: 'captacao-de-som' },
  { label: 'Pós-Produção de Som', value: 'pos-producao-de-som' },
  { label: 'Curadoria', value: 'curadoria' },
  { label: 'Linguagem', value: 'linguagem' },
  { label: 'Pós-produção de Imagem', value: 'pos-producao-de-imagem' },
  { label: 'Pós-Produção Técnica', value: 'pos-producao-tecnica' },
  { label: 'Animação', value: 'animacao' },
  { label: 'VFX', value: 'vfx' },
  { label: 'Tecnologias Imersivas', value: 'tecnologias-imersivas' },
  { label: 'Distribuição', value: 'distribuicao' },
  { label: 'Exibição', value: 'exibicao' },
].sort(sortByLabel)

export const festivalsCategoryList: SelectItemType[] = [
  { label: 'Comunicação', value: 'comunicacao' },
  { label: 'Património Audiovisual - Preservação', value: 'patrimonio-audiovisual-preservacao' },
  { label: 'Património Audiovisual - Documentação', value: 'patrimonio-audiovisual-documentacao' },
  { label: 'Investigação Histórica', value: 'investigacao-historica' },
  { label: 'Formação e Capacitação', value: 'formacao-e-capacitacao' },
  { label: 'Educação', value: 'educacao' },
  { label: 'Investigação e Consultoria', value: 'investigacao-e-consultoria' },
  { label: 'Festivais, Mostras e Eventos', value: 'festivais-mostras-e-eventos' },
  { label: 'Curadoria', value: 'curadoria' },
  { label: 'Desenvolvimento da Indústria', value: 'desenvolvimento-da-industria' },
].sort(sortByLabel)

export const institutionsCategoryList: SelectItemType[] = [
  { label: 'Associações e Coletivos', value: 'associacoes-e-coletivos' },
  { label: 'Entidades Públicas', value: 'entidades-publicas' },
].sort(sortByLabel)

export const subCategoriesByType: Record<
  string,
  Record<string, SelectItemType[]>
> = {
  empresa: {
    'desenvolvimento-de-projetos': [
      { label: 'Longa-metragem', value: 'longa-metragem' },
      { label: 'Curta-metragem', value: 'curta-metragem' },
      { label: 'Série', value: 'serie' },
      { label: 'Documentário', value: 'documentario' },
    ].sort(sortByLabel),

    escrita: [
      { label: 'Argumento', value: 'argumento' },
      { label: 'Guião', value: 'guiao' },
      { label: 'Adaptação', value: 'adaptacao' },
    ].sort(sortByLabel),

    'producao-audiovisual': [
      { label: 'Cinema', value: 'cinema' },
      { label: 'Televisão', value: 'televisao' },
      { label: 'Publicidade', value: 'publicidade' },
      { label: 'Conteúdo Digital', value: 'conteudo-digital' },
    ].sort(sortByLabel),

    'gestao-de-producao': [
      { label: 'Produção Executiva', value: 'producao-executiva' },
      { label: 'Produção', value: 'producao' },
      { label: 'Coordenação', value: 'coordenacao' },
    ].sort(sortByLabel),

    'aluguer-de-equipamentos': [
      { label: 'Câmara', value: 'camera' },
      { label: 'Som', value: 'som' },
      { label: 'Iluminação', value: 'iluminacao' },
      { label: 'Grip', value: 'grip' },
    ].sort(sortByLabel),

    infraestruturas: [
      { label: 'Estúdios', value: 'estudios' },
      { label: 'Salas de Edição', value: 'salas-de-edicao' },
      { label: 'Salas de Som', value: 'salas-de-som' },
    ].sort(sortByLabel),

    'apoio-a-producao': [
      { label: 'Logística', value: 'logistica' },
      { label: 'Transportes', value: 'transportes' },
      { label: 'Catering', value: 'catering' },
    ].sort(sortByLabel),

    'captacao-de-imagem': [
      { label: 'Câmara', value: 'camera' },
      { label: 'Fotografia', value: 'fotografia' },
      { label: 'Drone', value: 'drone' },
    ].sort(sortByLabel),

    'direcao-artistica': [
      { label: 'Cenografia', value: 'cenografia' },
      { label: 'Decoração', value: 'decoracao' },
      { label: 'Figurino', value: 'figurino' },
    ].sort(sortByLabel),

    'casting-e-locacoes': [
      { label: 'Casting', value: 'casting' },
      { label: 'Localizações', value: 'localizacoes' },
    ].sort(sortByLabel),

    'captacao-de-som': [
      { label: 'Som Direto', value: 'som-direto' },
      { label: 'Gravação', value: 'gravacao' },
    ].sort(sortByLabel),

    'pos-producao-de-som': [
      { label: 'Edição de Som', value: 'edicao-de-som' },
      { label: 'Mixagem', value: 'mixagem' },
      { label: 'Design de Som', value: 'design-de-som' },
    ].sort(sortByLabel),

    curadoria: [
      { label: 'Cinema', value: 'cinema' },
      { label: 'Festivais', value: 'festivais' },
      { label: 'Programação', value: 'programacao' },
    ].sort(sortByLabel),

    linguagem: [
      { label: 'Tradução', value: 'traducao' },
      { label: 'Legendagem', value: 'legendagem' },
      { label: 'Dobragem', value: 'dobragem' },
    ].sort(sortByLabel),

    'pos-producao-de-imagem': [
      { label: 'Montagem', value: 'montagem' },
      { label: 'Color Grading', value: 'color-grading' },
      { label: 'Composição', value: 'composicao' },
    ].sort(sortByLabel),

    'pos-producao-tecnica': [
      { label: 'Masterização', value: 'masterizacao' },
      { label: 'DCP', value: 'dcp' },
      { label: 'Conformação', value: 'conformacao' },
    ].sort(sortByLabel),

    animacao: [
      { label: '2D', value: '2d' },
      { label: '3D', value: '3d' },
      { label: 'Stop Motion', value: 'stop-motion' },
    ].sort(sortByLabel),

    vfx: [
      { label: 'Composição', value: 'composicao' },
      { label: 'CGI', value: 'cgi' },
      { label: 'Motion Graphics', value: 'motion-graphics' },
    ].sort(sortByLabel),

    'tecnologias-imersivas': [
      { label: 'Realidade Virtual', value: 'realidade-virtual' },
      { label: 'Realidade Aumentada', value: 'realidade-aumentada' },
      { label: 'Realidade Mista', value: 'realidade-mista' },
    ].sort(sortByLabel),

    distribuicao: [
      { label: 'Cinema', value: 'cinema' },
      { label: 'Televisão', value: 'televisao' },
      { label: 'Streaming', value: 'streaming' },
    ].sort(sortByLabel),

    exibicao: [
      { label: 'Salas de Cinema', value: 'salas-de-cinema' },
      { label: 'Festivais', value: 'festivais' },
      { label: 'Televisão', value: 'televisao' },
      { label: 'Streaming', value: 'streaming' },
    ].sort(sortByLabel),
  },

  festival: {
    comunicacao: [
      { label: 'Marketing Cinematográfico', value: 'marketing-cinematografico' },
      { label: 'Gestão de Redes Sociais', value: 'gestao-de-redes-sociais' },
      { label: 'Produção de Trailers', value: 'producao-de-trailers' },
      { label: 'Design gráfico', value: 'design-grafico' },
      { label: 'Comunicação institucional', value: 'comunicacao-institucional' },
      { label: 'Assessoria de imprensa', value: 'assessoria-de-imprensa' },
    ].sort(sortByLabel),

    'patrimonio-audiovisual-preservacao': [
      { label: 'Gestão de Arquivos Audiovisuais', value: 'gestao-de-arquivos-audiovisuais' },
      { label: 'Digitalização', value: 'digitalizacao' },
      { label: 'Restauro', value: 'restauro' },
      { label: 'Preservação Digital', value: 'preservacao-digital' },
      { label: 'Conservação preventiva', value: 'conservacao-preventiva' },
    ].sort(sortByLabel),

    'patrimonio-audiovisual-documentacao': [
      { label: 'Catalogação', value: 'catalogacao' },
      { label: 'Inventário', value: 'inventario' },
      { label: 'Indexação', value: 'indexacao' },
      { label: 'Curadoria de Arquivos', value: 'curadoria-de-arquivos' },
      { label: 'Gestão de Metadados', value: 'gestao-de-metadados' },
    ].sort(sortByLabel),

    'investigacao-historica': [
      { label: 'História Oral', value: 'historia-oral' },
      { label: 'Investigação Histórica', value: 'investigacao-historica' },
      { label: 'Museologia Audiovisual', value: 'museologia-audiovisual' },
      { label: 'Humanidades Digitais', value: 'humanidades-digitais' },
    ].sort(sortByLabel),

    'formacao-e-capacitacao': [
      { label: 'Formação Técnica', value: 'formacao-tecnica' },
      { label: 'Workshops', value: 'workshops' },
      { label: 'Masterclasses', value: 'masterclasses' },
      { label: 'Mentoria', value: 'mentoria' },
      { label: 'Residências Artísticas', value: 'residencias-artisticas' },
      { label: 'Laboratórios Criativos', value: 'laboratorios-criativos' },
    ].sort(sortByLabel),

    educacao: [
      { label: 'Educação para o Cinema', value: 'educacao-para-o-cinema' },
      { label: 'Literacia Mediática', value: 'literacia-mediatica' },
      { label: 'Formação Online', value: 'formacao-online' },
      { label: 'Formação em IA', value: 'formacao-em-ia' },
      { label: 'Formação em Arquivos', value: 'formacao-em-arquivos' },
      { label: 'Formação Superior', value: 'formacao-superior' },
      { label: 'Formação Profissional', value: 'formacao-profissional' },
    ].sort(sortByLabel),

    'investigacao-e-consultoria': [
      { label: 'Investigação e Desenvolvimento', value: 'investigacao-e-desenvolvimento' },
      { label: 'Estudos de Mercado', value: 'estudos-de-mercado' },
      { label: 'Estudos de Públicos', value: 'estudos-de-publicos' },
      { label: 'Avaliação de Impacto', value: 'avaliacao-de-impacto' },
      { label: 'Mapeamento do Setor', value: 'mapeamento-do-setor' },
      { label: 'Consultoria Audiovisual', value: 'consultoria-audiovisual' },
      { label: 'Consultoria para Film Commissions', value: 'consultoria-para-film-commissions' },
      { label: 'Consultoria em Políticas Públicas', value: 'consultoria-em-politicas-publicas' },
      { label: 'Consultoria em Coprodução', value: 'consultoria-em-coproducao' },
      { label: 'Consultoria em Financiamento', value: 'consultoria-em-financiamento' },
      { label: 'Consultoria em Sustentabilidade', value: 'consultoria-em-sustentabilidade' },
    ].sort(sortByLabel),

    'festivais-mostras-e-eventos': [
      { label: 'Organização de Festivais', value: 'organizacao-de-festivais' },
      { label: 'Organização de Mostras', value: 'organizacao-de-mostras' },
      { label: 'Mercados Audiovisuais', value: 'mercados-audiovisuais' },
      { label: 'Conferências', value: 'conferencias' },
      { label: 'Encontros Profissionais', value: 'encontros-profissionais' },
    ].sort(sortByLabel),

    curadoria: [
      { label: 'Programação', value: 'programacao' },
      { label: 'Curadoria', value: 'curadoria' },
      { label: 'Seleção de Filmes', value: 'selecao-de-filmes' },
      { label: 'Gestão de Catálogos', value: 'gestao-de-catalogos' },
    ].sort(sortByLabel),

    'desenvolvimento-da-industria': [
      { label: 'Networking', value: 'networking' },
      { label: 'Matchmaking', value: 'matchmaking' },
      { label: 'Incubação', value: 'incubacao' },
      { label: 'Internacionalização', value: 'internacionalizacao' },
      { label: 'Promoção Comercial', value: 'promocao-comercial' },
    ].sort(sortByLabel),
  },

  instituicao: {
    'associacoes-e-coletivos': [
      { label: 'Associação Cultural', value: 'associacao-cultural' },
      { label: 'Associação Profissional', value: 'associacao-profissional' },
      { label: 'Coletivo Informal', value: 'coletivo-informal' },
      { label: 'Sindicato', value: 'sindicato' },
    ].sort(sortByLabel),

    'entidades-publicas': [
      { label: 'Instituto Público', value: 'instituto-publico' },
      { label: 'Empresa Pública', value: 'empresa-publica' },
      { label: 'Televisão Pública', value: 'televisao-publica' },
      { label: 'Preservação Digital', value: 'preservacao-digital' },
      { label: 'Conservação preventiva', value: 'conservacao-preventiva' },
    ].sort(sortByLabel),
  },
  profissionais: {},
}