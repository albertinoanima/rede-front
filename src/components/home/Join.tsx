import { customBlur } from "@/app/fonts";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";

export const Join: React.FC = () => {
    return (
        <section className="w-full h-auto bg-white">
            <div className="relative w-full max-w-360 h-124.25 mx-auto flex flex-col justify-center items-center gap-4">

                <Heading className={`text-rede-black text-5xl ${customBlur.className} font-medium leading-10`}>Junte-se a comunidade</Heading>
                <Text className="text-rede-black text-[12px] font-medium leading-4">Histórias que conectam culturas e aproximam pessoas. Descobre novos <br />
                    talentos, cria sem limites e colabora numa rede feita para impulsionar <br />
                    o cinema dos PALOP.</Text>

                <div className="flex gap-2">
                    <Button className="border-2 border-rede-black bg-rede-white text-rede-black">
                        Log in
                    </Button>
                    <Button className="text-rede-black">
                        Sign up
                    </Button>
                </div>

            </div>
        </section>
    );
}