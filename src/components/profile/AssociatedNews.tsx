
import { customBlur } from "@/app/fonts";
import { Heading } from "@/components/ui/heading";
import { ArticleCard } from "../ArticleCard";
import { NEWS } from "../news/data";


export const AssociatedNews: React.FC = () => {


    return (
        <section className="w-full h-auto bg-rede-bg">
            <div className="relative w-full max-w-360 h-auto mx-auto flex flex-col justify-center items-center gap-2.5 pt-28 pb-10">

                <div className="w-full h-36">
                    <Heading className={`${customBlur.className} text-rede-white text-[48px] font-medium leading-12`}>Notícias associadas</Heading>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {NEWS.map((news, index) => (
                        <ArticleCard newsData={news} key={"vintus" + index} />
                    ))}
                </div>

            </div>
        </section>
    );
}

