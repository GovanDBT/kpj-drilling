import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { ClipLoader } from "react-spinners";

// zod validation schema
const contactSchema = z.object({
  name: z.string().min(1, "Fullname is required!"),
  email: z.email("Invalid email address"),
  subject: z.string().min(1, "Email subject is required!"),
  message: z.string().min(1, "Message is required!"),
  organization: z.string(),
  phone: z.string().min(1, "Phone number is required!"),
  token: z.string().min(1, "Please verify reCAPTCHA!"),
});

type contactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<contactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { token: "" },
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const messageRef = useRef<HTMLDivElement>(null);

  const onSubmit = async (data: contactFormData) => {
    setLoading(true);
    setSuccess(false);
    setError(false);
    try {
      const res = await fetch("http://kpjdrilling.co.bw/mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        setSuccess(true);
        reset();
      } else {
        setError(true);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setError(true);
    } finally {
      setLoading(false);
      window.scrollTo(0, 0);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
      <div ref={messageRef}>
        {success && (
          <div className="bg-green-100 text-green-700 px-4 py-4 rounded">
            Message sent successfully!
          </div>
        )}
        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-4 rounded">
            Message failed to send!
          </div>
        )}
      </div>
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
          />
          {errors.name && (
            <p className="text-red-500 mt-2">{errors.name.message}</p>
          )}
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
          {errors.email && (
            <p className="text-red-500 mt-2">{errors.email.message}</p>
          )}
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
          {errors.phone && (
            <p className="text-red-500 mt-2">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="organization"
            className="form-label block mb-3 font-bold"
          >
            Organization:
          </label>
          <input
            {...register("organization")}
            type="text"
            className="form-control bg-white text-primary w-full outline-0 py-3 px-2 rounded"
            placeholder="e.g. KPJ Drilling"
            id="organization"
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
        {errors.subject && (
          <p className="text-red-500 mt-2">{errors.subject.message}</p>
        )}
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
        <div className="flex items-center justify-between">
          {errors.message && (
            <p className="text-red-500 mt-2">{errors.message.message}</p>
          )}
          <p className="text-sm mt-2 italic text-right">
            Max of 200 characters allowed
          </p>
        </div>
      </div>

      <ReCAPTCHA
        sitekey="6LeirYwrAAAAABgeZ_GB3OZ7_DhJO5_-UJcJczJU"
        onChange={(token: string | null) => setValue("token", token || "")}
      >
        {errors.token && (
          <p className="text-red-500 mt-2">{errors.token.message}</p>
        )}
      </ReCAPTCHA>

      <div className="place-self-center">
        <button
          type="submit"
          className="bg-white text-primary rounded py-3 text-nowrap text-lg font-bold w-60 cursor-pointer hover:bg-secondary hover:text-white transition ease-in-out flex justify-center items-center gap-3"
          disabled={loading}
        >
          <ClipLoader
            color={"#0A2E57"}
            loading={loading}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          {loading ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
