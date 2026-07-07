import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { customBlur } from "@/app/fonts";
import { ArticleCard } from "../ArticleCard";


export const WorkShops: React.FC = () => {

    const images = [
        "/assets/home/workshops/shop-1.png",
        "/assets/home/workshops/shop-2.png",
        "/assets/home/workshops/shop-3.png",
    ];

    return (
        <section className="w-full h-auto bg-rede-black">
            <div className="relative w-full max-w-360 h-auto mx-auto flex flex-col justify-center items-center pt-28 pb-10">

                <div className="w-full h-36">
                    <Heading className={`${customBlur.className} text-rede-yellow text-[96px] font-medium leading-24`}>Workshops</Heading>
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

