import Link from "next/link";
import { Button } from "./ui/button";

export const TopBar: React.FC = () => {
    return (
        <div className="w-full border-b-2 border-white fixed z-12 bg-black/70 backdrop-blur-sm">
            <div className="w-full max-w-360 h-16 ml-auto mr-auto flex justify-between items-center">
                <Link className="w-36 h-16" href="/">
                    <img src="/assets/logo-small.png" alt="REDE Logo" className="w-full h-full object-cover" />
                </Link>
                <div>
                    <nav>
                        <ul className="list-none text-[#ffffff]">
                            <li className="inline-table font-medium leading-4 pr-2.5">Sobre nós</li>
                            <li className="inline-table font-medium leading-4 pr-2.5">Rede</li>
                            <li className="inline-table font-medium leading-4 pr-2.5">
                                <Link href="/agency">
                                    <Button variant={"secondary"} className="bg-[#ffffff] rounded-4xl py-4.5 h-1.5 text-[#1D1D1B] cursor-pointer">
                                        Agência
                                    </Button>
                                </Link>
                            </li>
                            <li className="inline-table font-medium leading-4 pr-2.5">Notícias</li>
                            <li className="inline-table font-medium leading-4 pr-2.5">Oportunidades</li>
                            <li className="inline-table font-medium leading-4 pr-2.5">Workshops</li>
                            <li className="inline-table font-medium leading-4 pr-2.5">Newsletter</li>
                            <li className="inline-table font-medium leading-4">Film Commission</li>
                        </ul>
                    </nav>
                </div>
                <div className="flex gap-3">
                    <Button className="h-7 bg-black py-3.5 px-1.5 border-2 border-white text-[#ffffff]">
                        PT
                    </Button>
                    <Button className="w-30 h-7 bg-black py-3.5 px-1.5 border-2 border-white text-[#ffffff]">
                        Login
                    </Button>
                    <Button className="w-30 h-7 bg-[#FCCB1C] py-4 px-1.5 rounded-4xl text-[#1D1D1B]">
                        Sign Up
                    </Button>
                </div>
            </div>
        </div>
    )
}
