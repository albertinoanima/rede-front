"use client"

import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Heading } from "./ui/heading";
import Card from "./ui/card";

export type ProfileType = {
  id: string;
  title: string;
  tags: string[];
  cover: string;
}

export const ProfileCard: React.FC<{ profileData: ProfileType }> = ({ profileData }) => {
  return (
    <Card
      image={<img
        src={profileData.cover}
        className="w-full h-full object-cover" alt="Diretora no set de filmagem" />}
      footer={
        <div className="w-full h-auto flex items-center justify-end mt-2">
          <Button showMainButton={false} iconPosition="right" icon={<ArrowRight width={12} height={12} />} onClick={() => console.log("htddhdt")} />
        </div>
      }>

      <div className="flex flex-wrap gap-2.5">
        {
          profileData.tags.map((tag, index) => (
            <span className="border-2 border-rede-white px-4.5 py-1.5 rounded-4xl text-[12px] font-medium leading-4 whitespace-nowrap" key={index + "vertxxx"}>
              {tag}
            </span>
          ))
        }
      </div>

      <Heading level={"h3"} className="text-[20px] font-semibold leading-5 mt-1">
        {profileData.title}
      </Heading>

    </Card>
  );
};