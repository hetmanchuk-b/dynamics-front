export default function ContactModal() {
  return (
    <div id="contact-modal" className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md flex flex-col items-center hidden">
      <div className="pt-16 grow w-full max-w-xl flex lg:items-center">
        <div className="bg-pale-cream w-full py-16 px-4 relative">
          <button className="size-[52px] rounded-full bg-white absolute -top-[26px] right-4 group hover:bg-pale-bg transition rotate-45 ">
            <span className="sr-only">Open</span>
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:from-danger group-hover:to-danger w-[20px] h-1 bg-gradient-to-br from-blue-700 via-sky-300 to-blue-500"></span>
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:from-danger group-hover:to-danger w-[20px] h-1 bg-gradient-to-br from-blue-300 via-sky-300 to-blue-500 rotate-90"></span>
          </button>

          <div className="w-full max-w-md mx-auto">
            <h2 className="text-primary font-secondary text-37 lg:text-50 text-center text-balance uppercase leading-none mb-4">
              If you have any questions
            </h2>
            <p className="text-center text-15 text-primary text-balance">
              Send a request and we <br className="md:hidden"/> will contact you
            </p>
            <form method="POST" name="modal_contact" data-netlify="true">
              <input type="hidden" name="form-name" value="modal_contact" />



            </form>
          </div>

        </div>
      </div>
    </div>
  )
}
