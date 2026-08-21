import Footer from "@/components/Footer";
import { TopBar } from "@/components/TopBar";

export default function PublicProfileLoading() {
  return (
    <main className="min-h-screen bg-rede-surface text-rede-white">
      <TopBar />
      <section className="mx-auto flex min-h-[520px] w-full max-w-360 items-center px-6">
        <div className="w-full space-y-6">
          <div className="h-53 w-53 animate-pulse bg-rede-white/10" />
          <div className="h-12 w-80 animate-pulse rounded bg-rede-white/10" />
          <div className="h-6 w-56 animate-pulse rounded bg-rede-white/10" />
        </div>
      </section>
      <Footer />
    </main>
  );
}