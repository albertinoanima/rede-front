"use client"

import { customBlur } from '@/app/fonts';
import { signup, signupWithGoogle } from '@/actions/authentication';
import { GoogleIcon } from '@/icons/GoogleIcon';
import { AccountType } from '@/types/User';
import { Profile, SocialLinks, SocialNetwork } from '@/types/Profile';
import { Heading } from "../ui/heading"
import { Text } from '../ui/text';
import { Input } from '../ui/Input';
import { Select } from '../ui/select';
import { SelectMultiple } from '../ui/select-multiple';
import { Button } from '../ui/button';
import { Building2, ChevronLeft, ChevronRight, UserRound } from 'lucide-react';
import { FormEvent, useMemo, useState, useTransition } from 'react';
import Link from 'next/link';
import { countries, socialFields } from './data';
import { StepOne } from './StepOne';

export type GoogleProfile = {
    name: string;
    email: string;
    image?: string;
}

type GoogleCredentialResponse = {
    credential?: string;
}

declare global {
    interface Window {
        google?: {
            accounts: {
                id: {
                    initialize: (config: {
                        client_id: string;
                        callback: (response: GoogleCredentialResponse) => void;
                        ux_mode?: 'popup' | 'redirect';
                    }) => void;
                    prompt: () => void;
                }
            }
        }
    }
}


const selectClassNames = {
    triggerClassName: "rounded-full border-2 border-white px-3 text-rede-white outline-none",
    popoverClassName: "rounded-[12px] border-2 border-white px-3 text-rede-white outline-none mt-[10px]",
    satelliteClassName: "border-2 border-white",
};

const decodeGoogleCredential = (credential: string): GoogleProfile => {
    const payload = credential.split('.')[1];
    const decoded = JSON.parse(window.atob(payload.replace(/-/g, '+').replace(/_/g, '/')));

    return {
        name: decoded.name ?? '',
        email: decoded.email ?? '',
        image: decoded.picture,
    };
}

const loadGoogleScript = () => {
    const existingScript = document.querySelector<HTMLScriptElement>('script[src="https://accounts.google.com/gsi/client"]');
    if (existingScript) return Promise.resolve();

    return new Promise<void>((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.defer = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Nao foi possivel carregar o Google Identity Services.'));
        document.head.appendChild(script);
    });
}

