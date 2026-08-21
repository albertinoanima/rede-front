"use client";

import Link from "next/link";

import { customBlur } from "@/app/fonts";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

export const Join: React.FC = () => {
  return (
    <section className="w-full bg-rede-white">
      <div className="mx-auto flex min-h-72 w-full max-w-360 flex-col items-center justify-center gap-5 px-5 py-12 text-center sm:px-8 md:min-h-80 md:py-16">
        <Heading
          className={`${customBlur.className} text-4xl leading-tight font-medium text-rede-surface sm:text-5xl md:text-6xl`}
        >
          Junta-te à comunidade
        </Heading>

        <Text className="max-w-2xl text-sm leading-relaxed font-medium text-rede-surface sm:text-base">
          Histórias que conectam culturas e aproximam pessoas. Descobre novos
          talentos, cria sem limites e colabora numa rede feita para impulsionar
          o cinema dos PALOP e de Timor-Leste.
        </Text>

        <div className="flex w-full max-w-sm flex-col gap-3 pt-1 sm:w-auto sm:max-w-none sm:flex-row sm:gap-2">
          <Link href="/login" className="w-full sm:w-auto">
            <Button
              variant="secondary"
              className="w-full border-[1.3px] border-rede-surface bg-transparent text-rede-surface hover:border-rede-surface hover:bg-rede-surface hover:text-rede-white active:border-rede-surface active:bg-rede-surface active:text-rede-white active:shadow-[0_0_0_0.3px_var(--rede-surface),0_0_0_1px_var(--rede-surface)_inset,0_0_0_4px_var(--rede-white)_inset] disabled:border-rede-surface/40 disabled:bg-transparent disabled:text-rede-surface/40 sm:w-auto"
            >
              Iniciar sessão
            </Button>
          </Link>

          <Link href="/signup" className="w-full sm:w-auto">
            <Button className="w-full bg-rede-yellow-500 text-rede-surface hover:bg-rede-yellow-200 active:bg-rede-yellow-200 active:shadow-[0_0_0_0.3px_var(--rede-yellow-200),0_0_0_1px_var(--rede-yellow-200)_inset,0_0_0_4px_var(--rede-white)_inset] disabled:bg-rede-yellow-500/60 sm:w-auto">
              Criar conta
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};