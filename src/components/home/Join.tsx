import { customBlur } from "@/app/fonts";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";

export const Join: React.FC = () => {
    return (
        <section className="w-full h-auto bg-rede-white">
            <div className="relative w-full max-w-360 h-124.25 mx-auto flex flex-col justify-center items-center gap-4">

                <Heading className={`text-rede-surface text-5xl ${customBlur.className} font-medium leading-10`}>Junte-se a comunidade</Heading>
                <Text className="text-rede-surface text-[12px] font-medium leading-4">Histórias que conectam culturas e aproximam pessoas. Descobre novos <br />
                    talentos, cria sem limites e colabora numa rede feita para impulsionar <br />
                    o cinema dos PALOP.</Text>

                <div className="flex gap-2">
                    <Button
                        className="text-rede-surface bg-transparent border-[1.3px] border-rede-surface hover:bg-rede-surface hover:border-none hover:text-rede-white active:bg-rede-surface active:border-none active:text-rede-white active:shadow-[0_0_0_0.3px_var(--rede-surface),0_0_0_1px_var(--rede-surface)_inset,0_0_0_4px_var(--rede-white)_inset] disabled:text-rede-surface/40 disabled:bg-transparent disabled:border-[1.3px] disabled:border-rede-surface/40'">
                        Log in
                    </Button>
                    <Button className="text-rede-surface bg-rede-yellow-500 hover:bg-rede-yellow-200 active:bg-rede-yellow-200 active:shadow-[0_0_0_0.3px_var(--rede-yellow-200),0_0_0_1px_var(--rede-yellow-200)_inset,0_0_0_4px_var(--rede-white)_inset] disabled:bg-rede-yellow-500/60">
                        Sign up
                    </Button>
                </div>

            </div>
        </section>
    );
}