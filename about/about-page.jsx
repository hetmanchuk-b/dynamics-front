import Header from "../src/components/header";
import Footer from "../src/components/footer";
import PageHeader from "../src/components/page-header";

export default function AboutPage() {
  return (
    <div>
      <Header isWhite={true} />

      <PageHeader
        title={'About ADR Dynamics'}
        breadcrumbs={[
          {name: 'Main', url: '/'},
          {name: 'About us', url: '/about/'}
        ]}
      />

      <div className="px-[25px] 2xl:px-[100px] py-14">
        <div className="lg:flex lg:gap-8 xl:gap-16">
          <div className="hidden lg:block uppercase text-pale tracking-widest shrink-0">About us</div>
          <div className="text-primary">
            <h2 className="text-4xl font-secondary uppercase lg:text-75 leading-none xl:text-115 xl:relative xl:right-10 3xl:text-160">
              let's tell a <br/>
              <span className="xl:relative xl:left-20">little <span className="bg-gradient-to-b from-blue-700 via-blue-400 to-blue-700 bg-clip-text text-transparent">About us</span></span>
            </h2>
            <p className="mt-10 text-lg font-medium max-w-4xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="mt-8 lg:flex lg:gap-8 max-w-4xl mx-auto">
              <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p className="text-lg mt-8 lg:mt-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
