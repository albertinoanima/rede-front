import { Signup } from "@/components/Auth/Signup";

export default function SignupPage() {
    return (
        <div className="w-full min-h-screen bg-[url('/assets/signup/signup.png')] bg-cover bg-center flex justify-center items-start md:items-center overflow-y-auto py-10 pt-28 pb-10">
            <Signup />
        </div >
    )
}