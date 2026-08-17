import Link from "next/link";

interface TeamMember {
  name: string;
  role: string;
  location: string;
  flagEmoji: string;
  imageUrl: string;
}

const team: TeamMember[] = [
  {
    name: "Diana Manhiça",
    role: "Coordenação Geral e Comunicação",
    location: "Moçambique",
    flagEmoji: "🇲🇿",
    imageUrl: "/assets/team/diana.jpeg",
  },
  {
    name: "António Maxihaleie",
    role: "Assessor de Coordenação Geral",
    location: "Moçambique",
    flagEmoji: "🇲🇿",
    imageUrl: "/assets/team/antonio.jpeg",
  },
  {
    name: "Emília Wojciechowska",
    role: "Coordenação Local e Curadoria",
    location: "Cabo Verde",
    flagEmoji: "🇨🇻",
    imageUrl: "/assets/team/emilia.jpeg",
  },
  {
    name: "Samira Vera-cruz",
    role: "Coordenação Local, Formação e Parcerias",
    location: "Cabo Verde",
    flagEmoji: "🇨🇻",
    imageUrl: "/assets/team/samira.jpeg",
  },
  {
    name: "Katya Aragão",
    role: "Coordenação Local",
    location: "São Tomé e Príncipe",
    flagEmoji: "🇸🇹",
    imageUrl: "/assets/team/katya.jpeg",
  },
  // {
  //   name: "Kay Seran Limak",
  //   role: "Coordenação Local",
  //   location: "Timor-Leste",
  //   flagEmoji: "🇹🇱",
  //   imageUrl: "/assets/team/kay.jpeg",
  // },
  // {
  //   name: "Welket Bungué",
  //   role: "Coordenação Local",
  //   location: "Guiné-Bissau",
  //   flagEmoji: "🇬🇼",
  //   imageUrl: "/assets/team/welket.jpeg",
  // },
];

export function TeamSection() {
  return (
    <section className="bg-rede-bg py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="h-95 overflow-hidden bg-rede-surface">
              <div className="w-full relative aspect-4/3">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full flex flex-col mt-2 mb-4">
                <h3 className="text-base font-semibold text-rede-white">
                  {member.name}
                </h3>
                <p className="text-[12px] leading-4 font-medium mt-1">{member.role}</p>
              </div>

              <Link href={`/network?tag=${member?.location}`}  className="w-auto border-[1.3px] border-[#454545] px-4.5 py-1.5 rounded-lg text-[14px] leading-5 font-medium">
                {member?.location}
              </Link>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}