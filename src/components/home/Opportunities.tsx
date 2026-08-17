"use client";

import { customBlur } from "@/app/fonts";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { OpportunityCard, OpportunityType } from "../OpportunityCard";
import Link from "next/link";
import { opportunities } from "../opportunities/data";


export const Opportunities: React.FC = () => {

    return (
        <section className="w-full h-auto pb-14 bg-rede-white">
            <div className="relative w-full max-w-360 h-auto mx-auto flex flex-col justify-center items-center gap-2.5 pt-28 pb-10">

                <div className="w-full h-36">
                    <Heading className={`${customBlur.className} text-rede-surface text-[96px] font-medium leading-24`}>Oportunidades</Heading>
                </div>

                <div className="w-full h-auto flex items-center justify-end mb-5">
                    <Link href="/opportunities">
                        <Button
                            icon={<ArrowRight width={12} height={12} />} iconPosition="right">
                            Ver todas
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {opportunities.map((opp) => (
                        <OpportunityCard
                            key={opp.id}
                            opportunityData={opp}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

