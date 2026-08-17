import { customBlur } from "@/app/fonts";
import { Heading } from "@/components/ui/heading";
import { ArticleCard } from "../ArticleCard";
import { NewsType } from "./data";

export const SimilarNews: React.FC<{similarNews: NewsType[] }> = ({ similarNews }) => {
  return (
    <section className="w-full h-auto bg-rede-surface">
      <div className="relative w-full max-w-360 h-auto mx-auto flex flex-col justify-center items-center gap-2.5 pt-28 pb-10">
        <div className="w-full h-36">
          <Heading
            className={`${customBlur.className} text-rede-yellow text-[96px] font-medium leading-24`}
          >
            Semelhantes
          </Heading>
        </div>

        {similarNews.length === 0 ? (
          <p className="text-white">
            Não existem notícias semelhantes.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {similarNews.map((news, index) => (
                <ArticleCard newsData={news} key={news.id + "-" + index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};