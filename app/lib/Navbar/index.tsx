'use client';

import Image from 'next/image';
import Logo from './logo.svg';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { navigationItem } from '../utils';

export default function Navbar() {
  return (
    <div className="fixed inset-0 z-10 backdrop-filter backdrop-blur h-fit w-full">
      <header className="pt-3 lg:px-0 px-4 text-landingPage-textSurfaceVariant dark:text-landingPage-textSurfaceVariant flex items-center justify-between max-w-[1300px] mx-auto bg-transparent">
        <a className="w-fit h-fit" href="/">
          <Image
            src={Logo}
            alt={'Audea logo'}
            quality={100}
            draggable={false}
            width={100}
          />
        </a>

        <div className="w-fit rounded-3xl bg-gradient-to-r from-landingPage-audeaBlue to-landingPage-lightBlue dark:from-landingPage-audeaBlue dark:to-landingPage-lightBlue p-[1px] font-light md:block hidden">
          <section className="flex rounded-3xl h-fit w-fit items-center justify-center bg-landingPage-blackPrimary dark:bg-landingPage-blackPrimary gap-8 px-8 py-2 text-sm">
            {navigationItem.map(({ name, url }, id) => {
              return (
                <motion.a href={url} key={id} whileHover={{ scale: 1.05 }}>
                  {name}
                </motion.a>
              );
            })}
          </section>
        </div>

        <section className="flex items-center gap-2 text-sm">
          <Link
            href={'https://app.audea.id/login'}
            prefetch={true}
            className="px-4 py-2 rounded-3xl hover:bg-gray-800 dark:hover:bg-gray-800"
          >
            Sign in
          </Link>

          <Link
            href={'https://app.audea.id/signup'}
            prefetch={true}
            className="px-4 py-2 rounded-3xl flex items-center bg-gradient-to-br from-landingPage-linierPurple to-landingPage-linierMidBlue dark:from-landingPage-linierPurple dark:to-landingPage-linierMidBlue hover:opacity-90"
          >
            Get started <ChevronRight className="ml-2 w-4 h-4" />
          </Link>
        </section>
      </header>

      <div className="bg-gradient-to-r from-landingPage-linierLineSide via-landingPage-linierLineMid to-landingPage-linierLineSide dark:from-landingPage-linierLineSide dark:via-landingPage-linierLineMid dark:to-landingPage-linierLineSide h-[0.5px] md:mt-4 mt-3" />
    </div>
  );
}