export const Signup: React.FC = () => {
    const [step, setStep] = useState(1);
    const [accountType, setAccountType] = useState<AccountType>('individual');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [googleProfile, setGoogleProfile] = useState<GoogleProfile | null>(null);
    const [artisticName, setArtisticName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [creationDate, setCreationDate] = useState('');
    const [isRegistered, setIsRegistered] = useState('no');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [professionalEmail, setProfessionalEmail] = useState('');
    const [professionalPhone, setProfessionalPhone] = useState('');
    const [associatedWithCompany, setAssociatedWithCompany] = useState('no');
    const [associatedCompanyName, setAssociatedCompanyName] = useState('');
    const [socialLinks, setSocialLinks] = useState<SocialLinks>({});
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [otherService, setOtherService] = useState('');
    const [rentsEquipment, setRentsEquipment] = useState('no');
    const [equipmentRentalDetails, setEquipmentRentalDetails] = useState('');
    const [feedback, setFeedback] = useState('');
    const [isPending, startTransition] = useTransition();

    const cityOptions = useMemo(() => {
        return countries.find((item) => item.value === country)?.cities.map((item) => ({
            label: item,
            value: item,
        })) ?? [];
    }, [country]);

    const canGoToStep2 = accountType && name.trim() && /\S+@\S+\.\S+/.test(email);

    const updateCountry = (value: string) => {
        setCountry(value);
        setCity('');
    }

    const updateSocialLink = (key: SocialNetwork, value: string) => {
        setSocialLinks((current) => ({ ...current, [key]: value }));
    }

    const handleGoogleSignup = async () => {
        const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

        if (!clientId) {
            setFeedback('Configure NEXT_PUBLIC_GOOGLE_CLIENT_ID para ativar o popup real do Google.');
            return;
        }

        try {
            await loadGoogleScript();
            window.google?.accounts.id.initialize({
                client_id: clientId,
                ux_mode: 'popup',
                callback: async ({ credential }) => {
                    if (!credential) return;
                    const profile = decodeGoogleCredential(credential);
                    setGoogleProfile(profile);
                    setName(profile.name);
                    setEmail(profile.email);
                    setFeedback('Conta Google selecionada com sucesso.');
                    await signupWithGoogle({ ...profile, accountType });
                },
            });
            window.google?.accounts.id.prompt();
        } catch (error) {
            setFeedback(error instanceof Error ? error.message : 'Nao foi possivel abrir o popup do Google.');
        }
    }

    const buildProfile = (): Profile => {
        const baseProfile = {
            name,
            email,
            profileImageUrl: googleProfile?.image,
            country,
            city,
            professionalEmail,
            professionalPhone,
            socialLinks,
        };

        if (accountType === 'individual') {
            return {
                ...baseProfile,
                accountType: 'individual',
                artisticName,
                birthDate,
                associatedWithCompany: associatedWithCompany === 'yes',
                associatedCompanyName: associatedWithCompany === 'yes' ? associatedCompanyName : undefined,
            };
        }

        return {
            ...baseProfile,
            accountType: 'company',
            creationDate,
            isRegistered: isRegistered === 'yes',
            services: selectedServices,
            otherService: otherService || undefined,
            rentsEquipment: rentsEquipment === 'yes',
            equipmentRentalDetails: rentsEquipment === 'yes' ? equipmentRentalDetails : undefined,
        };
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFeedback('');

        startTransition(async () => {
            const result = await signup({
                name,
                email,
                accountType,
                profile: buildProfile(),
                googleProfile: googleProfile ?? undefined,
            });

            setFeedback(result.message ?? (result.ok ? 'Conta criada com sucesso.' : 'Nao foi possivel criar a conta.'));
        });
    }

    const renderSocialFields = () => (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {socialFields.map((field) => (
                <div className='flex flex-col gap-2' key={field.key}>
                    <label className='text-[16px] leading-6' htmlFor={`${field.key}Field`}>{field.label}</label>
                    <Input
                        variant={"secondary"}
                        placeholder={field.placeholder}
                        className='w-full'
                        id={`${field.key}Field`}
                        value={socialLinks[field.key] ?? ''}
                        onChange={(event) => updateSocialLink(field.key, event.target.value)}
                    />
                </div>
            ))}
        </div>
    );

    return (
        <div className="w-full min-h-screen bg-[url('/assets/signup/signup.png')] bg-cover bg-center flex justify-center items-start md:items-center overflow-y-auto py-10 pt-28 pb-10">
            <div className="w-md max-w-[calc(100vw-32px)] bg-rede-surface p-6">
                <div className="w-full h-auto flex flex-col items-center gap-4">
                    <Heading className={`text-rede-white ${customBlur.className} text-[48px] leading-14`}>Sign Up</Heading>
                    <Text className="text-[12px] font-medium leading-4">Crie sua conta na REDE PALOP+TL</Text>
                    <div className='w-full grid grid-cols-2 gap-3 mt-2'>
                        {[1, 2].map((item) => (
                            <div key={item} className={`h-2 rounded-full ${step >= item ? 'bg-rede-yellow' : 'bg-rede-white/20'}`} />
                        ))}
                    </div>
                    <Text className="text-[12px] font-bold leading-4 text-rede-yellow">
                        Passo {step} de 2: {step === 1 ? 'Tipo de Conta' : accountType === 'individual' ? 'Perfil Individual' : 'Perfil Empresa'}
                    </Text>
                </div>

                <form className='w-full h-auto mt-6' onSubmit={handleSubmit}>
                    {step === 1 && (
                        <StepOne
                            setStep={setStep}
                            name={name}
                            setName={setName}
                            email={email}
                            setEmail={setEmail}
                            accountType={accountType}
                            canGoToStep2={canGoToStep2}
                            setAccountType={setAccountType}
                            googleProfile={googleProfile}
                            handleGoogleSignup={handleGoogleSignup}
                        />
                    )}

                    {step === 2 && (
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
                    )}

                    {feedback && (
                        <Text className='text-[12px] leading-4 font-bold text-center text-rede-yellow mt-5'>{feedback}</Text>
                    )}

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
        </div>
    )
}
