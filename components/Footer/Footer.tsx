import { Typography } from "@material-tailwind/react";
import logo from "../assets/logo/primary.svg";
import git from "./img/git.png";
import tweet from "./img/tweet.png";
import Link from "next/link";
import Image from "next/image";
 
export default function Footer() {
    // const scrollWithOffset = (el:any) => {
    //     const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    //     const yOffset = -80; 
    //     window.scrollTo({ top: yCoordinate + yOffset, behavior: 'href); 
    // }
  return (
    <footer className="lg:mx-8 z-10 py-2 px-4 lg:py-4 lg:mt-0 mt-96">
        <div className="bg-gradient-to-r from-linierLineSide via-linierLineMid to-linierLineSide line-header-footer my-10 z-20"></div>
        <div className="flex flex-row flex-wrap items-center justify-start gap-y-6 gap-x-12 text-start lg:text-center md:justify-between">
            <div className="flex flex-col items-start gap-4">
                <Link href={'/#'} className="flex flex-row gap-2 z-50" >
                    <Image src={logo} className="w-10" alt="" />
                    <Typography
                    as="h1"
                    href="#"
                    className="mr-4 py-1.5 font-medium text-lg text-white"
                    >
                    Audea
                    </Typography>
                </Link>
                <Typography
                as="p"
                className="font-normal text-white text-left"
                >
                Created with passion by Indonesian makers 🇮🇩 <br /> <a target="_blank" href="https://twitter.com/fdwilogo">Furqon</a>, <a target="_blank" href="https://twitter.com/rizqyf_">Rizqy</a>, and <a target="_blank" href="https://twitter.com/aldimegaan">Aldi</a>
                </Typography>
            </div>
            <div className="flex flex-col items-start gap-4">
                <Typography
                as="p"
                className="font-normal text-white"
                >
                Sitemap
                </Typography>
                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                    <li>
                        <Typography
                        as="a"
                        className="font-normal text-transparent bg-clip-text bg-gradient-to-b from-linierFooterTop to-linierFooterBottom"
                        >
                        <Link href={'/#features'} > Features </Link>
                        </Typography>
                    </li>
                    <li>
                        <Typography
                        as="a"
                        color="blue-gray"
                        className="font-normal text-transparent bg-clip-text bg-gradient-to-b from-linierFooterTop to-linierFooterBottom"
                        >
                            <Link href={'/#useCase'} > Use Case </Link>
                        </Typography>
                    </li>
                    <li>
                        <Typography
                        as="a"
                        color="blue-gray"
                        className="font-normal text-transparent bg-clip-text bg-gradient-to-b from-linierFooterTop to-linierFooterBottom"
                        >
                            <Link href={'/#pricing'} > Pricing </Link>
                        </Typography>
                    </li>
                </ul>
            </div>
        </div>
        <div className="flex flex-row items-center gap-4 mt-10 lg:mt-16 mb-4">
            <a href="https://github.com/Audeaid" target="_blank">
                <Image src={git} alt="logo-audea" className="w-5" />
            </a>
            <a href="https://twitter.com/audea_app" target="_blank">
                <Image src={tweet} alt="logo-audea" className="w-5" />
            </a>
        </div>
    </footer>
  );
}