export type SelectItemType = {
  label: string;
  value: string
}

export const countriesList: SelectItemType[] = [
  {
    label: "Angola",
    value: "angola",
  },
  {
    label: "Cabo Verde",
    value: "cabo-verde",
  },
  {
    label: "Guiné Bissau",
    value: "guine-bissau",
  },
  {
    label: "Moçambique",
    value: "mocambique",
  },
  {
    label: "São Tomé e Príncipe",
    value: "sao-tome-e-principe",
  },
  {
    label: "Timor-Leste",
    value: "timor-leste",
  },
];


export const angolaProvincesList: SelectItemType[] = [
  { label: "Bengo", value: "bengo" },
  { label: "Benguela", value: "benguela" },
  { label: "Bié", value: "bie" },
  { label: "Cabinda", value: "cabinda" },
  { label: "Cuando", value: "cuando" },
  { label: "Cubango", value: "cubango" },
  { label: "Cuanza Norte", value: "cuanza-norte" },
  { label: "Cuanza Sul", value: "cuanza-sul" },
  { label: "Cunene", value: "cunene" },
  { label: "Icolo e Bengo", value: "icolo-e-bengo" },
  { label: "Huambo", value: "huambo" },
  { label: "Huíla", value: "huila" },
  { label: "Luanda", value: "luanda" },
  { label: "Lunda Norte", value: "lunda-norte" },
  { label: "Lunda Sul", value: "lunda-sul" },
  { label: "Malanje", value: "malanje" },
  { label: "Moxico", value: "moxico" },
  { label: "Moxico Leste", value: "moxico-leste" },
  { label: "Namibe", value: "namibe" },
  { label: "Uíge", value: "uige" },
  { label: "Zaire", value: "zaire" },
];

