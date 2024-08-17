import {useEffect, useState} from "react";
import {twMerge} from "tailwind-merge";
import LangSwitcher from "./lang-switcher";

export default function Header({isWhite = false}) {
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    if (menuOpened) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [menuOpened]);


  return (
    <header
      className={
        twMerge(
          'w-full z-40',
          !isWhite && 'absolute top-0 left-0',
          isWhite && 'relative z-40',
          menuOpened && 'fixed bottom-0 right-0 h-full backdrop-blur-2xl',
        )
      }
    >
      <div className={twMerge(
        'w-full px-[25px] 2xl:px-[60px] 2xl:py-[25px] py-[15px] flex flex-col',
        menuOpened && 'h-full justify-between'
      )}>
        <div className="flex items-center justify-between gap-2">
          {menuOpened && (
            <div className="sm:hidden"><LangSwitcher /></div>
          )}

          <a
            href="/"
            className={twMerge(
              "xl:px-2 xl:py-1 cursor-pointer block max-w-[326px]",
              isWhite ? "xl:bg-metal" : ""
            )}
          >
            <img src="/assets/img/logo-blue.svg" className="xl:hidden" width="55" height="35" alt="Buildwise" />
            <img src="/assets/img/logo-full-blue.png" className="xl:block hidden w-full" width="2212" height="444" alt="Buildwise" />
          </a>

          <div className="hidden lg:flex items-center gap-10 xl:gap-24">
            <a href="/news/" className={twMerge(
              'text-white text-base font-light hover:bg-pale-bg/60 hover:text-ocean px-2 py-1 transition',
              isWhite && 'text-primary hover:bg-transparent'
            )}>News</a>
            <a href="/about/" className={twMerge(
              'text-white text-base font-light hover:bg-pale-bg/60 hover:text-ocean px-2 py-1 transition',
              isWhite && 'text-primary hover:bg-transparent'
            )}>About us</a>
            <a href="/catalog/" className={twMerge(
              'text-white text-base font-light hover:bg-pale-bg/60 hover:text-ocean px-2 py-1 transition',
              isWhite && 'text-primary hover:bg-transparent'
            )}>Catalog</a>
            <a href="/portfolio/" className={twMerge(
              'text-white text-base font-light hover:bg-pale-bg/60 hover:text-ocean px-2 py-1 transition',
              isWhite && 'text-primary hover:bg-transparent'
            )}>Portfolio</a>
          </div>

          <div className="hidden sm:flex items-center gap-8">
            <LangSwitcher isWhite={isWhite} />

            <a href="tel:+17606058600" className={twMerge(
              'text-17 font-medium text-white hover:bg-pale-bg/60 hover:text-ocean px-2 py-1 transition',
              isWhite && 'text-primary',
              !isWhite && 'text-white'
            )}>+1 760 605 8600</a>
          </div>

          <button className="flex items-center gap-4 lg:hidden" onClick={() => setMenuOpened(!menuOpened)}>
            <span className={twMerge(
              'uppercase font-medium text-15 text-white',
              isWhite && 'text-primary',
              !isWhite && 'text-white'
            )}>
              {menuOpened ? 'Back' : 'Menu'}
            </span>
            <span className={twMerge(
              'size-[47px] bg-white rounded-full flex items-center justify-center',
              isWhite && 'bg-primary'
            )}>
              <span className="grid grid-cols-2 gap-1">
                <span className={twMerge(
                  'bg-black rounded-full size-[5px]',
                  isWhite && 'bg-white'
                )}></span>
                <span className={twMerge(
                  'bg-black rounded-full size-[5px]',
                  isWhite && 'bg-white'
                )}></span>
                <span className={twMerge(
                  'bg-black rounded-full size-[5px]',
                  isWhite && 'bg-white'
                )}></span>
                <span className={twMerge(
                  'bg-black rounded-full size-[5px]',
                  isWhite && 'bg-white'
                )}></span>
              </span>
            </span>
          </button>

          <div className="hidden lg:block">
            <div className="flex items-center gap-2 justify-center">
              <a href="/" className="flex items-center justify-center size-[67px] rounded-full relative group">
                <img src="/assets/img/socials-border.svg" className="absolute inset-0 object-cover transition z-10 group-hover:opacity-50" alt=""/>
                {isWhite ? (
                  <img src="/assets/img/icons/instagram-blue.svg" width="20" height="20" className="relative z-20" alt=""/>
                ) : (
                  <img src="/assets/img/icons/instagram.svg" width="20" height="20" className="relative z-20" alt=""/>
                )}
                <span className="sr-only">Instagram</span>
              </a>
              <a href="/" className="flex items-center justify-center size-[67px] rounded-full relative group">
                <img src="/assets/img/socials-border.svg" className="absolute inset-0 object-cover transition z-10 group-hover:opacity-50" alt=""/>
                {isWhite ? (
                  <img src="/assets/img/icons/facebook-blue.svg" width="10" height="18" className="relative z-20" alt=""/>
                ) : (
                  <img src="/assets/img/icons/facebook.svg" width="10" height="18" className="relative z-20" alt=""/>
                )}
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {menuOpened && (
          <>
            <div className="flex flex-col gap-6 items-start mt-16 text-31">
              <a href="/news/" className={twMerge(
                'uppercase font-medium text-white cursor-pointer',
                isWhite && 'text-primary text-31',
              )}>News</a>
              <a href="/about/" className={twMerge(
                'uppercase font-medium text-white cursor-pointer',
                isWhite && 'text-primary text-31',
              )}>About us</a>
              <a href="/catalog/" className={twMerge(
                'uppercase font-medium text-white cursor-pointer',
                isWhite && 'text-primary text-31',
              )}>Catalog</a>
              <a href="/portfolio/" className={twMerge(
                'uppercase font-medium text-white cursor-pointer',
                isWhite && 'text-primary',
              )}>Portfolio</a>
            </div>

            <div className={twMerge(
              'w-full h-px bg-[#E7E7E7]',
              isWhite && 'bg-primary'
            )} />

            <div className="flex items-center gap-2 justify-center">
              <a href="/" className="flex items-center justify-center size-[67px] rounded-full relative group">
                <img src="/assets/img/socials-border.svg" className="absolute inset-0 object-cover transition z-10 group-hover:opacity-50" alt=""/>
                {isWhite ? (
                  <img src="/assets/img/icons/instagram-blue.svg" width="20" height="20" className="relative z-20" alt=""/>
                ) : (
                  <img src="/assets/img/icons/instagram.svg" width="20" height="20" className="relative z-20" alt=""/>
                )}
                <span className="sr-only">Instagram</span>
              </a>
              <a href="/" className="flex items-center justify-center size-[67px] rounded-full relative group">
                <img src="/assets/img/socials-border.svg" className="absolute inset-0 object-cover transition z-10 group-hover:opacity-50" alt=""/>
                {isWhite ? (
                  <img src="/assets/img/icons/facebook-blue.svg" width="10" height="18" className="relative z-20" alt=""/>
                ) : (
                  <img src="/assets/img/icons/facebook.svg" width="10" height="18" className="relative z-20" alt=""/>
                )}
                <span className="sr-only">Facebook</span>
              </a>
            </div>

            <div className={twMerge(
              'text-center text-15 font-medium mt-6 flex flex-col items-center gap-5',
              isWhite && 'text-primary',
              !isWhite && 'text-white'
            )}>
              <a href="mailto:adr.dynamics@gmail.com" className="uppercase">adr.dynamics@gmail.com</a>
              <a href="tel:+17606058600">+1 760 605 8600</a>
            </div>
          </>
        )}

      </div>
    </header>
  )
}
