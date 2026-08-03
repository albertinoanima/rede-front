"use client"

import { Button } from "../ui/button";
import { Input } from "../ui/Input";
import { Text } from "../ui/text";
import { SubmitEvent, useMemo, useState } from "react";
import Link from "next/link";
import { Select, SelectOption } from "../ui/select";
import { countries, socialFields } from "./data";
import { SelectMultiple } from "../ui/select-multiple";
import { SocialNetwork } from "@/types/Profile";
import { User } from "@/types/User";
import { customBlur } from "@/app/fonts";
import { Heading } from "../ui/heading";
import { updateLoggedUser } from "@/actions/users";
import { useAuth } from "@/hooks/useAuth";


type OnBoardingType = {
    selectClassNames: {
        triggerClassName: string;
        popoverClassName: string;
        satelliteClassName: string;
    };
}

export const OnBoarding: React.FC<OnBoardingType> = ({ selectClassNames }) => {
    const { user } = useAuth();
    const services: any[] = [];
    const [isLoading, setLoading] = useState();
    const [selectedServices, setSelectedServices] = useState<string[]>([]);

    const [register, setRegister] = useState<User>({
        name: "",
        email: "",

        loginType: "normal",
        userType: "normal",

        profileData: {
            accountType: 'individual',
            artisticName: "",
            birthDate: "",
            city: "",
            commercialName: "",
            country: "",
            creationDate: "",
            isRegistered: false,
            otherService: "",
            professionalEmail: "",
            professionalPhone: "",
            services: [],
            coverImageUrl: "",
            imageUrl: ""
        }
    });

    const updateCountry = (value: string) => {
        setRegister((lastState) => {
            return {
                ...lastState,
                profileData: {
                    ...lastState.profileData, // Preserva as outras propriedades de profileData
                    country: value,
                    city: ''
                }
            };
        });
    };

    const cityOptions = useMemo(() => {
        return countries.find((item) => item.value === register.profileData.country)?.cities.map((item) => ({
            label: item,
            value: item,
        })) ?? [];
    }, [register.profileData.country]);


    const RenderSocialFields = () => (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {socialFields.map((field) => (
                <div className='flex flex-col gap-2' key={field.key}>
                    <label className='text-[16px] leading-6' htmlFor={`${field.key}Field`}>{field.label}</label>
                    <Input
                        variant={"secondary"}
                        placeholder={field.placeholder}
                        className='w-full'
                        id={`${field.key}Field`}
                        value={register.profileData.socialLinks?.[field.key] ?? ''}
                        onChange={(event) => updateSocialLink(field.key, event.target.value)}
                    />
                </div>
            ))}
        </div>
    );

    const updateSocialLink = (key: SocialNetwork, value: string) => {
        setRegister((lastState) => {
            const currentSocialLinks = lastState.profileData.socialLinks;
            return {
                ...lastState,
                profileData: {
                    ...lastState.profileData,
                    socialLinks: {
                        ...currentSocialLinks,
                        [key]: value,
                    }
                }
            };
        });
    }


    const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log(register.profileData);

        // const response = await updateLoggedUser({
        //     profileData: register.profileData,
        // });

        location.href = "/profile";

    }


    return (
        <div className="w-md max-w-[calc(100vw-32px)] bg-rede-surface p-6">
            <div className="w-full h-auto flex flex-col items-center gap-4">
                <Heading className={`text-rede-white ${customBlur.className} text-[48px] leading-14`}>Preencher Perfil</Heading>
                <Text className="text-[12px] font-medium leading-4">Crie sua conta na REDE PALOP+TL</Text>

                <div className='w-full grid grid-cols-2 gap-3 mt-2'>
                    <div className={`h-2 rounded-full 'bg-rede-white/20`} key={"fjfdsckv"} />
                    <div className={`h-2 rounded-full bg-rede-yellow`} key={"fjfddckv"} />
                </div>
                <Text className="text-[12px] font-bold leading-4 text-rede-yellow">
                    Passo 2 de 2: {register.profileData.accountType === 'individual' ? 'Perfil Individual' : 'Perfil Empresa'}
                </Text>
            </div>

            <form className='w-full h-auto mt-6' onSubmit={handleSubmit}>
                <div className='w-full flex flex-col gap-6'>
                    {register?.profileData?.accountType === 'individual' ? (
                        <>
                            <div className='flex flex-col gap-2'>
                                <label className='text-[20px] leading-7' htmlFor='artisticNameField'>Nome Artístico</label>
                                <Input variant={"secondary"} placeholder='Nome artístico' id='artisticNameField' value={register.profileData.artisticName} onChange={(event) => setRegister((lastState) => ({ ...lastState, profileData: { ...lastState.profileData, artisticName: event.target.value } }))} />
                            </div>

                            <div className='flex flex-col gap-2'>
                                <label className='text-[20px] leading-7' htmlFor='birthDateField'>Data de Nascimento</label>
                                <Input variant={"secondary"} type='date' id='birthDateField' value={register.profileData.birthDate} onChange={(event) => setRegister((lastState) => ({ ...lastState, profileData: { ...lastState.profileData, birthDate: event.target.value } }))} />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='flex flex-col gap-2'>
                                <label className='text-[20px] leading-7' htmlFor='creationDateField'>Data de Criação</label>
                                <Input variant={"secondary"} type='date' id='creationDateField' value={register.profileData.creationDate} onChange={(event) => setRegister((lastState) => ({ ...lastState, profileData: { ...lastState.profileData, creationDate: event.target.value } }))} />
                            </div>

                            <div className='flex flex-col gap-2'>
                                <label className='text-[20px] leading-7'>A entidade está registada?</label>
                                <Select variant={"secondary"} options={[{ label: 'Sim', value: 'yes' }, { label: 'Não', value: 'no' }]} value={register.profileData.isRegistered ? "yes" : "no"} onChange={(value) => setRegister((lastState) => ({ ...lastState, profileData: { ...lastState.profileData, isRegistered: (value === "yes") } }))} {...selectClassNames} />
                            </div>
                        </>
                    )}

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='flex flex-col gap-2'>
                            <label className='text-[20px] leading-7'>País</label>
                            <Select variant={"secondary"} options={countries.map(({ label, value }) => ({ label, value }))} value={register.profileData.country} onChange={updateCountry} placeholder='Selecione o país' {...selectClassNames} />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label className='text-[20px] leading-7'>Cidade</label>
                            <Select variant={"secondary"} options={cityOptions} value={register.profileData.city} onChange={(value) => setRegister((lastState) => ({ ...lastState, profileData: { ...lastState.profileData, city: value } }))} placeholder={register.profileData.country ? 'Selecione a cidade' : 'Selecione o país primeiro'} disabled={!register.profileData.country} {...selectClassNames} />
                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='text-[20px] leading-7' htmlFor='professionalEmailField'>Email Profissional</label>
                        <Input variant={"secondary"} type='email' placeholder='profissional@email.com' id='professionalEmailField' value={register.profileData.professionalEmail} onChange={(event) => setRegister((lastState) => ({ ...lastState, profileData: { ...lastState.profileData, professionalEmail: event.target.value } }))} />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='text-[20px] leading-7' htmlFor='professionalPhoneField'>Telefone profissional / WhatsApp</label>
                        <Input variant={"secondary"} type='tel' placeholder='+670 0000 0000' id='professionalPhoneField' value={register.profileData.professionalPhone} onChange={(event) => setRegister((lastState) => ({ ...lastState, profileData: { ...lastState.profileData, professionalPhone: event.target.value } }))} />
                    </div>

                    {register.profileData.accountType === 'individual' && (
                        <div className='flex flex-col gap-2'>
                            <label className='text-[20px] leading-7'>Está associado a alguma empresa ou colectivo?</label>
                            <Select variant={"secondary"} options={[{ label: 'Não', value: 'no' }, { label: 'Sim', value: 'yes' }]} value={register.profileData.associatedWithCompany?.status ? "yes" : "no"} onChange={(value) => {

                                setRegister((lastState) => {
                                    const tempLastState = (value === "yes") ?
                                        { ...lastState, profileData: { ...lastState.profileData, associatedWithCompany: { status: true, companyName: "" } } } :
                                        { ...lastState, profileData: { ...lastState.profileData, associatedWithCompany: undefined } }
                                    return tempLastState;
                                })

                            }} {...selectClassNames} />

                            {register.profileData.associatedWithCompany && (
                                <Input variant={"secondary"} placeholder='Nome da empresa ou colectivo' value={register.profileData.associatedWithCompany?.companyName} onChange={(event) => {
                                    setRegister((lastState) => ({ ...lastState, profileData: { ...lastState.profileData, associatedWithCompany: { status: true, companyName: event.target.value } } }))
                                }} />
                            )}
                        </div>
                    )}

                    <div className='flex flex-col gap-3'>
                        <Text className='text-[20px] leading-7'>Redes Sociais</Text>
                        {RenderSocialFields()}
                    </div>

                    {register.profileData.accountType === 'company' && (
                        <>
                            <div className='flex flex-col gap-2'>
                                <label className='text-[20px] leading-7'>Serviços fornecidos</label>
                                <SelectMultiple variant={"secondary"} options={services} value={selectedServices} onChange={setSelectedServices} placeholder='Selecione todos os serviços' {...selectClassNames} />
                            </div>

                            <div className='flex flex-col gap-2'>
                                <label className='text-[20px] leading-7' htmlFor='otherServiceField'>Acrescentar serviço não descrito</label>
                                <Input variant={"secondary"} placeholder='Outro serviço' id='otherServiceField' value={register.profileData.otherService} onChange={(event) => setRegister((lastState) => ({ ...lastState, profileData: { ...lastState.profileData, otherService: event.target.value } }))} />
                            </div>

                            <div className='flex flex-col gap-2'>
                                <label className='text-[20px] leading-7'>A empresa/organização fornece aluguer de equipamentos?</label>
                                <Select variant={"secondary"} options={[{ label: 'Não', value: 'no' }, { label: 'Sim', value: 'yes' }]} value={register.profileData.rentsEquipment?.status ? "yes" : "none"} onChange={(value) => {

                                    setRegister((lastState) => {
                                        const tempLastState = (value === "yes") ?
                                            { ...lastState, profileData: { ...lastState.profileData, rentsEquipment: { status: true, equipmentName: "" } } } :
                                            { ...lastState, profileData: { ...lastState.profileData, rentsEquipment: undefined } }
                                        return tempLastState;
                                    })

                                }} {...selectClassNames} />

                                {register.profileData.rentsEquipment && (
                                    <textarea
                                        className='min-h-28 w-full rounded-2xl border-2 border-white bg-rede-surface px-6 py-4 text-[14px] font-medium text-rede-white outline-none placeholder:text-rede-white/40'
                                        placeholder='Indique quais equipamentos estão disponíveis para aluguer'
                                        value={register.profileData.rentsEquipment?.equipmentName}
                                        onChange={(event) => setRegister((lastState) => ({ ...lastState, profileData: { ...lastState.profileData, rentsEquipment: { status: true, equipmentName: event.target.value } } }))}
                                    />
                                )}
                            </div>
                        </>
                    )}

                    <Text className='font-medium leading-7 text-center'>
                        Aceito&nbsp;
                        <Link href="/terms-of-use" className='text-rede-yellow'>Termos de Uso</Link>
                        &nbsp;e&nbsp;<br />
                        <Link href="/privacy-policies" className='text-rede-yellow'>Política de Privacidade</Link>
                    </Text>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                        {/* <Button type='button' variant={"secondary"} containerClassName='w-full' icon={<ChevronLeft width={14} height={14} />} onClick={() => updateStep(1)}>
                        Voltar
                    </Button> */}
                        <Button type='submit' containerClassName='w-full' className='text-rede-surface' disabled={isLoading}>
                            {isLoading ? 'A processar...' : 'Terminar'}
                        </Button>
                    </div>
                </div>


                <div className='w-full flex justify-center mt-8 mb-2'>
                    <Text className='text-[12px] leading-4 font-bold text-center flex items-center gap-2.5'>
                        Já tem uma conta?
                        <Link href="/login" className='text-[12px] leading-4 font-bold text-rede-yellow'>
                            Fazer Login
                        </Link>
                    </Text>
                </div>
            </form>
        </div>
    )
}