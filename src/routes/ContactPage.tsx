import { Mail, Mailbox, MapPin, Phone } from "lucide-react";
import ContactForm from "../components/ContactForm";
import { motion } from "motion/react";
import { useEffect } from "react";

const ContactPage = () => {
  // prevents page from scrolling when refreshed
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Services header section */}
      <header className="bg-primary py-5">
        <div className="container border-b-1 border-white/40">
          <motion.div
            initial={{ transform: "translateY(30px)", opacity: 0 }}
            animate={{
              transform: "translateY(0px)",
              opacity: 100,
            }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 2 }}
            className="text-white pb-6"
          >
            <h1>Contact Us</h1>
            <p>
              Get in touch with us for product inquiries, quotation requests,
              technical support, or service requests. We're here to help you
              keep your drilling operations running smoothly—wherever you are in
              Botswana.
            </p>
          </motion.div>
        </div>
      </header>
      <section className="bg-primary pt-8 pb-14">
        <div className="container text-white grid lg:grid-cols-[2fr_1fr] gap-5">
          <ContactForm />
          <div>
            <h3 className="mb-5 border-b-1 border-white/40 pb-3">
              Contact Details
            </h3>
            <div className="space-y-10">
              <div className="flex gap-4">
                <div className="bg-white inline-block p-2 rounded-full place-self-center">
                  <Phone color="#0A2E57" size={20} />
                </div>
                <p>+267 319 0837 / 74 294 929</p>
              </div>
              <div className="flex gap-4">
                <div className="bg-white inline-block p-2 rounded-full place-self-center">
                  <Mail color="#0A2E57" size={20} />
                </div>
                <p>admin@kpjdrilling.co.bw</p>
              </div>
              <div className="flex gap-4">
                <div className="bg-white inline-block p-2 rounded-full place-self-center">
                  <MapPin color="#0A2E57" size={20} />
                </div>
                <p>Plot 22055, Unit G1, Gaborone West Industrial, Gaborone</p>
              </div>
              <div className="flex gap-4">
                <div className="bg-white inline-block p-2 rounded-full place-self-center">
                  <Mailbox color="#0A2E57" size={20} />
                </div>
                <p>P.O. Box 10039, Gaborone</p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.339497483986!2d25.895820000000004!3d-24.6808536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebb5a3445350003%3A0x19639e3fd9b22fb2!2sKPJ%20Drilling%20(Pty)%20Ltd!5e0!3m2!1sen!2sbw!4v1751970022206!5m2!1sen!2sbw"
                width="100%"
                height="300"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
