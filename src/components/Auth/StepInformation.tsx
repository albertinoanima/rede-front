"use client"

import { Text } from "../ui/text";
import { Button } from "../ui/button";
import { MouseEventHandler } from "react";

export const StepInformation: React.FC<{ message: string; onConfirmAction?: MouseEventHandler<HTMLButtonElement> | undefined }> = ({ message, onConfirmAction }) => {
    return (
        <div className='w-full flex flex-col gap-6'>
            <Text className='text-[14px] leading-6 font-bold text-center flex justify-center items-center gap-2.5' dangerouslySetInnerHTML={{ __html: message}}/>
            <Button type='button' containerClassName='w-full' className='text-rede-surface' onClick={onConfirmAction} >
                Entendo
            </Button>
        </div>
    )
}