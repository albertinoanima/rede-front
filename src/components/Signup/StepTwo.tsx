"use client"

import { ChevronLeft } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/Input";
import { Text } from "../ui/text";
import { Dispatch, SetStateAction, TransitionStartFunction } from "react";
import Link from "next/link";
import { Select, SelectOption } from "../ui/select";
import { countries, socialFields } from "./data";
import { SelectMultiple } from "../ui/select-multiple";
import { SocialNetwork } from "@/types/Profile";
import { User } from "@/types/User";


type StepOneType = {
    setStep: Dispatch<SetStateAction<number>>;
    register: User;
    setRegister: Dispatch<SetStateAction<User>>;
    cityOptions: {
        label: string;
        value: string;
    }[];
    updateCountry: (value: string) => void;
    selectClassNames: {
        triggerClassName: string;
        popoverClassName: string;
        satelliteClassName: string;
    };
    selectedServices: string[];
    setSelectedServices: Dispatch<SetStateAction<string[]>>;
    isPending: boolean;
    startTransition: TransitionStartFunction;
    services: SelectOption[];
}

export const StepTwo: React.FC<StepOneType> = ({ register, setRegister, services, isPending, selectedServices, setSelectedServices, selectClassNames, updateCountry, setStep, cityOptions }) => {

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

    return (
        <div className='w-full flex flex-col gap-6'>
            {register.profileData.accountType === 'individual' ? (
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
                <Button type='button' variant={"secondary"} containerClassName='w-full' icon={<ChevronLeft width={14} height={14} />} onClick={() => setStep(1)}>
                    Voltar
                </Button>
                <Button type='submit' containerClassName='w-full' className='text-rede-surface' disabled={isPending}>
                    {isPending ? 'A criar...' : 'Criar Conta'}
                </Button>
            </div>
        </div>
    )
}