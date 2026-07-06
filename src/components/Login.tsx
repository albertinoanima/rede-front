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


export const Login: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="w-full h-screen bg-[url('/assets/login/login.png')] bg-cover bg-center flex items-center justify-center">
            <div className="w-md hh-173.25 bg-rede-black p-6">
                <div className="w-full h-auto flex flex-col items-center gap-6">
                    <Heading className={`text-rede-white ${customBlur.className} text-[48px] leading-14`}>Login</Heading>
                    <Text className="text-[12px] font-medium leading-4">Acesse sua conta na REDE PALOP+TL</Text>
                </div>

                <div className='w-full h-auto'>
                    <div className='w-full flex flex-col gap-6'>
                        <div className='flex flex-col gap-2'>
                            <label className='text-[20px] leading-7' htmlFor='emailField'>Email</label>
                            <Input variant={"secondary"} placeholder='seu@email.com' className='w-full' id='emailField' />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label className='text-[20px] leading-7' htmlFor='passField'>Password</label>
                            <Input variant={"secondary"} type={showPassword ? 'text' : 'password'} placeholder='******' className='w-full' icon={<EyeOff width={12} height={12} />} iconPosition='right' onIconClick={() => setShowPassword((lastState) => (!lastState))} id='passField' />
                        </div>
                    </div>

                    <Link href="/reset-pawword" className='flex justify-end mt-4.5'>
                        <Text className='text-[12px] leading-4 font-bold'>Esqueci a senha</Text>
                    </Link>


                    <Text className='font-medium leading-7 text-center mt-6 mb-6'>Ou</Text>

                    <div className='w-full h-auto flex flex-col gap-6'>
                        <Button variant={"secondary"} icon={<GoogleIcon width={12} height={12} />} className='w-full'>
                            Continue com Google
                        </Button>
                        <Button variant={"secondary"} icon={<FacebookIcon width={12} height={12} />} className='w-full'>
                            Continue com Facebook
                        </Button>
                    </div>

                    <div className='w-full mt-8 mb-8'>
                        <Button containerClassName='w-full' className='text-rede-black'>
                            Entrar
                        </Button>
                    </div>

                    <div className='w-full flex justify-center mt-6 mb-6'>
                        <Text className='text-[12px] leading-4 font-bold text-center flex items-center gap-2.5'>
                            Ainda não tem conta
                            <Link href="/signup" className='text-[12px] leading-4 font-bold text-rede-yellow'>
                                Criar conta
                            </Link>
                        </Text>
                    </div>
                </div>
            </div>
        </div>
    )
} 