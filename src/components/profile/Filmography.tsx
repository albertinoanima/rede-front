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
  },
  {
    id: "jysbrgyybesygbsekgb",
    title: "Uma Historia de Guiné",
    director: "José Xibata",
    type: ["Fição", "Direitos humanos"],
    year: 2025,
    countries: ["Angola"],
    cover: "/assets/profile/films/film-4.png"
  },
  {
    id: "jysbrgybesyoogbsekgb",
    title: "Uma Historia de Angola",
    director: "José Xibata",
    type: ["Fição", "Direitos humanos"],
    year: 2025,
    countries: ["Angola"],
    cover: "/assets/profile/films/film-5.png"
  }
];





export const Filmography: React.FC = () => {
  return (
    <section className="w-full h-auto">
      <div className="relative w-full max-w-[1920px] min-h-90 h-auto mx-auto flex items-center justify-center">
        <div className="w-full max-w-360 h-auto">
          <Heading
            className={`${customBlur.className} text-[48px] leading-12 mb-6`}
          >
            Filmography
          </Heading>

          <div className="flex gap-5">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {films.map((film) => (
                <FilmCard
                  key={film.id}
                  filmData={film}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};