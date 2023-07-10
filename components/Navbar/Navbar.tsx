import {
  Navbar,
  Typography,
  Button,
} from "@material-tailwind/react";
import logo from "../assets/logo/primary.svg"
import Link from "next/link";
import Image from "next/image";
 
export default function Nav() {
  // const scrollWithOffset = (el:any) => {
  //     const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  //     const yOffset = -80; 
  //     window.scrollTo({ top: yCoordinate + yOffset, behavior: '' }); 
  // }
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-10 rounded-full border-1px border-lightBlue px-4 py-2 text-white">
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <Link  href={'/#features'} > Features </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <Link  href={'/#useCase'} > Use Case </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <Link  href={'/#integeration'} > Integration </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <Link  href={'/#pricing'} > Pricing </Link>
      </Typography>
    </ul>
  );
 
  return (
    <>
    <header className="sticky top-0 z-10 py-2 lg:px-8 lg:pt-4 lg:pb-0 backdrop-filter backdrop-blur dark:text-white">
        <Navbar className="flex items-center justify-center h-16 px-4 md:px-0 font-semibold text-sm after:absolute after:inset-x-0 after:w-full after:h-12 after:shadow-hr bg-transparent">
            <div className="w-full xl:max-w-[1280px]">
                <div className="container mx-auto flex items-center justify-between text-white">
                    <Link  href={'/#'} className="flex flex-row gap-2 z-50" >
                        <Image src={logo} className="w-10" alt="" />
                        <Typography
                        as="h1"
                        href="#"
                        className="mr-4 py-1.5 font-medium text-lg"
                        >
                        Audea
                        </Typography>
                    </Link>
                    <div className="hidden lg:block cursor-pointer z-50">{navList}</div>
                    <div className="flex flex-row gap-4 items-center z-50">
                        <a href="https://app.audea.id/" target="_blank">Login</a>
                        <a href="https://app.audea.id/signup" className="inline-block bg-gradient-to-r from-linierPurple to-linierMidBlue rounded-3xl px-3 py-2" target="_blank">Sign Up</a>
                    </div>
                </div>
            </div>
        </Navbar>
        <div className="bg-gradient-to-r from-linierLineSide via-linierLineMid to-linierLineSide line-header-footer mt-4"></div>
    </header>
  </>
  );
}