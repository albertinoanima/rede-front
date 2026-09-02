//

import { AccountType } from "@/types/User";
import { ProfileType } from "../ProfileCard";
import { angolaCitiesByProvince, angolaProvincesList, buildLabelIndex, countriesList, getLabelFromIndex, caboVerdeIslandsList, caboVerdeMunicipalitiesByIsland, guineaBissauRegionsList, guineaBissauSectorsByRegion, mozambiqueDistrictsByProvince, mozambiqueProvincesList, saoTomePrincipeCitiesByRegion, saoTomePrincipeRegionsList, SelectItemType, timorLesteAdministrativePostsByMunicipality, timorLesteMunicipalitiesList } from "./filters";


//Array de perfis
export const profiles: ProfileType[] = [
    {
        id: "fhxtuhndkuhndxrjdx",
        cover: "/assets/profiles/logo-1.png",
        tags: ["Guiné-Bissau", "Bissau", "Fotográfo"],
        title: "Lorem ipsum dolor sit consectetur",
        country: "guine-bissau", province: "sector-autonomo-de-bissau", city: "bissau",
        type: "profissionais", categories: ["fotografxs"],
    },
    {
        id: "qmpwlszkvbterygaxc",
        cover: "/assets/opportunities/image-5.png",
        tags: ["Moçambique", "Nampula", "Produtor"],
        title: "Lorem ipsum dolor sit consectetur",
        country: "mocambique", province: "nampula", city: "nampula",
        type: "profissionais", categories: ["produtorxs"],
    },
    {
        id: "znxbdotgmreiaqycvh",
        cover: "/assets/profiles/photo-2.png",
        tags: ["Moçambique", "Nampula", "Produtor"],
        title: "Lorem ipsum dolor sit consectetur",
        country: "mocambique", province: "nampula", city: "nampula",
        type: "profissionais", categories: ["produtorxs"],
    },
    {
        id: "jrkeulcmxzsqbgtvfw",
        cover: "/assets/opportunities/image-6.png",
        tags: ["Guiné-Bissau", "Bissau", "Fotográfo"],
        title: "Lorem ipsum dolor sit consectetur",
        country: "guine-bissau", province: "sector-autonomo-de-bissau", city: "bissau",
        type: "profissionais", categories: ["fotografxs"],
    },
    {
        id: "wmvqcslzjnrytexbao",
        cover: "/assets/profiles/logo-2.png",
        tags: ["Angola", "Luanda", "Animador"],
        title: "Lorem ipsum dolor sit consectetur",
        country: "angola", province: "luanda", city: "luanda",
        type: "profissionais", categories: ["animadorxs"],
    },
    {
        id: "gpxfuadyvnmzeklcqi",
        cover: "/assets/opportunities/image-7.png",
        tags: ["Guiné-Bissau", "Bissau", "Fotográfo"],
        title: "Lorem ipsum dolor sit consectetur",
        country: "guine-bissau", province: "sector-autonomo-de-bissau", city: "bissau",
        type: "profissionais", categories: ["fotografxs"],
    },
    {
        id: "btnhysjcmqvewxoduz",
        cover: "/assets/profiles/photo-5.png",
        tags: ["Angola", "Luanda", "Animador"],
        title: "Lorem ipsum dolor sit consectetur",
        country: "angola", province: "luanda", city: "luanda",
        type: "profissionais", categories: ["animadorxs"],
    },
    {
        id: "lcvmyszqpajodwiukr",
        cover: "/assets/profiles/logo-3.png",
        tags: ["Angola", "Luanda", "Animador"],
        title: "Lorem ipsum dolor sit consectetur",
        country: "angola", province: "luanda", city: "luanda",
        type: "profissionais", categories: ["animadorxs"],
    },
    {
        id: "vhqzmdotuenraxysbc",
        cover: "/assets/opportunities/image-7.png",
        tags: ["Angola", "Luanda", "Animador"],
        title: "Lorem ipsum dolor sit consectetur",
        country: "angola", province: "luanda", city: "luanda",
        type: "profissionais", categories: ["animadorxs"],
    },
    {
        id: "eyoltqbxvdznucpmiw",
        cover: "/assets/profiles/logo-4.png",
        tags: ["Guiné-Bissau", "Bissau", "Fotográfo"],
        title: "Lorem ipsum dolor sit consectetur",
        country: "guine-bissau", province: "sector-autonomo-de-bissau", city: "bissau",
        type: "profissionais", categories: ["fotografxs"],
    },
    {
        id: "rzupwmavjcxnbeqhkt",
        cover: "/assets/opportunities/image-8.png",
        tags: ["Moçambique", "Nampula", "Produtor"],
        title: "Lorem ipsum dolor sit consectetur",
        country: "mocambique", province: "nampula", city: "nampula",
        type: "profissionais", categories: ["produtorxs"],
    },
    {
        id: "ndqxytlvamockjzguf",
        cover: "/assets/opportunities/image-2.png",
        tags: ["Moçambique", "Nampula", "Produtor"],
        title: "Lorem ipsum dolor sit consectetur",
        country: "mocambique", province: "nampula", city: "nampula",
        type: "profissionais", categories: ["produtorxs"],
    }
];

