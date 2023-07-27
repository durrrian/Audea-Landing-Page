import { navigationItem } from '../utils';
import Image from 'next/image';
import github from './img/github.png';
import twitter from './img/twitter.png';
import { MadeByDurrrian } from 'made-by-durrrian';

export default function Footer() {
  const navigations = navigationItem.concat([
    {
      name: 'Privacy Policy',
      url: 'https://durrrian.notion.site/Privacy-Policy-f865747ed0e142fa92680408d91fe136?pvs=4',
    },

    {
      name: 'Terms of Service',
      url: 'https://durrrian.notion.site/Terms-of-Service-d0dcba2ccba54a9bb60b6c1dc0255c4f?pvs=4',
    },

    {
      name: 'Pricing Manifesto',
      url: 'https://durrrian.notion.site/Pricing-Manifesto-775142d7ebf34bb184915a16dfd8dd5b?pvs=4',
    },
  ]);

  return (
    <div className="text-landingPage-textSurfaceVariant dark:text-landingPage-textSurfaceVariant select-none">
      <div className="bg-gradient-to-r from-landingPage-linierLineSide via-landingPage-linierLineMid to-landingPage-linierLineSide dark:from-landingPage-linierLineSide dark:via-landingPage-linierLineMid dark:to-landingPage-linierLineSide h-[0.5px] md:mb-4 mb-3" />

      <footer className="grid md:grid-rows-2 grid-rows-4 md:grid-cols-2 grid-cols-1 justify-start items-end content-center max-w-[1300px] mx-auto px-4 gap-4 pb-10">
        <section>
          <p>Created by passionate Indonesian makers 🇮🇩</p>
          <p>
            <a target="_blank" href="https://twitter.com/fdwilogo">
              Furqon
            </a>
            ,{' '}
            <a target="_blank" href="https://twitter.com/rizqyf_">
              Rizqy
            </a>
            , and{' '}
            <a target="_blank" href="https://twitter.com/aldimegaan">
              Aldi
            </a>
          </p>
        </section>

        <section className="md:grid md:justify-self-end">
          <p>Sitemap</p>

          <ul className="flex flex-wrap items-center gap-y-0 gap-x-8">
            {navigations.map(({ name, url }, i) => {
              return (
                <li key={i}>
                  <a
                    href={url}
                    className="font-normal text-transparent bg-clip-text bg-gradient-to-b from-landingPage-linierFooterTop to-landingPage-linierFooterBottom hover:text-landingPage-textSurfaceVariant dark:from-landingPage-linierFooterTop dark:to-landingPage-linierFooterBottom dark:hover:text-landingPage-textSurfaceVariant"
                  >
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="flex items-center gap-2 w-fit h-fit">
          <a
            href="https://github.com/durrrian/Audea-Landing-Page"
            target="_blank"
          >
            <Image src={github} alt="Github logo" className="w-5" />
          </a>
          <a href="https://twitter.com/audea_app" target="_blank">
            <Image src={twitter} alt="Twitter logo" className="w-5" />
          </a>
        </section>
      </footer>
    </div>
  );
}
