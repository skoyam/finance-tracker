import { ClerkLoaded, ClerkLoading, SignUp } from '@clerk/nextjs';
import { Loader2 } from "lucide-react";
import Image from 'next/image';

export default function Page() {
  // for mobile dev to open w 2 cols
  return (
  <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
    <div className="h-full lg:flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-4 pt-16">
        <h1 className="font-bold text-3xl text-[#2E2A47]">
          Create an Account
        </h1>
        <p className="text-base text-[#7E8CA0]">
          Enter your details below to start your finance journey!
        </p>
      </div>
      <div className="flex items-center justify-center mt-8">
        <ClerkLoaded>
          <SignUp path="/sign-up" />
        </ClerkLoaded>
        <ClerkLoading>
          <Loader2 className="animate-spin text-muted-foreground"/>
        </ClerkLoading>
      </div>
    </div>
    <div className="h-full bg-green-600 hidden lg:flex items-center justify-center">
      <Image src="/logo.svg" height={100} width={100} alt="Logo" />
    </div>
  </div>
  );
}