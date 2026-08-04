import { Button } from "../ui/button";
import { Heading } from "../ui/heading";
import { customBlur } from "@/app/fonts";
import { Text } from "../ui/text";
import { NewsType } from "./news";
import { linkify } from "@/actions";


export const SectionViewNews: React.FC<{ selectedNews: NewsType }> = ({ selectedNews }) => {
    return (
      <div className="w-full max-w-350 h-auto mr-auto ml-auto pt-16 pb-16 bg-rede-bg">
            <div className="w-full flex gap-2.5 border-b-[1.3px] border-rede-white pb-12.5">
                <Button size={"sm"} variant={"secondary"}>{selectedNews?.location}</Button>
                <Button size={"sm"} variant={"secondary"}>{selectedNews?.date}</Button>
            </div>

            <div className="w-full h-auto flex flex-col gap-4 mt-28 pb-10">
                <Heading className={`${customBlur.className} text-[96px] leading-24 font-normal pb-12.5 text-center text-rede-yellow`}>
                    {selectedNews?.title}
                </Heading>

                <div className="w-full h-auto flex flex-col gap-8">
                    {/* Adicionamos classes globais ou personalizadas no container (ou via CSS global) 
                      para estilizar os links que vierem de dentro do HTML injetado.
                    */}
                    <Text 
                        className="text-[12px] font-medium leading-4 text-rede-white [&_a]:text-rede-red [&_a]:underline [&_a]:font-semibold hover:[&_a]:opacity-80" 
                        dangerouslySetInnerHTML={{ __html: linkify(selectedNews?.description) }}
                    />
                </div>
            </div>

            <div className="w-full flex gap-2.5 border-t-[1.3px] border-rede-white pt-12.5">
                <Button size={"sm"} variant={"secondary"}>{selectedNews?.location}</Button>
                <Button size={"sm"} variant={"secondary"}>{selectedNews?.date}</Button>
            </div>
        </div>
    )
}