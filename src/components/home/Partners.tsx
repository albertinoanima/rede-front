import Image from "next/image";
import { Text } from "../ui/text";

type Logo = {
    src: string;
    alt: string;
    width: number;
    height: number;
};

const logos: Logo[] = [
    { src: "/assets/partners/lgs/camoes.png", alt: "Camões, Instituto da Cooperação e da Língua", width: 350, height: 300 },
    { src: "/assets/partners/lgs/museu-cinema.png", alt: "Museu do Cinema", width: 250, height: 200 },
    { src: "/assets/partners/lgs/tela-digital.png", alt: "Tela Digital", width: 250, height: 200 },
    { src: "/assets/partners/lgs/ekran.png", alt: "Ekran Eventos", width: 250, height: 200 },
    { src: "/assets/partners/lgs/paralax.png", alt: "Paralax", width: 250, height: 200 },
    { src: "/assets/partners/lgs/cultiv-arte.png", alt: "Cultiv'Arte", width: 250, height: 200 },
    { src: "/assets/partners/lgs/brasao.png", alt: "Brasão de Armas", width: 250, height: 200 },
    { src: "/assets/partners/lgs/uniao-europeia.png", alt: "União Europeia", width: 250, height: 200 },
    { src: "/assets/partners/lgs/expertise-france.png", alt: "Expertise France", width: 250, height: 200 },
    { src: "/assets/partners/lgs/palop-tl.png", alt: "PALOP-TL UE", width: 250, height: 200 },
    { src: "/assets/partners/lgs/ccfm.png", alt: "CCFM - Centro Cultural Franco-Moçambicano", width: 250, height: 200 },
    { src: "/assets/partners/lgs/creation-africa.png", alt: "Création Africa Moçambique", width: 250, height: 200 },
    { src: "/assets/partners/lgs/silhueta.png", alt: "Embaixada Francesa", width: 250, height: 200 },
    { src: "/assets/partners/lgs/institute.png", alt: "Institut Français 30", width: 250, height: 200 },
    { src: "/assets/partners/lgs/inic.png", alt: "Institute Nacional", width: 250, height: 200 },
];

export const Partners: React.FC = () => {
    return (
        <section className="w-full h-auto bg-rede-white py-16">
            <div className="w-full max-w-360 mx-auto flex flex-wrap items-center justify-center gap-x-14  px-5">

                <div className="w-full h-auto flex flex-col justify-center items-center">
                    <Text className="text-[12px] leading-4 font-normal text-rede-surface">PROJECTO FINANCIADO POR</Text>
                    <div className="flex items-center justify-center w-62.5 h-50">
                        <Image
                            src={logos[0].src}
                            alt={logos[0].alt}
                            width={logos[0].width}
                            height={logos[0].height}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="w-full h-auto flex justify-center items-center">
                    <div className="w-auto flex flex-col items-center justify-center">
                        <Text className="text-[12px] leading-4 font-normal text-rede-surface">UMA INICIATIVA</Text>
                        <div className="flex items-center justify-center w-62.5 h-50">
                            <Image
                                src={logos[1].src}
                                alt={logos[1].alt}
                                width={logos[1].width}
                                height={logos[1].height}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="w-auto flex flex-col items-center justify-center">
                        <Text className="text-[12px] leading-4 font-normal text-rede-surface">PARCEIROS DE IMPLEMENTAÇÃO</Text>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center justify-center w-62.5 h-50">
                                <Image
                                    src={logos[2].src}
                                    alt={logos[2].alt}
                                    width={logos[2].width}
                                    height={logos[2].height}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex items-center justify-center w-62.5 h-50">
                                <Image
                                    src={logos[3].src}
                                    alt={logos[3].alt}
                                    width={logos[3].width}
                                    height={logos[3].height}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex items-center justify-center w-62.5 h-50">
                                <Image
                                    src={logos[4].src}
                                    alt={logos[4].alt}
                                    width={logos[4].width}
                                    height={logos[4].height}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>



                <div className="w-full h-auto flex justify-center items-center">
                    <div className="w-auto flex flex-col items-center justify-center">
                        <Text className="text-[12px] leading-4 font-normal text-rede-surface">OUTROS APOIOS FINANCEIROS</Text>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center justify-center w-62.5 h-50">
                                <Image
                                    src={logos[5].src}
                                    alt={logos[5].alt}
                                    width={logos[5].width}
                                    height={logos[5].height}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex items-center justify-center w-62.5 h-50">
                                <Image
                                    src={logos[6].src}
                                    alt={logos[6].alt}
                                    width={logos[6].width}
                                    height={logos[6].height}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex items-center justify-center w-62.5 h-50">
                                <Image
                                    src={logos[7].src}
                                    alt={logos[7].alt}
                                    width={logos[7].width}
                                    height={logos[7].height}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex items-center justify-center w-62.5 h-50">
                                <Image
                                    src={logos[8].src}
                                    alt={logos[8].alt}
                                    width={logos[8].width}
                                    height={logos[8].height}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="w-full h-auto flex justify-center items-center">
                    <div className="w-auto flex flex-col items-center justify-center">
                        <Text className="text-[12px] leading-4 font-normal text-rede-surface">UMA FASE ANTERIOR DESTE PROJECTO FOI FINANCIADA POR</Text>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center justify-center w-62.5 h-50">
                                <Image
                                    src={logos[9].src}
                                    alt={logos[9].alt}
                                    width={logos[9].width}
                                    height={logos[9].height}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex items-center justify-center w-62.5 h-50">
                                <Image
                                    src={logos[10].src}
                                    alt={logos[10].alt}
                                    width={logos[10].width}
                                    height={logos[10].height}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex items-center justify-center w-62.5 h-50">
                                <Image
                                    src={logos[11].src}
                                    alt={logos[11].alt}
                                    width={logos[11].width}
                                    height={logos[11].height}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex items-center justify-center w-62.5 h-50">
                                <Image
                                    src={logos[12].src}
                                    alt={logos[12].alt}
                                    width={logos[12].width}
                                    height={logos[12].height}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex items-center justify-center w-62.5 h-50">
                                <Image
                                    src={logos[13].src}
                                    alt={logos[13].alt}
                                    width={logos[13].width}
                                    height={logos[13].height}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* {logos.map((logo) => (
                    <div key={logo.src} className={`flex items-center justify-center w-[250px] h-[200px]`}>
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={logo.width}
                            height={logo.height}
                            className="h-full w-auto object-contain"
                        />
                    </div>
                ))} */}
            </div>
        </section>
    );
};