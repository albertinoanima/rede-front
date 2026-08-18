import Image from "next/image"
import { Text } from "../../ui/text"
import { Input } from "../../ui/Input"
import { Button } from "../../ui/button"
import { Dispatch, SetStateAction } from "react"

type EditProfileType = {
    setIsEditing?: Dispatch<SetStateAction<boolean>>;
}

export const EditProfile: React.FC<EditProfileType> = ({ setIsEditing }) => {
  return (
    <div className='w-full max-w-360 flex gap-5'>
      <div className='w-53 h-53'>
        <Image width={212} height={212} src="/assets/profile/profile.png" alt='Name' className='w-full h-full object-cover' />
      </div>
      <div className='flex flex-col gap-4'>

        <div className='w-full flex gap-2'>
          <div className='flex flex-col gap-2'>
            <Text className='text-[20px] leading-7 font-medium'>Nome</Text>
            <Input variant={"secondary"} placeholder='Nome' className='bg-transparent' />
          </div>

          <div className='flex flex-col gap-2'>
            <Text className='text-[20px] leading-7 font-medium'>Profissão</Text>
            <Input variant={"secondary"} placeholder='Profissão' className='bg-transparent' />
          </div>
        </div>

        <div className='w-full flex gap-1'>
          <Button onClick={() => setIsEditing?.((lastState) => !lastState)}>
            Guardar
          </Button>

          <Button variant={"secondary"} onClick={() => setIsEditing?.((lastState) => !lastState)}>
            Cancelar
          </Button>
        </div>

      </div>
    </div>
  )
}