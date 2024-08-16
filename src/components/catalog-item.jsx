export default function CatalogItem() {
  return (
    <div className="flex flex-col items-start px-[25px] max-w-md mx-auto border-b border-t border-borders xl:max-w-full xl:grid xl:grid-cols-4 xl:gap-4 xl:py-10">
      <div className="space-y-8 leading-tight pt-12 xl:pt-0 xl:space-y-4">
        <h3 className="text-27 text-primary font-medium uppercase text-balance">Glazing of a premium-class residential building</h3>
        <p className="text-metal text-lg">Renovation and reconstruction of residential and commercial spaces. Renovation and reconstruction of residential and commercial spaces</p>
      </div>
      <div className="aspect-[1.38364] overflow-hidden w-full mt-10 xl:mt-0">
        <img src="/assets/img/catalog/1.jpg" className="w-full h-full object-cover" width={440} height={318} alt=""/>
      </div>

      <div className="space-y-5 mt-5 w-full xl:mt-0 xl:pl-6">
        <div className="flex flex-col gap-4 w-full">
          <div className="hidden xl:block text-primary uppercase font-medium text-2xl">Color:</div>

          <div className="flex items-center justify-center gap-1.5 w-full xl:justify-start">
            <div className="size-[35px] rounded-full ring-offset-2 ring-ocean hover:ring-2 cursor-pointer bg-[#090909]"></div>
            <div className="size-[35px] rounded-full ring-offset-2 ring-ocean hover:ring-2 cursor-pointer bg-[#8D8D8D]"></div>
            <div className="size-[35px] rounded-full ring-offset-2 ring-ocean hover:ring-2 cursor-pointer bg-[#7E513E] ring-2"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 w-full xl:grid-cols-1">
          <div className="space-y-5">
            <p className="text-primary uppercase text-base font-medium">complete set:</p>
            <div className="flex flex-col items-start gap-3 xl:flex-row xl:flex-wrap gap-2">
              <button className="border border-[#C2C2C2] rounded-full px-2 py-0.5 transition min-h-10 min-w-[124px] max-w-[160px] text-xs bg-white text-[#C2C2C2] hover:bg-pale-bg hover:text-ocean">
                Standard
              </button>
              <button className="border border-[#C2C2C2] rounded-full px-2 py-0.5 transition min-h-10 min-w-[124px] max-w-[160px] text-xs bg-white text-[#C2C2C2] hover:bg-pale-bg hover:text-ocean">
                Expanded
              </button>
              <button className="border border-[#C2C2C2] rounded-full px-2 py-0.5 transition min-h-10 min-w-[124px] max-w-[160px] text-xs bg-white text-[#C2C2C2] hover:bg-pale-bg hover:text-ocean">
                Premium
              </button>
            </div>
          </div>
          <div className="space-y-5">
            <p className="text-primary uppercase text-base font-medium">MATERIAL:</p>
            <div className="flex flex-col items-start gap-3 xl:flex-row xl:flex-wrap gap-2">
              <button className="border border-[#C2C2C2] rounded-full px-2 py-0.5 transition min-h-10 min-w-[124px] max-w-[160px] text-xs bg-white text-[#C2C2C2] hover:bg-pale-bg hover:text-ocean">
                Material Name 01
              </button>
              <button className="border border-[#C2C2C2] rounded-full px-2 py-0.5 transition min-h-10 min-w-[124px] max-w-[160px] text-xs bg-white text-[#C2C2C2] hover:bg-pale-bg hover:text-ocean">
                Material Name 01
              </button>
              <button className="border border-[#C2C2C2] rounded-full px-2 py-0.5 transition min-h-10 min-w-[124px] max-w-[160px] text-xs bg-white text-[#C2C2C2] hover:bg-pale-bg hover:text-ocean">
                Material Name 0143
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-8 w-full mt-12 pb-12 xl:pb-0 xl:mt-0">
        <button className="transition mx-auto bg-gradient-to-r from-[#48A6FA] via-[#8AC8FF] to-[#1B81E7] text-white text-lg rounded-full w-full max-w-[326px] lg:max-w-[409px] min-h-[92px] cursor-pointer border border-white active:border-ocean active:bg-transparent hover:from-[#48A6FA] hover:to-[#48A6FA] hover:text-white hover:border-ocean">
          Find out the details
        </button>
        <p className="text-xs text-primary text-center text-balance">If you submit an application, you automatically consent to the processing of your personal data</p>
      </div>

    </div>
  )
}
