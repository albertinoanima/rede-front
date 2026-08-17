import { customBlur } from "@/app/fonts";

import { Heading } from "@/components/ui/heading";
import { Button } from "../ui/button";
import { Input } from "../ui/Input";


export const Newsletter: React.FC = () => {
    return (
        <section className="w-full h-auto bg-rede-bg">
            <div className="relative w-full max-w-[1920px] h-124.25 mx-auto">
                <img
                    src="/assets/home/hero-3.png"
                    alt="Newsletter"
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 w-full max-w-360 h-auto mx-auto flex flex-col justify-center items-center gap-2.5 pt-28 pb-10">
                    <div className="w-full h-36">
                        <Heading className={`${customBlur.className} text-rede-white text-[96px] font-medium leading-24`}>Newsletter</Heading>
                    </div>

                    <div className="w-full h-auto flex flex-col items-center justify-center gap-6 mb-5">
                        <Input variant={"secondary"} placeholder="O seu email aqui" className="max-w-90 mr-auto ml-auto bg-transparent placeholder:text-[#dddddd]"  />
                        <Button>Subscrever</Button>
                    </div>
                </div>

            </div>
        </section>
    );
}