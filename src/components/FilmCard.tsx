import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Heading } from "./ui/heading";
import { Text } from "./ui/text";

export type FilmCardType = {
  id: string;
  title: string;
  director: string;
  type: string[];
  year: number;
  countries: string[];
  cover: string;
}

export const FilmCard: React.FC<{ filmData: FilmCardType, v?: "v1" | "v2" | undefined }> = ({ filmData, v }) => {
  return (
    <div className="w-full max-w-110 bg-[#1a1a1a] text-white overflow-hidden shadow-xl font-sans pb-8">
      <div className="w-full h-auto aspect-4/3 overflow-hidden">
        <img src={filmData.cover} alt="Diretora no set de filmagem" className="w-full h-full object-cover grayscale brightness-90" />
      </div>

      <div className={`p-6 flex flex-col gap-4 ${v === "v2" ? "bg-rede-pink" : "bg-rede-red"}`}>
        <div className="flex flex-wrap gap-2 text-xs font-medium">

          {
            filmData.countries.map((country: string, index: number) => (
              <span key={"county" + index} className="border-2 border-rede-white px-4.5 py-1.5 rounded-4xl text-[12px] font-medium leading-4 whitespace-nowrap">
                {country}
              </span>
            ))
          }


          {
            filmData.type.map((type: string, index: number) => (
              <span key={"type" + index} className="border-2 border-rede-white px-4.5 py-1.5 rounded-4xl text-[12px] font-medium leading-4 whitespace-nowrap">
                {type}
              </span>
            ))
          }



          <span className="border-2 border-rede-white px-4.5 py-1.5 rounded-4xl text-[12px] font-medium leading-4 whitespace-nowrap">
            {filmData.year}
          </span>
        </div>

        <div className="flex items-end justify-between gap-4 mt-2">
          <div className="w-auto h-auto flex flex-col gap-2.5">
            <Heading level={"h3"} className="text-[20px] font-semibold leading-5 mt-1">
              {filmData.title}
            </Heading>

            <Text className="rounded-4xl text-[12px] font-medium leading-4">
              {filmData.director}
            </Text>
          </div>

          <Button className="w-16 h-16 p-0 rounded-full">
            <ArrowRight color="black" width={20} height={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};