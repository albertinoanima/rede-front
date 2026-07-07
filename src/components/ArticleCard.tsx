import { Text } from "./ui/text";
import { Button } from "./ui/button";
import { Heading } from "./ui/heading";
import { ArrowRight } from "lucide-react";

export const ArticleCard: React.FC<{ imageURL: string }> = ({ imageURL }) => {
    return (
        <div className="max-w-110 bg-[#1a1a1a] text-white overflow-hidden shadow-xl font-sans pb-8">
            <div className="w-full h-auto aspect-4/3 overflow-hidden">
                <img src={imageURL} alt="Diretora no set de filmagem" className="w-full h-full object-cover grayscale brightness-90" />
            </div>

            <div className="p-6 flex flex-col gap-4">
                <div className="flex gap-2 text-xs font-medium">
                    <span className="border-2 border-rede-white px-4.5 py-1.5 rounded-4xl text-[12px] font-medium leading-4">
                        Festival
                    </span>
                    <span className="border-2 border-transparent px-4.5 py-1.5 rounded-4xl text-[12px] font-medium leading-4">
                        15 Fev 2026
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
