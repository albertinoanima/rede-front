"use client";

import { customBlur } from "@/app/fonts";
import { Heading } from "@/components/ui/heading";
import { FilmCard, FilmCardType } from "../FilmCard";

const films: FilmCardType[] = [
  {
    id: "jysbrgybesygbseekgb",
    title: "Uma Historia de Angola",
    director: "José Xibata",
    type: ["Fição", "Direitos humanos"],
    year: 2025,
    countries: ["Angola"],
    cover: "/assets/profile/films/film-1.png"
  },
  {
    id: "jysbrgyubesyttgbsekgb",
    title: "Vozes de Moçambique",
    director: "José Xibata",
    type: ["Fição", "Direitos humanos"],
    year: 2025,
    countries: ["Angola"],
    cover: "/assets/profile/films/film-2.png"
  },
  {
    id: "jysbrgyybesyguubsekgb",
    title: "Ilhas do Atlântico",
    director: "José Xibata",
    type: ["Fição", "Direitos humanos"],
    year: 2025,
    countries: ["Angola"],
    cover: "/assets/profile/films/film-3.png"
  }
];





export const OutsideAgency: React.FC = () => {
  return (
    <section className="w-full h-auto">
      <div className="relative w-full max-w-[1920px] min-h-90 h-auto mx-auto flex items-center justify-center mt-10">
        <div className="w-full max-w-360 h-auto">
          <Heading className={`text-[20px] leading-7 mb-2`}>
            Fora da agência
          </Heading>
          <hr className="border border-gray-400"/>

          <div className="flex gap-5 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {films.map((film) => (
                <FilmCard
                  key={film.id}
                  filmData={film}
                  v="v2"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};