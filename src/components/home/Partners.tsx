import Image from "next/image";
import { Text } from "../ui/text";
import { Heading } from "../ui/heading";

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
    { src: "/assets/partners/lgs/ministerio-da-cultura.png", alt: "Ministério da Cultura", width: 250, height: 200 },
    { src: "/assets/partners/lgs/ministerio-da-educacao.png", alt: "Ministério da Cultura", width: 250, height: 200 },
    { src: "/assets/partners/lgs/uniao-europeia-com-texto.png", alt: "Ministério da Cultura", width: 250, height: 200 }
];

export const Partners: React.FC = () => {
    return (
        <section className="w-full h-auto bg-rede-white py-16">
            <div className="w-full max-w-360 mx-auto flex flex-col flex-wrap items-center justify-center gap-10  px-5">

                <div className="w-full h-auto flex justify-center items-center">
                    <div className="w-auto flex flex-col items-center justify-center">
                        <Text className="text-[14px] leading-5 font-normal text-rede-surface">UMA INICIATIVA</Text>
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
                        <Text className="text-[14px] leading-5 font-normal text-rede-surface">PARCEIROS DE IMPLEMENTAÇÃO</Text>
                        <div className="flex justify-between items-center">
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
                                    src={logos[2].src}
                                    alt={logos[2].alt}
                                    width={logos[2].width}
                                    height={logos[2].height}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="w-full h-auto flex justify-center items-center">
                    <div className="w-auto flex flex-col items-center justify-center">
                        <Text className="text-[14px] leading-5 font-normal text-rede-surface">PROJECTO FINANCIADO POR</Text>
                        <div className="flex items-center justify-center w-62.5 h-50">
                            <Image
                                src={logos[0].src}
                                alt={logos[0].alt}
                                width={logos[0].width}
                                height={logos[0].height}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    <div className="w-auto flex flex-col items-center justify-center">
                        <Text className="text-[14px] leading-5 font-normal text-rede-surface">PARCEIROS INSTITUCIONAIS</Text>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center justify-center w-62.5 h-50">
                                <Image
                                    src={logos[14].src}
                                    alt={logos[14].alt}
                                    width={logos[14].width}
                                    height={logos[14].height}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex items-center justify-center w-62.5 h-50">
                                <Image
                                    src={logos[15].src}
                                    alt={logos[15].alt}
                                    width={logos[15].width}
                                    height={logos[15].height}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="w-full h-auto flex justify-center items-center">
                    <div className="w-auto flex flex-col items-center justify-center">
                        <Text className="text-[14px] leading-5 font-normal text-rede-surface">OUTROS APOIOS FINANCEIROS</Text>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center justify-center w-62.5 h-50">
                                <Image
                                    src={logos[5].src}
                                    alt={logos[5].alt}
                                    width={logos[5].width}
                                    height={logos[5].height}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="flex items-center justify-center w-62.5 h-50">
                                <Image
                                    src={logos[16].src}
                                    alt={logos[16].alt}
                                    width={logos[16].width}
                                    height={logos[16].height}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <div className="flex items-center justify-center w-62.5 h-50">
                                <Image
                                    src={logos[17].src}
                                    alt={logos[17].alt}
                                    width={logos[17].width}
                                    height={logos[17].height}
                                    className="w-full h-full object-contain"
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

                                <Text className="absolute mt-30 text-black">Implementador</Text>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="w-full h-auto flex justify-center items-center">
                    <div className="w-auto flex flex-col items-center justify-center">
                        <Text className="text-[14px] leading-5 font-normal text-rede-surface">UMA FASE ANTERIOR DESTE PROJECTO FOI FINANCIADA POR</Text>
                        <div className="flex justify-between items-center">
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
                                    src={logos[9].src}
                                    alt={logos[9].alt}
                                    width={logos[9].width}
                                    height={logos[9].height}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="flex flex-col justify-between items-center">

                                <div className="flex justify-between items-center">
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


                                <Text className="text-black text-[12px] text-center">Projecto implementado com apoio da Embaixada Francesa em<br /> Moçambique - FEF Criação Moçambique 2025s</Text>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="w-full flex flex-col justify-center">
                    <Heading className="text-center text-[12px] font-bold text-black">DECLARAÇÕES DE RESPONSABILIDADE</Heading>
                    <Text className="text-center text-[12px] text-black">
                        Esta plataforma foi produzida pela AAMCM - Associação dos Amigos do Museu do Cinema em Moçambique e seus parceiros de implementação, para a iniciativa REDE de Cinema e Audiovisual PALOP + TL, com apoio financeiro do Camões - Instituto da Cooperação e da Língua, I.P., através do programa PROCERIS. Todas as informações e opiniões aqui expressas são da inteira responsabilidade dos/as autores/as, e não representam a posição do Camões, I.P. <br /><br />
                        Esta plataforma teve  apoio adicional do Cultiv'arte - financiado pela União Europeia, implementado pela Expertise France em parceria com o Ministério da Educação e Cultura de Moçambique. O seu conteúdo é da exclusiva responsabilidade do Beneficiário e não pode, de forma alguma, ser considerado como refletindo as opiniões da Expertise France e do Doador.
                    </Text>
                </div>

            </div>
        </section>
    );
};