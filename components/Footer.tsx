import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 
    mt-5 bprdert border-gray-100">
      <div className="flex max-md:flex-col flex-wrap
      jusify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col 
        justfy-start items-start gap-6">
          <Image src="/logo1.png" alt="logo"
          width={118} height={18}
          className="object-contain"/>
          <p className="text-base
          text-gray-700">
            Mordecai Chingolo 2023 <br/>
            All rights reserved &copy;

          </p>

        </div>
        <div className="footer__links">
  {footerLinks.map((Link) => (
    <div key={Link.title} className="footer__link">
      <h3 className="font-bold">{Link.title}</h3>
      {Link.links.map((item) => (
        <a
          key={item.title}
          href={item.url}
          className="text-gray-500"
        >
          {item.title}
        </a>
      ))}
    </div>
    
  ))}
       </div>
       </div>
        <div className=" bg-gray-900 flex justify-between items-center flex-wrap mt-10
        border-t border-gray-100 sm:px-16 px-6 py-10">
          <p className="text-gray-100">@2023 DivDynamics. All Rights Reserved</p>
          <div className="footer__copyrights-link">
            <Link href="/" className="text-gray-100">
              Privacy Policy
            </Link>
            <Link href="/" className="text-gray-100">
              Terms of use
            </Link>
           

          </div>

        </div>
    

    </footer>
  )
}

export default Footer