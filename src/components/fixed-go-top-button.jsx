import {twMerge} from "tailwind-merge";
import {useEffect, useState} from "react";

export default function FixedGoTopButton() {
  const handleGoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 999) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);
  return (
    <div
      className={twMerge(
        'fixed z-50 right-6 bottom-10 transition duration-1000 ease-out',
        showButton ? 'translate-y-0' : 'translate-y-52'
      )}
    >
      <button onClick={handleGoTop} className="size-[86px] lg:size-[112px] transition active:bg-transparent active:backdrop-blur-sm group hover:bg-pale-bg/10 hover:backdrop-blur-lg flex items-center justify-center rounded-full bg-transparent cursor-pointer">
        <span className="group-hover:border-t-primary group-hover:border-r-primary border border-t-transparent border-r-transparent border-primary absolute inset-0 rounded-full rotate-45 transition" />
        <svg className="rotate-180 transition group-hover:scale-110" width="16" height="30" viewBox="0 0 16 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="stroke-primary transition" d="M8 0.5C8 2.5 8 20 8 28.5M8 28.5L1 21.5M8 28.5L15 21.5" stroke="#000000"/>
        </svg>
      </button>
    </div>
  )
}
