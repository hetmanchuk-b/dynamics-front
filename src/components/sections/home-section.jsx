import gsap from "gsap";
import {useGSAP} from "@gsap/react";

export default function HomeSection() {

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      const sectionPosition = servicesSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: sectionPosition, behavior: "smooth" });
    }
  }

  useGSAP(() => {
    gsap.to('.main-home-pic', {y: 0, duration: 1});
    gsap.to('.before-main-text', {x: 0, opacity: 1, duration: 1, delay: 0.5});
    gsap.from('.main-text-appears', {opacity: 0, duration: 1, delay: 1});
  })

  return (
    <main className="min-h-screen bg-gradient-to-r from-[#A9B7C5] via-[#7D8DAB] to-[#526492] relative 2xl:pb-10 overflow-hidden">
      <div className="absolute z-30 hidden lg:block left-8 bottom-8">
        <button onClick={scrollToServices} className="size-[112px] cursor-pointer flex items-center justify-center border border-l-0 border-b-0 border-t-0 transition hover:border-l hover:border-t hover:border-b rounded-full bg-transparent active:bg-white group">
          <svg width="16" height="30" viewBox="0 0 16 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="group-active:stroke-black" d="M8 0.5C8 2.5 8 20 8 28.5M8 28.5L1 21.5M8 28.5L15 21.5" stroke="white"/>
          </svg>
        </button>
      </div>

      <div className="absolute inset-0 z-10 overflow-hidden">
        <img src="/assets/img/home-bg-mob.svg" className="w-full object-cover md:hidden" alt=""/>
        <img src="/assets/img/home-blured.svg" width="1572" height="1060" className="hidden md:block object-cover absolute top-0 left-1/4" alt=""/>
        <img src="/assets/img/home-mob.png" className="w-full max-h-[792px] object-cover absolute bottom-0 xsm:hidden" alt=""/>
        <img src="/assets/img/home-full.png" className="translate-y-[201px] main-home-pic hidden xsm:block w-[1920px] h-[1034px] absolute object-cover -bottom-28 md:-bottom-[300px]" alt=""/>
      </div>

      <div className="relative z-20 pt-20">
        <div className="pt-10 px-5 flex items-center flex-col lg:items-start lg:px-20">
          <p className="font-secondary text-15 uppercase text-white mb-3 text-center sm:text-25">Innovative Building Solutions</p>
          <h1 className="uppercase font-secondary text-center text-white leading-none lg:text-start">
            {/*<span className="text-149 lg:text-8xl lg:mr-6 xl:mr-10 xl:text-149 3xl:text-219"></span> <br className="lg:hidden"/>*/}
            <span className="text-56 lg:text-8xl xl:text-149 3xl:text-219">Buildwise</span>
          </h1>
          <div className="w-full flex flex-col items-center lg:flex-row lg:w-2/3 lg:gap-10 lg:ml-auto lg:mt-10 xl:w-[60%] 2xl:w-1/2">
            <p className="text-15 text-white text-center mt-5 text-balance lg:mt-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href='/portfolio/' className="flex items-center justify-center mt-10 lg:mt-0 xl:shrink-0 sm:mx-auto transition bg-white text-black text-lg rounded-full w-full max-w-[409px] min-h-[92px] cursor-pointer border border-white active:border-white active:bg-transparent active:text-white hover:bg-ocean hover:text-white hover:border-ocean">Our Projects</a>
          </div>
        </div>

        <div className="mt-56 lg:mt-40 px-5 text-center text-white md:text-start lg:px-0 before-main-text translate-x-full">
          <div className="backdrop-blur-2xl bg-[#181818]/20 px-8 py-12 md:grid md:grid-cols-3 md:gap-8 lg:ml-auto lg:w-3/4 xl:pr-24 2xl:pr-44 relative xl:static">
            <h2 className="main-text-appears text-xl uppercase font-medium md:col-span-full md:text-37 md:font-normal">Why clients choose us?</h2>

            <div className="mt-10 md:mt-0 main-text-appears">
              <h3 className="text-lg uppercase font-medium lg:text-xl leading-none">High quality and innovations</h3>
              <p className="text-base mt-4 lg:text-lg">We use advanced technologies and materials to achieve the best quality</p>
            </div>
            <div className="mt-10 md:mt-0 main-text-appears">
              <h3 className="text-lg uppercase font-medium lg:text-xl leading-none">Individual approach</h3>
              <p className="text-base mt-4 lg:text-lg">We use advanced technologies and materials to achieve the best quality</p>
            </div>
            <div className="mt-10 md:mt-0 main-text-appears">
              <h3 className="text-lg uppercase font-medium lg:text-xl leading-none">Energy efficiency and eco-friendliness</h3>
              <p className="text-base mt-4 lg:text-lg">We use advanced technologies and materials to achieve the best quality</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