export const angolaCitiesByProvince: Record<string, SelectItemType[]> = {
  bengo: [
    { label: "Ambriz", value: "ambriz" },
    { label: "Bula Atumba", value: "bula-atumba" },
    { label: "Barra do Dande", value: "barra-do-dande" },
    { label: "Dande", value: "dande" },
    { label: "Muxaluando", value: "muxaluando" },
    { label: "Nambuangongo", value: "nambuangongo" },
    { label: "Pango Aluquém", value: "pango-aluquem" },
    { label: "Panguila", value: "panguila" },
    { label: "Piri", value: "piri" },
    { label: "Quibaxe", value: "quibaxe" },
    { label: "Quicunzo", value: "quicunzo" },
    { label: "Úcua", value: "ucua" },
  ],

  benguela: [
    { label: "Babaera", value: "babaera" },
    { label: "Baía Farta", value: "baia-farta" },
    { label: "Balombo", value: "balombo" },
    { label: "Benguela", value: "benguela" },
    { label: "Bíopio", value: "biopio" },
    { label: "Bocoio", value: "bocoio" },
    { label: "Bolonguera", value: "bolonguera" },
    { label: "Caimbambo", value: "caimbambo" },
    { label: "Canhamela", value: "canhamela" },
    { label: "Capupa", value: "capupa" },
    { label: "Catengue", value: "catengue" },
    { label: "Catumbela", value: "catumbela" },
    { label: "Chila", value: "chila" },
    { label: "Chicuma", value: "chicuma" },
    { label: "Chindumbo", value: "chindumbo" },
    { label: "Chongorói", value: "chongoroi" },
    { label: "Cubal", value: "cubal" },
    { label: "Dombe Grande", value: "dombe-grande" },
    { label: "Egito Praia", value: "egito-praia" },
    { label: "Ganda", value: "ganda" },
    { label: "Iambala", value: "iambala" },
    { label: "Lobito", value: "lobito" },
    { label: "Navegantes", value: "navegantes" },
  ],

  bie: [
    { label: "Andulo", value: "andulo" },
    { label: "Belo Horizonte", value: "belo-horizonte" },
    { label: "Calucinga", value: "calucinga" },
    { label: "Camacupa", value: "camacupa" },
    { label: "Cambândua", value: "cambandua" },
    { label: "Catabola", value: "catabola" },
    { label: "Chicala", value: "chicala" },
    { label: "Chinguar", value: "chinguar" },
    { label: "Chipeta", value: "chipeta" },
    { label: "Chitembo", value: "chitembo" },
    { label: "Cuemba", value: "cuemba" },
    { label: "Cuito", value: "cuito" },
    { label: "Cunhinga", value: "cunhinga" },
    { label: "Luando", value: "luando" },
    { label: "Lúbia", value: "lubia" },
    { label: "Mumbué", value: "mumbue" },
    { label: "Nharêa", value: "nharea" },
    { label: "Ringoma", value: "ringoma" },
    { label: "Umpulo", value: "umpulo" },
  ],

  cabinda: [
    { label: "Belize", value: "belize" },
    { label: "Buco-Zau", value: "buco-zau" },
    { label: "Cabinda", value: "cabinda" },
    { label: "Cacongo", value: "cacongo" },
  ],

  cuando: [
    { label: "Calai", value: "calai" },
    { label: "Dirico", value: "dirico" },
    { label: "Dima", value: "dima" },
    { label: "Mavinga", value: "mavinga" },
    { label: "Luiana", value: "luiana" },
    { label: "Nancova", value: "nancova" },
    { label: "Rivungo", value: "rivungo" },
  ],

  cubango: [
    { label: "Cuchi", value: "cuchi" },
    { label: "Cuangar", value: "cuangar" },
    { label: "Cutato", value: "cutato" },
    { label: "Menongue", value: "menongue" },
    { label: "Longa", value: "longa" },
    { label: "Cuito Cuanavale", value: "cuito-cuanavale" },
  ],

  "cuanza-norte": [
    { label: "Ambaca", value: "ambaca" },
    { label: "Banga", value: "banga" },
    { label: "Bolongongo", value: "bolongongo" },
    { label: "Cambambe", value: "cambambe" },
    { label: "Cazengo", value: "cazengo" },
    { label: "Golungo Alto", value: "golungo-alto" },
    { label: "Gonguembo", value: "gonguembo" },
    { label: "Lucala", value: "lucala" },
    { label: "Quiculungo", value: "quiculungo" },
    { label: "Samba Cajú", value: "samba-caju" },
  ],

  "cuanza-sul": [
    { label: "Amboim", value: "amboim" },
    { label: "Cassongue", value: "cassongue" },
    { label: "Cela", value: "cela" },
    { label: "Waku Kungo", value: "waku-kungo" },
    { label: "Conda", value: "conda" },
    { label: "Ebo", value: "ebo" },
    { label: "Libolo", value: "libolo" },
    { label: "Mussende", value: "mussende" },
    { label: "Quibala", value: "quibala" },
    { label: "Quilenda", value: "quilenda" },
    { label: "Seles", value: "seles" },
    { label: "Sumbe", value: "sumbe" },
  ],

  cunene: [
    { label: "Cahama", value: "cahama" },
    { label: "Cuanhama", value: "cuanhama" },
    { label: "Curoca", value: "curoca" },
    { label: "Cuvelai", value: "cuvelai" },
    { label: "Namacunde", value: "namacunde" },
    { label: "Ombadja", value: "ombadja" },
  ],

  huambo: [
    { label: "Bailundo", value: "bailundo" },
    { label: "Caála", value: "caala" },
    { label: "Katchiungo", value: "katchiungo" },
    { label: "Ekunha", value: "ekunha" },
    { label: "Huambo", value: "huambo" },
    { label: "Londuimbale", value: "londuimbale" },
    { label: "Longonjo", value: "longonjo" },
    { label: "Mungo", value: "mungo" },
    { label: "Tchicala-Tcholoanga", value: "tchicala-tcholoanga" },
    { label: "Tchindjenje", value: "tchindjenje" },
    { label: "Ucuma", value: "ucuma" },
  ],

  huila: [
    { label: "Caconda", value: "caconda" },
    { label: "Caluquembe", value: "caluquembe" },
    { label: "Chiange", value: "chiange" },
    { label: "Chibia", value: "chibia" },
    { label: "Chicomba", value: "chicomba" },
    { label: "Chipindo", value: "chipindo" },
    { label: "Gambos", value: "gambos" },
    { label: "Humpata", value: "humpata" },
    { label: "Jamba", value: "jamba" },
    { label: "Kuvango", value: "kuvango" },
    { label: "Lubango", value: "lubango" },
    { label: "Matala", value: "matala" },
    { label: "Quilengues", value: "quilengues" },
    { label: "Quipungo", value: "quipungo" },
  ],

  "icolo-e-bengo": [
    { label: "Catete", value: "catete" },
    { label: "Calumbo", value: "calumbo" },
    { label: "Sequele", value: "sequele" },
    { label: "Bom Jesus", value: "bom-jesus" },
    { label: "Quiçama", value: "quicama" },
    { label: "Cabiri", value: "cabiri" },
    { label: "Mussulo", value: "mussulo" },
  ],

  luanda: [
    { label: "Luanda", value: "luanda" },
    { label: "Belas", value: "belas" },
    { label: "Cacuaco", value: "cacuaco" },
    { label: "Cazenga", value: "cazenga" },
    { label: "Kilamba Kiaxi", value: "kilamba-kiaxi" },
    { label: "Talatona", value: "talatona" },
    { label: "Viana", value: "viana" },
    { label: "Ingombota", value: "ingombota" },
    { label: "Maianga", value: "maianga" },
    { label: "Rangel", value: "rangel" },
    { label: "Samba", value: "samba" },
    { label: "Sambizanga", value: "sambizanga" },
    { label: "Hoji-ya-Henda", value: "hoji-ya-henda" },
    { label: "Kilamba", value: "kilamba" },
    { label: "Camama", value: "camama" },
    { label: "Mulenvos", value: "mulenvos" },
  ],

  "lunda-norte": [
    { label: "Cambulo", value: "cambulo" },
    { label: "Capenda-Camulemba", value: "capenda-camulemba" },
    { label: "Caungula", value: "caungula" },
    { label: "Chitato", value: "chitato" },
    { label: "Cuango", value: "cuango" },
    { label: "Cuilo", value: "cuilo" },
    { label: "Lóvua", value: "lovua" },
    { label: "Lubalo", value: "lubalo" },
    { label: "Lucapa", value: "lucapa" },
    { label: "Xá-Muteba", value: "xa-muteba" },
  ],

  "lunda-sul": [
    { label: "Cacolo", value: "cacolo" },
    { label: "Dala", value: "dala" },
    { label: "Muconda", value: "muconda" },
    { label: "Saurimo", value: "saurimo" },
  ],

  malanje: [
    { label: "Cacuso", value: "cacuso" },
    { label: "Calandula", value: "calandula" },
    { label: "Cambundi-Catembo", value: "cambundi-catembo" },
    { label: "Cangandala", value: "cangandala" },
    { label: "Caombo", value: "caombo" },
    { label: "Cunda-Dia-Baze", value: "cunda-dia-baze" },
    { label: "Kivaba Nzogi", value: "kivaba-nzogi" },
    { label: "Luquembo", value: "luquembo" },
    { label: "Malanje", value: "malanje" },
    { label: "Marimba", value: "marimba" },
    { label: "Massango", value: "massango" },
    { label: "Mucari", value: "mucari" },
    { label: "Quela", value: "quela" },
    { label: "Quirima", value: "quirima" },
  ],

  moxico: [
    { label: "Alto Zambeze", value: "alto-zambeze" },
    { label: "Camanongue", value: "camanongue" },
    { label: "Cameia", value: "cameia" },
    { label: "Leua", value: "leua" },
    { label: "Luau", value: "luau" },
    { label: "Luena", value: "luena" },
    { label: "Luacano", value: "luacano" },
    { label: "Lumbala Nguimbo", value: "lumbala-nguimbo" },
    { label: "Luchazes", value: "luchazes" },
  ],

  "moxico-leste": [
    { label: "Cazombo", value: "cazombo" },
    { label: "Luacano", value: "luacano" },
    { label: "Cameia", value: "cameia" },
    { label: "Luau", value: "luau" },
    { label: "Nana Candundo", value: "nana-candundo" },
    { label: "Macondo", value: "macondo" },
    { label: "Caianda", value: "caianda" },
    { label: "Lóvua do Zambeze", value: "lovua-do-zambeze" },
    { label: "Lago Dilolo", value: "lago-dilolo" },
  ],

  namibe: [
    { label: "Bibala", value: "bibala" },
    { label: "Camacuio", value: "camacuio" },
    { label: "Moçâmedes", value: "mocamedes" },
    { label: "Tômbua", value: "tombua" },
    { label: "Virei", value: "virei" },
  ],

  uige: [
    { label: "Ambuila", value: "ambuila" },
    { label: "Bembe", value: "bembe" },
    { label: "Buengas", value: "buengas" },
    { label: "Bungo", value: "bungo" },
    { label: "Cangola", value: "cangola" },
    { label: "Damba", value: "damba" },
    { label: "Mucaba", value: "mucaba" },
    { label: "Negage", value: "negage" },
    { label: "Puri", value: "puri" },
    { label: "Quimbele", value: "quimbele" },
    { label: "Quitexe", value: "qu-texe" },
    { label: "Santa Cruz", value: "santa-cruz" },
    { label: "Sanza Pombo", value: "sanza-pombo" },
    { label: "Songo", value: "songo" },
    { label: "Uíge", value: "uige" },
    { label: "Maquela do Zombo", value: "maquela-do-zombo" },
  ],

  zaire: [
    { label: "Cuimba", value: "cuimba" },
    { label: "M'Banza Kongo", value: "mbanza-kongo" },
    { label: "Noqui", value: "noqui" },
    { label: "N'Zeto", value: "nzeto" },
    { label: "Soyo", value: "soyo" },
    { label: "Tomboco", value: "tomboco" },
  ],
};


