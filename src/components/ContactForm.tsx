import { FieldValues, useForm } from "react-hook-form";

const ContactForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: FieldValues) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="form-label block mb-3 font-bold">
            Full name: <span className="text-red-400">*</span>
          </label>
          <input
            {...register("name")}
            type="text"
            className="form-control bg-white text-primary w-full outline-0 py-3 px-2 rounded"
            placeholder="your name..."
            id="name"
            autoFocus
          />
        </div>
        <div>
          <label htmlFor="email" className="form-label block mb-3 font-bold">
            Email: <span className="text-red-400">*</span>
          </label>
          <input
            {...register("email")}
            type="email"
            className="form-control bg-white text-primary w-full outline-0 py-3 px-2 rounded"
            placeholder="name@example.com"
            id="email"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="form-label block mb-3 font-bold">
            Phone: <span className="text-red-400">*</span>
          </label>
          <input
            {...register("phone")}
            type="tel"
            className="form-control bg-white text-primary w-full outline-0 py-3 px-2 rounded"
            placeholder="+267 ..."
            id="phone"
          />
        </div>
        <div>
          <label htmlFor="org" className="form-label block mb-3 font-bold">
            Organisation:
          </label>
          <input
            {...register("org")}
            type="text"
            className="form-control bg-white text-primary w-full outline-0 py-3 px-2 rounded"
            placeholder="e.g. KPJ Drilling"
            id="org"
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="form-label block mb-3 font-bold">
          Subject: <span className="text-red-400">*</span>
        </label>
        <input
          {...register("subject")}
          type="text"
          className="form-control bg-white text-primary w-full outline-0 py-3 px-2 rounded"
          placeholder="e.g. Requesting a Quote"
          id="subject"
        />
      </div>
      <div>
        <label htmlFor="message" className="form-label block mb-3 font-bold">
          Message: <span className="text-red-400">*</span>
        </label>
        <textarea
          {...register("message")}
          className="form-control bg-white text-primary w-full outline-0 py-3 px-2 rounded resize-none"
          placeholder="your message here..."
          id="message"
          rows={8}
          maxLength={200}
        />
        <p className="text-sm mt-2 italic text-right">
          Max of 200 characters allowed
        </p>
      </div>
      <div className="place-self-center">
        <button
          type="submit"
          className="bg-white text-primary rounded py-3 text-nowrap text-lg font-bold w-60 cursor-pointer hover:bg-secondary hover:text-white transition ease-in-out"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
