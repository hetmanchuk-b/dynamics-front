import ContactForm from "../contact-form";

export default function ContactSection() {
  return (
    <section className="relative xl:min-h-[700px] 3xl:min-h-[850px] xl:flex xl:flex-col">
      <img src="assets/img/contact-bg-mob.jpg" className="absolute z-10 inset-0 w-full h-full object-cover lg:hidden" alt=""/>
      <img src="assets/img/contact-bg.jpg" className="absolute z-10 inset-0 w-full h-full object-cover hidden lg:block" alt=""/>

      <div className="relative xl:grow z-20 bg-[#181818]/10 pt-16 pb-24 px-4 backdrop-blur-lg text-white lg:w-1/2 lg:px-14 xl:px-24 3xl:flex 3xl:flex-col 3xl:items-stretch 3xl:justify-center">
        <h2 className="text-center font-secondary uppercase text-31 leading-none lg:text-50 3xl:text-87 lg:text-start text-balance">If you have any questions</h2>
        <p className="mt-6 3xl:mt-10 font-medium text-center text-xl text-balance lg:text-start 2xl:text-31 max-w-[220px] lg:max-w-full w-full mx-auto leading-tight">Send a request and we will contact you</p>

        <ContactForm />

      </div>

    </section>
  )
}
