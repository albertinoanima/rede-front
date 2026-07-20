import { Building2, ChevronRight, UserRound } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/Input";
import { GoogleIcon } from "@/icons/GoogleIcon";
import { Text } from "../ui/text";
import { AccountType } from "@/types/User";
import { Dispatch, SetStateAction } from "react";
import { GoogleProfile } from "./Signup";


type StepOneType = {
    setStep: Dispatch<SetStateAction<number>>;
    name: string;
    setName: Dispatch<SetStateAction<string>>;
    email: string;
    setEmail: Dispatch<SetStateAction<string>>;
    googleProfile: GoogleProfile | null;
    accountType: AccountType;
    setAccountType: Dispatch<SetStateAction<AccountType>>;
    handleGoogleSignup: () => Promise<void>;
    canGoToStep2: boolean | "";
}

export const StepOne: React.FC<StepOneType> = ({ canGoToStep2, setStep, name, setName, email, setEmail, googleProfile, accountType, setAccountType, handleGoogleSignup }) => {
    return (
        <div className='w-full flex flex-col gap-6'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                <Button
                    type='button'
                    variant={accountType === 'individual' ? 'primary' : 'secondary'}
                    icon={<UserRound width={14} height={14} />}
                    className={accountType === 'individual' ? 'text-rede-surface' : ''}
                    containerClassName='w-full'
                    onClick={() => setAccountType('individual')}
                >
                    Individual
                </Button>
                <Button
                    type='button'
                    variant={accountType === 'company' ? 'primary' : 'secondary'}
                    icon={<Building2 width={14} height={14} />}
                    className={accountType === 'company' ? 'text-rede-surface' : ''}
                    containerClassName='w-full'
                    onClick={() => setAccountType('company')}
                >
                    Empresa
                </Button>
            </div>

            <div className='flex flex-col gap-2'>
                <label className='text-[20px] leading-7' htmlFor='nameField'>Nome</label>
                <Input variant={"secondary"} placeholder='Seu nome' className='w-full' id='nameField' value={name} onChange={(event) => setName(event.target.value)} />
            </div>

            <div className='flex flex-col gap-2'>
                <label className='text-[20px] leading-7' htmlFor='emailField'>Email</label>
                <Input variant={"secondary"} type='email' placeholder='seu@email.com' className='w-full' id='emailField' value={email} onChange={(event) => setEmail(event.target.value)} />
            </div>

            <Button type='button' variant={"secondary"} icon={<GoogleIcon width={12} height={12} />} className='w-full' containerClassName='w-full' onClick={handleGoogleSignup}>
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

            <Button type='button' containerClassName='w-full' className='text-rede-surface' icon={<ChevronRight width={14} height={14} />} iconPosition='right' disabled={!canGoToStep2} onClick={() => setStep(2)}>
                Avançar
            </Button>
        </div>
    )
}