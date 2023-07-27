'use client';

import { DetailedHTMLProps, HTMLAttributes, useContext } from 'react';
import { Heading, SubHeading } from '../components';
import { ViewportContext } from '@/context/Viewport';
import {
  DesktopImgOutput,
  DesktopImgPrompt,
  DesktopImgUpload,
  DesktopImgWriting,
} from './images/desktop';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import {
  MobileImgOutput,
  MobileImgPrompt,
  MobileImgUpload,
  MobileImgWriting,
} from './images/mobile';

export default function Features() {
  const { isMobile } = useContext(ViewportContext);

  const featuresList = [
    {
      title: 'Select the prompt style',
      desktop: DesktopImgPrompt,
      mobile: MobileImgPrompt,
      alt: 'Audea feature: select type of prompt',
      section: 'top',
    },

    {
      title: 'Choose the writing style',
      desktop: DesktopImgWriting,
      mobile: MobileImgWriting,
      alt: 'Audea feature: writing style',
      section: 'top',
    },

    {
      title: 'Choose the output language',
      desktop: DesktopImgOutput,
      mobile: MobileImgOutput,
      alt: 'Audea feature: output language',
      section: 'bottom',
    },

    {
      title: 'Upload audio file or just click the record button ',
      desktop: DesktopImgUpload,
      mobile: MobileImgUpload,
      alt: 'Audea feature: upload or record audio',
      section: 'bottom',
    },
  ];

  return (
    <section
      className="max-w-[1300px] mx-auto text-landingPage-textSurfaceVariant dark:text-landingPage-textSurfaceVariant flex flex-col items-center justify-center text-center gap-12 pt-10 pb-10 px-4 scroll-mt-20"
      id="features"
    >
      <header className="flex flex-col gap-4">
        <Heading as="h2">
          No complex and unnecessary features that will confuse you
        </Heading>

        <SubHeading>
          Every feature is designed with a lot of thought.
        </SubHeading>
      </header>

      {(() => {
        if (!isMobile) {
          return (
            <section className="flex flex-col gap-4">
              <section className="grid grid-cols-[2fr_1fr] gap-4">
                {featuresList
                  .filter(({ section }) => section === 'top')
                  .map(({ title, desktop, alt }, i) => {
                    return (
                      <FeatureCard
                        key={i}
                        title={title}
                        src={desktop}
                        alt={alt}
                      />
                    );
                  })}
              </section>

              <section className="grid grid-cols-[1fr_2fr] gap-4">
                {featuresList
                  .filter(({ section }) => section === 'bottom')
                  .map(({ title, desktop, alt }, i) => {
                    return (
                      <FeatureCard
                        key={i}
                        title={title}
                        src={desktop}
                        alt={alt}
                      />
                    );
                  })}
              </section>
            </section>
          );
        } else {
          return (
            <section className="w-full h-full flex items-start  gap-4 overflow-auto">
              {featuresList.map(({ title, mobile, alt }, i) => {
                return (
                  <FeatureCard key={i} title={title} src={mobile} alt={alt} />
                );
              })}
            </section>
          );
        }
      })()}
    </section>
  );
}

interface IFeatureCard
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  src: string | StaticImport;
  alt: string;
  title: string;
}

const FeatureCard = ({ title, src, alt, children, ...props }: IFeatureCard) => {
  return (
    <section
      className="flex flex-col gap-8 items-center justify-start md:max-h-[800px] max-h-[320px] overflow-hidden rounded-3xl py-8 px-4 bg-gradient-to-b from-landingPage-linierGray to-landingPage-linierEndGray shadow-md w-full min-w-[250px] min-h-[320px]"
      {...props}
    >
      <p className="md:text-xl text-lg font-medium">{title}</p>

      <Image
        src={src}
        alt={alt}
        quality={100}
        draggable={false}
        className="w-fit h-fit"
      />

      {children}
    </section>
  );
};
