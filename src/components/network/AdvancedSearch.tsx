"use client"

import { customBlur } from '@/app/fonts';
import { ProfileCard, ProfileType } from '../ProfileCard';
import { Button } from '../ui/button';
import { Heading } from '../ui/heading';
import { FilterSidebar } from './FilterSidebar';


// 
//Array de perfis
const profiles: ProfileType[] = [
    {
        id: "fhxtuhndkuhndxrjdx",
        cover: "/assets/profiles/logo-1.png",
        tags: ["Guiné-Bissau", "Bissau", "Fotográfo"],
        title: "Lorem ipsum dolor sit consectetur"
    },
    {
        id: "qmpwlszkvbterygaxc",
        cover: "/assets/opportunities/image-5.png",
        tags: ["Moçambique", "Nampula", "Produtor"],
        title: "Lorem ipsum dolor sit consectetur"
    },
    {
        id: "znxbdotgmreiaqycvh",
        cover: "/assets/profiles/photo-2.png",
        tags: ["Moçambique", "Nampula", "Produtor"],
        title: "Lorem ipsum dolor sit consectetur"
    },
    {
        id: "jrkeulcmxzsqbgtvfw",
        cover: "/assets/opportunities/image-6.png",
        tags: ["Guiné-Bissau", "Bissau", "Fotográfo"],
        title: "Lorem ipsum dolor sit consectetur"
    },
    {
        id: "wmvqcslzjnrytexbao",
        cover: "/assets/profiles/logo-2.png",
        tags: ["Angola", "Luanda", "Animador"],
        title: "Lorem ipsum dolor sit consectetur"
    },
    {
        id: "gpxfuadyvnmzeklcqi",
        cover: "/assets/opportunities/image-7.png",
        tags: ["Guiné-Bissau", "Bissau", "Fotográfo"],
        title: "Lorem ipsum dolor sit consectetur"
    },
    {
        id: "btnhysjcmqvewxoduz",
        cover: "/assets/profiles/photo-5.png",
        tags: ["Angola", "Luanda", "Animador"],
        title: "Lorem ipsum dolor sit consectetur"
    },
    {
        id: "lcvmyszqpajodwiukr",
        cover: "/assets/profiles/logo-3.png",
        tags: ["Angola", "Luanda", "Animador"],
        title: "Lorem ipsum dolor sit consectetur"
    },
    {
        id: "vhqzmdotuenraxysbc",
        cover: "/assets/opportunities/image-7.png",
        tags: ["Angola", "Luanda", "Animador"],
        title: "Lorem ipsum dolor sit consectetur"
    },
    {
        id: "eyoltqbxvdznucpmiw",
        cover: "/assets/profiles/logo-4.png",
        tags: ["Guiné-Bissau", "Bissau", "Fotográfo"],
        title: "Lorem ipsum dolor sit consectetur"
    },
    {
        id: "rzupwmavjcxnbeqhkt",
        cover: "/assets/opportunities/image-8.png",
        tags: ["Moçambique", "Nampula", "Produtor"],
        title: "Lorem ipsum dolor sit consectetur"
    },
    {
        id: "ndqxytlvamockjzguf",
        cover: "/assets/opportunities/image-2.png",
        tags: ["Moçambique", "Nampula", "Produtor"],
        title: "Lorem ipsum dolor sit consectetur"
    }
];

export const AdvancedSearch: React.FC = () => {
    return (
        <section className="w-full h-auto">

            <div className="w-full max-w-360 h-auto ml-auto mr-auto">
                <div className='flex items-center justify-between mt-5'>
                    <Heading level={"h2"} className={`${customBlur} ml-3 text-[48px] leading-11.5 font-medium mb-5 text-rede-yellow`}>
                        Pesquisa <br /> Avançada
                    </Heading>

                    <div className="flex justify-end gap-3 px-6 py-4">
                        <Button variant={"secondary"}>
                            Ordenar por
                        </Button>
                        <Button variant={"secondary"}>
                            8 resultados
                        </Button>     
                    </div>
                </div>

                <div className="flex mt-10">
                    <FilterSidebar />
                    <div className="flex-1 flex flex-col">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-6 pb-6">
                            {
                                profiles.map((profile, index) => (
                                    <ProfileCard profileData={profile} key={profile.id} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}