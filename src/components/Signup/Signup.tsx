"use client"

import { customBlur } from '@/app/fonts';
import { User } from '@/types/User';
import { Heading } from "../ui/heading"
import { Text } from '../ui/text';
import { useMemo, useState, useTransition } from 'react';
import Link from 'next/link';
import { countries } from './data';
import { StepOne } from './StepOne';
import { StepTwo } from './StepTwo';


const selectClassNames = {
    triggerClassName: "rounded-full border-2 border-white px-3 text-rede-white outline-none",
    popoverClassName: "rounded-[12px] border-2 border-white px-3 text-rede-white outline-none mt-[10px]",
    satelliteClassName: "border-2 border-white",
};


export const Signup: React.FC = () => {
    const [step, setStep] = useState(1);
    const [isPending, startTransition] = useTransition();
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

    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const canGoToStep2 = register.profileData.accountType && register.name?.trim() && /\S+@\S+\.\S+/.test(register.email);

    const cityOptions = useMemo(() => {
        return countries.find((item) => item.value === register.profileData.country)?.cities.map((item) => ({
            label: item,
            value: item,
        })) ?? [];
    }, [register.profileData.country]);


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


    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Final Data: ", register);

    }


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
                        Passo {step} de 2: {step === 1 ? 'Tipo de Conta' : register.profileData.accountType === 'individual' ? 'Perfil Individual' : 'Perfil Empresa'}
                    </Text>
                </div>

                <form className='w-full h-auto mt-6' onSubmit={handleSubmit}>

                    {step === 1 && (
                        <StepOne
                            register={register}
                            setRegister={setRegister}
                            canGoToStep2={canGoToStep2}
                        />
                    )}

                    {step === 2 && (
                        <StepTwo
                            setStep={setStep}
                            register={register}
                            setRegister={setRegister}
                            selectedServices={selectedServices}
                            setSelectedServices={setSelectedServices}
                            cityOptions={cityOptions}
                            isPending={isPending}
                            startTransition={startTransition}
                            updateCountry={updateCountry}
                            selectClassNames={selectClassNames}
                            services={[]}
                        />
                    )}

                    {/* {feedback && (
                        <Text className='text-[12px] leading-4 font-bold text-center text-rede-yellow mt-5'>{feedback}</Text>
                    )} */}

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
