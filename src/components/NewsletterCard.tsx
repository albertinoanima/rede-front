'use client'

import Card from "./ui/card";
import { Button } from "./ui/button";
import { Heading } from "./ui/heading";
import { Tag } from "./ui/tag";
import { ArrowRight } from "lucide-react";



export type NewsletterType = {
    imageUrl?: string;
    title?: string;
    description?: string;
    date?: string;
    location?: string;
}

type NewsletterCardType = {
    newsletterData: NewsletterType
}

export const NewsletterCard: React.FC<NewsletterCardType> = ({ newsletterData }) => {
    return (
        <Card image={
        <img
            src={newsletterData?.imageUrl || "/assets/newsletter.png"}
            className="w-full h-full object-cover" alt="Diretora no set de filmagem" />
        }
            footer={
                <div className="w-full flex items-end justify-between gap-4 mt-2">
                    <Tag label={newsletterData?.date} variant="outline" />

                    <Button showMainButton={false} iconPosition="right" icon={<ArrowRight width={12} height={12} />} onClick={() => console.log("htddhdt")} />
                </div>
            }
            v={"v1"}
        >

            <Heading level={"h3"} className="text-[20px] font-semibold leading-7 mt-1">
                {newsletterData?.title}
            </Heading>
        </Card>
    );
};


