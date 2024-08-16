import {twMerge} from "tailwind-merge";
import {useState} from "react";

export default function LangSwitcher({isWhite}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer flex items-center gap-2.5 px-2 py-1">
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className={twMerge(isWhite && 'stroke-ocean')} d="M1 12.5567C1 18.9394 5.94225 24.1133 12.0392 24.1133C18.1361 24.1133 23.0784 18.9394 23.0784 12.5567C23.0784 6.17392 18.1361 1 12.0392 1C5.94225 1 1 6.17392 1 12.5567Z" stroke="#FEFEFF" strokeWidth="1.10392" strokeLinecap="round" strokeLinejoin="round"/>
          <path className={twMerge(isWhite && 'stroke-ocean')} d="M13.1425 1.05798C13.1425 1.05798 16.4542 5.62286 16.4542 12.5569C16.4542 19.4909 13.1425 24.0557 13.1425 24.0557M10.9346 24.0557C10.9346 24.0557 7.62287 19.4909 7.62287 12.5569C7.62287 5.62286 10.9346 1.05798 10.9346 1.05798M1.69482 16.6017H22.3823M1.69482 8.51203H22.3823" stroke="#FEFEFF" strokeWidth="1.10392" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className={twMerge(
          'uppercase text-white text-17 font-semibold',
          isWhite && 'text-ocean',
          !isWhite && 'text-white'
        )}>ENG</span>
      </button>
      {isOpen && (
        <div className="absolute top-[110%] right-0 bg-white text-primary px-4 py-2">
          <div className="absolute z-10 right-2 -top-2.5 inline-block w-0 h-0 border-solid border-t-0 border-r-[18.5px] border-l-[18.5px] border-b-[32px] border-l-transparent border-r-transparent border-t-transparent border-b-white"></div>
          <div className="font-medium text-xl flex flex-col items-start relative z-20 bg-white">
            <a href="/" className="hover:text-ocean">ENG</a>
            <a href="/" className="hover:text-ocean">UA</a>
          </div>
        </div>
      )}
    </div>
  )
}
