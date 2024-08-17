import {useState} from "react";
import {twMerge} from "tailwind-merge";

export default function ContactForm() {
  const [formData, setFormData] = useState({phone: "", name: ""});
  const [errors, setErrors] = useState({});

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

  return (
    <form onSubmit={handleSubmit} name="contact" netlify>
      <input type="hidden" name="form-name" value="contact" />
      <div className="space-y-10 mt-4 lg:space-y-0 lg:flex lg:gap-8 lg:mt-6 lg:w-full 3xl:mt-12">
        <div className="space-y-1 lg:grow">
          <input
            type="text"
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            placeholder='Your Phone'
            className={twMerge(
              'border-b border-white bg-transparent text-lg font-medium text-white placeholder:text-white pb-8 outline-0 focus:border-transparent focus:ring-1 ring-ocean ring-offset-transparent ring-offset-2 w-full',
              errors.phone ? 'border-danger placeholder:text-danger' : ''
            )}
          />
          {errors.phone && (
            <div className="text-danger text-17">{errors.phone}</div>
          )}
        </div>
        <div className="space-y-1 lg:grow">
          <input
            type="text"
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Your Name'
            className={twMerge(
              'capitalize border-b border-white bg-transparent text-lg font-medium text-white placeholder:text-white pb-8 outline-0 focus:border-transparent focus:ring-1 ring-ocean ring-offset-transparent ring-offset-2 w-full',
              errors.name ? 'border-danger placeholder:text-danger' : ''
            )}
          />
          {errors.name && (
            <div className="text-danger text-17">{errors.name}</div>
          )}
        </div>
      </div>

      <div className="space-y-8 xl:space-y-0 mt-8 xl:flex xl:items-center gap-4 3xl:mt-12">
        <button
          type='submit'
          className="transition bg-white text-black text-lg rounded-full w-full max-w-[409px] min-h-[92px] cursor-pointer border border-white active:border-white active:bg-transparent active:text-white hover:bg-ocean hover:text-white hover:border-ocean"
        >
          Send a request
        </button>
        <p className="text-sm leading-tight text-center text-balance">If you submit an application, you automatically consent to the processing of your personal data</p>
      </div>
    </form>
  )
}
