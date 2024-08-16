export default function NewsItem() {
  return (
    <div className="flex flex-col px-[25px] py-10 border-b-2 border-borders lg:flex-row lg:items-start lg:gap-8 2xl:px-[100px]">
      <div className="lg:order-3 lg:w-1/2">
        <h3 className="text-27 font-medium mb-12 lg:mb-8 text-balance">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h3>
        <div className="text-metal text-lg leading-relaxed hidden lg:block 2xl:pr-10">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
        </div>
      </div>
      <div className="overflow-hidden aspect-[1.1] w-full bg-black max-w-md mx-auto lg:order-2 lg:mx-0 lg:w-1/4">
        <img src="/public/assets/img/news-placeholder.jpg" width={460} height={382} className="h-full w-full object-cover" alt=""/>
      </div>

      <div className="flex items-center gap-2 mt-6 text-lg font-medium lg:order-1 lg:mt-0 lg:w-1/5">
        <img src="/public/assets/img/icons/date.svg" width="18" height="18" alt=""/>
        <span className="bg-gradient-to-b from-blue-700 via-blue-400 to-blue-700 bg-clip-text text-transparent">
          25.08.2023
        </span>
      </div>

      <div className="relative overflow-hidden h-80 mt-8 lg:hidden">
        <div className="text-metal text-lg leading-relaxed relative z-10">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/90 to-transparent z-20">
          <button className="block cursor-pointer underline underline-offset-4 text-primary transition hover:text-ocean text-xl font-medium absolute bottom-0 left-1/2 -translate-x-1/2">
            more information
          </button>
        </div>

      </div>
    </div>
  )
}
