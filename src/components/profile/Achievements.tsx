"use client";

import { customBlur } from "@/app/fonts";
import { Heading } from "@/components/ui/heading";
import { Text } from "../ui/text";
import { Button } from "../ui/button";
import { Edit2 } from "lucide-react";
import { User } from "@/types/User";

const data = [
  { festival: "Krakow Film Festival", premio: "Lorem ipsum dolor sit amet" },
  { festival: "Lorem ipsum dolor sit amet", premio: "Lorem ipsum dolor sit amet" },
  { festival: "Lorem ipsum dolor sit amet", premio: "Lorem ipsum dolor sit amet" },
];

export const Achievements: React.FC<{ isAuthenticated?: boolean, profile?: User }> = ({ isAuthenticated = false, profile }) => {
  return (
    <section className="w-full h-auto">
      <div className="relative w-full max-w-[1920px] min-h-90 h-auto mx-auto flex items-center justify-center">
        <div className="w-full max-w-360 h-auto mb-40">

          <div className='flex items-center gap-4'>
              <Heading className={`${customBlur.className} text-[48px] leading-12 mb-6`}>Festivais, Prémios e Exibições</Heading>
              {
                isAuthenticated &&
                <Button variant="secondary" className="rounded-full p-0 shrink-0 aspect-square w-10 h-10 flex items-center justify-center -mt-5">
                  <Edit2 width={12} height={12} />
                </Button>
              }
            </div>

          <div className="flex gap-5">
            <div className="w-full bg-transparent text-rede-white">
              <div className="grid grid-cols-2 gap-x-8">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="contents"
                  >
                    <div className="border-b border-rede-white pb-4">
                      <span className="text-xs leading-4 text-rede-white">
                        Festival
                      </span>

                      <Text className="mt-1 text-[20px] leading-7 font-semibold">
                        {item.festival}
                      </Text>
                    </div>

                    <div className="border-b border-rede-white pb-4">
                      <span className="text-xs leading-4 text-rede-white">
                        Prémio
                      </span>

                      <Text className="mt-1 text-[20px] leading-7 font-semibold">
                        {item.premio}
                      </Text>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};