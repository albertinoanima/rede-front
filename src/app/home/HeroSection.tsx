import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";

import { customBlur } from "../fonts";


export const HeroSection: React.FC = () => {
    return (
        <section className="w-full h-auto">
            <div className="relative w-full max-w-[1920px] h-124.25 mx-auto flex">

                <div className="w-[50%] h-full relative">
                    <img src="/assets/home/hero-1.png" alt="REDE Hero" className="w-full h-full object-cover"/>

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-4 p-4">
                        <Heading className={`text-rede-yellow ${customBlur.className} text-[128px] font-medium`}>
                            Rede
                        </Heading>

                        <Text className="text-white font-semibold max-w-2xl">
                            Encontra, conecta-te e colabora com <br/>profissionais dos PALOP, enquanto<br/> aumentas a tua presença na rede.
                        </Text>
                    </div>
                </div>

                <div className="w-[50%] h-full relative">
                    <img src="/assets/home/hero-2.png" alt="REDE Hero" className="w-full h-full object-cover"/>

                    {/* overlay de textos centralizada no bloco direito */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-4 p-4">
                        <Heading className={`text-rede-yellow ${customBlur.className} text-[128px] font-medium`}>
                            Rede
                        </Heading>

                        <Text className="text-white font-semibold max-w-2xl">
                            Encontra, conecta-te e colabora com <br/>profissionais dos PALOP, enquanto<br/> aumentas a tua presença na rede.
                        </Text>
                    </div>
                </div>

            </div>
        </section>
    );
}