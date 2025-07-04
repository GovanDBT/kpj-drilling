// modules
import Badge from "../components/Badge";
import Button from "../components/Button";
import ServiceCard from "../components/ServiceCard";

// Images
import aboutImage from "/about-section.webp";
import heroImage from "/landing-image.jpg";
import drilling from "/drilling.svg";
import support from "/support.svg";
import delivery from "/delivery.svg";
import mud from "/mud.svg";

const cardItems = [
  {
    image: drilling,
    alt: "Card icon of a drilling machine",
    text: "Drilling Equipment Supply",
  },
  {
    image: support,
    alt: "Card icon of a support system",
    text: "Technical Support & Advice",
  },
  {
    image: delivery,
    alt: "Card icon of a delivery network",
    text: "Local Delivery Across Botswana",
  },
  {
    image: mud,
    alt: "Card icon of a mud drilling machine",
    text: "Custom Drilling Mud Formulation",
  },
];

const Home = () => {
  return (
    <div>
      {/* HERO */}
      <header>
        <img src={heroImage} alt="" />
      </header>
      {/* ABOUT */}
      <section className="grid md:grid-cols-2 gap-y-10 gap-x-8 container my-20 items-center">
        <img
          src={aboutImage}
          alt="KPJ drilling pipes and chemicals"
          className="order-2 lg:order-1"
        />
        <div className="flex flex-col space-y-8 order-1 lg:order-2">
          <Badge text="About Us" className="hidden lg:inline-flex" />
          <div>
            <div className="flex justify-between items-center">
              <h2>KPJ drilling (Pty) Ltd</h2>
              <Badge text="About Us" className="lg:hidden text-[13px]" />
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
          <Button className="place-self-start">read more</Button>
        </div>
      </section>
      {/* SERVICES */}
      <section className="container my-20 items-center">
        <div className="flex justify-between mb-8">
          <h2>our services</h2>
          <Button className="place-self-center">more services</Button>
        </div>
        <div className="grid lg:grid-cols-4 gap-6 justify-center">
          {cardItems.map((item) => (
            <ServiceCard text={item.text} img={item.image} imgAlt={item.alt} />
          ))}
        </div>
      </section>
      {/* PRODUCTS */}
      <section className="container my-20">
        <h2>our products</h2>
        <Button>view all products</Button>
      </section>
      {/* BANNER IMG */}
      <section className="mt-20 h-150 bg-[url('/callout-section.webp')] bg-cover bg-center">
        <div className="bg-linear-to-t from-primary to-white/0 h-full place-content-center">
          <div className="container lg:max-w-240 space-y-8">
            <div className="text-center">
              <h2 className="text-white text-5xl/normal">
                Trusted Since 2001 - Locally Rooted, Globally Connected
              </h2>
              <p className="text-white lg:max-w-180 mx-auto text-2xl/normal lg:text-xl/normal">
                With over 28 years of experience, we provide high-performance
                drilling consumables across Botswana.
              </p>
            </div>
            <Button color="white" className="!place-self-center">
              more details
            </Button>
          </div>
        </div>
      </section>
      {/* CALLOUT */}
      <section className="bg-primary py-18">
        <div className="container mx-auto flex lg:flex-row flex-col justify-between items-center gap-10">
          <div className="text-white text-center lg:text-left">
            <h2 className="text-5xl">Request A Quote</h2>
            <p className="text-2xl/normal lg:text-xl/normal">
              Get a Customized Quote for Your Drilling Needs Today!
            </p>
          </div>
          <Button color="white">view all products</Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
