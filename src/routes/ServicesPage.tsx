import { Brush, Headset, Truck, Wrench } from "lucide-react";
import Callout from "../components/Callout";
import Section from "../components/Section";
import { useEffect } from "react";
import { motion } from "motion/react";
import Seo from "../components/Seo";

const ServicesPage = () => {
  useEffect(() => {
    // Check if the URL contains a hash
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Scroll to the top if no hash is present
      window.scrollTo(0, 0);
    }
  }, []);
  return (
    <div>
      {/* SEO */}
      <Seo
        title="Services | KPJ Drilling"
        desc="We provide reliable and efficient services tailored to the needs of Botswana's drilling industry"
        keywords="KPJ Drilling services, Drilling Equipment Supply, Custom Drilling Mud Formulation, Local Delivery, Technical Support and Advice"
        type="Service"
      />
      {/* Services header section */}
      <header className="bg-primary py-6">
        <div className="container grid md:grid-cols-2 gap-x-5 items-center">
          <motion.div
            initial={{ transform: "translateX(-80px)", opacity: 0 }}
            animate={{
              transform: "translateX(0px)",
              opacity: 100,
            }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 2 }}
            className="text-white"
          >
            <h1>Our Services</h1>
            <p>
              At KPJ Drilling, we provide reliable and efficient services
              tailored to the needs of Botswana's drilling industry. With
              decades of experience and trusted supplier partnerships, we ensure
              your projects stay on track with the right tools, support, and
              delivery.
            </p>
          </motion.div>
          <motion.div
            initial={{ transform: "translateX(80px)", opacity: 0 }}
            animate={{
              transform: "translateX(0px)",
              opacity: 100,
            }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 2 }}
            className="bg-[url('/services-page.webp')] bg-cover bg-bottom h-100 hidden md:inline-block"
            title="KPJ drilling employee service manager"
          />
        </div>
      </header>
      <Section divClassName="space-y-17">
        <div className="flex gap-4" id="equipments">
          <div className="inline-block bg-primary p-3 rounded-full place-self-start mt-1 hover:scale-120 transition duration-500 ease-in-out">
            <Wrench color="#fff" />
          </div>
          <div>
            <h2 className="border-b-1 border-primary pb-2 text-primary w-full">
              Drilling Equipment Supply
            </h2>

            <p>
              We maintain a wide stock of high-performance drilling consumables,
              including DTH hammers, bits, rods, diamond coring equipment, core
              trays, and geological tools. Our partnerships with trusted
              international brands ensure consistent product quality and
              availability.
            </p>
          </div>
        </div>
        <div className="flex gap-4" id="custom">
          <div className="inline-block bg-primary p-3 rounded-full place-self-start mt-1 hover:scale-120 transition duration-500 ease-in-out">
            <Brush color="#fff" />
          </div>
          <div>
            <h2 className="border-b-1 border-primary pb-2 text-primary w-full">
              Custom Drilling Mud Formulation
            </h2>
            <p>
              As an official distributor of AMC Samchem, we supply a variety of
              drilling fluids, foams, and muds. We also coordinate custom mud
              formulations based on the type of ground conditions our clients
              are working in—helping to enhance drilling performance and reduce
              wear on equipment
            </p>
          </div>
        </div>
        <div className="flex gap-4" id="delivery">
          <div className="inline-block bg-primary p-3 rounded-full place-self-start mt-1 hover:scale-120 transition duration-500 ease-in-out">
            <Truck color="#fff" />
          </div>
          <div>
            <h2 className="border-b-1 border-primary pb-2 text-primary w-full">
              Local Delivery
            </h2>

            <p>
              Our in-house delivery vehicles and partnerships with local
              transporters ensure your supplies reach you on time, no matter
              where you are in Botswana. This helps minimize delays and allows
              you to focus fully on your project.
            </p>
          </div>
        </div>
        <div className="flex gap-4" id="support">
          <div className="inline-block bg-primary p-3 rounded-full place-self-start mt-1 hover:scale-120 transition duration-500 ease-in-out">
            <Headset color="#fff" />
          </div>
          <div>
            <h2 className="border-b-1 border-primary pb-2 text-primary w-full">
              Technical Support & Advice
            </h2>

            <p>
              With over 28 years of experience in the Botswana drilling sector,
              we offer expert guidance on product selection, usage, and
              efficiency. We’re also available for after-sales support and
              site-specific recommendations to help you get the most from your
              equipment.
            </p>
          </div>
        </div>
      </Section>
      <Callout />
    </div>
  );
};

export default ServicesPage;
