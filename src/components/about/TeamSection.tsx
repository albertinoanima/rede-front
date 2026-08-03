// components/assets/teamSection.tsx
import Image from "next/image";
import { MapPin } from "lucide-react";

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
  {
    name: "Kay Seran Limak",
    role: "Coordenação Local",
    location: "Timor-Leste",
    flagEmoji: "🇹🇱",
    imageUrl: "/assets/team/kay.jpeg",
  },
  {
    name: "Welket Bungué",
    role: "Coordenação Local",
    location: "Guiné-Bissau",
    flagEmoji: "🇬🇼",
    imageUrl: "/assets/team/welket.jpeg",
  },
];

export function TeamSection() {
  return (
    <section className="bg-rede-bg py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="overflow-hidden rounded-2xl bg-rede-surface"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  className="object-cover grayscale"
                />
              </div>

              <div className="p-4">
                <h3 className="text-base font-semibold text-rede-white">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-rede-gray">{member.role}</p>

                <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  <span className="text-xs leading-none">
                    {member.flagEmoji}
                  </span>
                  <span className="text-xs text-rede-gray">
                    {member.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}