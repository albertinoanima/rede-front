
import { customBlur } from "@/app/fonts";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { OpportunityCard, OpportunityType } from "../OpportunityCard";

const opportunities: OpportunityType[] = [
    {
        id: "dxtjdtjtdjdtj",
        title: 'Lorem ipsum dolor sit amet consectetur',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
        isAvailable: true,
        status: "open",
        startDate: "12",
        endDate: "15 Fev",
        type: "Financiamento",
        eligibility: ["Angola", "Luanda"],
        cover: '/assets/opportunities/image-1.png',
    },
    {
        id: "dxtjdtjtdjdtj2",
        title: 'Lorem ipsum dolor sit amet consectetur',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
        isAvailable: true,
        status: "open",
        startDate: "12",
        endDate: "15 Fev",
        type: "Parceria",
        eligibility: ["Angola", "Luanda"],
        cover: '/assets/opportunities/image-2.png',
    },
    {
        id: "dxtjdtjtdjdtj33",
        title: 'Lorem ipsum dolor sit amet consectetur',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
        isAvailable: true,
        status: "open",
        startDate: "12",
        endDate: "15 Fev",
        type: "Co-produção",
        eligibility: ["Angola", "Luanda"],
        cover: '/assets/opportunities/image-3.png',
    }
]


export const Opportunities: React.FC = () => {

    return (
        <section className="w-full h-auto pb-14 bg-rede-bg">
            <div className="relative w-full max-w-360 h-auto mx-auto flex flex-col justify-center items-center gap-2.5 pt-28 pb-10">

                <div className="w-full h-36">
                    <Heading className={`${customBlur.className} text-rede-white text-[96px] font-medium leading-24`}>Oportunidades</Heading>
                </div>

                {/*
                 <div className="w-full h-auto flex items-center justify-end mb-5">
                    <Button variant={"secondary"} icon={<ArrowRight color="black" width={12} height={12} />} iconPosition="right" className="border-2 border-rede-black text-rede-surface bg-transparent" iconButtonClassName="border-2 border-rede-black bg-transparent text-rede-surface">Ver todas</Button>
                </div> 
                */}

                <div className="w-full h-auto flex items-center justify-end mb-5">
                    <Button variant={"secondary"} icon={<ArrowRight width={12} height={12}/>} iconPosition="right">Ver todas</Button>
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

