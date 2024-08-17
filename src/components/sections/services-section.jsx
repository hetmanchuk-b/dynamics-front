import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useRef} from "react";

export default function ServicesSection() {
  const servicesOptions = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    dots: false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  }

  let servicesSliderRef = useRef(null);
  return (
    <section className="bg-white pt-20" id="services">
      <div className="border-b border-borders px-[25px] 3xl:px-[100px] pb-14 lg:flex lg:justify-between">
        <div className="hidden lg:block text-xl text-pale font-secondary tracking-wider mr-14">
          SERVICES
        </div>
        <h2 className="uppercase text-4xl font-secondary text-balance text-primary lg:text-56 xl:text-75 2xl:text-160 leading-none">
          <span className="bg-gradient-to-b from-blue-700 via-blue-400 to-blue-700 bg-clip-text text-transparent">The services</span> <br/> we provide
        </h2>
        <div className="hidden lg:flex items-start">
          <button onClick={() => servicesSliderRef.slickPrev()} className="flex items-center justify-center size-[86px] border border-[#C2C2C2] rounded-full bg-transparent transition hover:bg-pale/50 group">
            <img src="assets/img/slider-left.svg" className="group-hover:scale-125 transition" alt=""/>
          </button>
          <button onClick={() => servicesSliderRef.slickNext()} className="flex items-center justify-center size-[86px] border border-[#C2C2C2] rounded-full bg-transparent transition hover:bg-pale/50 group -ml-4">
            <img src="assets/img/slider-left.svg" className="rotate-180 group-hover:scale-125 transition" alt=""/>
          </button>
        </div>
      </div>

      <div className="border-b border-borders py-14 slider-container overflow-hidden 3xl:px-[100px]">
        <div className="w-[600px] sm:w-[1000px] lg:w-[110vw]">
          <Slider
            ref={slider => {
              servicesSliderRef = slider;
            }}
            {...servicesOptions}
          >
            <div className="p-4">
              <div className="bg-pale-bg p-5 min-h-[300px] flex flex-col xl:min-h-[556px]">
                <div className="flex flex-col justify-between h-full gap-4 grow">
                  <p className="uppercase text-black font-medium text-balance text-15 xl:text-27">INSTALLATION OF PERGOLAS, GLASS RAILINGS, PARAMETRIC FURNITURE, AND AUTOMATIC SLIDING DOORS</p>
                  <p className="text-xs text-black text-balance lowercase pr-10 xl:text-xl">FULL CYCLE INSTALLATION <br/> AND CUSTOMIZATION</p>

                  <div className="flex items-end justify-between">
                    <a href='/portfolio/' className="underline-black text-black lowercase font-medium text-xs relative xl:text-xl hover:text-ocean">
                      see our projects
                    </a>
                    <div className="text-31 text-[#D3D3D3] xl:text-56 leading-none">/01</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-pale-bg p-5 min-h-[300px] flex flex-col xl:min-h-[556px]">
                <div className="flex flex-col justify-between h-full gap-4 grow">
                  <p className="uppercase text-black font-medium text-balance text-15 xl:text-27">RENOVATION WORKS</p>
                  <p className="text-xs text-black text-balance lowercase pr-10 xl:text-xl">RENOVATION AND RECONSTRUCTION OF RESIDENTIAL AND COMMERCIAL SPACES</p>

                  <div className="flex items-end justify-between">
                    <a href='/portfolio/' className="underline-black text-black lowercase font-medium text-xs relative xl:text-xl hover:text-ocean">
                      see our projects
                    </a>
                    <div className="text-31 text-[#D3D3D3] xl:text-56 leading-none">/02</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-pale-bg p-5 min-h-[300px] flex flex-col xl:min-h-[556px]">
                <div className="flex flex-col justify-between h-full gap-4 grow">
                  <p className="uppercase text-black font-medium text-balance text-15 xl:text-27">INSTALLATION OF WINDOWS AND FACADES</p>
                  <p className="text-xs text-black text-balance lowercase pr-10 xl:text-xl">PROFESSIONAL INSTALLATION OF WINDOW AND FACADE SYSTEMS</p>

                  <div className="flex items-end justify-between">
                    <a href='/portfolio/' className="underline-black text-black lowercase font-medium text-xs relative xl:text-xl hover:text-ocean">
                      see our projects
                    </a>
                    <div className="text-31 text-[#D3D3D3] xl:text-56 leading-none">/03</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-pale-bg p-5 min-h-[300px] flex flex-col xl:min-h-[556px]">
                <div className="flex flex-col justify-between h-full gap-4 grow">
                  <p className="uppercase text-black font-medium text-balance text-15 xl:text-27">DRAINAGE SYSTEMS AND WATER MANAGEMENT</p>
                  <p className="text-xs text-black text-balance lowercase pr-10 xl:text-xl">DESIGN AND INSTALLATION OF DRAINAGE SYSTEMS FOR VARIOUS TYPES OF PROPERTIES</p>

                  <div className="flex items-end justify-between">
                    <a href='/portfolio/' className="underline-black text-black lowercase font-medium text-xs relative xl:text-xl hover:text-ocean">
                      see our projects
                    </a>
                    <div className="text-31 text-[#D3D3D3] xl:text-56 leading-none">/04</div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>

      </div>
    </section>
  )
}
