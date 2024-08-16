import {Fragment} from "react";

export default function PageHeader({title, breadcrumbs, backButton = true}) {
  return (
    <>
      <div className="relative min-h-44 py-10 px-6 2xl:px-[100px] lg:flex lg:flex-col lg:justify-end lg:min-h-[421px]">
        <div className="absolute z-10 inset-0">
          <img src="/public/assets/img/about-bg-mob.jpg" className="w-full h-full object-cover" alt=""/>
        </div>
        <div className="flex items-end lg:items-start lg:pb-12 lg:border-b border-borders justify-between text-white relative z-20 gap-4">
          <h1 className="uppercase text-4xl lg:text-75 xl:text-115 text-balance font-secondary leading-none">{title}</h1>

          <a href="/" className="flex items-center justify-center size-[33px] bg-white rounded-full shrink-0 lg:hidden hover:bg-pale-bg">
            <span className="sr-only">Back to main</span>
            <img src="/public/assets/img/arr-left.svg" width="11" height="9" alt=""/>
          </a>
        </div>

        <div className="relative z-20 text-white mt-8 hidden lg:flex items-center justify-start gap-4">
          {breadcrumbs.map((breadcrumb) => (
            <Fragment key={breadcrumb.url}>
              <a
                href={breadcrumb.url}
                className="uppercase text-xl font-semibold hover:text-pale"
              >
                {breadcrumb.name}
              </a>
              <img src="/public/assets/img/icons/breadcrumb-arrow.svg" className="last:hidden" width={18} height={15} alt=""/>
            </Fragment>
          ))}
        </div>
      </div>

      {backButton && (
        <div className="py-8 bg-white border-b-2 border-borders hidden lg:block">
          <a href="/" className="flex items-center gap-2 text-primary font-medium hover:bg-pale-bg px-[25px] 2xl:px-[100px] py-6 uppercase">
            <img src="/public/assets/img/arr-left-long.svg" width="27" height="12" alt=""/>
            Back to main
          </a>
        </div>
      )}
    </>
  )
}
