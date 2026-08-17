"use client"

import { useState } from "react";
import { Button } from "../ui/button";
import { Heading } from "../ui/heading";
import { licensingItems } from "./data";
import { ArrowRight, ChevronDown } from "lucide-react";


export const Licensing: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="w-full bg-rede-surface py-24">
      <div className="mx-auto max-w-6xl px-6">

        <Heading level={"h2"} className="mb-12 text-5xl font-bold text-rede-white">
          Condições de Licenciamento
        </Heading>

        <div className="space-y-2">

          {licensingItems.map((item, index) => (
            <div key={index} className="border-b border-white/25">
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between py-6 text-left"
              >
                <span className="text-lg font-medium text-rede-white">
                  {item.title}
                </span>

                <ChevronDown
                  size={18}
                  className={`text-rede-white transition-transform ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${
                  open === index
                    ? "max-h-60 pb-6"
                    : "max-h-0"
                }`}>
                <p className="max-w-3xl text-sm leading-7 text-rede-white/70">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Button icon={<ArrowRight width={12} height={12}/>} iconPosition="left">
            Download Termos (PDF)
          </Button>
        </div>
      </div>
    </section>
  )
}