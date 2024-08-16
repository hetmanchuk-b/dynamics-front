import {useState} from "react";
import {twMerge} from "tailwind-merge";

export default function FaqSection() {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What services do we provide?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      question: "How do I contact support?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      question: "What are your office hours?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
  ];
  return (
    <section className="bg-white pt-14 pb-14 xl:pb-28">
      <div className="px-[25px] 3xl:px-[100px] pb-14 lg:flex lg:justify-start">
        <div className="hidden lg:block text-xl text-pale font-secondary tracking-wider mr-14">
          FAQ
        </div>
        <h2 className="uppercase text-4xl font-secondary text-balance text-primary lg:text-56 xl:text-75 2xl:text-160 leading-none">
          the <br/> <span className="2xl:relative 2xl:left-20">most <br className="lg:hidden"/> frequent</span> <br/>
          <span className="bg-gradient-to-b from-blue-700 via-blue-400 to-blue-700 bg-clip-text text-transparent 2xl:relative 2xl:right-12">questions</span>
        </h2>
      </div>

      <div className="px-[25px] 3xl:px-[100px]">
        <div className="border-t border-borders">
          {faqItems.map((item, index) => (
            <div key={index} className="py-12 border-b border-borders">
              <div onClick={() => toggleAccordion(index)} className="flex items-center justify-between gap-6 cursor-pointer group">
                <p className="text-xl text-primary text-balance lg:text-50">{item.question}</p>
                <button className={twMerge(
                  'size-[52px] rounded-full bg-pale-bg relative group-hover:bg-ocean/20 transition',
                  openIndex === index ? 'rotate-45' : ''
                )}>
                  <span className="sr-only">Open</span>
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:from-ocean group-hover:to-ocean transition w-[20px] h-1 bg-gradient-to-br from-blue-700 via-sky-300 to-blue-500"></span>
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:from-ocean group-hover:to-ocean transition rotate-90 w-[20px] h-1 bg-gradient-to-br from-blue-300 via-sky-300 to-blue-500"></span>
                </button>
              </div>
              <div className={twMerge(
                'pt-10 font-light text-sm space-y-2 lg:text-xl lg:pr-20 text-balance',
                openIndex === index ? 'block' : 'hidden'
              )}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
