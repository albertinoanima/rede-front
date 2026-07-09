"use client"

import { customBlur } from '@/app/fonts';
import { Heading } from "./ui/heading"
import { Text } from './ui/text';
import { Input } from './ui/Input';
import { EyeOff } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { GoogleIcon } from '@/icons/GoogleIcon';
import { FacebookIcon } from '@/icons/FaceBookIcon';
import { Select } from './ui/select';


export const Signup: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="w-full min-h-screen bg-[url('/assets/signup/signup.png')] bg-cover bg-center flex justify-center items-start md:items-center overflow-y-auto py-10 pt-28 pb-10">
            <div className="w-md hh-173.25 bg-rede-surface p-6">
                <div className="w-full h-auto flex flex-col items-center gap-6">
                    <Heading className={`text-rede-white ${customBlur.className} text-[48px] leading-14`}>Sign Up</Heading>
                    <Text className="text-[12px] font-medium leading-4">Crie sua conta na REDE PALOP+TL</Text>
                </div>

                <div className='w-full h-auto'>
                    <div className='w-full flex flex-col gap-6'>
                        <div className='flex flex-col gap-2'>
                            <label className='text-[20px] leading-7' htmlFor='nameField'>Nome Completo</label>
                            <Input variant={"secondary"} placeholder='Seu nome' className='w-full' id='nameField' />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label className='text-[20px] leading-7' htmlFor='emailField'>Email</label>
                            <Input variant={"secondary"} placeholder='seu@email.com' className='w-full' id='emailField' />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label className='text-[20px] leading-7' htmlFor='countryField'>País</label>
                            <Select variant={"secondary"} options={[{ label: "Moçambique", value: "1234566" }, { label: "Angola", value: "654321" }]}
                                triggerClassName="rounded-full border-2 border-white px-3 text-rede-white outline-none"
                                popoverClassName="rounded-[12px] border-2 border-white px-3 text-rede-white outline-none mt-[10px]"
                                satelliteClassName="border-2 border-white" />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label className='text-[20px] leading-7' htmlFor='countryField'>Tipo de Perfil</label>
                            <Select variant={"secondary"} options={[{ label: "Moçambique", value: "1234566" }, { label: "Angola", value: "654321" }]}
                                triggerClassName="rounded-full border-2 border-white px-3 text-rede-white outline-none"
                                popoverClassName="rounded-[12px] border-2 border-white px-3 text-rede-white outline-none mt-[10px]"
                                satelliteClassName="border-2 border-white" />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label className='text-[20px] leading-7' htmlFor='passField'>Password</label>
                            <Input variant={"secondary"} type={showPassword ? 'text' : 'password'} placeholder='******' className='w-full' icon={<EyeOff width={12} height={12} />} iconPosition='right' onIconClick={() => setShowPassword((lastState) => (!lastState))} id='passField' />
                        </div>

                        {/* 
                        <div className='flex flex-col gap-2'>
                            <label className='text-[20px] leading-7' htmlFor='passField'>Confirmar Password</label>
                            <Input variant={"secondary"} type={showPassword ? 'text' : 'password'} placeholder='******' className='w-full' icon={<EyeOff width={12} height={12} />} iconPosition='right' onIconClick={() => setShowPassword((lastState) => (!lastState))} id='passField' />
                        </div> 
                        */}
                    </div>

                    <Text className='font-medium leading-7 text-center mt-6 mb-6'>Aceito&nbsp;
                        <Link href="/terms-of-use" className='text-rede-yellow'>Termos de Uso</Link>
                        &nbsp;e&nbsp;<br />
                        <Link href="/privacy-policies" className='text-rede-yellow'>Politica de Privacidade</Link>
                    </Text>

                    <div className='w-full h-auto flex flex-col gap-6'>
                        <Button variant={"secondary"} icon={<GoogleIcon width={12} height={12} />} className='w-full'>
                            Continue com Google
                        </Button>
                        {/* 
                        <Button variant={"secondary"} icon={<FacebookIcon width={12} height={12} />} className='w-full'>
                            Continue com Facebook
                        </Button> 
                        */}
                    </div>

                    <div className='w-full mt-8 mb-8'>
                        <Button containerClassName='w-full' className='text-rede-surface'>
                            Criar Conta
                        </Button>
                    </div>

                    <div className='w-full flex justify-center mt-6 mb-6'>
                        <Text className='text-[12px] leading-4 font-bold text-center flex items-center gap-2.5'>
                            Já tem uma conta?
                            <Link href="/login" className='text-[12px] leading-4 font-bold text-rede-yellow'>
                                Fazer Login
                            </Link>
                        </Text>
                    </div>
                </div>
            </div>
        </div>
    )
} 