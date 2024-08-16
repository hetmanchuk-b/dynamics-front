import FixedGoTopButton from "./fixed-go-top-button";

export default function Footer() {
  return (
    <>
      <FixedGoTopButton />
      <footer className="bg-white">
        <div className="hidden lg:block">
          <div className="grid grid-cols-2 gap-14 pt-24 pb-20 2xl:px-[100px] px-[25px]">
            <div className="flex items-start gap-10">
              <div className="space-y-12">
                <img
                  src="/public/assets/img/logo-full-blue.svg"
                  width="262"
                  height="30"
                  alt=""
                />
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 justify-center">
                    <a href="/" className="flex items-center justify-center size-[67px] rounded-full relative group">
                      <img src="/public/assets/img/socials-border.svg" className="absolute inset-0 object-cover transition z-10 group-hover:opacity-50" alt=""/>
                      <img src="/public/assets/img/icons/instagram-blue.svg" className="relative z-20" alt=""/>
                      <span className="sr-only">Instagram</span>
                    </a>
                    <a href="/" className="flex items-center justify-center size-[67px] rounded-full relative group">
                      <img src="/public/assets/img/socials-border.svg" className="absolute inset-0 object-cover transition z-10 group-hover:opacity-50" alt=""/>
                      <img src="/public/assets/img/icons/facebook-blue.svg" className="relative z-20" alt=""/>
                      <span className="sr-only">Facebook</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="space-y-2.5">
                  <p className="tracking-widest uppercase text-pale text-xl">Number:</p>
                  <a href="tel:+17606058600" className="text-xl text-primary font-medium hover:text-ocean">+1 760 605 8600</a>
                </div>
                <div className="space-y-2.5">
                  <p className="tracking-widest uppercase text-pale text-xl">e-mail:</p>
                  <a href="mailto:ADR.DYNAMICS@GMAIL.COM" className="text-xl text-primary font-medium hover:text-ocean">ADR.DYNAMICS@GMAIL.COM</a>
                </div>
              </div>
            </div>

            <div className="relative grid grid-cols-2 gap-6 justify-items-start">
              <a href="/portfolio/" className="block text-[#111111] text-base font-light underline-offset-4 hover:underline hover:text-ocean">Portfolio</a>
              <a href="/" className="block text-[#111111] text-base font-light underline-offset-4 hover:underline hover:text-ocean">Services</a>
              <a href="/about/" className="block text-[#111111] text-base font-light underline-offset-4 hover:underline hover:text-ocean">About us</a>
              <a href="/" className="block text-[#111111] text-base font-light underline-offset-4 hover:underline hover:text-ocean">Gallery</a>
              <a href="/catalog/" className="block text-[#111111] text-base font-light underline-offset-4 hover:underline hover:text-ocean">Catalog</a>
              <a href="/" className="block text-[#111111] text-base font-light underline-offset-4 hover:underline hover:text-ocean">FAQ</a>
              <a href="/news/" className="block text-[#111111] text-base font-light underline-offset-4 hover:underline hover:text-ocean">News</a>
            </div>
          </div>
        </div>

        <div className="2xl:px-[100px] px-[25px] lg:border-t lg:border-borders">
          <div className="pt-14 pb-8">
            <div className="space-y-6 text-center lg:space-y-0 lg:flex lg:items-center lg:justify-between lg:gap-4">
              <a href="/" className="underline text-primary text-17 hover:no-underline">Privacy Policy</a>
              <p className="text-pale text-17">© 2024 ADR DYNAMICS</p>
            </div>
          </div>
        </div>

      </footer>
    </>
  )
}
