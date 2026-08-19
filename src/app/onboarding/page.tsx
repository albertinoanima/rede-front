

import { OnBoarding } from "@/components/Auth/OnBoarding";


export default function OnBoardingPage() {
  return (
    <div className="w-full min-h-screen bg-[url('/assets/signup/signup.png')] bg-cover bg-center flex justify-center items-start md:items-center overflow-y-auto py-10 pt-28 pb-10">
      <OnBoarding />
    </div>
  )
}