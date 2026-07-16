import Image from "next/image";
import { customBlur } from "@/app/fonts";
import { Heading } from "@/components/ui/heading";

type Logo = {
    src: string;
    alt: string;
    width: number;
    height: number;
};

type PartnerGroup = {
    label: string;
    logos: Logo[];
    caption?: string;
};

type PartnerRow = {
    left: PartnerGroup;
    right: PartnerGroup;
};

const partnerRows: PartnerRow[] = [
    {
        left: {
            label: "Uma Iniciativa",
            logos: [
                { src: "/assets/partners/museu-cinema.svg", alt: "Museu do Cinema", width: 222, height: 144 },
            ],
        },
        right: {
            label: "Parceiros de Implementação",
            logos: [
                { src: "/assets/partners/ekran.svg", alt: "Ekran Eventos", width: 222, height: 144 },
                { src: "/assets/partners/paralax.svg", alt: "Paralax", width: 222, height: 144 },
                { src: "/assets/partners/ccfm.svg", alt: "CCFM - Centro Cultural Franco-Moçambicano", width: 222, height: 144 },
                { src: "/assets/partners/tela-digital.svg", alt: "Tela Digital", width: 222, height: 144 },
            ],
        },
    },
    {
        left: {
            label: "Projecto Financiado por",
            logos: [
                { src: "/assets/partners/camoes.svg", alt: "Camões, Instituto da Cooperação e da Língua", width: 222, height: 144 },
            ],
            caption: "Projecto financiado pela Cooperação Portuguesa. Camões, I.P.",
        },
        right: {
            label: "Outros Apoios Financeiros",
            logos: [
                { src: "/assets/partners/creation-africa.svg", alt: "Création Africa Moçambique", width: 222, height: 144 },
                { src: "/assets/partners/silhueta.svg", alt: "Embaixada Francesa", width: 222, height: 144 },
                { src: "/assets/partners/institute.svg", alt: "Institut Français", width: 222, height: 144 },
            ],
            caption: "Projecto implementado com apoio da Embaixada Francesa em Moçambique – FEF Criação Moçambique 2025",
        },
    },
    {
        left: {
            label: "Uma Fase Preliminar Deste Projecto foi Financiado por",
            logos: [
                { src: "/assets/partners/uniao-europeia.svg", alt: "União Europeia", width: 222, height: 144 },
                { src: "/assets/partners/palop-tl.svg", alt: "PALOP-TL UE", width: 222, height: 144 },
            ],
        },
        right: {
            label: "Parceiros Institucionais",
            logos: [
                { src: "/assets/partners/inic.svg", alt: "INIC - Instituto Nacional das Indústrias Culturais e Criativas", width: 222, height: 144 },
                { src: "/assets/partners/ministerio-da-cultura.svg", alt: "Ministério da Cultura e das Indústrias Criativas", width: 222, height: 144 },
            ],
        },
    },
];

const LogoGroup: React.FC<{ group: PartnerGroup }> = ({ group }) => (
    <div className="flex flex-col items-start gap-6">
        <span className="text-sm text-rede-surface tracking-wide">{group.label}</span>

        <div className="flex flex-wrap items-center gap-x-12 gap-y-6">
            {group.logos.map((logo, index) => (
                <div className={`w-${logo.width} h-${logo.height}`} key={"vr" + index}>
                    <Image
                        key={logo.src}
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        className="w-full h-full max-h-14 object-cover"
                    />
                </div>
            ))}
        </div>

        {group.caption && (
            <p className="w-full text-center text-xs text-rede-surface">{group.caption}</p>
        )}
    </div>
);

export const Partners: React.FC = () => {
    return (
        <section className="w-full h-auto bg-rede-white">
            <div className="relative w-full max-w-360 h-auto mx-auto flex flex-col justify-center items-center gap-2.5 pt-28 pb-10">

                <div className="w-full h-36">
                    <Heading className={`${customBlur.className} text-rede-surface text-[96px] font-medium leading-24`}>Parceiros</Heading>
                </div>

                <div className="flex flex-col w-full gap-14">
                    {partnerRows.map((row) => (
                        <div key={row.left.label} className="flex w-full items-start justify-between gap-20">
                            <LogoGroup group={row.left} />
                            <LogoGroup group={row.right} />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}