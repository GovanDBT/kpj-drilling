// modules
import Badge from "../components/Badge";
import Button from "../components/Button";
import ServiceCard from "../components/ServiceCard";
// Images
import logo from "/kpj-logo.png";
import aboutImage from "/about-section.webp";
import drilling from "/drilling.svg";
import support from "/support.svg";
import delivery from "/delivery.svg";
import mud from "/mud.svg";
import Callout from "../components/Callout";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import products from "../database/products";
import ProductCard from "../components/ProductCard";
import Section from "../components/Section";
import { useEffect } from "react";
import Seo from "../components/Seo";

const cardItems = [
  {
    image: drilling,
    alt: "Card icon of a drilling machine",
    text: "Drilling Equipment Supply",
    link: "/services#equipments",
  },
  {
    image: support,
    alt: "Card icon of a support system",
    text: "Technical Support & Advice",
    link: "/services#support",
  },
  {
    image: delivery,
    alt: "Card icon of a delivery network",
    text: "Local Delivery Across Botswana",
    link: "/services#delivery",
  },
  {
    image: mud,
    alt: "Card icon of a mud drilling machine",
    text: "Custom Drilling Mud Formulation",
    link: "/services#custom",
  },
];

const Home = () => {
  // prevents page from scrolling when refreshed
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  const homeProducts = products.filter((p) => p.pid <= 4);

  return (
    <div>
      {/** SEO */}
      <Seo
        desc="KPJ Drilling (Pty) Ltd is a supplier of drilling consumables for the drilling industry, not only borehole drilling but also exploration drilling"
        keywords="KPJ Drilling, Drilling, Supplier of Drilling Consumables, supplier of drilling consumables in Botswana, Drilling equipments"
      />
      {/* HERO */}
      <header className="bg-[url('/hero.webp')] bg-primary bg-cover lg:bg-center h-140 place-content-center">
        <motion.div
          initial={{ transform: "translateY(100px)", opacity: 0 }}
          animate={{
            transform: "translateY(0px)",
            opacity: 100,
          }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 2 }}
        >
          <div className="container flex flex-col lg:flex-row items-center gap-5 lg:gap-10">
            <img
              src={logo}
              alt="KPJ Drilling logo"
              title="KPJ Drilling logo"
              className="h-50 lg:h-80"
            />
            <div>
              <h1 className="text-5xl/normal text-center lg:text-left lg:text-[95px]/20 text-white mb-8 font-bold lg:font-medium font-custom">
                KPJ Drilling{" "}
                <span className="text-3xl font-medium">(Pty) Ltd</span>
              </h1>
              <p className="text-white text-4xl/normal text-center lg:text-5xl/15 font-normal italic">
                Supplier of Drilling Consumables
              </p>
            </div>
          </div>
        </motion.div>
      </header>
      {/* ABOUT */}
      <section className="grid md:grid-cols-2 gap-y-10 gap-x-8 container my-30 items-center">
        <motion.div
          initial={{ transform: "translateX(-100px)", opacity: 0 }}
          whileInView={{
            transform: "translateX(0px)",
            opacity: 100,
          }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 2, delay: 0.2 }}
          className="order-2 lg:order-1"
        >
          <img
            src={aboutImage}
            alt="KPJ drilling pipes and chemicals"
            title="KPJ drilling pipes and chemicals"
          />
        </motion.div>
        <div className="flex flex-col space-y-8 order-1 lg:order-2">
          <Badge text="About Us" className="hidden lg:inline-flex" />
          <div>
            <div className="flex justify-between">
              <h2>KPJ drilling (Pty) Ltd</h2>
              <Badge
                text="About Us"
                className="lg:hidden text-[13px] !place-self-center"
              />
            </div>
            <p>
              KPJ Drilling (Pty) Ltd is a supplier of drilling consumables for
              the drilling industry, not only borehole drilling but also
              exploration drilling. Since its establishment in September 2001,
              KPJ Drilling has supplied consumables and equipment for many of
              the Batswana drillers carrying out varying projects throughout
              Botswana.
            </p>
          </div>
          <Link to="/about">
            <Button className="place-self-start">read more</Button>
          </Link>
        </div>
      </section>
      {/* SERVICES */}
      <section className="container my-30 items-center">
        <div className="flex flex-col md:flex-row text-center md:text-left justify-between mb-8">
          <h2>our services</h2>
          <Link to="/services">
            <Button className="place-self-center">more services</Button>
          </Link>
        </div>
        <div className="grid lg:grid-cols-4 gap-6 justify-center">
          {cardItems.map((item) => (
            <Link
              to={item.link}
              key={item.link}
              className="hover:scale-103 transition duration-500 ease-in-out"
            >
              <ServiceCard
                text={item.text}
                img={item.image}
                imgAlt={item.alt}
              />
            </Link>
          ))}
        </div>
      </section>
      {/* PRODUCTS */}
      <Section divClassName="flex flex-col items-center gap-y-12">
        <h2 className="m-0">our products</h2>
        {homeProducts.length > 0 && (
          <div className="grid lg:grid-cols-4 gap-6">
            {homeProducts.map((p) => (
              <ProductCard
                key={p.pid}
                name={p.name}
                description={p.brief_desc}
                image={p.image}
                id={p.pid}
              />
            ))}
          </div>
        )}
        {homeProducts.length == 0 && (
          <p className="text-center">Sorry, we couldn't find any Products</p>
        )}
        <Link to="/products">
          <Button>view all products</Button>
        </Link>
      </Section>
      {/* BANNER IMG */}
      <section className="mt-30 h-150 bg-[url('/callout-section.webp')] bg-cover bg-center">
        <div className="bg-linear-to-t from-primary to-white/0 h-full place-content-center">
          <div className="container lg:max-w-240 space-y-8">
            <div className="text-center">
              <h2 className="text-white text-3xl/normal lg:text-5xl/normal">
                Trusted Since 2001 - Locally Rooted, Globally Connected
              </h2>
              <p className="text-white lg:max-w-180 mx-auto text-xl/normal">
                With over 28 years of experience, we provide high-performance
                drilling consumables across Botswana.
              </p>
            </div>
            <Link to="/about">
              <Button color="white" className="!place-self-center">
                more details
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* CALLOUT */}
      <Callout containerClassName="!py-13" />
    </div>
  );
};

export default Home;
