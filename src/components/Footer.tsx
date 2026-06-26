"use client"

import Link from "next/link";
import { Button } from "./ui/button";
import { Heading } from "./ui/heading";
import { CustomFacebook } from "@/icons/CustomFacebook";
import { CustomInstagram } from "@/icons/CustomInstagram";
import { CustomYouTube } from "@/icons/CustomYouTube";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full h-auto">
      <div className="w-full max-w-360 h-auto mx-auto pt-3.5">

        <div className="w-full flex">
          <div className="w-full h-full flex flex-col justify-center gap-4">
            <Button variant="secondary" size="lg" className="border-2 border-white w-16 h-16 rounded-full p-0 cursor-pointer">
              <CustomFacebook width={64} height={64} />
            </Button>

            <Button variant="secondary" size="lg" className="border-2 border-white w-16 h-16 rounded-full p-0 cursor-pointer">
              <CustomInstagram width={64} height={64} />
            </Button>

            <Button variant="secondary" size="lg" className="border-2 border-white w-16 h-16 rounded-full p-0 cursor-pointer">
              <CustomYouTube width={64} height={64} />
            </Button>
          </div>

          <div className="w-full h-full flex flex-col justify-center items-center gap-4">
            <div className="w-fit">
              <Heading level={"h3"} className="font-medium text-white text-[48px] leading-14 mb-4 text-left">
                Menu
              </Heading>

              <ul className="text-[12px] font-medium leading-4 text-left">
                <li className="mb-2.5"><Link href="/about">Sobre Nós</Link></li>
                <li className="mb-2.5"><Link href="/network">Rede</Link></li>
                <li className="mb-2.5"><Link href="/agency">Agência</Link></li>
                <li className="mb-2.5"><Link href="/news">Notícias</Link></li>
                <li className="mb-2.5"><Link href="/opportunities">Oportunidades</Link></li>
                <li className="mb-2.5"><Link href="/workshops">Workshops</Link></li>
                <li className="mb-2.5"><Link href="/newsletter">Newsletter</Link></li>
                <li className="mb-2.5"><Link href="/film-commission">Film Commission</Link></li>
              </ul>
            </div>
          </div>

          <div className="w-full h-full flex flex-col gap-4">
            <Heading level={"h3"} className="font-medium text-white text-[48px] leading-14">
              Contactos
            </Heading>
            <ul className="text-[12px] font-medium leading-4">
              <li className="mb-2.5"><Link href="mailto:info@redepaloptl.org">info@redepaloptl.org</Link></li>
              <li className="mb-2.5"><Link href="tel:+258840000000">+258 84 000 0000</Link></li>
              <li className="mb-2.5"><Link href="film-commission">Film Commission</Link></li>
              <li className="mb-2.5"><Link href="/terms">Termos de uso</Link></li>
            </ul>
          </div>
        </div>

        <div className="w-full">
          <div className="w-full max-w-348 h-53.25 mx-auto mt-52.5 mb-2.5">
            <img src="/assets/footer/rede-logo-footer.svg" alt="REDE Logo" className="object-cover" />
          </div>
        </div>

      </div>

    </footer>
  );
};

export default Footer;