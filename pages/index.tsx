import Link from 'next/link'
import Layout from '../components/Layout'
import HeaderSection from '../components/HeaderSection/HeaderSection'
import Recorder from '../components/Recorder/Recorder'
import CardImage from '../components/CardImage/CardImage'
import CardImageRadial from '../components/CardImage/CardImageRadial'
import Image from 'next/image'
import { Typography } from '@material-tailwind/react'
import Pricing from '../components/Pricing/Pricing'
import AppImg from '../components/CardImage/img/app.png';
import AppImgMobile from '../components/CardImage/img/AppImgMobile.png';
import bgPricing from '../components/CardImage/img/bgPricingNew.png';

const IndexPage = () => (
  <Layout title="Audea">
    <div className="flex flex-col items-center justify-center mb-4 mt-20 gap-6 mx-2 lg:mx-20">

      <HeaderSection
      title="Have a structured notes from your messy voice" 
      subtitle="Give it a shot by tapping the record button and start speaking ideas or thoughts." 
      spaceTitle=""
      spaceSubTitle="Audea will do its magic once you're done."
      id=""
      />

      <Recorder />

      <HeaderSection 
      title="No complex and unnecessary features" 
      spaceTitle="that will confuse you"
      subtitle="Instead, Audea is designed and built with REALLY useful features." 
      spaceSubTitle=""
      id="features"
      />

      <div className="flex scroll-hide flex-row lg:flex-col overflow-auto gap-56 sm:gap-2 md:gap-4 lg:gap-0 lg:overflow-hidden w-screen lg:w-full mr-8 lg:mr-0">
          <div className="flex flex-row gap-4 items-center w-screen lg:w-full ml-10 lg:ml-0">
              <CardImage title="Select the prompt style" srcImg="Promt" customStyle="lg:h-[500px]" />
              <CardImage title="Choose the writing style" srcImg="Writing" customStyle="lg:h-[500px] lg:w-1/2" />
          </div>

          <div className="flex flex-row gap-4 items-center w-screen lg:w-full mb-0 lg:mb-20">
              <CardImage title="Choose the output language" srcImg="Language" customStyle="lg:h-[550px] lg:w-1/2" />
              <CardImage title="Upload audio file or just click the record button " srcImg="Audio" customStyle="lg:h-[550px]" />
          </div>
      </div>

      <div className="mt-10 hidden md:block">
          <HeaderSection 
          title="And yes, it can fit any purpose," 
          spaceTitle="no matter what you're up to"
          subtitle="Because Audea understands that your individual needs can vary from time to time." 
          spaceSubTitle=""
          id="useCase"
          />
      </div>

      <div className="mt-10 block md:hidden">
          <HeaderSection 
          title="And yes, it can fit any purpose, no matter what you're up to" 
          spaceTitle=""
          subtitle="Because Audea understands that your individual needs can vary from time to time." 
          spaceSubTitle=""
          id="useCase"
          />
      </div>

      <CardImageRadial title="Exploring ideas" titleSec="Refining your talk" customStyle="min-h-[516px] mb-20" />

      <HeaderSection 
      title="Also, you can maximize your productivity" 
      spaceTitle="using app integrations"
      subtitle="" 
      spaceSubTitle=""
      id="integeration"
      />

      <Image src={AppImg} alt="" className="w-fit h-auto min-w-[360px] hidden md:block" />
      <Image src={AppImgMobile} alt="" className="w-fit h-auto min-w-[360px] block md:hidden" />

      <Typography
      as="h3"
      className="text-linierBlue text-lg xl:text-xl mb-20"
      >
      You can effortlessly export your saved notes to your existing tools.
      </Typography>

      <figure className="relative h-screen w-screen -mt-96 mb-40" id="pricing">
          <Image
              className="h-full w-full opacity-60"
              src={bgPricing}
              alt="nature image"
          />
          <figcaption className="absolute top-96 lg:-bottom-20 md:mt-40 lg:mt-2 left-3 right-3 md:left-40 md:right-40 lg:left-60 lg:right-60">
              <HeaderSection 
              title="Audea has 3 pricing options" 
              spaceTitle=""
              subtitle="" 
              spaceSubTitle=""
              id=""
              />
              <Typography
              as="h3"
              className="text-white text-lg xl:text-xl mb-20"
              >
              You can try it <strong>for free</strong> for 2 weeks by creating an account. Subscribe later if you love it.
              </Typography>
              <Pricing />
          </figcaption>
      </figure>
      </div>
  </Layout>
)

export default IndexPage
