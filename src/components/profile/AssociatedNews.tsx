
import { customBlur } from "@/app/fonts";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { ArticleCard } from "../ArticleCard";


export const AssociatedNews: React.FC = () => {

    const images = [
        "/assets/home/news/news-1.png",
        "/assets/home/news/news-2.png",
        "/assets/home/news/news-3.png",
    ];

    return (
        <section className="w-full h-auto bg-rede-black">
            <div className="relative w-full max-w-360 h-auto mx-auto flex flex-col justify-center items-center gap-2.5 pt-28 pb-10">

                <div className="w-full h-36">
                    <Heading className={`${customBlur.className} text-rede-white text-[48px] font-medium leading-12`}>Noticias associadas</Heading>
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

