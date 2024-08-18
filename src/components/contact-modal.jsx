import {twMerge} from "tailwind-merge";
import {useRef, useState, useEffect} from "react";

export default function ContactModal() {
  const [formData, setFormData] = useState({email: "", phone: "", name: ""});
  const [errors, setErrors] = useState({});
  const [formCheckbox, setFormCheckbox] = useState(true);

  const formDialogRef = useRef(null);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    setErrors({});
  }

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required!";
    if (!formData.phone) newErrors.phone = "Phone is required!";
    if (!formData.name) newErrors.name = "Name is required!";
    setErrors(newErrors);
    setTimeout(() => {
      setErrors({});
    }, 5000)
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data:", formData);
    }
    fetch('/', {
      method: "POST",
      headers: {"Content-Type": "application/x-www-form-urlencoded"},
      body: new URLSearchParams(formData).toString()
    })
      .then(() => console.log("Form successfully submitted"))
      .catch((error) => console.log(error));
  };

  const formCleanup = () => {
    setFormData({email: "", phone: "", name: ""});
  }

  const handleCloseModal = () => {
    formCleanup();
    document.getElementById('contact-modal').classList.add('hidden');
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (formDialogRef.current && !formDialogRef.current.contains(e.target)) {
        handleCloseModal();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [])

  return (
    <div onSubmit={handleSubmit} id="contact-modal" className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md flex flex-col items-center hidden">
      <div className="pt-16 grow w-full max-w-xl flex lg:items-center">
        <div ref={formDialogRef} className="form-dialog bg-pale-cream w-full py-16 px-4 relative">
          <button
            onClick={handleCloseModal}
            className="size-[52px] rounded-full bg-white absolute -top-[26px] right-4 group hover:bg-pale-bg transition rotate-45"
          >
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
            <form className="w-full" method="POST" name="modal_contact" data-netlify="true">
              <input type="hidden" name="form-name" value="modal_contact" />

              <div className="space-y-10 mt-4">
                <div className="space-y-1 lg:grow">
                  <input
                    type="email"
                    name='email'
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Your E-mail'
                    className={twMerge(
                      'border-b border-primary bg-transparent text-lg font-medium text-primary placeholder:text-primary pb-8 outline-0 focus:border-transparent focus:ring-1 ring-ocean ring-offset-transparent ring-offset-2 w-full',
                      errors.phone ? 'border-danger placeholder:text-danger' : ''
                    )}
                  />
                  {errors.email && (
                    <div className="text-danger text-17">{errors.email}</div>
                  )}
                </div>
                <div className="space-y-1 lg:grow">
                  <input
                    type="phone"
                    name='phone'
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder='Your Phone'
                    className={twMerge(
                      'border-b border-primary bg-transparent text-lg font-medium text-primary placeholder:text-primary pb-8 outline-0 focus:border-transparent focus:ring-1 ring-ocean ring-offset-transparent ring-offset-2 w-full',
                      errors.phone ? 'border-danger placeholder:text-danger' : ''
                    )}
                  />
                  {errors.phone && (
                    <div className="text-danger text-17">{errors.phone}</div>
                  )}
                </div>
                <div className="space-y-1 lg:grow">
                  <input
                    type="name"
                    name='name'
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Your Name'
                    className={twMerge(
                      'border-b border-primary bg-transparent text-lg font-medium text-primary placeholder:text-primary pb-8 outline-0 focus:border-transparent focus:ring-1 ring-ocean ring-offset-transparent ring-offset-2 w-full',
                      errors.phone ? 'border-danger placeholder:text-danger' : ''
                    )}
                  />
                  {errors.name && (
                    <div className="text-danger text-17">{errors.name}</div>
                  )}
                </div>

                <div className="gap-8 flex flex-col items-center">
                  <button
                    type="submit"
                    className="transition mx-auto bg-gradient-to-r from-[#48A6FA] via-[#8AC8FF] to-[#1B81E7] text-white text-lg rounded-full w-full max-w-[326px] lg:max-w-[409px] min-h-[92px] cursor-pointer border border-white active:border-ocean active:bg-transparent hover:from-[#48A6FA] hover:to-[#48A6FA] hover:text-white hover:border-ocean"
                  >
                    Send
                  </button>

                  <div className="form-checkbox">
                    <input
                      type="checkbox"
                      name="form_personal"
                      checked={formCheckbox}
                      onChange={(e) => setFormCheckbox(e.target.checked)}
                      id="form_personal"
                    />
                    <label htmlFor="form_personal" className="text-primary text-15">You consent to the processing of your personal data</label>
                  </div>

                </div>
              </div>

            </form>
          </div>

        </div>
      </div>
    </div>
  )
}
