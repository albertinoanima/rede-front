import { customBlur } from "@/app/fonts";
import { Heading } from "@/components/ui/heading";

export const Partners: React.FC = () => {

    const images = [
        "/assets/home/workshops/shop-1.png",
        "/assets/home/workshops/shop-2.png",
        "/assets/home/workshops/shop-3.png",
    ];

    return (
        <section className="w-full h-125 bg-rede-white">
            <div className="relative w-full max-w-360 h-auto mx-auto flex flex-col justify-center items-center gap-2.5 pt-28 pb-10">

                <div className="w-full h-36">
                    <Heading className={`${customBlur.className} text-rede-black text-[96px] font-medium leading-24`}>Parceiros</Heading>
                </div>


            </div>
        </section>
    );
}

