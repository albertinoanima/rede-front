'use client'

import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Heading } from "./ui/heading";
import { Text } from "./ui/text";
import Card from "./ui/card";
import { Tag } from "./Tag";
import { getFilmTagLabel } from "./network/data";
import Link from "next/link";

export type FilmCardType = {
  id: string;
  title: string;
  director: string;
  type: string[];
  year: number;
  countries: string[];
  cover: string;
  duration?: string;
  link?: string;
  roles?: string[];
}


export const FilmCard: React.FC<{ filmData: FilmCardType, v?: "v1" | "v2" | undefined }> = ({ filmData, v }) => {
  const hasLink = Boolean(filmData.link);

  const openFilmLink = () => {
    if (!filmData.link) return;
    window.open(filmData.link, "_blank", "noopener,noreferrer");
  };

  return (
    <Card image={<img
      src={filmData.cover}
      className="w-full h-full object-cover" alt="Diretora no set de filmagem" />}
      footer={
        <div className="w-full flex items-end justify-between gap-4 mt-2">
          <div className="w-auto h-auto flex flex-col gap-2.5">
            {/* 
            <Heading level={"h3"} className="text-[20px] font-semibold leading-7 mt-1">
              {filmData.title}
            </Heading> 
            */}

            {/* 
            <Text className="rounded-4xl text-[14px] leading-5 font-medium">
              {filmData.director}
            </Text> 
            */}
          </div>

          {
            (hasLink) &&
            <Link href={filmData?.link || ""} target="_blank">
              <Button
                showMainButton={false}
                iconPosition="right"
                icon={<ArrowRight width={12} height={12} />}
              //onClick={openFilmLink} 
              //disabled={!hasLink} 
              />
            </Link>
          }

        </div>
      } v={v}>

      <div className="flex flex-wrap gap-2 text-xs font-medium">
        {
          filmData.countries.map((country: string, index: number) => (
            <Tag label={getFilmTagLabel(country)} key={"county" + index} />
          ))
        }

        {
          filmData.type.map((type: string, index: number) => (
            <Tag label={getFilmTagLabel(type)} key={"type" + index} />
          ))
        }

        {
          filmData.roles?.map((role: string, index: number) => (
            <Tag label={getFilmTagLabel(role)} key={"role" + index} />
          ))
        }


        <div className="w-full mt-4 flex flex-col gap-3">
          <Heading level={"h3"} className="text-[20px] font-semibold leading-7 line-clamp-2 mt-1">
            {filmData.title}
          </Heading>

          <Text className="text-[12px] leading-4 font-medium">
            {filmData.year}, {filmData.duration}
          </Text>
        </div>

      </div>
    </Card>
  );
};