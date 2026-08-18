import Image from "next/image"
import { Text } from "../../ui/text"
import { Button } from "../../ui/button"
import { Dispatch, SetStateAction } from "react"
import { User } from "@/types/User"
import { Camera, Edit2, GlobeIcon, Mail, MapPin, PhoneIcon, Plus } from "lucide-react"
import { customBlur } from "@/app/fonts"

type ShowProfileType = {
    profile?: User;
    isAuthenticated?: boolean;
    editting?: boolean;
    setIsEditing?: Dispatch<SetStateAction<boolean>>;
}

export const ShowProfile: React.FC<ShowProfileType> = ({ profile, isAuthenticated = false, setIsEditing, editting }) => {
  return (
    <div className='w-full max-w-360 flex gap-5'>
      <div className={`w-53 h-53 relative ${isAuthenticated ? "border-[1.3] border-white" : ""}`}>
        <div className='absolute inset-1 flex items-center justify-center'>
          <Button variant={"secondary"} className='rounded-full p-9 shrink-0 aspect-square flex items-center justify-center'>
            <Camera width={12} height={12} />
          </Button>
        </div>
        <Image width={212} height={212} src="/assets/profile/profile.png" alt='Name' className='w-full h-full object-cover' />
      </div>
      <div className='flex flex-col'>
        <div className='flex gap-4'>
          <Text className={`${customBlur.className} text-[48px] leading-12 font-medium`}>João Xibata</Text>
          {
            isAuthenticated &&
            <Button variant="secondary" className="rounded-full p-0 shrink-0 aspect-square w-10 h-10 flex items-center justify-center" onClick={() => setIsEditing?.(!editting)}>
              <Edit2 width={12} height={12} />
            </Button>
          }
        </div>

        <Text className='text-[20px] leading-5 font-medium mt-2.5'>Diretor de Fotografia</Text>

        <div className='w-full flex flex-wrap gap-5 mt-5'>
          <Button variant={"secondary"} icon={<MapPin width={12} height={12} />} iconPosition='left'>
            Maputo, Moçambique
          </Button>
          <Button variant={"secondary"} icon={<Mail width={12} height={12} />} iconPosition='left'>
            joão@email.com
          </Button>
          <Button variant={"secondary"} icon={<GlobeIcon width={12} height={12} />} iconPosition='left'>
            www.joaosilva.com
          </Button>

          {
            isAuthenticated &&
            <Button variant={"secondary"} icon={<Plus width={12} height={12} />} iconPosition='left' className='border-rede-gray border-dashed' iconButtonClassName='border-rede-gray border-dashed'>
              Adicionar contacto
            </Button>
          }
        </div>

        <div className='w-full flex flex-wrap gap-5 mt-5'>
          <Button icon={<PhoneIcon width={12} height={12} color='black' />} iconPosition='left' className='bg-rede-yellow border-none text-rede-surface' iconButtonClassName="border-none">
            Contactar
          </Button>

          {
            isAuthenticated &&
            <Button variant={"secondary"} icon={<Plus width={12} height={12} />} iconPosition='left' className='border-rede-gray border-dashed' iconButtonClassName='border-rede-gray border-dashed'>
              Adicionar contacto
            </Button>
          }
        </div>
      </div>
    </div>
  )
}