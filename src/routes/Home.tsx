import heroImage from "/landing-image.jpg";
import aboutImage from "/about-img.jpg";
import Badge from "../components/Badge";
import Button from "../components/Button";
import ServiceCard from "../components/ServiceCard";

// card images
import drilling from "/drilling.svg";
import support from "/support.svg";
import delivery from "/delivery.svg";
import mud from "/mud.svg";
import calloutCover from "callout-img.jpg";

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
      <header>
        <img src={heroImage} alt="" />
      </header>
      <section className="grid grid-cols-2 container mx-auto my-20 items-center">
        <img src={aboutImage} alt="" />
        <div className="flex flex-col space-y-8">
          <Badge text="About Us" />
          <div>
            <h2>KPJ drilling (Pty) Ltd</h2>
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
      <section className="container mx-auto my-20 items-center">
        <div className="flex justify-between mb-8">
          <h2>our services</h2>
          <Button>more services</Button>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {cardItems.map((item) => (
            <ServiceCard text={item.text} img={item.image} imgAlt={item.alt} />
          ))}
        </div>
      </section>
      <section className="container mx-auto my-20">
        <h2>our products</h2>
        <Button>view all products</Button>
      </section>
      <section className="mt-20 h-150 bg-[url('/callout-img.jpg')] bg-cover bg-center">
        <div className="bg-linear-to-t from-primary to-white/0 h-full place-content-center">
          <div className="container mx-auto w-240 space-y-8">
            <div className="text-center">
              <h2 className="text-white text-5xl/normal">
                Trusted Since 2001 - Locally Rooted, Globally Connected
              </h2>
              <p className="text-white w-180 mx-auto text-xl/normal">
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
      <section className="bg-primary py-10">
        <div className="container mx-auto flex justify-between items-center gap-10">
          <div className="text-white">
            <h2 className="text-5xl">Request A Quote</h2>
            <p className="text-xl/normal">
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
