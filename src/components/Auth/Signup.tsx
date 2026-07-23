"use client"

import { customBlur } from '@/app/fonts';
import { User } from '@/types/User';
import { Heading } from "../ui/heading"
import { Text } from '../ui/text';
import { SubmitEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import { signup } from '@/actions/authentication';
import { Button } from '../ui/button';
import { Building2, ChevronRight, UserRound } from 'lucide-react';
import { Input } from '../ui/Input';
import { GoogleIcon } from '@/icons/GoogleIcon';


const selectClassNames = {
    triggerClassName: "rounded-full border-2 border-white px-3 text-rede-white outline-none",
    popoverClassName: "rounded-[12px] border-2 border-white px-3 text-rede-white outline-none mt-[10px]",
    satelliteClassName: "border-2 border-white",
};


export const Signup: React.FC = () => {
    const [message, setMessage] = useState("");
    const [showMessaage, setShowMessaage] = useState(false);

    const [googleProfile, setGoogleProfile] = useState<{
        name: string;
        image: string;
        email: string;
    }>();

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

    useEffect(() => {
        if (googleProfile && ((googleProfile?.name?.length > 0) || (googleProfile?.email?.length > 0) || (googleProfile?.image?.length > 0))) {
            setRegister((lastState) => ({ ...lastState, loginType: "google" }))
        }
    }, [googleProfile])


    const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        setShowMessaage(false);

        const responseData = await signup(register);
        if (responseData?.error) {
            setShowMessaage(true);
            setMessage(responseData?.message || "Ocorreu um erro ao criar a conta.");
            return;
        }

        if (responseData?.data) {
            const { user, requiresEmailConfirmation } = responseData?.data;
            if (user.loginType === "google") {
                //
            }

            if (user.loginType === "normal" && requiresEmailConfirmation) {
                setShowMessaage(true);
                setMessage("Conta criada com sucesso.<br/> Aceda ao seu e-mail para confirmar a conta.");
            }
        }
    }

    return (
        <div className="w-md max-w-[calc(100vw-32px)] bg-rede-surface p-6">

            <div className="w-full h-auto flex flex-col items-center gap-4">
                <Heading className={`text-rede-white ${customBlur.className} text-[48px] leading-14`}>Criar conta</Heading>
                <Text className="text-[12px] font-medium leading-4">Crie sua conta na REDE PALOP+TL</Text>

                <div className='w-full grid grid-cols-2 gap-3 mt-2'>
                    <div className={`h-2 rounded-full bg-rede-yellow`} key={"fjfddckv"} />
                    <div className={`h-2 rounded-full 'bg-rede-white/20`} key={"fjfdsckv"} />
                </div>
                <Text className="text-[12px] font-bold leading-4 text-rede-yellow">
                    Passo 1 de 2: {register.profileData.accountType === 'individual' ? 'Perfil Individual' : 'Perfil Empresa'}
                </Text>
            </div>

            <form className='w-full h-auto mt-6' onSubmit={handleSubmit}>
                <div className='w-full flex flex-col gap-6'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                        <Button
                            type='button'
                            variant={register.profileData.accountType === 'individual' ? 'primary' : 'secondary'}
                            icon={<UserRound width={14} height={14} />}
                            className={register.profileData.accountType === 'individual' ? 'text-rede-surface' : ''}
                            containerClassName='w-full'
                            onClick={() => setRegister((lastState) => ({ ...lastState, accountType: 'individual' }))}
                        >
                            Individual
                        </Button>
                        <Button
                            type='button'
                            variant={register.profileData.accountType === 'company' ? 'primary' : 'secondary'}
                            icon={<Building2 width={14} height={14} />}
                            className={register.profileData.accountType === 'company' ? 'text-rede-surface' : ''}
                            containerClassName='w-full'
                            onClick={() => setRegister((lastState) => ({ ...lastState, accountType: 'company' }))}
                        >
                            Empresa
                        </Button>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='text-[20px] leading-7' htmlFor='nameField'>Nome</label>
                        <Input variant={"secondary"} placeholder='Seu nome' className='w-full' id='nameField' value={register.name} onChange={(event) => setRegister((lastState) => ({ ...lastState, name: event.target.value }))} />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='text-[20px] leading-7' htmlFor='emailField'>Email</label>
                        <Input variant={"secondary"} type='email' placeholder='seu@email.com' className='w-full' id='emailField' value={register.email} onChange={(event) => setRegister((lastState) => ({ ...lastState, email: event.target.value }))} />
                    </div>

                    <Button type='button' variant={"secondary"} icon={<GoogleIcon width={12} height={12} />} className='w-full' containerClassName='w-full'>
                        Continue com Google
                    </Button>

                    {googleProfile && (
                        <div className='flex items-center gap-3 rounded-lg border border-rede-white/20 p-3'>
                            <div
                                className='h-10 w-10 rounded-full bg-cover bg-center bg-rede-white/10'
                                style={{ backgroundImage: googleProfile.image ? `url(${googleProfile.image})` : undefined }}
                            />
                            <div className='min-w-0'>
                                <Text className='text-[13px] font-bold truncate'>{googleProfile.name}</Text>
                                <Text className='text-[12px] text-rede-white/70 truncate'>{googleProfile.email}</Text>
                            </div>
                        </div>
                    )}

                    <Button type='submit' containerClassName='w-full' className='text-rede-surface' icon={<ChevronRight width={14} height={14} />} iconPosition='right'>
                        Avançar
                    </Button>
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