export type CountryCode =
  | 'angola'
  | 'cabo-verde'
  | 'guine-bissau'
  | 'mocambique'
  | 'sao-tome-e-principe'
  | 'timor-leste'

export const sortByLabel = (a: SelectItemType, b: SelectItemType) =>
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


// Categoria Empresa
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
  { label: 'Linguagem', value: 'linguagem' },
  { label: 'Pós-produção de Imagem', value: 'pos-producao-de-imagem' },
  { label: 'Pós-Produção Técnica', value: 'pos-producao-tecnica' },
  { label: 'Animação', value: 'animacao' },
  { label: 'VFX', value: 'vfx' },
  { label: 'Tecnologias Imersivas', value: 'tecnologias-imersivas' },
  { label: 'Distribuição', value: 'distribuicao' },
  { label: 'Exibição', value: 'exibicao' },
].sort(sortByLabel)

// Uma sub-categoria conhece sempre a categoria a que pertence, e o tipo de
// perfil é dado pela lista onde ela vive. É isso que permite, ao escolher uma
// sub-categoria, preencher automaticamente a categoria e o tipo.
export type SelectItemWithCategory = SelectItemType & { category: string }

// Sub-categorias Empresa
export const companiesSubcategoriesList: SelectItemWithCategory[] = [
  { label: 'Adaptação literária', value: 'adaptacao-literaria', category: 'escrita' },
  { label: 'ADR', value: 'adr', category: 'pos-producao-de-som' },
  { label: 'Adereços', value: 'aderecos', category: 'direcao-artistica' },
  { label: 'Agenciamento de filmes', value: 'agenciamento-de-filmes', category: 'distribuicao' },
  { label: 'Agregação de Conteúdos', value: 'agregacao-de-conteudos', category: 'distribuicao' },
  { label: 'Alojamento', value: 'alojamento', category: 'apoio-a-producao' },
  { label: 'Animação 2D', value: 'animacao-2d', category: 'animacao' },
  { label: 'Animação 3D', value: 'animacao-3d', category: 'animacao' },
  { label: 'Argumento / Escrita de Guião', value: 'argumento-escrita-de-guiao', category: 'escrita' },
  { label: 'Arquivo digital', value: 'arquivo-digital', category: 'pos-producao-tecnica' },
  { label: 'Audiodescrição', value: 'audiodescricao', category: 'linguagem' },
  { label: 'Bíblia de Série', value: 'biblia-de-serie', category: 'escrita' },
  { label: 'Câmaras', value: 'camaras', category: 'aluguer-de-equipamentos' },
  { label: 'Captação de Som', value: 'captacao-de-som', category: 'captacao-de-som' },
  { label: 'Caracterização', value: 'caracterizacao', category: 'direcao-artistica' },
  { label: 'Casting', value: 'casting', category: 'casting-e-locacoes' },
  { label: 'Catering', value: 'catering', category: 'apoio-a-producao' },
  { label: 'Cenografia', value: 'cenografia', category: 'direcao-artistica' },
  { label: 'CGI', value: 'cgi', category: 'vfx' },
  { label: 'Cineclubes', value: 'cineclubes', category: 'exibicao' },
  { label: 'Cinema Móvel', value: 'cinema-movel', category: 'exibicao' },
  { label: 'Compressão', value: 'compressao', category: 'pos-producao-tecnica' },
  { label: 'Composição Digital', value: 'composicao-digital', category: 'vfx' },
  { label: 'Conformação', value: 'conformacao', category: 'pos-producao-de-imagem' },
  { label: 'Consultoria de desenvolvimento', value: 'consultoria-de-desenvolvimento', category: 'desenvolvimento-de-projetos' },
  { label: 'Conteúdos Imersivos', value: 'conteudos-imersivos', category: 'tecnologias-imersivas' },
  { label: 'Controlo de Qualidade (QC)', value: 'controlo-de-qualidade-qc', category: 'pos-producao-tecnica' },
  { label: 'Coordenação de produção', value: 'coordenacao-de-producao', category: 'gestao-de-producao' },
  { label: 'Correção de Cor (Color Grading)', value: 'correcao-de-cor-color-grading', category: 'pos-producao-de-imagem' },
  { label: 'Design de Som', value: 'design-de-som', category: 'pos-producao-de-som' },
  { label: 'Desenvolvimento de coproduções', value: 'desenvolvimento-de-coproducoes', category: 'desenvolvimento-de-projetos' },
  { label: 'Desenvolvimento de dossiers', value: 'desenvolvimento-de-dossiers', category: 'desenvolvimento-de-projetos' },
  { label: 'Desenvolvimento de projetos', value: 'desenvolvimento-de-projetos', category: 'desenvolvimento-de-projetos' },
  { label: 'Direção de Arte', value: 'direcao-de-arte', category: 'direcao-artistica' },
  { label: 'Direção de atores', value: 'direcao-de-atores', category: 'casting-e-locacoes' },
  { label: 'Direção de Fotografia', value: 'direcao-de-fotografia', category: 'captacao-de-imagem' },
  { label: 'Distribuição Cinematográfica', value: 'distribuicao-cinematografica', category: 'distribuicao' },
  { label: 'Distribuição Digital', value: 'distribuicao-digital', category: 'distribuicao' },
  { label: 'Dobragem', value: 'dobragem', category: 'linguagem' },
  { label: 'Drones', value: 'drones', category: 'aluguer-de-equipamentos' },
  { label: 'Efeitos Visuais', value: 'efeitos-visuais', category: 'vfx' },
  { label: 'Encoding', value: 'encoding', category: 'pos-producao-tecnica' },
  { label: 'Entrega (Delivery)', value: 'entrega-delivery', category: 'pos-producao-de-imagem' },
  { label: 'Equipamentos de som', value: 'equipamentos-de-som', category: 'aluguer-de-equipamentos' },
  { label: 'Equipamentos de transmissão', value: 'equipamentos-de-transmissao', category: 'aluguer-de-equipamentos' },
  { label: 'Escrita para plataformas digitais', value: 'escrita-para-plataformas-digitais', category: 'escrita' },
  { label: 'Escrita para televisão', value: 'escrita-para-televisao', category: 'escrita' },
  { label: 'Estúdios de filmagem', value: 'estudios-de-filmagem', category: 'infraestruturas' },
  { label: 'Estúdios de fotografia', value: 'estudios-de-fotografia', category: 'infraestruturas' },
  { label: 'Estúdios de som', value: 'estudios-de-som', category: 'infraestruturas' },
  { label: 'Estúdios de televisão', value: 'estudios-de-televisao', category: 'infraestruturas' },
  { label: 'Exibição Cinematográfica', value: 'exibicao-cinematografica', category: 'exibicao' },
  { label: 'Filmagem aérea', value: 'filmagem-aerea', category: 'captacao-de-imagem' },
  { label: 'Figurinos', value: 'figurinos', category: 'direcao-artistica' },
  { label: 'Foley', value: 'foley', category: 'pos-producao-de-som' },
  { label: 'Fotografia de Cena', value: 'fotografia-de-cena', category: 'captacao-de-imagem' },
  { label: 'Fotografia promocional', value: 'fotografia-promocional', category: 'captacao-de-imagem' },
  { label: 'Fotogrametria', value: 'fotogrametria', category: 'tecnologias-imersivas' },
  { label: 'Gémeos Digitais (Digital Twins)', value: 'gemeos-digitais-digital-twins', category: 'tecnologias-imersivas' },
  { label: 'Geradores', value: 'geradores', category: 'aluguer-de-equipamentos' },
  { label: 'Gestão administrativa', value: 'gestao-administrativa', category: 'gestao-de-producao' },
  { label: 'Gestão de coproduções internacionais', value: 'gestao-de-coproducoes-internacionais', category: 'gestao-de-producao' },
  { label: 'Gestão de direitos', value: 'gestao-de-direitos', category: 'gestao-de-producao' },
  { label: 'Gestão orçamental', value: 'gestao-orcamental', category: 'gestao-de-producao' },
  { label: 'Gravação Musical', value: 'gravacao-musical', category: 'captacao-de-som' },
  { label: 'Grip', value: 'grip', category: 'aluguer-de-equipamentos' },
  { label: 'Guarda-roupa', value: 'guarda-roupa', category: 'direcao-artistica' },
  { label: 'Iluminação', value: 'iluminacao', category: 'aluguer-de-equipamentos' },
  { label: 'Inteligência Artificial aplicada ao Audiovisual', value: 'inteligencia-artificial-aplicada-ao-audiovisual', category: 'tecnologias-imersivas' },
  { label: 'Laboratórios audiovisuais', value: 'laboratorios-audiovisuais', category: 'infraestruturas' },
  { label: 'Legendagem', value: 'legendagem', category: 'linguagem' },
  { label: 'Legendagem para surdos', value: 'legendagem-para-surdos', category: 'linguagem' },
  { label: 'Logística', value: 'logistica', category: 'apoio-a-producao' },
  { label: 'Maquilhagem', value: 'maquilhagem', category: 'direcao-artistica' },
  { label: 'Masterização', value: 'masterizacao', category: 'pos-producao-de-imagem' },
  { label: 'Masterização Áudio', value: 'masterizacao-audio', category: 'pos-producao-de-som' },
  { label: 'Mistura de Som', value: 'mistura-de-som', category: 'pos-producao-de-som' },
  { label: 'Monitores', value: 'monitores', category: 'aluguer-de-equipamentos' },
  { label: 'Montagem', value: 'montagem', category: 'pos-producao-de-imagem' },
  { label: 'Motion Capture', value: 'motion-capture', category: 'animacao' },
  { label: 'Motion Graphics', value: 'motion-graphics', category: 'animacao' },
  { label: 'Objetivas', value: 'objetivas', category: 'aluguer-de-equipamentos' },
  { label: 'Operação de Câmara', value: 'operacao-de-camara', category: 'captacao-de-imagem' },
  { label: 'Operação de Drone', value: 'operacao-de-drone', category: 'captacao-de-imagem' },
  { label: 'Pesquisa de Locações (Location Scouting)', value: 'pesquisa-de-locacoes-location-scouting', category: 'casting-e-locacoes' },
  { label: 'Pesquisa para projetos', value: 'pesquisa-para-projetos', category: 'desenvolvimento-de-projetos' },
  { label: 'Pitching', value: 'pitching', category: 'desenvolvimento-de-projetos' },
  { label: 'Plataformas OTT', value: 'plataformas-ott', category: 'exibicao' },
  { label: 'Produção cinematográfica', value: 'producao-cinematografica', category: 'producao-audiovisual' },
  { label: 'Produção de animação', value: 'producao-de-animacao', category: 'producao-audiovisual' },
  { label: 'Produção de conteúdos digitais', value: 'producao-de-conteudos-digitais', category: 'producao-audiovisual' },
  { label: 'Produção de documentários', value: 'producao-de-documentarios', category: 'producao-audiovisual' },
  { label: 'Produção de ficção', value: 'producao-de-ficcao', category: 'producao-audiovisual' },
  { label: 'Produção de linha', value: 'producao-de-linha', category: 'gestao-de-producao' },
  { label: 'Produção de livestreams', value: 'producao-de-livestreams', category: 'producao-audiovisual' },
  { label: 'Produção de podcasts', value: 'producao-de-podcasts', category: 'producao-audiovisual' },
  { label: 'Produção de videoclipes', value: 'producao-de-videoclipes', category: 'producao-audiovisual' },
  { label: 'Produção executiva', value: 'producao-executiva', category: 'gestao-de-producao' },
  { label: 'Produção para redes sociais', value: 'producao-para-redes-sociais', category: 'producao-audiovisual' },
  { label: 'Produção publicitária', value: 'producao-publicitaria', category: 'producao-audiovisual' },
  { label: 'Produção sustentável (Green Production)', value: 'producao-sustentavel-green-production', category: 'gestao-de-producao' },
  { label: 'Produção televisiva', value: 'producao-televisiva', category: 'producao-audiovisual' },
  { label: 'Produção Virtual (LED Volume)', value: 'producao-virtual-led-volume', category: 'tecnologias-imersivas' },
  { label: 'Programação de salas', value: 'programacao-de-salas', category: 'exibicao' },
  { label: 'Realidade Aumentada', value: 'realidade-aumentada', category: 'tecnologias-imersivas' },
  { label: 'Realidade Mista', value: 'realidade-mista', category: 'tecnologias-imersivas' },
  { label: 'Realidade Virtual', value: 'realidade-virtual', category: 'tecnologias-imersivas' },
  { label: 'Salas de mistura', value: 'salas-de-mistura', category: 'infraestruturas' },
  { label: 'Salas de montagem', value: 'salas-de-montagem', category: 'infraestruturas' },
  { label: 'Script Doctoring', value: 'script-doctoring', category: 'escrita' },
  { label: 'Segurança', value: 'seguranca', category: 'apoio-a-producao' },
  { label: 'Seguros de produção', value: 'seguros-de-producao', category: 'apoio-a-producao' },
  { label: 'Serviços de Fixer', value: 'servicos-de-fixer', category: 'casting-e-locacoes' },
  { label: 'Som Direto', value: 'som-direto', category: 'captacao-de-som' },
  { label: 'Stop Motion', value: 'stop-motion', category: 'animacao' },
  { label: 'Storyboard', value: 'storyboard', category: 'escrita' },
  { label: 'Telepontos', value: 'telepontos', category: 'aluguer-de-equipamentos' },
  { label: 'Time-lapse', value: 'time-lapse', category: 'captacao-de-imagem' },
  { label: 'Transcoding', value: 'transcoding', category: 'pos-producao-tecnica' },
  { label: 'Transporte', value: 'transporte', category: 'apoio-a-producao' },
  { label: 'Tradução Audiovisual', value: 'traducao-audiovisual', category: 'linguagem' },
  { label: 'Vendas Internacionais', value: 'vendas-internacionais', category: 'distribuicao' },
  { label: 'Video Mapping', value: 'video-mapping', category: 'tecnologias-imersivas' },
  { label: 'Viaturas de produção', value: 'viaturas-de-producao', category: 'aluguer-de-equipamentos' },
  { label: 'XR', value: 'xr', category: 'tecnologias-imersivas' },
].sort(sortByLabel)



