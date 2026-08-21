"use client";

import Footer from "@/components/Footer";
import { TopBar } from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

type PublicProfileErrorProps = {
  error: Error;
  reset: () => void;
};

export default function PublicProfileError({ error, reset }: PublicProfileErrorProps) {
  return (
    <main className="min-h-screen bg-rede-surface text-rede-white">
      <TopBar />
      <section className="mx-auto flex min-h-[520px] w-full max-w-360 flex-col justify-center gap-5 px-6">
        <Text className="text-[24px] font-semibold leading-8">N\u00e3o foi poss\u00edvel carregar este perfil.</Text>
        <Text className="text-[14px] leading-5 text-rede-white/70">{error.message}</Text>
        <div>
          <Button type="button" onClick={reset}>Tentar novamente</Button>
        </div>
      </section>
      <Footer />
    </main>
  );
}