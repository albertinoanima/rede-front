

import { OnBoarding } from "@/components/Auth/OnBoarding";

const selectClassNames = {
  triggerClassName: "rounded-full border-2 border-white px-3 text-rede-white outline-none",
  popoverClassName: "rounded-[12px] border-2 border-white px-3 text-rede-white outline-none mt-[10px]",
  satelliteClassName: "border-2 border-white",
};


export default function OnBoardingPage() {
  return (
    <div className="w-full min-h-screen bg-[url('/assets/signup/signup.png')] bg-cover bg-center flex justify-center items-start md:items-center overflow-y-auto py-10 pt-28 pb-10">
      <OnBoarding selectClassNames={selectClassNames} />
    </div>
  )
}