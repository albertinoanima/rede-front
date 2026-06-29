import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";


export const ArticleCard: React.FC<{ imageURL: string }> = ({ imageURL }) => {
    return (
        <div className="max-w-110 bg-[#1a1a1a] text-white overflow-hidden shadow-xl font-sans">

            {/* Imagem do Card */}
            <div className="w-full h-auto aspect-4/3 overflow-hidden">
                <img
                    src={imageURL}
                    alt="Diretora no set de filmagem"
                    className="w-full h-full object-cover grayscale brightness-90"
                />
            </div>

            {/* Conteúdo */}
            <div className="p-6 flex flex-col gap-4">

                {/* Badges / Tags */}
                <div className="flex gap-2 text-xs font-medium">
                    <span className="px-4 py-1.5 border border-zinc-700 rounded-full bg-[#262626]">
                        Festival
                    </span>
                    <span className="px-4 py-1.5 border border-zinc-700 rounded-full bg-[#262626] text-zinc-300">
                        15 Fev 2026
                    </span>
                </div>

                {/* Título */}
                <Heading level={"h3"} className="text-2xl font-bold leading-tight tracking-tight mt-1">
                    Lorem ipsum dolor sit amet consectetur
                </Heading>

                {/* Descrição e Botão de Ação */}
                <div className="flex items-end justify-between gap-4 mt-2">
                    <Text className="text-sm text-zinc-400 leading-relaxed max-w-[80%]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                    </Text>

                    {/* Botão Circular Amarelo */}
                    <Button className="w-10 h-10  p-0 rounded-full">
                        <ArrowRight color="black" width={20} height={20} />
                    </Button>
                </div>

            </div>
        </div>
    );
};


export const WorkShopsSection: React.FC = () => {

    const images = [
        "/assets/home/workshops/shop-1.png",
        "/assets/home/workshops/shop-2.png",
        "/assets/home/workshops/shop-3.png",
    ];

    return (
        <section className="w-full h-auto bg-rede-black">
            <div className="relative w-full max-w-360 h-auto mx-auto flex flex-col justify-center items-center gap-2.5 pt-2.5">

                <div className="w-full h-36">
                    <Heading className="text-rede-yellow text-[96px] font-medium leading-24">Workshops</Heading>
                </div>

                <div className="w-full h-auto flex items-center justify-end mb-5">
                    <Button variant={"secondary"} icon={<ArrowRight color="white" />} iconPosition="right" className="border-2 border-rede-white bg-transparent" iconButtonClassName="border-2 border-rede-white bg-transparent">Ver todas</Button>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {
                        images.map((imageURL: string, pos: number) => (
                            <ArticleCard imageURL={imageURL} key={"dxhdrhrdhdxr" + (pos * 2)} />
                        ))
                    }
                </div>

            </div>
        </section>
    );
}