export const caboVerdeIslandsList: SelectItemType[] = [
  { label: "Santo Antão", value: "santo-antao" },
  { label: "São Vicente", value: "sao-vicente" },
  { label: "São Nicolau", value: "sao-nicolau" },
  { label: "Sal", value: "sal" },
  { label: "Boa Vista", value: "boa-vista" },
  { label: "Maio", value: "maio" },
  { label: "Santiago", value: "santiago" },
  { label: "Fogo", value: "fogo" },
  { label: "Brava", value: "brava" },
];


export const caboVerdeMunicipalitiesByIsland: Record<
  string,
  SelectItemType[]
> = {
  "santo-antao": [
    { label: "Ribeira Grande", value: "ribeira-grande" },
    { label: "Paul", value: "paul" },
    { label: "Porto Novo", value: "porto-novo" },
  ],

  "sao-vicente": [
    { label: "São Vicente", value: "sao-vicente" },
  ],

  "sao-nicolau": [
    { label: "Ribeira Brava", value: "ribeira-brava" },
    {
      label: "Tarrafal de São Nicolau",
      value: "tarrafal-de-sao-nicolau",
    },
  ],

  sal: [
    { label: "Sal", value: "sal" },
  ],

  "boa-vista": [
    { label: "Boa Vista", value: "boa-vista" },
  ],

  maio: [
    { label: "Maio", value: "maio" },
  ],

  santiago: [
    { label: "Tarrafal", value: "tarrafal" },
    { label: "Santa Catarina", value: "santa-catarina" },
    { label: "Santa Cruz", value: "santa-cruz" },
    { label: "Praia", value: "praia" },
    { label: "São Domingos", value: "sao-domingos" },
    { label: "São Miguel", value: "sao-miguel" },
    {
      label: "São Salvador do Mundo",
      value: "sao-salvador-do-mundo",
    },
    {
      label: "São Lourenço dos Órgãos",
      value: "sao-lourenco-dos-orgaos",
    },
    {
      label: "Ribeira Grande de Santiago",
      value: "ribeira-grande-de-santiago",
    },
  ],

  fogo: [
    { label: "Mosteiros", value: "mosteiros" },
    { label: "São Filipe", value: "sao-filipe" },
    {
      label: "Santa Catarina do Fogo",
      value: "santa-catarina-do-fogo",
    },
  ],

  brava: [
    { label: "Brava", value: "brava" },
  ],
};



