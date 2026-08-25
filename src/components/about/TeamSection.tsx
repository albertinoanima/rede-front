"use client";

import { useState } from "react";
import { Modal } from "../ui/modal";
import { Tag } from "../Tag";

interface TeamMember {
  name: string;
  role: string;
  location: string;
  imageUrl: string;
  bioHeading: string;
  bio: string;
}

const defaultBioHeading =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.";

const defaultBio =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.";

const team: TeamMember[] = [
  {
    name: "Diana Manhiça",
    role: "Coordenação-geral e comunicação",
    location: "Moçambique",
    imageUrl: "/assets/team/diana.jpeg",
    bioHeading: defaultBioHeading,
    bio: defaultBio,
  },
  {
    name: "António Maxihaleie",
    role: "Assessoria de coordenação-geral",
    location: "Moçambique",
    imageUrl: "/assets/team/antonio.jpeg",
    bioHeading: defaultBioHeading,
    bio: defaultBio,
  },
  {
    name: "Fábio Ribeiro",
    role: "Assessoria do estudo sobre Film Commissions",
    location: "Moçambique",
    imageUrl: "/assets/team/fabio.png",
    bioHeading: defaultBioHeading,
    bio: defaultBio,
  },
  {
    name: "Telma Costa",
    role: "Gestão de projetos e subvenções",
    location: "Moçambique",
    imageUrl: "/assets/team/telma.png",
    bioHeading: defaultBioHeading,
    bio: defaultBio,
  },
  {
    name: "Emília Wojciechowska",
    role: "Coordenação local e curadoria",
    location: "Cabo Verde",
    imageUrl: "/assets/team/emilia.jpeg",
    bioHeading: defaultBioHeading,
    bio: defaultBio,
  },
  {
    name: "Samira Vera-Cruz",
    role: "Coordenação local, formação e parcerias",
    location: "Cabo Verde",
    imageUrl: "/assets/team/samira.jpeg",
    bioHeading: defaultBioHeading,
    bio: defaultBio,
  },
  {
    name: "Katya Aragão",
    role: "Coordenação local",
    location: "São Tomé e Príncipe",
    imageUrl: "/assets/team/katya.jpeg",
    bioHeading: defaultBioHeading,
    bio: defaultBio,
  },
  {
    name: "Kay Seran Limak",
    role: "Ponto focal",
    location: "Timor-Leste",
    imageUrl: "/assets/team/kay.jpeg",
    bioHeading: defaultBioHeading,
    bio: defaultBio,
  },
  {
    name: "Welket Bungué",
    role: "Ponto focal",
    location: "Guiné-Bissau",
    imageUrl: "/assets/team/welket.jpeg",
    bioHeading: defaultBioHeading,
    bio: defaultBio,
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
      className="items-start justify-end bg-[#f4f4f4]/95 p-4 sm:px-13 sm:py-10"
      wrapperClassName="h-full w-full max-w-[680px] motion-safe:animate-[teamModalSlideIn_280ms_cubic-bezier(0.22,1,0.36,1)]"
      panelClassName="h-full max-h-[calc(100vh-2rem)] w-full max-w-[680px] overflow-y-auto rounded-none border-[1.3px] border-white/90 bg-rede-surface p-0 sm:max-h-[calc(100vh-5rem)]"
      closeButtonClassName="!left-auto !right-4 !top-4 !ml-0 !border-0 !bg-rede-surface !text-rede-white hover:!bg-rede-white hover:!text-rede-surface sm:!right-full sm:!top-0"
    >
      {member && (
        <div className="relative min-h-full bg-rede-surface px-5 pb-18 pt-18 text-rede-white sm:grid sm:grid-cols-[250px_minmax(0,1fr)] sm:gap-8 sm:px-5 sm:pb-24 sm:pt-5">
          <p className="absolute -top-7 left-0 hidden text-[12px] leading-4 text-rede-bg-200 sm:block">
            Bio
          </p>

          <div className="flex flex-col sm:pt-[455px]">
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
              <p className="text-[20px] font-semibold leading-7">
                {member.bioHeading}
              </p>
              <p className="mt-8 text-[20px] font-medium leading-7">
                {member.bio}
              </p>
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

      {/* <TeamMemberModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      /> */}
    </section>
  );
};