// Categoria Festival
export const festivalsCategoryList: SelectItemType[] = [
  { label: 'Comunicação', value: 'comunicacao' },
  { label: 'Património Audiovisual - Preservação', value: 'patrimonio-audiovisual-preservacao' },
  { label: 'Património Audiovisual - Documentação', value: 'patrimonio-audiovisual-documentacao' },
  { label: 'Investigação Histórica', value: 'investigacao-historica' },
  { label: 'Formação e Capacitação', value: 'formacao-e-capacitacao' },
  { label: 'Educação', value: 'educacao' },
  { label: 'Investigação e Consultoria', value: 'investigacao-e-consultoria' },
  { label: 'Feiras, Mostras e Eventos', value: 'feiras-mostras-e-eventos' },
  { label: 'Curadoria', value: 'curadoria' },
  { label: 'Desenvolvimento da Indústria', value: 'desenvolvimento-da-industria' },
].sort(sortByLabel)

// Sub-categorias de Festival
export const festivalsSubCategoriesList: SelectItemWithCategory[] = [
  { label: 'Assessoria de imprensa', value: 'assessoria-de-imprensa', category: 'comunicacao' },
  { label: 'Avaliação de Impacto', value: 'avaliacao-de-impacto', category: 'investigacao-e-consultoria' },
  { label: 'Catalogação', value: 'catalogacao', category: 'patrimonio-audiovisual-documentacao' },
  { label: 'Comunicação institucional', value: 'comunicacao-institucional', category: 'comunicacao' },
  { label: 'Conferências', value: 'conferencias', category: 'feiras-mostras-e-eventos' },
  { label: 'Conservação preventiva', value: 'conservacao-preventiva', category: 'patrimonio-audiovisual-preservacao' },
  { label: 'Consultoria Audiovisual', value: 'consultoria-audiovisual', category: 'investigacao-e-consultoria' },
  { label: 'Consultoria em Coprodução', value: 'consultoria-em-coproducao', category: 'investigacao-e-consultoria' },
  { label: 'Consultoria em Financiamento', value: 'consultoria-em-financiamento', category: 'investigacao-e-consultoria' },
  { label: 'Consultoria em Políticas Públicas', value: 'consultoria-em-politicas-publicas', category: 'investigacao-e-consultoria' },
  { label: 'Consultoria em Sustentabilidade', value: 'consultoria-em-sustentabilidade', category: 'investigacao-e-consultoria' },
  { label: 'Consultoria para Film Commissions', value: 'consultoria-para-film-commissions', category: 'investigacao-e-consultoria' },
  { label: 'Curadoria', value: 'curadoria', category: 'curadoria' },
  { label: 'Curadoria de Arquivos', value: 'curadoria-de-arquivos', category: 'patrimonio-audiovisual-documentacao' },
  { label: 'Design gráfico', value: 'design-grafico', category: 'comunicacao' },
  { label: 'Digitalização', value: 'digitalizacao', category: 'patrimonio-audiovisual-preservacao' },
  { label: 'Educação para o Cinema', value: 'educacao-para-o-cinema', category: 'educacao' },
  { label: 'Encontros Profissionais', value: 'encontros-profissionais', category: 'feiras-mostras-e-eventos' },
  { label: 'Estudos de Mercado', value: 'estudos-de-mercado', category: 'investigacao-e-consultoria' },
  { label: 'Estudos de Públicos', value: 'estudos-de-publicos', category: 'investigacao-e-consultoria' },
  { label: 'Formação em Arquivos', value: 'formacao-em-arquivos', category: 'educacao' },
  { label: 'Formação em IA', value: 'formacao-em-ia', category: 'educacao' },
  { label: 'Formação Online', value: 'formacao-online', category: 'educacao' },
  { label: 'Formação Profissional', value: 'formacao-profissional', category: 'educacao' },
  { label: 'Formação Superior', value: 'formacao-superior', category: 'educacao' },
  { label: 'Formação Técnica', value: 'formacao-tecnica', category: 'formacao-e-capacitacao' },
  { label: 'Gestão de Arquivos Audiovisuais', value: 'gestao-de-arquivos-audiovisuais', category: 'patrimonio-audiovisual-preservacao' },
  { label: 'Gestão de Catálogos', value: 'gestao-de-catalogos', category: 'curadoria' },
  { label: 'Gestão de Metadados', value: 'gestao-de-metadados', category: 'patrimonio-audiovisual-documentacao' },
  { label: 'Gestão de Redes Sociais', value: 'gestao-de-redes-sociais', category: 'comunicacao' },
  { label: 'História Oral', value: 'historia-oral', category: 'investigacao-historica' },
  { label: 'Humanidades Digitais', value: 'humanidades-digitais', category: 'investigacao-historica' },
  { label: 'Incubação', value: 'incubacao', category: 'desenvolvimento-da-industria' },
  { label: 'Indexação', value: 'indexacao', category: 'patrimonio-audiovisual-documentacao' },
  { label: 'Internacionalização', value: 'internacionalizacao', category: 'desenvolvimento-da-industria' },
  { label: 'Inventário', value: 'inventario', category: 'patrimonio-audiovisual-documentacao' },
  { label: 'Investigação e Desenvolvimento', value: 'investigacao-e-desenvolvimento', category: 'investigacao-e-consultoria' },
  { label: 'Investigação Histórica', value: 'investigacao-historica', category: 'investigacao-historica' },
  { label: 'Laboratórios Criativos', value: 'laboratorios-criativos', category: 'formacao-e-capacitacao' },
  { label: 'Literacia Mediática', value: 'literacia-mediatica', category: 'educacao' },
  { label: 'Mapeamento do Setor', value: 'mapeamento-do-setor', category: 'investigacao-e-consultoria' },
  { label: 'Marketing Cinematográfico', value: 'marketing-cinematografico', category: 'comunicacao' },
  { label: 'Masterclasses', value: 'masterclasses', category: 'formacao-e-capacitacao' },
  { label: 'Matchmaking', value: 'matchmaking', category: 'desenvolvimento-da-industria' },
  { label: 'Mentoria', value: 'mentoria', category: 'formacao-e-capacitacao' },
  { label: 'Mercados Audiovisuais', value: 'mercados-audiovisuais', category: 'feiras-mostras-e-eventos' },
  { label: 'Museologia Audiovisual', value: 'museologia-audiovisual', category: 'investigacao-historica' },
  { label: 'Networking', value: 'networking', category: 'desenvolvimento-da-industria' },
  { label: 'Organização de Festivais', value: 'organizacao-de-festivais', category: 'feiras-mostras-e-eventos' },
  { label: 'Organização de Mostras', value: 'organizacao-de-mostras', category: 'feiras-mostras-e-eventos' },
  { label: 'Preservação Digital', value: 'preservacao-digital', category: 'patrimonio-audiovisual-preservacao' },
  { label: 'Produção de Trailers', value: 'producao-de-trailers', category: 'comunicacao' },
  { label: 'Programação', value: 'programacao', category: 'curadoria' },
  { label: 'Promoção Comercial', value: 'promocao-comercial', category: 'desenvolvimento-da-industria' },
  { label: 'Residências Artísticas', value: 'residencias-artisticas', category: 'formacao-e-capacitacao' },
  { label: 'Restauro', value: 'restauro', category: 'patrimonio-audiovisual-preservacao' },
  { label: 'Seleção de Filmes', value: 'selecao-de-filmes', category: 'curadoria' },
  { label: 'Workshops', value: 'workshops', category: 'formacao-e-capacitacao' },
].sort(sortByLabel)



