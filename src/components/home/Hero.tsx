"use client";

import Image from "next/image";

import { customBlur } from "@/app/fonts";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

const heroItems = [
  {
    title: "REDE",
    image: "/assets/home/hero-1.png",
    imageAlt: "Profissionais da REDE de Cinema e Audiovisual PALOP e Timor-Leste",
    titleClassName: "text-rede-yellow",
    description:
      "Encontra, conecta-te e colabora com profissionais dos PALOP, enquanto aumentas a tua presença na rede — AQUI.",
  },
  {
    title: "Agência",
    image: "/assets/home/hero-2.jpeg",
    imageAlt: "Profissionais da Agência de Cinema e Audiovisual",
    titleClassName: "text-rede-red",
    description:
      "Faz o teu trabalho chegar mais longe, junto de quem o pode projetar e partilhar — AQUI.",
  },
] as const;

export const Hero: React.FC = () => {
  return (
    <section className="w-full pt-16">
      <div className="mx-auto grid w-full max-w-[1920px] grid-cols-1 md:grid-cols-2">
        {heroItems.map((item) => (
          <article
            key={item.title}
            className="relative min-h-[420px] overflow-hidden sm:min-h-[500px] md:min-h-[560px] lg:min-h-[620px]"
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

            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-5 py-10 text-center sm:px-8 lg:gap-6 lg:px-12">
              <Heading
                className={`${customBlur.className} ${item.titleClassName} text-[clamp(4rem,10vw,8rem)] leading-none font-medium`}
              >
                {item.title}
              </Heading>

              <Text className="max-w-xl text-sm leading-relaxed font-semibold text-rede-white sm:text-base lg:text-lg">
                {item.description}
              </Text>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};