export const guineaBissauRegionsList: SelectItemType[] = [
  { label: "Bafatá", value: "bafata" },
  { label: "Biombo", value: "biombo" },
  { label: "Bolama", value: "bolama" },
  { label: "Cacheu", value: "cacheu" },
  { label: "Gabú", value: "gabu" },
  { label: "Oio", value: "oio" },
  { label: "Quinara", value: "quinara" },
  { label: "Tombali", value: "tombali" },
  { label: "Bolama-Bijagós", value: "bolama-bijagos" },
  { label: "Sector Autónomo de Bissau", value: "sector-autonomo-de-bissau" },
];

export const guineaBissauSectorsByRegion: Record<
  string,
  SelectItemType[]
> = {
  bafata: [
    { label: "Bafatá", value: "bafata" },
    { label: "Bambadinca", value: "bambadinca" },
    { label: "Contuboel", value: "contuboel" },
    { label: "Cossé", value: "cosse" },
    { label: "Galomaro", value: "galomaro" },
    { label: "Ganadu", value: "ganadu" },
    { label: "Xitole", value: "xitole" },
  ],

  biombo: [
    { label: "Safim", value: "safim" },
    { label: "Quinhamel", value: "quinhamel" },
    { label: "Prábis", value: "prabis" },
  ],

  bolama: [
    { label: "Bolama", value: "bolama" },
    { label: "Bubaque", value: "bubaque" },
    { label: "Caravela", value: "caravela" },
    { label: "Uno", value: "uno" },
  ],

  cacheu: [
    { label: "Cacheu", value: "cacheu" },
    { label: "Canchungo", value: "canchungo" },
    { label: "Caió", value: "caio" },
    { label: "Bula", value: "bula" },
    { label: "Canchungo", value: "canchungo" },
    { label: "São Domingos", value: "sao-domingos" },
  ],

  gabu: [
    { label: "Gabú", value: "gabu" },
    { label: "Boé", value: "boe" },
    { label: "Pirada", value: "pirada" },
    { label: "Pitche", value: "pitche" },
    { label: "Sonaco", value: "sonaco" },
  ],

  oio: [
    { label: "Bissorã", value: "bissora" },
    { label: "Farim", value: "farim" },
    { label: "Mansabá", value: "mansaba" },
    { label: "Mansoa", value: "mansoa" },
    { label: "Nhacra", value: "nhacra" },
  ],

  quinara: [
    { label: "Buba", value: "buba" },
    { label: "Empada", value: "empada" },
    { label: "Fulacunda", value: "fulacunda" },
    { label: "Tite", value: "tite" },
  ],

  tombali: [
    { label: "Catió", value: "catio" },
    { label: "Bedanda", value: "bedanda" },
    { label: "Cacine", value: "cacine" },
    { label: "Quebo", value: "quebo" },
  ],

  "sector-autonomo-de-bissau": [
    { label: "Bissau", value: "bissau" },
  ],
};