// Categoria Instituição
export const institucionalCategoriesList: SelectItemType[] = [
  { label: 'Associações e Coletivos', value: 'associacoes-e-coletivos' },
  { label: 'Entidades Públicas', value: 'entidades-publicas' },
].sort(sortByLabel)

export const institucionalSubCategoriesList: SelectItemWithCategory[] = [
  { label: 'Associação Cultural', value: 'associacao-cultural', category: 'associacoes-e-coletivos' },
  { label: 'Associação Profissional', value: 'associacao-profissional', category: 'associacoes-e-coletivos' },
  { label: 'Coletivo Informal', value: 'coletivo-informal', category: 'associacoes-e-coletivos' },
  { label: 'Conservação preventiva', value: 'conservacao-preventiva', category: 'entidades-publicas' },
  { label: 'Empresa Pública', value: 'empresa-publica', category: 'entidades-publicas' },
  { label: 'Instituto Público', value: 'instituto-publico', category: 'entidades-publicas' },
  { label: 'Preservação Digital', value: 'preservacao-digital', category: 'entidades-publicas' },
  { label: 'Sindicato', value: 'sindicato', category: 'associacoes-e-coletivos' },
  { label: 'Televisão Pública', value: 'televisao-publica', category: 'entidades-publicas' },
].sort(sortByLabel)


