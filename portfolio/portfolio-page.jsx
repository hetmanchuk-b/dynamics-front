import Header from "../src/components/header";
import Footer from "../src/components/footer";
import PageHeader from "../src/components/page-header";

export default function PortfolioPage() {
  return (
    <div>
      <Header isWhite={true} />

      <PageHeader
        title={'Portfolio'}
        breadcrumbs={[
          {name: 'Main', url: '/'},
          {name: 'Portfolio', url: '/portfolio/'}
        ]}
      />


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:grid-rows-6 gap-4 py-10 px-[25px] 3xl:px-[100px] lg:h-[1080px] xl:h-[1330px] 2xl:h-[1700px]">
        <div className="sm:col-span-full lg:col-auto">
          <img src="/assets/img/portfolio/1.jpg" className="w-full h-full object-cover" alt=""/>
        </div>
        <div className="lg:row-span-5 lg:col-start-1 lg:row-start-2">
          <img src="/assets/img/portfolio/2.jpg" className="w-full h-full object-cover" alt=""/>
        </div>
        <div className="lg:col-span-2 lg:row-span-3 lg:col-start-2 lg:row-start-1">
          <img src="/assets/img/portfolio/3.jpg" className="w-full h-full object-cover" alt=""/>
        </div>
        <div className="sm:col-span-full md:col-auto lg:col-span-3 lg:row-span-2 lg:col-start-4 lg:row-start-1">
          <img src="/assets/img/portfolio/4.jpg" className="w-full h-full object-cover" alt=""/>
        </div>
        <div className="lg:col-span-2 lg:row-span-3 lg:col-start-2 lg:row-start-4">
          <img src="/assets/img/portfolio/5.jpg" className="w-full h-full object-cover" alt=""/>
        </div>
        <div className="md:col-span-2 lg:col-span-3 lg:row-span-4 lg:col-start-4 lg:row-start-3">
          <img src="/assets/img/portfolio/6.jpg" className="w-full h-full object-cover" alt=""/>
        </div>
        <div className="sm:col-span-full md:aspect-[5]">
          <img src="/assets/img/portfolio/7.jpg" className="w-full h-full object-cover" alt=""/>
        </div>
      </div>


      <Footer />
    </div>
  )
}
