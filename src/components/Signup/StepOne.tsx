"use client"

import { Text } from "../ui/text";
import { Input } from "../ui/Input";
import { Button } from "../ui/button";
import { GoogleIcon } from "@/icons/GoogleIcon";
import { Dispatch, SetStateAction, useState } from "react";
import { Building2, ChevronRight, UserRound } from "lucide-react";
import { signupv2 } from "@/actions/authentication";
import { User } from "@/types/User";


type StepOneType = {
    register: User;
    setRegister: Dispatch<SetStateAction<User>>;
    canGoToStep2: string | boolean | undefined;
}

export const StepOne: React.FC<StepOneType> = ({ register, setRegister, canGoToStep2 }) => {

    const [googleProfile, setGoogleProfile] = useState<{
        name: string;
        image: string;
        email: string;
    }>();


    const createUser = async (localRegister: User) => {
        const responseData = await signupv2(localRegister);
        console.log("responseData front: ", responseData);

        //setStep(2)
    }


    return (
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

            <Button type='button' containerClassName='w-full' className='text-rede-surface' icon={<ChevronRight width={14} height={14} />} iconPosition='right' disabled={!canGoToStep2} onClick={() => createUser(register)} >
                Avançar
            </Button>
        </div>
    )
}