export const mozambiqueProvincesList: SelectItemType[] = [
  { label: "Cabo Delgado", value: "cabo-delgado" },
  { label: "Gaza", value: "gaza" },
  { label: "Inhambane", value: "inhambane" },
  { label: "Manica", value: "manica" },
  { label: "Maputo", value: "maputo" },
  { label: "Maputo Cidade", value: "maputo-cidade" },
  { label: "Nampula", value: "nampula" },
  { label: "Niassa", value: "niassa" },
  { label: "Sofala", value: "sofala" },
  { label: "Tete", value: "tete" },
  { label: "Zambézia", value: "zambezia" },
];


export const mozambiqueDistrictsByProvince: Record<
  string,
  SelectItemType[]
> = {
  "cabo-delgado": [
    { label: "Ancuabe", value: "ancuabe" },
    { label: "Balama", value: "balama" },
    { label: "Chiúre", value: "chiure" },
    { label: "Ibo", value: "ibo" },
    { label: "Macomia", value: "macomia" },
    { label: "Mecúfi", value: "mecufi" },
    { label: "Meluco", value: "meluco" },
    { label: "Metuge", value: "metuge" },
    { label: "Mocímboa da Praia", value: "mocimboa-da-praia" },
    { label: "Montepuez", value: "montepuez" },
    { label: "Mueda", value: "mueda" },
    { label: "Muidumbe", value: "muidumbe" },
    { label: "Namuno", value: "namuno" },
    { label: "Nangade", value: "nangade" },
    { label: "Palma", value: "palma" },
    { label: "Pemba", value: "pemba" },
    { label: "Quissanga", value: "quissanga" },
  ],

  gaza: [
    { label: "Bilene", value: "bilene" },
    { label: "Chibuto", value: "chibuto" },
    { label: "Chicualacuala", value: "chicualacuala" },
    { label: "Chigubo", value: "chigubo" },
    { label: "Chókwè", value: "chokwe" },
    { label: "Guijá", value: "guija" },
    { label: "Mabalane", value: "mabalane" },
    { label: "Manjacaze", value: "manjacaze" },
    { label: "Massangena", value: "massangena" },
    { label: "Massingir", value: "massingir" },
    { label: "Xai-Xai", value: "xai-xai" },
  ],

  inhambane: [
    { label: "Funhalouro", value: "funhalouro" },
    { label: "Govuro", value: "govuro" },
    { label: "Homoíne", value: "homoine" },
    { label: "Inharrime", value: "inharrime" },
    { label: "Inhassoro", value: "inhassoro" },
    { label: "Jangamo", value: "jangamo" },
    { label: "Mabote", value: "mabote" },
    { label: "Massinga", value: "massinga" },
    { label: "Maxixe", value: "maxixe" },
    { label: "Morrumbene", value: "morrumbene" },
    { label: "Panda", value: "panda" },
    { label: "Vilankulo", value: "vilankulo" },
    { label: "Zavala", value: "zavala" },
    { label: "Inhambane", value: "inhambane" },
  ],

  manica: [
    { label: "Bárue", value: "barue" },
    { label: "Chimoio", value: "chimoio" },
    { label: "Gondola", value: "gondola" },
    { label: "Guro", value: "guro" },
    { label: "Machanga", value: "machanga" },
    { label: "Macate", value: "macate" },
    { label: "Manica", value: "manica" },
    { label: "Mossurize", value: "mossurize" },
    { label: "Sussundenga", value: "sussundenga" },
    { label: "Tambara", value: "tambara" },
    { label: "Vanduzi", value: "vanduzi" },
  ],

  maputo: [
    { label: "Boane", value: "boane" },
    { label: "Magude", value: "magude" },
    { label: "Manhiça", value: "manhica" },
    { label: "Marracuene", value: "marracuene" },
    { label: "Matutuíne", value: "matutuine" },
    { label: "Moamba", value: "moamba" },
    { label: "Namaacha", value: "namaacha" },
  ],

  "maputo-cidade": [
    { label: "KaMpfumo", value: "kam pfumo" },
    { label: "Nlhamankulu", value: "nlhamankulu" },
    { label: "KaMaxaquene", value: "kamaxaquene" },
    { label: "KaMavota", value: "kamavota" },
    { label: "KaMubukwana", value: "kamubukwana" },
    { label: "KaTembe", value: "katembe" },
    { label: "KaNyaka", value: "kanyaka" },
  ],

  nampula: [
    { label: "Angoche", value: "angoche" },
    { label: "Eráti", value: "erati" },
    { label: "Lalaua", value: "lalaua" },
    { label: "Malema", value: "malema" },
    { label: "Meconta", value: "meconta" },
    { label: "Mecubúri", value: "mecuburi" },
    { label: "Memba", value: "memba" },
    { label: "Mogincual", value: "mogincual" },
    { label: "Mogovolas", value: "mogovolas" },
    { label: "Moma", value: "moma" },
    { label: "Monapo", value: "monapo" },
    { label: "Mossuril", value: "mossuril" },
    { label: "Muecate", value: "muecate" },
    { label: "Murrupula", value: "murrupula" },
    { label: "Nacala-a-Velha", value: "nacala-a-velha" },
    { label: "Nacala Porto", value: "nacala-porto" },
    { label: "Nacarôa", value: "nacaroa" },
    { label: "Nampula", value: "nampula" },
    { label: "Ribáuè", value: "ribaue" },
  ],

  niassa: [
    { label: "Chimbonila", value: "chimbonila" },
    { label: "Cuamba", value: "cuamba" },
    { label: "Lago", value: "lago" },
    { label: "Lichinga", value: "lichinga" },
    { label: "Majune", value: "majune" },
    { label: "Mandimba", value: "mandimba" },
    { label: "Marrupa", value: "marrupa" },
    { label: "Maúa", value: "maua" },
    { label: "Mavago", value: "mavago" },
    { label: "Mecanhelas", value: "mecanhelas" },
    { label: "Mecula", value: "mecula" },
    { label: "Metarica", value: "metarica" },
    { label: "Muembe", value: "muembe" },
    { label: "N'gauma", value: "ngauma" },
    { label: "Nipepe", value: "nipepe" },
    { label: "Sanga", value: "sanga" },
  ],

  sofala: [
    { label: "Beira", value: "beira" },
    { label: "Buzi", value: "buzi" },
    { label: "Caia", value: "caia" },
    { label: "Chemba", value: "chemba" },
    { label: "Cheringoma", value: "cheringoma" },
    { label: "Chibabava", value: "chibabava" },
    { label: "Dondo", value: "dondo" },
    { label: "Gorongosa", value: "gorongosa" },
    { label: "Machanga", value: "machanga" },
    { label: "Maringué", value: "maringue" },
    { label: "Marromeu", value: "marromeu" },
    { label: "Muanza", value: "muanza" },
    { label: "Nhamatanda", value: "nhamatanda" },
  ],

  tete: [
    { label: "Angónia", value: "angonia" },
    { label: "Cahora-Bassa", value: "cahora-bassa" },
    { label: "Changara", value: "changara" },
    { label: "Chifunde", value: "chifunde" },
    { label: "Chiuta", value: "chiuta" },
    { label: "Dôa", value: "doa" },
    { label: "Macanga", value: "macanga" },
    { label: "Magoé", value: "magoe" },
    { label: "Marara", value: "marara" },
    { label: "Marávia", value: "maravia" },
    { label: "Moatize", value: "moatize" },
    { label: "Mutarara", value: "mutarara" },
    { label: "Tsangano", value: "tsangano" },
    { label: "Zumbo", value: "zumbo" },
  ],

  zambezia: [
    { label: "Alto Molócuè", value: "alto-molocue" },
    { label: "Chinde", value: "chinde" },
    { label: "Gilé", value: "gile" },
    { label: "Gurué", value: "gurue" },
    { label: "Ile", value: "ile" },
    { label: "Inhassunge", value: "inhassunge" },
    { label: "Lugela", value: "lugela" },
    { label: "Maganja da Costa", value: "maganja-da-costa" },
    { label: "Milange", value: "milange" },
    { label: "Mocuba", value: "mocuba" },
    { label: "Mopeia", value: "mopeia" },
    { label: "Morrumbala", value: "morrumbala" },
    { label: "Mulevala", value: "mulevala" },
    { label: "Namacurra", value: "namacurra" },
    { label: "Namarroi", value: "namarroi" },
    { label: "Nicoadala", value: "nicoadala" },
    { label: "Pebane", value: "pebane" },
    { label: "Quelimane", value: "quelimane" },
  ],
};



