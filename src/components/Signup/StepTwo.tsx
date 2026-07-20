import { ChevronLeft } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/Input";
import { Text } from "../ui/text";
import { AccountType } from "@/types/User";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { GoogleProfile } from "./Signup";
import Link from "next/link";
import { Select } from "../ui/select";
import { countries } from "./data";
import { SelectMultiple } from "../ui/select-multiple";


type StepOneType = {
    setStep: Dispatch<SetStateAction<number>>;
    creationDate: string;
    setCreationDate: Dispatch<SetStateAction<string>>;
    artisticName: string;
    setArtisticName: Dispatch<SetStateAction<string>>;
    birthDate: string;
    setBirthDate: Dispatch<SetStateAction<string>>;

    isRegistered: boolean;
    setIsRegistered: Dispatch<SetStateAction<boolean>>;

    cityOptions: {
        label: string;
        value: string;
    }[]

    city: string;
    setCity: Dispatch<SetStateAction<string>>;

    country: string;
    updateCountry: (value: SetStateAction<string>) => void,

    selectClassNames: {
        triggerClassName: string;
        popoverClassName: string;
        satelliteClassName: string;
    };

    professionalEmail: string;
    setProfessionalEmail: Dispatch<SetStateAction<string>>;

    professionalPhone: string;
    setProfessionalPhone: Dispatch<SetStateAction<string>>;

    associatedWithCompany: string;
    setAssociatedWithCompany: Dispatch<SetStateAction<string>>;

    associatedCompanyName: string;
    setAssociatedCompanyName: Dispatch<SetStateAction<string>>;

    accountType: AccountType;
    setAccountType: Dispatch<SetStateAction<AccountType>>;
    handleGoogleSignup: () => Promise<void>;
    canGoToStep2: boolean | "";


    renderSocialFields: () => ReactNode;
    selectedServices: string;
    setSelectedServices: Dispatch<SetStateAction<string>>;
}

export const StepTwo: React.FC<StepOneType> = ({selectedServices, setSelectedServices, renderSocialFields, associatedWithCompany, setAssociatedWithCompany, associatedCompanyName,  setAssociatedCompanyName,  professionalPhone, setProfessionalPhone, professionalEmail, setProfessionalEmail, selectClassNames, country, updateCountry, city, setCity, creationDate, setCreationDate, setStep, artisticName, setArtisticName, birthDate, setBirthDate, cityOptions, accountType, isRegistered, setIsRegistered }) => {
    return (
        <div className='w-full flex flex-col gap-6'>
            {accountType === 'individual' ? (
                <>
                    <div className='flex flex-col gap-2'>
                        <label className='text-[20px] leading-7' htmlFor='artisticNameField'>Nome Artístico</label>
                        <Input variant={"secondary"} placeholder='Nome artístico' id='artisticNameField' value={artisticName} onChange={(event) => setArtisticName(event.target.value)} />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='text-[20px] leading-7' htmlFor='birthDateField'>Data de Nascimento</label>
                        <Input variant={"secondary"} type='date' id='birthDateField' value={birthDate} onChange={(event) => setBirthDate(event.target.value)} />
                    </div>
                </>
            ) : (
                <>
                    <div className='flex flex-col gap-2'>
                        <label className='text-[20px] leading-7' htmlFor='creationDateField'>Data de Criação</label>
                        <Input variant={"secondary"} type='date' id='creationDateField' value={creationDate} onChange={(event) => setCreationDate(event.target.value)} />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='text-[20px] leading-7'>A entidade está registada?</label>
                        <Select variant={"secondary"} options={[{ label: 'Sim', value: 'yes' }, { label: 'Não', value: 'no' }]} value={isRegistered} onChange={setIsRegistered} {...selectClassNames} />
                    </div>
                </>
            )}

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='flex flex-col gap-2'>
                    <label className='text-[20px] leading-7'>País</label>
                    <Select variant={"secondary"} options={countries.map(({ label, value }) => ({ label, value }))} value={country} onChange={updateCountry} placeholder='Selecione o país' {...selectClassNames} />
                </div>

                <div className='flex flex-col gap-2'>
                    <label className='text-[20px] leading-7'>Cidade</label>
                    <Select variant={"secondary"} options={cityOptions} value={city} onChange={setCity} placeholder={country ? 'Selecione a cidade' : 'Selecione o país primeiro'} disabled={!country} {...selectClassNames} />
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <label className='text-[20px] leading-7' htmlFor='professionalEmailField'>Email Profissional</label>
                <Input variant={"secondary"} type='email' placeholder='profissional@email.com' id='professionalEmailField' value={professionalEmail} onChange={(event) => setProfessionalEmail(event.target.value)} />
            </div>

            <div className='flex flex-col gap-2'>
                <label className='text-[20px] leading-7' htmlFor='professionalPhoneField'>Telefone profissional / WhatsApp</label>
                <Input variant={"secondary"} type='tel' placeholder='+670 0000 0000' id='professionalPhoneField' value={professionalPhone} onChange={(event) => setProfessionalPhone(event.target.value)} />
            </div>

            {accountType === 'individual' && (
                <div className='flex flex-col gap-2'>
                    <label className='text-[20px] leading-7'>Está associado a alguma empresa ou colectivo?</label>
                    <Select variant={"secondary"} options={[{ label: 'Não', value: 'no' }, { label: 'Sim', value: 'yes' }]} value={associatedWithCompany} onChange={setAssociatedWithCompany} {...selectClassNames} />
                    {associatedWithCompany === 'yes' && (
                        <Input variant={"secondary"} placeholder='Nome da empresa ou colectivo' value={associatedCompanyName} onChange={(event) => setAssociatedCompanyName(event.target.value)} />
                    )}
                </div>
            )}

            <div className='flex flex-col gap-3'>
                <Text className='text-[20px] leading-7'>Redes Sociais</Text>
                {renderSocialFields()}
            </div>

            {accountType === 'company' && (
                <>
                    <div className='flex flex-col gap-2'>
                        <label className='text-[20px] leading-7'>Serviços fornecidos</label>
                        <SelectMultiple variant={"secondary"} options={services} value={selectedServices} onChange={setSelectedServices} placeholder='Selecione todos os serviços' {...selectClassNames} />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='text-[20px] leading-7' htmlFor='otherServiceField'>Acrescentar serviço não descrito</label>
                        <Input variant={"secondary"} placeholder='Outro serviço' id='otherServiceField' value={otherService} onChange={(event) => setOtherService(event.target.value)} />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='text-[20px] leading-7'>A empresa/organização fornece aluguer de equipamentos?</label>
                        <Select variant={"secondary"} options={[{ label: 'Não', value: 'no' }, { label: 'Sim', value: 'yes' }]} value={rentsEquipment} onChange={setRentsEquipment} {...selectClassNames} />
                        {rentsEquipment === 'yes' && (
                            <textarea
                                className='min-h-28 w-full rounded-[16px] border-2 border-white bg-rede-surface px-6 py-4 text-[14px] font-medium text-rede-white outline-none placeholder:text-rede-white/40'
                                placeholder='Indique quais equipamentos estão disponíveis para aluguer'
                                value={equipmentRentalDetails}
                                onChange={(event) => setEquipmentRentalDetails(event.target.value)}
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