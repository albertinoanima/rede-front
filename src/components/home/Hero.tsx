"use client";

import Image from "next/image";
import Link from "next/link";

import { customBlur } from "@/app/fonts";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { ArrowRight } from "lucide-react";

const heroItems = [
  {
    title: "REDE",
    image: "/assets/home/hero-1.png",
    imageAlt:
      "Profissionais da REDE de Cinema e Audiovisual PALOP e Timor-Leste",
    titleClassName: "text-rede-yellow",
    description:
      "Encontra, conecta-te e colabora com profissionais dos PALOP, enquanto aumentas a tua presença na rede — AQUI.",
    // Estado de hover
    hoverTitle: "Explorar a Rede",
    panelClassName: "bg-rede-yellow",
    hoverContentClassName: "text-rede-surface",
    href: "/network",
    ctaLabel: "Ver a Rede",
    ctaClassName:
      "border-[1.3px] border-rede-surface bg-transparent text-rede-surface hover:border-transparent hover:bg-rede-surface hover:text-rede-yellow active:border-transparent active:bg-rede-surface active:text-rede-yellow",
  },
  {
    title: "Agência",
    image: "/assets/home/hero-2.jpeg",
    imageAlt: "Profissionais da Agência de Cinema e Audiovisual",
    titleClassName: "text-rede-red",
    description:
      "Faz o teu trabalho chegar mais longe, junto de quem o pode projetar e partilhar — AQUI.",
    // Estado de hover
    hoverTitle: "Explorar a Agência",
    panelClassName: "bg-rede-red",
    hoverContentClassName: "text-rede-white",
    href: "/agency",
    ctaLabel: "Ver a Agência",
    ctaClassName:
      "border-[1.3px] border-rede-white bg-transparent text-rede-white hover:border-transparent hover:bg-rede-white hover:text-rede-red active:border-transparent active:bg-rede-white active:text-rede-red",
  },
] as const;

// Motion do Figma: duração `--transition-duration-rede-hero` + curva `--ease-rede-hero`.
const motion =
  "duration-rede-hero ease-rede-hero motion-reduce:transition-none";

// Sem hover (ecrãs táteis) o estado revelado é o estado por defeito.
const reveal =
  "opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 no-hover:opacity-100";

const hide =
  "opacity-100 transition-opacity group-hover:opacity-0 group-focus-within:opacity-0 no-hover:opacity-0";

const hideOnHover =
  "opacity-100 transition-opacity group-hover:opacity-0 group-focus-within:opacity-0";

export const Hero: React.FC = () => {
  return (
    <section className="w-full pt-16">
      <div className="mx-auto grid w-full max-w-[1920px] grid-cols-1 md:grid-cols-2">
        {heroItems.map((item, index) => {
          const panelOriginClassName =
            index === 1 ? "origin-left" : "origin-right";

          return (
            <article
              key={item.title}
              className="group relative min-h-[420px] overflow-hidden sm:min-h-[500px] md:min-h-[560px] lg:min-h-[620px]"
            >
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                priority
                sizes="(max-width: 767px) 100vw, 50vw"
                className="object-cover"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-black/35"
              />
              {/* Painel de cor: wipe controlado pela origem de cada coluna */}
              <div
                aria-hidden="true"
                className={`absolute inset-0 ${panelOriginClassName} scale-x-0 opacity-50 ${item.panelClassName} transition-[scale,opacity] ${motion} group-hover:scale-x-100 group-hover:opacity-100 group-focus-within:scale-x-100 group-focus-within:opacity-100 no-hover:scale-x-100 no-hover:opacity-100`}
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-5 py-10 text-center sm:px-8 lg:gap-6 lg:px-12">
                {/* Os dois títulos ocupam a mesma célula: cross-fade sem salto de layout */}
                <div className="grid place-items-center">
                  <Heading
                    className={`col-start-1 row-start-1 ${customBlur.className} ${item.titleClassName} text-[clamp(4rem,10vw,8rem)] leading-none font-medium ${hide} ${motion}`}
                  >
                    {item.title}
                  </Heading>

                  <Heading
                    className={`col-start-1 row-start-1 ${customBlur.className} ${item.hoverContentClassName} text-[clamp(4rem,10vw,8rem)] leading-none font-medium ${reveal} ${motion}`}
                  >
                    {item.hoverTitle}
                  </Heading>
                </div>

                <Text
                  className={`max-w-xl text-sm leading-relaxed font-semibold text-rede-white ${hideOnHover} ${motion} sm:text-base lg:text-lg`}
                >
                  {item.description}
                </Text>

                <Link
                  href={item.href}
                  className={`pointer-events-none ${reveal} ${motion} group-hover:pointer-events-auto group-focus-within:pointer-events-auto no-hover:pointer-events-auto`}
                >
                  <Button
                    type="button"
                    variant="secondary"
                    size="lg"
                    aria-label="YouTube"
                    containerClassName="w-14 h-14 sm:w-16 sm:h-16 rounded-full"
                    className="h-14 w-14 cursor-pointer rounded-full border-[1.3px] border-white p-0 sm:h-16 sm:w-16"
                  >
                    <ArrowRight width={14} height={14} />
                  </Button>
                </Link>

              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