export const saoTomePrincipeRegionsList: SelectItemType[] = [
  { label: "Água Grande", value: "agua-grande" },
  { label: "Cantagalo", value: "cantagalo" },
  { label: "Caué", value: "caue" },
  { label: "Lembá", value: "lemba" },
  { label: "Lobata", value: "lobata" },
  { label: "Mé-Zóchi", value: "me-zóchi" },
  { label: "Região Autónoma do Príncipe", value: "regiao-autonoma-do-principe" },
];


export const saoTomePrincipeCitiesByRegion: Record<
  string,
  SelectItemType[]
> = {
  "agua-grande": [
    { label: "São Tomé", value: "sao-tome" },
    { label: "Pantufo", value: "pantufo" },
    { label: "Riboque", value: "riboque" },
    { label: "Trindade", value: "trindade" },
  ],

  cantagalo: [
    { label: "Santana", value: "santana" },
    { label: "Agostinho Neto", value: "agostinho-neto" },
    { label: "Água Izé", value: "agua-ize" },
    { label: "Ribeira Afonso", value: "ribeira-afonso" },
  ],

  caue: [
    { label: "São João dos Angolares", value: "sao-joao-dos-angolares" },
    { label: "Porto Alegre", value: "porto-alegre" },
    { label: "Santa Catarina", value: "santa-catarina" },
  ],

  lemba: [
    { label: "Neves", value: "neves" },
    { label: "Santa Catarina", value: "santa-catarina" },
    { label: "Ponta Figo", value: "ponta-figo" },
    { label: "Ribeira Funda", value: "ribeira-funda" },
  ],

  lobata: [
    { label: "Guadalupe", value: "guadalupe" },
    { label: "Santo António", value: "santo-antonio" },
    { label: "Micoló", value: "micolo" },
    { label: "Morés", value: "mores" },
  ],

  "me-zóchi": [
    { label: "Trindade", value: "trindade" },
    { label: "Batepá", value: "batepa" },
    { label: "Bombom", value: "bombom" },
    { label: "Monte Café", value: "monte-cafe" },
    { label: "São Carlos", value: "sao-carlos" },
    { label: "Piedade", value: "piedade" },
  ],

  "regiao-autonoma-do-principe": [
    { label: "Santo António", value: "santo-antonio" },
    { label: "Santo António do Príncipe", value: "santo-antonio-do-principe" },
    { label: "Belo Monte", value: "belo-monte" },
    { label: "Sundy", value: "sundy" },
    { label: "Praia Abade", value: "praia-abade" },
    { label: "Infante Dom Henrique", value: "infante-dom-henrique" },
  ],
};



