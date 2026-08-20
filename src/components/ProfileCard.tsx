"use client"

import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Heading } from "./ui/heading";
import Card from "./ui/card";
import { Tag } from "./Tag";
import { getNetworkTagHref } from "./network/FilterSidebar";

export type ProfileType = {
  id: string;
  title: string;
  tags: string[];
  cover: string;
  country?: string;
  province?: string;
  city?: string;
  type?: string;
  category?: string;
  subCategory?: string;
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
            <Tag href={getNetworkTagHref(tag)} label={tag} key={tag + "x" + index}/>
          ))
        }
      </div>

      <Heading level={"h3"} className="text-[20px] font-semibold leading-7 mt-1">
        {profileData.title}
      </Heading>

    </Card>
  );
};