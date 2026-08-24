"use client";

import { Button } from "../ui/button";
import { Heading } from "../ui/heading";
import { customBlur } from "@/app/fonts";
import { NewsType } from "./data";
import { linkify } from "@/actions";
import { Link, Mail } from "lucide-react";
import Facebook from "@/icons/Facebook";
import { Text } from "../ui/text";
import { Tag } from "../Tag";
import { useState } from "react";



export const SectionViewNews: React.FC<{ selectedNews: NewsType }> = ({ selectedNews }) => {
    const [copied, setCopied] = useState(false);

    const getCurrentUrl = () => window.location.href;

    const handleCopyLink = async () => {
        const url = getCurrentUrl();

        try {
            if (navigator.clipboard?.writeText) {
                await navigator.clipboard.writeText(url);
            } else {
                const input = document.createElement("input");
                input.value = url;
                input.setAttribute("readonly", "");
                input.style.position = "absolute";
                input.style.left = "-9999px";
                document.body.appendChild(input);
                input.select();
                document.execCommand("copy");
                document.body.removeChild(input);
            }

            setCopied(true);
            window.setTimeout(() => setCopied(false), 2000);
        } catch (error) {
            console.error("Erro ao copiar link:", error);
        }
    };

    const handleShareFacebook = () => {
        const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getCurrentUrl())}`;
        window.open(shareUrl, "_blank", "noopener,noreferrer");
    };

    const handleShareEmail = () => {
        const subject = encodeURIComponent(selectedNews?.title ?? "Noticia");
        const body = encodeURIComponent(`${selectedNews?.title ?? "Noticia"}\n\n${getCurrentUrl()}`);
        window.location.href = `mailto:?subject=${subject}&body=${body}`;
    };

    return (
        <div className="w-full max-w-350 h-auto mr-auto ml-auto pt-16 pb-16 bg-rede-bg">
            <div className="w-full flex items-center gap-2.5 border-b-[1.3px] border-rede-white pb-12.5">
                <Tag href={"/news?tag=" + selectedNews?.location} label={selectedNews?.location} />
                <Text className="text-[12px] leading-[16px]">{selectedNews?.date}</Text>
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
                <Button variant={"secondary"} icon={<Link width={12} height={12} color="white" />} iconPosition="left" onClick={handleCopyLink}>
                    {copied ? "Copiado!" : "Copiar link"}
                </Button>
                <Button variant={"secondary"} icon={<Facebook width={12} height={12} color="white" />} iconPosition="left" onClick={handleShareFacebook}>
                    Facebook
                </Button>
                <Button variant={"secondary"} icon={<Mail width={12} height={12} color="white" />} iconPosition="left" onClick={handleShareEmail}>
                    E-mail
                </Button>
            </div>
        </div>
    )
}
