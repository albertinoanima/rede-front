"use client"


import { FilterSidebar } from '@/components/agency/FilterSidebar';
import { OpportunityCard, OpportunityType } from '../OpportunityCard';


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
  },
  {
    id: "dxtjdtjtdjdtj44",
    title: 'Lorem ipsum dolor sit amet consectetur',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    isAvailable: true,
    status: "starting",
    startDate: "12",
    endDate: "15 Fev",
    type: "Financiamento",
    eligibility: ["Angola", "Luanda"],
    cover: '/assets/opportunities/image-4.png',
  },
  {
    id: "dxtjdtjtdjdtj55",
    title: 'Lorem ipsum dolor sit amet consectetur',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    isAvailable: true,
    status: "starting",
    startDate: "12",
    endDate: "15 Fev",
    type: "Financiamento",
    eligibility: ["Angola", "Luanda"],
    cover: '/assets/opportunities/image-5.png',
  },
  {
    id: "dxtjdtjtdjdtj66",
    title: 'Lorem ipsum dolor sit amet consectetur',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    isAvailable: true,
    status: "starting",
    startDate: "12",
    endDate: "15 Fev",
    type: "Financiamento",
    eligibility: ["Angola", "Luanda"],
    cover: '/assets/opportunities/image-6.png',
  },
  {
    id: "dxtjdtjtdjdtj77",
    title: 'Lorem ipsum dolor sit amet consectetur',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    isAvailable: true,
    status: "expired",
    startDate: "12",
    endDate: "15 Fev",
    type: "Financiamento",
    eligibility: ["Angola", "Luanda"],
    cover: '/assets/opportunities/image-7.png',
  },
  {
    id: "dxtjdtjtdjdtj88",
    title: 'Lorem ipsum dolor sit amet consectetur',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    isAvailable: true,
    status: "expired",
    startDate: "12",
    endDate: "15 Fev",
    type: "Financiamento",
    eligibility: ["Angola", "Luanda"],
    cover: '/assets/opportunities/image-8.png',
  },
  {
    id: "dxtjdtjtdjdtj99",
    title: 'Lorem ipsum dolor sit amet consectetur',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    isAvailable: true,
    status: "expired",
    startDate: "12",
    endDate: "15 Fev",
    type: "Financiamento",
    eligibility: ["Angola", "Luanda"],
    cover: '/assets/opportunities/image-9.png'
  }
]

export const Opportunities: React.FC = () => {
  return (
    <section className="w-full h-auto">
      <div className="w-full max-w-360 h-auto ml-auto mr-auto flex mt-10">

        <FilterSidebar />

        {/* Films list */}
        <div className="flex-1 flex flex-col">
          {/* Top bar */}
          <div className="flex justify-end gap-3 px-6 py-4">
            <button className="text-btn2 text-foreground border border-foreground/30 rounded-full px-4 py-1.5 hover:border-foreground transition-colors">
              Ordenar por
            </button>
            <button className="text-btn2 text-foreground border border-foreground/30 rounded-full px-4 py-1.5 hover:border-foreground transition-colors">
              8 resultados
            </button>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 px-6 pb-6">
            {opportunities.map((opp) => (
              <OpportunityCard
                key={opp.id}
                opportunityData={opp}
              />
            ))}
          </div>
          
        </div>
      </div>
    </section>
  )
}