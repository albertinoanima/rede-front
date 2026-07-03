import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import { customBlur } from "../fonts";

export const ArticleCard: React.FC<{ imageURL: string, level?: "primary" | "secondary" | "third" }> = ({ imageURL, level }) => {
    return (
        <div className="max-w-110 bg-rede-black text-white overflow-hidden shadow-xl font-sans">

            <div className="p-6 flex flex-col gap-4">
                <div className="flex gap-2 text-xs font-medium">
                    {
                        (level === "primary") &&
                        <span className="border-2 border-transparent bg-rede-yellow px-4.5 py-1.5 rounded-4xl text-[12px] text-rede-black font-medium leading-4">
                            Aberta
                        </span>
                    }

                    {
                        (level === "secondary") &&
                        <span className="border-2 border-transparent bg-rede-white px-4.5 py-1.5 rounded-4xl text-[12px] text-rede-black font-medium leading-4">
                            Aberta
                        </span>
                    }


                    {
                        (level === "third") &&
                        <span className="border-2 border-transparent bg-rede-red px-4.5 py-1.5 rounded-4xl text-[12px] text-rede-black font-medium leading-4">
                            Aberta
                        </span>
                    }

                    <span className="border-2 border-rede-white px-4.5 py-1.5 rounded-4xl text-[12px] font-medium leading-4">
                        Financiamento
                    </span>
                    <span className="border-2 border-rede-white px-4.5 py-1.5 rounded-4xl text-[12px] font-medium leading-4">
                        Angola
                    </span>
                    <span className="border-2 border-transparent px-4.5 py-1.5 rounded-4xl text-[12px] font-medium leading-4">
                        12 - 15 Fev 
                    </span>
                </div>

                <Heading level={"h3"} className="text-[20px] font-semibold leading-5 mt-1">
                    Lorem ipsum dolor sit amet consectetur
                </Heading>

                <div className="flex items-end justify-between gap-4 mt-2">
                    <Text className="rounded-4xl text-[12px] font-medium leading-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                    </Text>

                    <Button className="w-16 h-16 p-0 rounded-full">
                        <ArrowRight color="black" width={20} height={20} />
                    </Button>
                </div>
            </div>
        </div>
    );
};



export const OpportunitiesSection: React.FC = () => {

    const images = [
        "/assets/home/opps/opps-1.png",
        "/assets/home/opps/opps-2.png",
        "/assets/home/opps/opps-3.png",
    ];

    return (
        <section className="w-full h-auto bg-rede-white pb-14">
            <div className="relative w-full max-w-360 h-auto mx-auto flex flex-col justify-center items-center gap-2.5 pt-28 pb-10">

                <div className="w-full h-36">
                    <Heading className={`${customBlur.className} text-rede-black text-[96px] font-medium leading-24`}>Oportunidades</Heading>
                </div>

                <div className="w-full h-auto flex items-center justify-end mb-5">
                    <Button variant={"secondary"} icon={<ArrowRight color="black" />} iconPosition="right" className="border-2 border-rede-black text-rede-black bg-transparent" iconButtonClassName="border-2 border-rede-black bg-transparent text-rede-black">Ver todas</Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ArticleCard imageURL={images[0]} level="primary" key={"dxhdrhrdhd55xr"} />
                    <ArticleCard imageURL={images[1]} level="secondary" key={"dxhdrhrdcfhdxr"} />
                    <ArticleCard imageURL={images[2]} level="third" key={"dxhdrhrfcndhdxr"} />
                </div>
            </div>
        </section>
    );
}

