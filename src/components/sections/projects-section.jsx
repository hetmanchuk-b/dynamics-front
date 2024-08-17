import {useState} from "react";
import {twMerge} from "tailwind-merge";

const mockProjectsData = [
  {
    imgSrc: "assets/img/gallery/1.jpg",
    title: 'Glazing of a premium-class residential building',
    index: 1,
    isOpen: true
  },
  {
    imgSrc: "assets/img/gallery/2.jpg",
    title: 'Glazing2 of a premium-class residential building',
    index: 2,
    isOpen: false
  },
  {
    imgSrc: "assets/img/gallery/3.jpg",
    title: 'Glazing 3of a premium-class residential building',
    index: 3,
    isOpen: false
  },
  {
    imgSrc: "assets/img/gallery/4.jpg",
    title: 'Glazing of a premium-class residential building',
    index: 4,
    isOpen: false
  },
];

export default function ProjectsSection() {
  const [projects, setProjects] = useState([...mockProjectsData]);

  const handleProjectClick = (index) => {
    const updatedProjects = projects.map((project) => ({
      ...project,
      isOpen: project.index === index,
    }));
    setProjects(updatedProjects);
  };

  return (
    <section className="bg-white pt-20 border-b border-borders">
      <div className="border-b border-borders px-[25px] 3xl:px-[100px] pb-14 relative">
        <h2 className="uppercase text-4xl font-secondary text-balance text-primary lg:text-56 xl:text-75 2xl:text-160 leading-none">
          View <span className="bg-gradient-to-b from-blue-700 via-blue-400 to-blue-700 bg-clip-text text-transparent">our projects</span>
        </h2>

        <div className="absolute right-4 -bottom-3 bg-white px-5 hidden lg:block 2xl:right-20">
          <a href='/portfolio/' className="underline-black text-black lowercase font-medium relative text-xl hover:text-ocean">
            see more projects
          </a>
        </div>
      </div>

      <div className="hidden lg:block py-14 border-b border-borders px-[25px] 3xl:px-[100px] overflow-hidden">
        <div className={twMerge(
          'transition duration-1000 w-[115vw]',
          projects[3].isOpen ? 'lg:-translate-x-[100px] xl:-translate-x-[200px]' : ''
        )}>
          <div className="flex items-start gap-8 w-full">
            {projects.map((project) => (
              <ProjectItem
                key={project.index}
                imgSrc={project.imgSrc}
                title={project.title}
                index={project.index}
                isOpen={project.isOpen}
                onClick={() => handleProjectClick(project.index)}
              />
            ))}
          </div>
        </div>

      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-5 px-[25px] pt-10 pb-5 lg:hidden">
        <img src="assets/img/gallery/1.jpg" className="col-span-full sm:col-start-1 sm:col-end-4 w-full" alt=""/>
        <img src="assets/img/gallery/2.jpg" className="w-full sm:col-start-4 sm:col-end-6" alt=""/>
        <img src="assets/img/gallery/3.jpg" className="w-full sm:col-start-1 sm:col-end-3" alt=""/>
        <img src="assets/img/gallery/4.jpg" className="col-span-full sm:col-start-3 sm:col-end-5 w-full" alt=""/>
      </div>

      <div className="flex justify-center pb-10 lg:hidden">
        <a href='/' className="underline-black text-black lowercase font-medium relative text-xl hover:text-ocean">
          see more projects
        </a>
      </div>
    </section>
  )
}

function ProjectItem({imgSrc, title, index, isOpen, onClick}) {
  return (
    <>
      <div
        onClick={onClick}
        className={twMerge(
          'space-y-8 transition shrink-0 overflow-hidden',
          isOpen ? 'max-w-4xl w-1/3' : 'aspect-[0.84] max-w-sm max-h-[390px] w-[16%] cursor-pointer group'
        )}
      >
        <div className={twMerge(
          'overflow-hidden',
          isOpen ? 'aspect-[1.56164]' : 'aspect-[0.84871]'
        )}>
          <img
            src={imgSrc}
            className={twMerge(
              'object-cover w-full transition',
              isOpen ? 'h-full' : 'group-hover:scale-110'
            )}
            alt=""
          />
        </div>
        {isOpen && (
          <div className="flex items-start justify-between gap-8 font-medium text-17 xl:text-27 text-primary">
            <p className="text-balance text-start uppercase">{ title }</p>
            <p className="text-end">#{ index < 10 ? `0${index}` : index }</p>
          </div>
        )}
      </div>
    </>
  )
}
