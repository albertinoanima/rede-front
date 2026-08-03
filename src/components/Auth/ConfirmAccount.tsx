"use client"

import { Text } from "../ui/text";
import { SubmitEvent } from 'react';
import { Input } from "../ui/Input";
import { Button } from "../ui/button";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { confirmAccountAndChangePassword } from "@/actions/authentication";
import { useAuth } from "@/hooks/useAuth";

export const ConfirmAccount: React.FC<{ token: string }> = ({ token }) => {
    const { updaInternalDataState } = useAuth();
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<string>("");
    const [successInfo, setSuccessInfo] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setShowRePassword] = useState(false);


    const submitForm = async (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        setMessage("");

        if (password.length < 8 || rePassword.length < 0) {
            setMessage("A palavra-passe deve ter pelomenos 8 carateres");
            return;
        }

        if (password !== rePassword) {
            setMessage("Confirme a palavra-passe nos dois campos.");
            return;
        }

        setIsLoading(true);
        const responseData = await confirmAccountAndChangePassword(token, password);
        const { error, message } = responseData;

        if (String(error || "").length > 0 && String(message || "").length > 0) {
            setMessage(String(message || ""));
            return;
        }

        if (responseData?.user && responseData?.token) {
            setSuccessInfo(true);
            updaInternalDataState({ profileData: responseData?.user, token: responseData?.token });
            setMessage("Palavra-passe alteradaa com sucesso! A Redirecionar...");

            setTimeout(() => {
                location.href = "/onboarding";
            }, 2000)
        }

        setIsLoading(false);
    }


    return (
        <form onSubmit={submitForm}>
            <div className='w-full flex flex-col gap-6'>
                <div className='flex flex-col gap-2'>
                    <label className='text-[20px] leading-7' htmlFor='passField'>Palavra-passe</label>
                    <Input variant={"secondary"} placeholder='********' type={showPassword ? "text" : "password"} className='w-full' id='passField' value={password} onChange={(event) => setPassword(event.target.value)}
                        icon={showPassword ? <Eye width={12} height={12} /> : <EyeOff width={12} height={12} />}
                        iconPosition={"right"}
                        onIconClick={() => setShowPassword((lastState) => (!lastState))}
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label className='text-[20px] leading-7' htmlFor='repassField'>Confirme</label>
                    <Input variant={"secondary"} placeholder='********' type={showRePassword ? "text" : "password"} className='w-full' id='repassField' value={rePassword} onChange={(event) => setRePassword(event.target.value)}
                        icon={showRePassword ? <Eye width={12} height={12} /> : <EyeOff width={12} height={12} />}
                        iconPosition={"right"}
                        onIconClick={() => setShowRePassword((lastState) => (!lastState))}
                    />
                </div>

                {/* {
                    (message.length > 0) &&
                    <Text className='text-[14px] leading-6 font-bold text-center flex justify-center items-center gap-2.5 text-rede-red' dangerouslySetInnerHTML={{ __html: message }} />
                } */}

                {(message.length > 0) &&
                    <Text className={`text-[12px] leading-[16px] ${successInfo ? "text-rede-yellow" : "text-rede-red"} text-center`} dangerouslySetInnerHTML={{ __html: message }} />
                }

                <Button type='submit' containerClassName='w-full' className='text-rede-surface' disabled={isLoading} >
                    {isLoading ? "A processar" : "Alterar"}
                </Button>
            </div>
        </form>
    )
}