import { Button } from "../ui/button";
import { Heading } from "../ui/heading";
import { customBlur } from "@/app/fonts";
import { NewsType } from "./data";
import { linkify } from "@/actions";
import { Link, Mail } from "lucide-react";
import Facebook from "@/icons/Facebook";


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

                <div
                    className="
    w-full
    columns-1 md:columns-2
    gap-8
    text-[14px]
    leading-relaxed
    font-medium
    text-rede-white
    [&_p]:mb-4
    [&_a]:text-rede-red
    [&_a]:underline
    [&_a]:font-semibold
    hover:[&_a]:opacity-80
  "
                    dangerouslySetInnerHTML={{
                        __html: linkify(selectedNews?.description ?? ""),
                    }}
                />
            </div>

            <div className="w-full flex gap-2.5 border-t-[1.3px] border-rede-white pt-12.5">
                <Button variant={"secondary"} icon={<Link width={12} height={12} color="white" />} iconPosition="left">
                    Copiar link
                </Button>
                <Button variant={"secondary"} icon={<Facebook width={12} height={12} color="white" />} iconPosition="left">
                    Facebook
                </Button>
                <Button variant={"secondary"} icon={<Mail width={12} height={12} color="white" />} iconPosition="left">
                    E-mail
                </Button>
            </div>
        </div>
    )
}