import Link from "next/link"
import Image from "next/image"

import CustomButton from "./CustomButton"

const Navbar = () => {
  return (
    <header className="w-full absolute z-10 bg-[#262626]">
        <nav className="max-w-[1440px] mx-auto  flex
        justify-between items-center sm:px px-6 py-4">
            <Link href="/" className="flex justify-center
            items-center">
            <Image 
            src="/logo.png"
            alt="car-app logo"
            width={118}
            height={18}
            className="object-contain"
            />
            </Link>

            <CustomButton
            title="Sign In"
            btnType="button"
            containerStyles="text-primary-blue rounded-full
            bg-full bg-white min-w-[130px]"
            />

        </nav>
        
    </header>
  )
}

export default Navbar