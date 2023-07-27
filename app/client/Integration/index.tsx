import Image from 'next/image';
import ImageSrc from './images/apps.png';
import { Heading } from '../components';

export default function Integration() {
  return (
    <section
      className="text-landingPage-textSurfaceVariant dark:text-landingPage-textSurfaceVariant max-w-[1300px] mx-auto flex flex-col items-center justify-center text-center gap-12 pt-10 pb-10 px-4 scroll-mt-20"
      id="integration"
    >
      <Heading as={'h5'}>
        Maximize your productivity using app integrations
      </Heading>

      <Image
        src={ImageSrc}
        alt="Audea can connect to your already used third party app"
        quality={100}
        draggable={false}
      />

      <p className="font-normal text-transparent bg-clip-text bg-gradient-to-b from-landingPage-linierFooterTop to-landingPage-linierFooterBottom">
        Effortlessly export your saved notes to your existing tools.
      </p>
    </section>
  );
}
