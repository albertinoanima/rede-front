import Image from "next/image";
import { Text } from "../ui/text";

// Ajusta aqui o tamanho default de todos os logos
const LOGO_SIZE = { width: 200, height: 100 };

type Logo = {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    className?: string;
};

type PartnerGroup = {
    title: string;
    align?: "left" | "right";
    logos: Logo[];
};

type PartnerRow = {
    left: PartnerGroup;
    right?: PartnerGroup;
};

const PARTNER_ROWS: PartnerRow[] = [
    {
        left: {
            title: "UMA INICIATIVA",
            logos: [{ src: "/assets/partners/museu-cinema.png" }],
        },
        right: {
            title: "PARCEIROS DE IMPLEMENTAÇÃO",
            align: "right",
            logos: [
                { src: "/assets/partners/ekran-eventos.png" },
                { src: "/assets/partners/paralax.png" },
                { src: "/assets/partners/tela-digital.png" },
            ],
        },
    },
    {
        left: {
            title: "FINANCIADO PELA COOPERAÇÃO PORTUGUESA - CAMÕES, IP",
            logos: [{ src: "/assets/partners/camoes.png" }],
        },
        right: {
            title: "PARCEIROS INSTITUCIONAIS",
            align: "right",
            logos: [
                { src: "/assets/partners/inic.png" },
                { src: "/assets/partners/ministerio-da-cultura.png" },
            ],
        },
    },
    {
        left: {
            title: "OUTROS APOIOS FINANCEIROS",
            logos: [
                { src: "/assets/partners/cultivarte.png" },
                { src: "/assets/partners/ministerio-da-educacao.png" },
                { src: "/assets/partners/uniao.png" },
                { src: "/assets/partners/expertise-france.png" },
            ],
        },
    },
    {
        left: {
            title: "FASES DESTE PROJECTO TIVERAM APOIO FINANCEIRO",
            logos: [
                { src: "/assets/partners/uniao-europeia.png" },
                { src: "/assets/partners/palop-tl.png" },
                { src: "/assets/partners/ue.png", className: "ml-[-8px]" },
            ],
        },
        right: {
            title: "IMPLEMENTAÇÃO COM APOIO DE FRANÇA EM MOÇAMBIQUE",
            align: "right",
            logos: [
                { src: "/assets/partners/ccfm.png" },
                { src: "/assets/partners/france-2.png" },
            ],
        },
    },
];

function LogoBox({ src, alt = "", width, height, className = "" }: Logo) {
    return (
        <div
            className={`h-37.5 ${className}`}
            style={{ width: width ?? LOGO_SIZE.width }}
        >
            <Image
                src={src}
                width={width ?? LOGO_SIZE.width}
                height={height ?? LOGO_SIZE.height}
                alt={alt}
                className="w-full h-full object-contain"
            />
        </div>
    );
}

function PartnerGroup({ title, align = "left", logos }: PartnerGroup) {
    return (
        <div className="w-auto flex-col">
            <Text
                className={`text-[12px] leading-4 font-medium text-rede-surface ${
                    align === "right" ? "text-right" : ""
                }`}
            >
                {title}
            </Text>
            <div className="w-auto h-37.5 flex gap-1">
                {logos.map((logo) => (
                    <LogoBox key={logo.src} {...logo} />
                ))}
            </div>
        </div>
    );
}

export function Partners() {
    return (
        <section className="bg-rede-white py-16">
            <div className="w-full max-w-[1440px] flex flex-col gap-6 mr-auto ml-auto">
                {PARTNER_ROWS.map((row) => (
                    <div
                        key={row.left.title}
                        className="w-full flex justify-between items-center"
                    >
                        <PartnerGroup {...row.left} />
                        {row.right && <PartnerGroup {...row.right} />}
                    </div>
                ))}
            </div>
        </section>
    );
}