export const timorLesteMunicipalitiesList: SelectItemType[] = [
  { label: "Aileu", value: "aileu" },
  { label: "Ainaro", value: "ainaro" },
  { label: "Baucau", value: "baucau" },
  { label: "Bobonaro", value: "bobonaro" },
  { label: "Covalima", value: "covalima" },
  { label: "Díli", value: "dili" },
  { label: "Ermera", value: "ermera" },
  { label: "Lautém", value: "lautem" },
  { label: "Liquiçá", value: "liquica" },
  { label: "Manatuto", value: "manatuto" },
  { label: "Manufahi", value: "manufahi" },
  { label: "Oe-Cusse Ambeno", value: "oe-cusse-ambeno" },
  { label: "Viqueque", value: "viqueque" },
];


export const timorLesteAdministrativePostsByMunicipality: Record<
  string,
  SelectItemType[]
> = {
  aileu: [
    { label: "Aileu", value: "aileu" },
    { label: "Laulara", value: "laulara" },
    { label: "Lequidoe", value: "lequidoe" },
    { label: "Remexio", value: "remexio" },
  ],

  ainaro: [
    { label: "Ainaro", value: "ainaro" },
    { label: "Hato-Udo", value: "hato-udo" },
    { label: "Hatu-Builico", value: "hatu-builico" },
    { label: "Maubisse", value: "maubisse" },
  ],

  baucau: [
    { label: "Baguia", value: "baguia" },
    { label: "Baucau", value: "baucau" },
    { label: "Laga", value: "laga" },
    { label: "Quelicai", value: "quelicai" },
    { label: "Vemasse", value: "vemasse" },
  ],

  bobonaro: [
    { label: "Atabae", value: "atabae" },
    { label: "Balibo", value: "balibo" },
    { label: "Bobonaro", value: "bobonaro" },
    { label: "Cailaco", value: "cailaco" },
    { label: "Lolotoe", value: "lolotoe" },
    { label: "Maliana", value: "maliana" },
  ],

  covalima: [
    { label: "Fatumean", value: "fatumean" },
    { label: "Fatululic", value: "fatululic" },
    { label: "Fohorem", value: "fohorem" },
    { label: "Maucatar", value: "maucatar" },
    { label: "Suai", value: "suai" },
    { label: "Tilomar", value: "tilomar" },
  ],

  dili: [
    { label: "Atauro", value: "atauro" },
    { label: "Cristo Rei", value: "cristo-rei" },
    { label: "Dom Aleixo", value: "dom-aleixo" },
    { label: "Naimeco", value: "naimeco" },
    { label: "Metinaro", value: "metinaro" },
    { label: "Vera Cruz", value: "vera-cruz" },
  ],

  ermera: [
    { label: "Atsabe", value: "atsabe" },
    { label: "Ermera", value: "ermera" },
    { label: "Hatulia", value: "hatulia" },
    { label: "Hatulia B", value: "hatulia-b" },
    { label: "Letefoho", value: "letefoho" },
    { label: "Railaco", value: "railaco" },
  ],

  lautem: [
    { label: "Iliomar", value: "iliomar" },
    { label: "Lautém", value: "lautem" },
    { label: "Lospalos", value: "lospalos" },
    { label: "Luro", value: "luro" },
    { label: "Tutuala", value: "tutuala" },
  ],

  liquica: [
    { label: "Bazartete", value: "bazartete" },
    { label: "Liquiçá", value: "liquica" },
    { label: "Maubara", value: "maubara" },
  ],

  manatuto: [
    { label: "Barique", value: "barique" },
    { label: "Lacló", value: "lacló" },
    { label: "Lacluta", value: "lacluta" },
    { label: "Manatuto", value: "manatuto" },
    { label: "Soibada", value: "soibada" },
  ],

  manufahi: [
    { label: "Alas", value: "alas" },
    { label: "Fatuberlio", value: "fatuberlio" },
    { label: "Same", value: "same" },
    { label: "Turiscai", value: "turiscai" },
  ],

  "oe-cusse-ambeno": [
    { label: "Citrana", value: "citrana" },
    { label: "Nitibe", value: "nitibe" },
    { label: "Oesilo", value: "oesilo" },
    { label: "Pante Macassar", value: "pante-macassar" },
  ],

  viqueque: [
    { label: "Lacluta", value: "lacluta" },
    { label: "Ossu", value: "ossu" },
    { label: "Uatucarbau", value: "uatucarbau" },
    { label: "Uatolari", value: "uatolari" },
    { label: "Viqueque", value: "viqueque" },
  ],
};
