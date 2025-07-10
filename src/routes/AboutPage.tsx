import { Eye, Goal } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";
import Section from "../components/Section";
import { motion } from "motion/react";
// images
// import dwdClient from "/dwd.webp";
// import bgiClient from "/bgi.webp";
// import wucClient from "/wuc.webp";
// import dbClient from "/db.webp";
// import bdfClient from "/bdf.webp";
// import tlouClient from "/tlou.webp";
import Badge from "../components/Badge";
import offersImag from "/what-we-offer-section.webp";
import Callout from "../components/Callout";

const About = () => {
  const [startCounting, setStartCounting] = useState(false);
  const countUpRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (countUpRef.current) {
      observer.observe(countUpRef.current);
    }

    return () => {
      if (countUpRef.current) {
        observer.unobserve(countUpRef.current);
      }
    };
  }, []);

  return (
    <div>
      {/* About header section */}
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
            <h1>About Us</h1>
            <p>
              Learn more about who we are, what we stand for, and how we've been
              powering Botswana's drilling industry since 2001. From local
              expertise to global partnerships, KPJ Drilling (Pty) Ltd is
              committed to delivering quality product and service we offer.
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
            className="bg-[url('/about-page.webp')] bg-cover bg-top h-100 hidden md:inline-block"
            title="KPJ drilling employee loading products"
          />
        </div>
      </header>
      {/* What is KPJ section */}
      <Section>
        <h2>What is KPJ Drilling?</h2>
        <p>
          KPJ Drilling (Pty) Ltd is a trusted and established{" "}
          <b>supplier of drilling consumables and equipment</b>, proudly serving
          Botswana's borehole and exploration drilling industries{" "}
          <b>since 2001</b>. Strategically located in{" "}
          <b>Gaborone West Industrial</b>, our company was founded to meet the
          unique needs of Batswana drillers—delivering timely, reliable, and
          cost-effective drilling solutions that eliminate the need for
          complicated cross-border sourcing.
          <br />
          <br />
          With <b>more than 28 years of hands-on experience</b> in the local
          drilling sector, our Managing Director, Rodney Baker, brings unmatched
          industry insight and technical knowledge. Under his leadership, KPJ
          Drilling has grown to become one of Botswana's most reliable drilling
          supply partners—offering a wide range of high-quality products, expert
          guidance, and full after-sales support.
        </p>
      </Section>
      {/* Counting numbers */}
      <Section>
        <div
          ref={countUpRef}
          className="grid md:grid-cols-3 gap-y-30 items-center text-center"
        >
          <div>
            <h2 className="text-8xl text-primary mb-3 flex items-center justify-center">
              <CountUp
                end={28}
                duration={2}
                start={startCounting ? 0 : undefined}
              />
              <span className="text-6xl">+</span>
            </h2>
            <p className="text-[#909090] text-xl font-medium">
              Years of Experience
            </p>
          </div>
          <div>
            <h2 className="text-8xl text-primary mb-3 flex items-center justify-center">
              <CountUp
                end={100}
                duration={2}
                start={startCounting ? 0 : undefined}
              />
              <span className="text-6xl">+</span>
            </h2>
            <p className="text-[#909090] text-xl font-medium">
              Quality Products
            </p>
          </div>
          <div>
            <h2 className="text-8xl text-primary mb-3 flex items-center justify-center">
              <CountUp
                end={50}
                duration={2}
                start={startCounting ? 0 : undefined}
              />
              <span className="text-6xl">+</span>
            </h2>
            <p className="text-[#909090] text-xl font-medium">Happy Clients</p>
          </div>
        </div>
      </Section>
      {/* Vision & Mission */}
      <Section
        background="primary"
        divClassName="py-15 text-white grid lg:grid-cols-2 gap-y-15"
      >
        {/* Vision */}
        <motion.div
          initial={{ transform: "translateY(100px)", opacity: 0 }}
          whileInView={{
            transform: "translateY(0px)",
            opacity: 100,
          }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 1.7 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <Eye />
            <h2 className="m-0">Vision</h2>
          </div>
          <p>
            To bridge the gap in Botswana's drilling supply chain by providing
            locally available, competitively priced, and high-quality
            consumables—enabling drillers to focus on their operations without
            the burden of importing from South Africa.
          </p>
        </motion.div>
        {/* Mission */}
        <motion.div
          initial={{ transform: "translateY(100px)", opacity: 0 }}
          whileInView={{
            transform: "translateY(0px)",
            opacity: 100,
          }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 1.7, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <Goal />
            <h2 className="m-0">Mission</h2>
          </div>
          <p>
            We are a small company with big ideas, committed to meeting the
            diverse needs of drilling companies by offering quality equipment,
            expert technical advice, fast local delivery, and personalized
            support—no matter the size or budget.
          </p>
        </motion.div>
      </Section>
      {/* What we offer */}
      <Section divClassName="grid lg:grid-cols-2 gap-y-10 gap-x-8 items-center">
        <motion.div
          initial={{ transform: "translateX(-100px)", opacity: 0 }}
          whileInView={{
            transform: "translateX(0px)",
            opacity: 100,
          }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 2, delay: 0.2 }}
        >
          <img
            src={offersImag}
            alt="KPJ drilling employee loading products"
            className="order-2 lg:order-1"
            title="KPJ drilling employee loading products"
          />
        </motion.div>
        <div className="flex flex-col space-y-8 order-1 lg:order-2">
          <Badge text="what we offer" className="hidden lg:inline-flex" />
          <div>
            <h2>Comprehensive Supply & Support</h2>
            <ul className="list-disc space-y-2 px-5">
              <li>
                <b>Drilling Equipment & Consumables:</b> From DTH hammers and
                bits to diamond coring equipment and core trays, we stock a wide
                variety of essential drilling tools.
              </li>
              <li>
                <b>Drilling Muds & Fluids:</b> As an official distributor of AMC
                Samchem products, we supply specialized drilling muds and can
                arrange custom formulations to suit specific projects.
              </li>
              <li>
                <b>Technical Support & Advice:</b> With decades of local
                experience, we advise clients on the best products for different
                ground conditions—improving drilling efficiency and reducing
                costs.
              </li>
              <li>
                <b>Nationwide Delivery:</b> Our own fleet and partnerships with
                local transporters ensure timely delivery anywhere in Botswana.
              </li>
            </ul>
          </div>
        </div>
      </Section>
      {/* Clients */}
      {/* <Section>
        <div className="text-center mb-7">
          <h2>Our Clients</h2>
          <p>
            We proudly supply some of the leading names in Botswana's drilling
            industry, including:
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-15 items-center">
          <img
            src={dwdClient}
            alt="DWD Drilling logo"
            title="DWD Drilling"
            className="grayscale hover:grayscale-0 hover:scale-110 transition duration-500 ease-in-out"
          />
          <img
            src={tlouClient}
            alt="Tlou Drilling logo"
            title="Tlou Drilling"
            className="grayscale hover:grayscale-0 hover:scale-110 transition duration-500 ease-in-out"
          />
          <img
            src={bgiClient}
            alt="Botswana Geo-science Institution logo"
            title="Botswana Geo-science Institution"
            className="grayscale hover:grayscale-0 hover:scale-110 transition duration-500 ease-in-out"
          />
          <img
            src={dbClient}
            alt="De Beers logo"
            title="De Beers"
            className="grayscale hover:grayscale-0 hover:scale-110 transition duration-500 ease-in-out"
          />
          <img
            src={wucClient}
            alt="Water Utilities Corporation logo"
            title="Water Utilities Corporation"
            className="grayscale hover:grayscale-0 hover:scale-110 transition duration-500 ease-in-out"
          />
          <img
            src={bdfClient}
            alt="Botswana Defense Force logo"
            title="Botswana Defense Force"
            className="grayscale hover:grayscale-0 hover:scale-110 transition duration-500 ease-in-out"
          />
        </div>
      </Section> */}
      <Callout />
    </div>
  );
};

export default About;
