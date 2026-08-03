import { Button } from "../ui/button";
import { Heading } from "../ui/heading";
import { customBlur } from "@/app/fonts";
import { Text } from "../ui/text";


export const SectionViewNews: React.FC = () => {
    return (
        <div className="w-full max-w-350 h-auto mr-auto ml-auto pt-16 bg-rede-bg">
            <div className="w-full flex gap-2.5 border-b-[1.3px] border-rede-white pb-12.5">
                <Button size={"sm"} variant={"secondary"}>Festival</Button>
                <Button size={"sm"} variant={"secondary"}>15 de Fev</Button>
            </div>

            <div className="w-full h-auto flex flex-col gap-4 mt-28 pb-10">
                <Heading className={`${customBlur.className} text-[96px] leading-24 font-normal pb-12.5 text-center text-rede-yellow`}>Festival de Cinema Lusófono anuncia seleção</Heading>

                <div className="w-full h-auto flex flex-col gap-8">
                    <Text className="text-[20px] font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>

                    <Text className="text-[20px] font-semibold">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>


                    <Text className="text-[20px] font-semibold">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</Text>

                    <Text className="text-[20px] font-semibold">Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</Text>

                    <Text className="text-[20px] font-semibold">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</Text>
                </div>
            </div>
            <div className="w-full flex gap-2.5 border-t-[1.3px] border-rede-white pt-12.5">
                <Button size={"sm"} variant={"secondary"}>Festival</Button>
                <Button size={"sm"} variant={"secondary"}>15 de Fev</Button>
            </div>
        </div>
    )
}