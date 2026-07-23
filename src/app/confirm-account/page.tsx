import { customBlur } from "../fonts";
import { Heading } from "@/components/ui/heading";
import { ConfirmAccount } from "@/components/Auth/ConfirmAccount";

export default function ConfirmAccountPage() {
    
    return (
        <main className="bg-rede-bg">
            <div className="w-full min-h-screen bg-[url('/assets/signup/signup.png')] bg-cover bg-center flex justify-center items-start md:items-center overflow-y-auto py-10 pt-28 pb-10">
                <div className="w-md max-w-[calc(100vw-32px)] bg-rede-surface p-6">
                    <div className="w-full h-auto flex flex-col items-center gap-4 mb-8">
                        <Heading className={`text-rede-white ${customBlur.className} text-[48px] leading-14`}>Confirmar conta</Heading>
                        {/* <Text className="text-[12px] font-medium leading-4">Criar uma nova palavra-passe</Text> */}
                    </div>

                    <ConfirmAccount/>
                </div>
            </div>
        </main>
    )
}