//Categoria de Profissionais
export const professionalCategoriesList: SelectItemType[] = [
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


// Mapas derivados das listas acima. As listas continuam a ser a única fonte de
// verdade: quem quiser acrescentar uma categoria ou sub-categoria mexe só nelas.
export type ProfileTypeCode =
  | 'empresa'
  | 'festival'
  | 'instituicao'
  | 'profissionais'

// As categorias que uma conta pode escolher dependem apenas do tipo de conta:
// contas de empresa usam as categorias de empresa, individuais as de
// profissionais. E a mesma regra em qualquer sitio onde se escolhe uma
// categoria a partir do perfil autenticado.
export const getCategoriesByAccountType = (
  accountType?: AccountType,
): SelectItemType[] =>
  accountType === 'company' ? companiesCategoryList : professionalCategoriesList

// Temas e generos dos filmes. Ficam aqui, ao lado das restantes listas, para
// que tanto o formulario como os cartoes leiam a mesma fonte.
export const filmThemeOptions: SelectItemType[] = [
  { label: 'Ambiente', value: 'ambiente' },
  { label: 'Cultura', value: 'cultura' },
  { label: 'Direitos humanos', value: 'direitos-humanos' },
  { label: 'Educação', value: 'educacao' },
  { label: 'Família', value: 'familia' },
  { label: 'Gênero e representação', value: 'genero-e-representacao' },
  { label: 'História', value: 'historia' },
  { label: 'Identidade', value: 'identidade' },
  { label: 'Juventude', value: 'juventude' },
  { label: 'Migração', value: 'migracao' },
].sort(sortByLabel)

export const filmGenreOptions: SelectItemType[] = [
  { label: 'Animação', value: 'animacao' },
  { label: 'Comédia', value: 'comedia' },
  { label: 'Documentário', value: 'documentario' },
  { label: 'Drama', value: 'drama' },
  { label: 'Experimental', value: 'experimental' },
  { label: 'Ficção', value: 'ficcao' },
  { label: 'Híbrido', value: 'Hibrido' },
  { label: 'Longa-metragem', value: 'longa-metragem' },
  { label: 'Série', value: 'serie' },
  { label: 'Short film', value: 'short-film' },
  { label: 'Videoclipe', value: 'videoclipe' },
].sort(sortByLabel)

// Guarda-se sempre o value (ex.: 'mocambique'), mas nos cartoes mostra-se o
// label ('Moçambique'). O indice e construido uma vez, cobre todas as listas
// que alimentam o formulario do filme e cai para o proprio value quando nao
// ha correspondencia.
const filmLabels = buildLabelIndex(
  countriesList,
  filmGenreOptions,
  filmThemeOptions,
  professionalCategoriesList,
  companiesCategoryList,
)

export const getFilmTagLabel = (value?: string): string =>
  getLabelFromIndex(filmLabels, value)

export const categoriesByType: Record<string, SelectItemType[]> = {
  empresa: companiesCategoryList,
  festival: festivalsCategoryList,
  instituicao: institucionalCategoriesList,
  profissionais: professionalCategoriesList,
}

const groupByCategory = (
  subCategories: SelectItemWithCategory[],
): Record<string, SelectItemType[]> =>
  subCategories.reduce<Record<string, SelectItemType[]>>(
    (grouped, { label, value, category }) => {
      const group = (grouped[category] ??= [])

      if (!group.some((item) => item.value === value)) {
        group.push({ label, value })
      }

      return grouped
    },
    {},
  )

// Profissionais não têm sub-categorias: a profissão já é a folha da árvore.
export const subCategoriesByType: Record<
  string,
  Record<string, SelectItemType[]>
> = {
  empresa: groupByCategory(companiesSubcategoriesList),
  festival: groupByCategory(festivalsSubCategoriesList),
  instituicao: groupByCategory(institucionalSubCategoriesList),
  profissionais: {},
}

// O tipo de perfil que corresponde ao tipo de conta. Festival e instituição
// existem na taxonomia mas ainda não como tipo de conta.
export const getProfileTypeByAccountType = (
  accountType?: AccountType,
): ProfileTypeCode => (accountType === 'company' ? 'empresa' : 'profissionais')

// As sub-categorias que uma conta pode declarar, sem repetidos e por ordem
// alfabética. Profissionais não têm nível abaixo da profissão, por isso a
// lista vem vazia.
export const getSubCategoriesByAccountType = (
  accountType?: AccountType,
): SelectItemType[] => {
  const byCategory =
    subCategoriesByType[getProfileTypeByAccountType(accountType)] ?? {}

  const seen = new Set<string>()

  return Object.values(byCategory)
    .flat()
    .filter((item) => {
      if (seen.has(item.value)) return false

      seen.add(item.value)
      return true
    })
    .sort(sortByLabel)
}

// Índice inverso: de uma sub-categoria para a categoria a que pertence. É o
// que permite dizer que um perfil que declara "ADR" pertence também a
// "Pós-Produção de Som". A primeira ocorrência ganha.
export const categoryBySubCategory: Record<string, string> = Object.values(
  subCategoriesByType,
).reduce<Record<string, string>>((index, byCategory) => {
  for (const [category, subCategories] of Object.entries(byCategory)) {
    for (const { value } of subCategories) {
      index[value] ??= category
    }
  }

  return index
}, {})
