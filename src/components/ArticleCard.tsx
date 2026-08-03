'use client'

import { Text } from "./ui/text";
import { Button } from "./ui/button";
import { Heading } from "./ui/heading";
import { Plus } from "lucide-react";
import Card from "./ui/card";


type ArticleCardType = {
    newsData: {
        imageUrl?: string;
        title?: string;
        description?: string;
        date?: string;
        location?: string;
    }
}

export const ArticleCard: React.FC<ArticleCardType> = ({ newsData }) => {
    return (
        <Card image={<img
            src={newsData?.imageUrl || "/assets/home/news/news-1.png"}
            className="w-full h-full object-cover" alt="Diretora no set de filmagem" />}
            footer={
                <div className="w-full flex items-end justify-between gap-4 mt-2">
                    <span className="border-2 border-transparent px-4.5 py-1.5 rounded-4xl text-[12px] font-medium leading-4">
                        {newsData?.date}
                    </span>

                    <Button showMainButton={false} iconPosition="right" icon={<Plus width={12} height={12} />} onClick={() => console.log("htddhdt")} />
                </div>
            }
            v={"v1"}
        >
            <div className="flex gap-2 text-xs font-medium">
                <span className="border-2 border-rede-white px-4.5 py-1.5 rounded-4xl text-[12px] font-medium leading-4">
                    {newsData?.location}
                </span>
            </div>

            <Heading level={"h3"} className="text-[20px] font-semibold leading-5 mt-1">
                {newsData?.title}
            </Heading>

            <Text className="rounded-4xl text-[12px] font-medium leading-4">
                {newsData?.description}
            </Text>
        </Card>
    );
};
