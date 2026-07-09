'use client'

import { Text } from "./ui/text";
import { Button } from "./ui/button";
import { Heading } from "./ui/heading";
import { Plus } from "lucide-react";
import Card from "./ui/card";


export const ArticleCard: React.FC<{ imageURL: string }> = ({ imageURL }) => {
    return (
        <Card image={<img
            src={imageURL}
            className="w-full h-full object-cover" alt="Diretora no set de filmagem" />}
            footer={
                <div className="w-full flex items-end justify-between gap-4 mt-2">
                    <span className="border-2 border-transparent px-4.5 py-1.5 rounded-4xl text-[12px] font-medium leading-4">
                        15 Fev 2026
                    </span>

                    <Button showMainButton={false} iconPosition="right" icon={<Plus width={12} height={12} />} onClick={() => console.log("htddhdt")} />
                </div>
            }
            v={"v1"}
        >
            <div className="flex gap-2 text-xs font-medium">
                <span className="border-2 border-rede-white px-4.5 py-1.5 rounded-4xl text-[12px] font-medium leading-4">
                    Festival
                </span>
            </div>

            <Heading level={"h3"} className="text-[20px] font-semibold leading-5 mt-1">
                Lorem ipsum dolor sit amet consectetur
            </Heading>

            <Text className="rounded-4xl text-[12px] font-medium leading-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </Text>
        </Card>
    );
};
