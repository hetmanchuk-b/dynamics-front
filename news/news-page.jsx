import Header from "../src/components/header";
import Footer from "../src/components/footer";
import PageHeader from "../src/components/page-header";
import NewsItem from "../src/components/news-item";
import {twMerge} from "tailwind-merge";

export default function NewsPage() {
  return (
    <div>
      <Header isWhite={true} />

      <PageHeader
        title={'News'}
        breadcrumbs={[
          {name: 'Main', url: '/'},
          {name: 'News', url: '/news/'}
        ]}
      />

      <div>
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>

      <div className="py-10 px-6">
        <div className="flex items-center justify-center gap-2 lg:gap-6">
          <button className="flex items-center justify-center size-[86px] border border-[#C2C2C2] rounded-full bg-transparent transition hover:bg-pale/50 group">
            <img src="/assets/img/slider-left.svg" className="group-hover:scale-125 transition" alt=""/>
          </button>
          <div className="flex items-center justify-center">
            <div className="size-[52px] rounded-full text-lg text-pale items-center justify-center cursor-pointer hover:bg-ocean/50 hover:text-white hidden lg:flex">1</div>
            <div className="size-[52px] rounded-full text-lg text-pale items-center justify-center cursor-pointer hover:bg-ocean/50 hover:text-white hidden lg:flex">2</div>
            <div className="size-[52px] rounded-full text-lg text-pale items-center justify-center cursor-pointer hover:bg-ocean/50 hover:text-white hidden lg:flex">3</div>
            <div className="size-[52px] rounded-full text-lg text-pale flex items-center justify-center cursor-pointer hover:bg-ocean/50 hover:text-white">4</div>
            <div className={twMerge(
              'size-[52px] rounded-full text-lg text-pale flex items-center justify-center cursor-pointer hover:bg-ocean/50 hover:text-white',
              'bg-gradient-to-br from-[#48A6FA] via-[#8AC8FF] to-[#1B81E7] text-white'
            )}>5</div>
            <div className="size-[52px] rounded-full text-lg text-pale flex items-center justify-center cursor-pointer hover:bg-ocean/50 hover:text-white">6</div>
          </div>
          <button className="flex items-center justify-center size-[86px] border border-[#C2C2C2] rounded-full bg-transparent transition hover:bg-pale/50 group">
            <img src="/assets/img/slider-left.svg" className="rotate-180 group-hover:scale-125 transition" alt=""/>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  )
}
