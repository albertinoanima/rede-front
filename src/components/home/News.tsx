
import { customBlur } from "@/app/fonts";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { ArticleCard } from "../ArticleCard";
import Link from "next/link";
import { NEWS } from "../news/data";


export const News: React.FC = () => {

    return (
        <section className="w-full h-auto bg-rede-surface">
            <div className="relative w-full max-w-360 h-auto mx-auto flex flex-col justify-center items-center gap-2.5 pt-28 pb-10">

                <div className="w-full h-36">
                    <Heading className={`${customBlur.className} text-rede-yellow text-[96px] font-medium leading-24`}>Notícias</Heading>
                </div>

                <div className="w-full h-auto flex items-center justify-end mb-5">
                    <Link href={"/news"}>
                        <Button variant={"secondary"} icon={<ArrowRight width={12} height={12} />} iconPosition="right">Ver todas</Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {NEWS.slice(0, 3).map((news) => (
                        <ArticleCard key={news.id} newsData={news} />
                    ))}
                </div>
            </div>
        </section>
    );
}

